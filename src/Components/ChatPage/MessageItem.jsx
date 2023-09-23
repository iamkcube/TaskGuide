import { ListItem, ListItemText } from "@mui/material";
import React from "react";

export default function MessageItem(index, message) {
	return (
		<ListItem
			key={index}
			sx={{
				backgroundColor: message.isUser && "var(--accent-color-20)",
				borderRadius: 2,
			}}
		>
			<ListItemText
				primary={message.user}
				secondary={message.text}
				primaryTypographyProps={{
					fontWeight: "bold",
				}}
			/>
		</ListItem>
	);
}
