import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Chat from "./Components/Chat";
import { Box } from "@mui/material";
import Sidebar from "./Components/Sidebar";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6977bc",
			contrastText: "#ffffff",
		},
		mode: 'dark',
	},
	typography: {
		fontFamily: [
			"Aileron",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<h1>TaskGuide</h1>
			<Box sx={{ display: "grid", gridTemplateColumns:"auto 1fr" }}>
				<Sidebar />
				<Chat />
			</Box>
		</ThemeProvider>
	);
}

export default App;
