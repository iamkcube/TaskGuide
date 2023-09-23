import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext } from "react";
import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import { useMediaQuery } from "@mui/material";

const drawerWidth = 240;
export const AppContext = createContext(null);

function App() {
	
	// For Custom Theme
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
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
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	// For useContext passing items
	const appItems = {
		drawerWidth,
		mobileOpen,
		handleDrawerToggle,
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppContext.Provider value={appItems}>
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
							// minHeight: "100svh",
						}}
					>
						<Sidebar />
						<Chat />
					</Box>
				</Box>
			</AppContext.Provider>
		</ThemeProvider>
	);
}

export default App;
