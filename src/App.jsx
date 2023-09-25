import { Alert, CssBaseline, Snackbar, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./Components/ChatPage/ChatPage";
import Error404 from "./Components/Error404";
import LandingPage from "./Components/LandingPage/LandingPage";

const drawerWidth = 240;
export const AppContext = createContext(null);

function App() {
	// For Custom Theme
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	// const prefersDarkMode = false;
	const theme = createTheme({
		palette: {
			primary: {
				main: "#6977bc",
				contrastText: "#ffffff",
			},
			mode: prefersDarkMode ? "dark" : "light",
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

	// For responsive drawer on mobile
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarText, setSnackbarText] = useState("");

	const handleSnackbarOpen = (text) => {
		setSnackbarText(text);
		setSnackbarOpen(true);
	};

	const handleSnackbarClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackbarOpen(false);
	};

	// For useContext passing items
	const appItems = {
		prefersDarkMode,
		drawerWidth,
		mobileOpen,
		handleDrawerToggle,
		handleSnackbarOpen,
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppContext.Provider value={appItems}>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={<LandingPage />}
						/>
						<Route
							path="/chat"
							element={<ChatPage />}
						/>
						<Route
							path="*"
							element={<Error404 />}
						/>
					</Routes>
				</BrowserRouter>
				<Snackbar
					open={snackbarOpen}
					autoHideDuration={6000}
					onClose={handleSnackbarClose}
				>
					<Alert
						onClose={handleSnackbarClose}
						icon={false}
						sx={{ width: "100%", bgcolor: "white", color: "black" }}
					>
						{snackbarText}
					</Alert>
				</Snackbar>
			</AppContext.Provider>
		</ThemeProvider>
	);
}

export default App;
