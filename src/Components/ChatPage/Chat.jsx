import SendIcon from "@mui/icons-material/Send";
import { Box, Button, List, TextField, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../App";
import MessageItem from "./MessageItem";

export default function Chat() {
	const Mobile = useMediaQuery("(min-width:600px)");
	const [messages, setMessages] = useState([
		{
			text: "hemlo",
			user: "User",
			isUser: true,
		},
	]);
	const { drawerWidth, prefersDarkMode } = useContext(AppContext);
	const inputRef = useRef(null);

	const handleSubmit = () => {
		if (inputRef.current.value.trim() === null) return;

		const newMessage = {
			text: inputRef.current.value,
			user: "User",
			isUser: false,
		};

		setMessages([...messages, newMessage]);
		inputRef.current.value = "";
	};

	return (
		<Box
			width={"100%"}
			sx={{
				display: "grid",
				position: "relative",
				gridTemplateRows: "1fr auto",
			}}
		>
			<Box
				sx={{
					overflowY: "scroll",
					margin: "1em 1em",
				}}
			>
				<List>
					{messages.map((message, index) =>
						MessageItem(index, message)
					)}
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
					fullWidth
					inputRef={inputRef}
					sx={{
						backgroundColor: prefersDarkMode ? "#272727" : "#eee",
						borderRadius: 1,
					}}
					InputProps={{
						endAdornment: (
							<Button
								disableElevation
								type="submit"
								variant="contained"
								color="primary"
								onClick={handleSubmit}
								endIcon={<SendIcon />}
								sx={{
									fontWeight: "bold",
								}}
							>
								Send
							</Button>
						),
					}}
				/>
			</form>
		</Box>
	);
}
