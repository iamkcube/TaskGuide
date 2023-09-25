import { Box } from "@mui/material";
import React, { useState } from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Topbar from "../Topbar";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

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
