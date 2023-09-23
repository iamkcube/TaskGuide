import {
	Box,
	Button,
	List,
	ListItem,
	ListItemText,
	Paper,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SettingsIcon from "@mui/icons-material/Settings";

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [input, setInput] = useState("");
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = () => {
		if (input.trim() === "") return;

		const newMessage = {
			text: input,
			user: "User",
		};

		setMessages([...messages, newMessage]);
		setInput("");
	};

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	return (
		<Box
			width={"100%"}
			sx={{
				display: "grid",
				gridTemplateRows: "1fr auto",
			}}
		>
			<Box
				sx={{
					// padding: "16px",
					overflowY: "auto",
				}}
			>
				<List>
					{messages.map((message, index) => (
						<ListItem key={index}>
							<ListItemText
								primary={message.user}
								secondary={message.text}
								primaryTypographyProps={{
									fontWeight: "bold",
								}}
							/>
						</ListItem>
					))}
				</List>
			</Box>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<TextField
					placeholder="Type a message"
					variant="outlined"
					fullWidth
					value={input}
					onChange={handleInputChange}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					onClick={handleSubmit}
					fullWidth
					sx={{
						fontWeight: "bold",
						fontSize: "1rem",
					}}
				>
					Send
				</Button>
			</form>
		</Box>
	);
};

export default Chat;
