import SendIcon from "@mui/icons-material/Send";
import {
	Box,
	Button,
	CircularProgress,
	List,
	TextField,
	useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import MessageItem from "./MessageItem";
import { getResponse } from "../../assets/js/getResponse";

export default function Chat({ name }) {
	const Mobile = useMediaQuery("(min-width:600px)");
	const [loading, setLoading] = useState(false);
	const [messages, setMessages] = useState([
		{
			text: "Hemlo, how can I help you!?",
			user: "Chatbot",
			isUser: false,
		},
	]);
	const { drawerWidth, prefersDarkMode } = useContext(AppContext);
	const inputRef = useRef(null);

	const handleSubmit = async () => {
		const question = inputRef.current.value;
		if (question.trim() === "") return;

		setLoading(true);
		const newMessage = {
			text: question,
			user: name,
			isUser: true,
		};
		setMessages((prevMessages) => {
			return [...prevMessages, newMessage];
		});
		inputRef.current.value = "";

		try {
			const chatResponse = await getResponse(question);
			const newChatbotMessage = {
				text: chatResponse.response,
				user: "ChatBot",
				isUser: false,
			};
			setMessages((prevMessages) => {
				return [...prevMessages, newChatbotMessage];
			});
		} catch (error) {
			const newChatbotMessage = {
				text: `Try again! ${error}`,
				user: "ChatBot",
				isUser: false,
			};
			setMessages((prevMessages) => {
				return [...prevMessages, newChatbotMessage];
			});
		} finally {
			setLoading(false);
			Mobile && inputRef.current.focus();
		}
	};

	useEffect(() => {
		const targetElement = document.querySelector(
			".message-item:last-child"
		);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	return (
		<Box
			width={"100%"}
			sx={{
				display: "grid",
				position: "relative",
				gridTemplateRows: "1fr auto",
				paddingBlockEnd: 12,
			}}
		>
			<Box
				sx={{
					margin: "1em 1em",
				}}
			>
				<List
					sx={{
						display: "grid",
						gap: 2,
					}}
				>
					{messages.map((message, index) => (
						<MessageItem
							key={index}
							user={message.user}
							text={message.text}
							isUser={message.isUser}
						/>
					))}
				</List>
			</Box>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				style={{
					margin: "1.6em 1em",
					padding: "1em 0",
					backgroundColor: prefersDarkMode ? "#121212" : "#ffffff",
					borderRadius: 2,
					position: "fixed",
					right: 0,
					bottom: 0,
					left: Mobile ? drawerWidth : 0,
				}}
			>
				<TextField
					placeholder="Type a message"
					type="text"
					id="prompt"
					fullWidth
					inputRef={inputRef}
					sx={{
						backgroundColor: prefersDarkMode ? "#272727" : "#eee",
						borderRadius: 1,
						boxShadow: "var(--box-shadow)",
						animation:
							loading &&
							"1.5s ease-in-out infinite alternate boxShadow;",
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "var(--accent-color-20)",
							},
							"&:hover fieldset": {
								borderColor: "var(--accent-color-50)",
							},
							"&:focus-within fieldset": {
								borderColor: "var(--accent-color)",
							},
						},
					}}
					InputProps={{
						endAdornment: (
							<Button
								disabled={loading}
								disableElevation
								type="submit"
								variant="contained"
								color="primary"
								onClick={handleSubmit}
								endIcon={loading ? null : <SendIcon />}
								sx={{
									fontWeight: "bold",
									padding: loading ? 0 : "",
									"&.Mui-disabled": {
										background: "var(--accent-color-20)",
									},
								}}
							>
								{loading ? (
									<CircularProgress
										sx={{
											padding: "0.5rem",
											height: "50%",
											margin: 0,
											color: "var(--accent-color)",
										}}
									/>
								) : (
									"Send"
								)}
							</Button>
						),
					}}
				/>
			</form>
		</Box>
	);
}
