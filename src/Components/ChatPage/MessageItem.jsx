import { Avatar } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function MessageItem({ user, text, isUser }) {
	return (
		<ListItem
			sx={{
				display: "flex",
				flexDirection: isUser ? "row-reverse" : "",
				gap: "clamp(0.5rem, 3vw, 1rem)",
				alignItems: "flex-start",
				backgroundColor: isUser && "var(--accent-color-20)",
				borderRadius: 2,
			}}
			className="message-item"
		>
			<ListItemIcon sx={{ minWidth: 2 }}>
				<Avatar
					alt={user}
					src={
						isUser
							? null
							: "https://wallpapers.com/images/hd/cute-girl-vector-art-profile-picture-jhbu3wt713zj2bti.jpg"
					}
					sx={{
						marginBlock: "0.4rem",
						bgcolor: "var(--accent-color)"
					}}
				/>
			</ListItemIcon>
			<ListItemText
				primary={isUser ? user : "ChatBot"}
				secondary={text}
				primaryTypographyProps={{
					fontWeight: "bold",
					textAlign: isUser ? "right" : "left",
				}}
				secondaryTypographyProps={{
					textAlign: isUser ? "right" : "left",
				}}
			/>
		</ListItem>
	);
}
