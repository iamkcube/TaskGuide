import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChatIcon from "@mui/icons-material/Chat";
import SettingsIcon from "@mui/icons-material/Settings";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import SideBarTemplate from "./SideBarTemplate";
import { uploadPDF } from "../../assets/js/uploadPDF";
import { AppContext } from "../../App";
import { logoutUser } from "../../assets/js/logout";

export default function Sidebar() {
	const navigate = useNavigate();
	const fileInputRef = React.useRef(null);
	const { handleSnackbarOpen } = React.useContext(AppContext);

	const handleFileUpload = () => {
		console.log("clicked");
		fileInputRef.current.click();
	};

	const handleFileChange = async (e) => {
		const selectedFile = e.target.files[0];
		console.log(
			"🚀 ~ file: Sidebar.jsx:30 ~ handleFileChange ~ selectedFile:",
			selectedFile
		);
		if (selectedFile) {
			try {
				const pdf = await uploadPDF(selectedFile);
				console.log(
					"🚀 ~ file: Sidebar.jsx:31 ~ handleFileChange ~ pdf:",
					pdf
				);
				console.log(pdf);
				handleSnackbarOpen("Uploaded");
			} catch (error) {
				handleSnackbarOpen("Couldn't Upload. Try again later.");
				console.error("Couldn't Upload");
			}
		} else {
			handleSnackbarOpen("Couldn't Upload. Try again later.");
			console.error("No file selected");
		}
	};

	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			const user = await logoutUser();
			console.log(
				"🚀 ~ file: Projects.jsx:42 ~ handleSubmit ~ user:",
				user
			);
			handleSnackbarOpen("Logout Successful");
			navigate("../");
		} catch (error) {
			handleSnackbarOpen("Login Unsuccessful");
			console.error("Error during lgout:", error.message);
		}
	};

	const drawer = (
		<div>
			<Toolbar>
				<Button
					disableElevation
					type="submit"
					color="primary"
					onClick={() => {
						navigate("../");
					}}
					startIcon={<ArrowBackIcon />}
					sx={{
						fontWeight: "bold",
					}}
				>
					Back
				</Button>
			</Toolbar>
			<Divider />
			<List>
				{[
					"Hello, I need assistance with optimizing residential energy demand profiles.",
					"Need help setting up my device.",
					"Could you explain the acceptable limits for surge arrester testing in our substation? ",
				].map((text, index) => (
					<ListItem
						key={index}
						disablePadding
					>
						<ListItemButton>
							<ListItemIcon sx={{ minWidth: "2.5rem" }}>
								<ChatIcon />
							</ListItemIcon>
							<ListItemText
								primary={text}
								primaryTypographyProps={{
									fontSize: "0.9rem",
									textOverflow: "ellipsis",
									overflow: "hidden",
									whiteSpace: "nowrap",
								}}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<List
				sx={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					textAlign: "center",
					paddingBottom: 2,
				}}
			>
				<ListItem>
					<input
						type="file"
						accept=".pdf"
						style={{ display: "none" }}
						ref={fileInputRef}
						onChange={handleFileChange}
					/>
					<ListItemButton
						sx={{
							borderRadius: 2,
							bgcolor: "var(--accent-color-20)",
						}}
						onClick={handleFileUpload}
					>
						<ListItemIcon sx={{ minWidth: "2.5rem" }}>
							<UploadIcon />
						</ListItemIcon>
						<ListItemText primary="Upload PDF" />
					</ListItemButton>
				</ListItem>
				<Divider
					sx={{
						my: 1,
					}}
				/>
				<ListItem>
					<ListItemButton
						sx={{
							borderRadius: 2,
							bgcolor: "var(--accent-color-20)",
						}}
					>
						<ListItemIcon sx={{ minWidth: "2.5rem" }}>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary="Settings" />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton
						sx={{
							borderRadius: 2,
							bgcolor: "var(--accent-color-20)",
						}}
						onClick={handleLogout}
					>
						<ListItemIcon sx={{ minWidth: "2.5rem" }}>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText primary="Logout" />
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);

	return <SideBarTemplate>{drawer}</SideBarTemplate>;
}
