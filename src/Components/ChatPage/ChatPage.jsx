import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../Topbar";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

export default function ChatPage() {
	const { state } = useLocation();

	useEffect(() => {
		console.log(state);
	}, [])
	

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
				<Chat name={state && state?.name ? state.name : "User"} />
			</Box>
		</Box>
	);
}
