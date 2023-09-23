import
	{
		Box,
		Button,
		List,
		ListItem,
		ListItemText,
		Paper,
		TextField
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
			display="flex"
			width={"100%"}
			height={"100%"}
		>
			<Box
				flex="1"
				mr={2}
			>
				<Paper
					elevation={3}
					style={{
						padding: "16px",
						height: "400px",
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
				</Paper>
				<Box mt={2}>
					<TextField
						label="Type a message"
						variant="outlined"
						fullWidth
						value={input}
						onChange={handleInputChange}
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						fullWidth
					>
						Send
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Chat;
