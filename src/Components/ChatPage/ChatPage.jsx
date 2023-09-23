import { Box } from "@mui/material";
import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Topbar from "../Topbar";

export default function ChatPage() {
	return (
		<Box
			sx={{
				display: "grid",
				gridTemplateRows: "auto 1fr",
				minHeight: "100svh",
			}}
		>
			<Topbar />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "auto 1fr",
				}}
			>
				<Sidebar />
				<Chat />
			</Box>
		</Box>
	);
}
