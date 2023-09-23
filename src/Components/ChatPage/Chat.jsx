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

export default function Chat() {
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

	const handleSubmit = () => {
		if (inputRef.current.value.trim() === "") return;

		const newMessage = {
			text: inputRef.current.value,
			user: "Disha",
			isUser: true,
		};
		const newChatbotMessage = {
			text: inputRef.current.value,
			user: "ChatBot",
			isUser: false,
		};

		setMessages([...messages, newMessage, newChatbotMessage]);
		inputRef.current.value = "";
		inputRef.current.focus();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	useEffect(() => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth", // Use 'auto' for instant scrolling
		});
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
									}
								}}
								>
								{loading ? (
									<CircularProgress
									sx={{
											padding: "0.5rem",
											height: "50%",
											margin: 0,
											color: "var(--accent-color)"
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
