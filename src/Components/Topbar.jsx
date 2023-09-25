import React, { useContext } from "react";
import { AppContext } from "../App";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Topbar() {
	const { drawerWidth, mobileOpen, handleDrawerToggle } =
		useContext(AppContext);

	return (
		<AppBar
			color="primary"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
				position: "static",
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					onClick={handleDrawerToggle}
					sx={{ mr: 2, display: { sm: "none" } }}
				>
					<MenuIcon />
				</IconButton>
				<Link to="../" style={{ textDecoration: "none" }}>
					<Typography
						variant="h1"
						noWrap
						component="div"
						fontSize="2rem"
						fontWeight="bold"
						sx={{
							color: "white",

						}}
					>
						TaskGuide
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
}
