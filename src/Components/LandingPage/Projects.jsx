import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import "animate.css";
import Handimg from "../../assets/img/pexels.jpg";
import substation from "../../assets/img/substation.jpg";
import { useState } from "react";
import TrackVisibility from "react-on-screen";
import * as React from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../assets/js/login";
import { signupUser } from "../../assets/js/signup";
import { CircularProgress } from "@mui/material";

const Projects = () => {
	const [email, setEmail] = useState("");
	const [name1, setname1] = useState("");
	const [password, setPassword] = useState("");

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { handleSnackbarOpen } = React.useContext(AppContext);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleName1Change = (e) => {
		setname1(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		console.log("Email/ID:", email);
		console.log("Password:", password);
		console.log("Name:", name1);

		try {
			const user = await loginUser(email, password);
			console.log(
				"🚀 ~ file: Projects.jsx:42 ~ handleSubmit ~ user:",
				user
			);
			if (user) {
				setLoading(false);
				handleSnackbarOpen("Login Successful");
				console.log("🚀 ~ file: Projects.jsx:54 ~ handleSubmit ~ name:", name)
				navigate("/chat", {
					state: { name: name1 },
				});
			}
		} catch (error) {
			setLoading(false);
			handleSnackbarOpen("Login Unsuccessful");
			console.error("Error during user registration:", error.message);
		}
	};

	const [name, setName] = useState("");
	const [reenterPassword, setReenterPassword] = useState("");
	const [designation, setDesignation] = useState("");
	const [purpose, setPurpose] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleReenterPasswordChange = (e) => {
		setReenterPassword(e.target.value);
	};

	const handleDesignationChange = (e) => {
		setDesignation(e.target.value);
	};

	const handlePurposeChange = (e) => {
		setPurpose(e.target.value);
	};

	const handleSubmitsign = async (e) => {
		e.preventDefault();
		setLoading(true);
		// You can add your signup logic here
		console.log("Name:", name);
		console.log("Email:", email);
		console.log("Password:", password);
		console.log("Reenter Password:", reenterPassword);
		console.log("Designation:", designation);
		console.log("Purpose:", purpose);

		try {
			const user = await signupUser(email, password);
			console.log(
				"🚀 ~ file: Projects.jsx:79 ~ handleSubmitsign ~ user:",
				user
			);
			if (user) {
				setLoading(false);
				handleSnackbarOpen("Signup Successful");
				console.log("🚀 ~ file: Projects.jsx:106 ~ handleSubmitsign ~ name:", name)
				navigate("/chat", {
					state: { name: name },
				});
			}
		} catch (error) {
			setLoading(false);
			handleSnackbarOpen("Signup Unsuccessful");
			console.error("Error during user registration:", error.message);
		}
	};

	return (
		<section
			className="project"
			id="projects"
		>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible
											? "animate__animated animate__fadeIn"
											: ""
									}
								>
									<h2>About us</h2>
									<p>
										We can transform substation maintenance
										by compiling a comprehensive knowledge
										base, enhancing interactions with a
										specialized chatbot(only for you),
										simplifying support for maintenance
										professionals as well as for educational
										institutions for learning purposes.
										Login / signup to know more. Enjoy the
										beauty of this application.
									</p>
									<Tab.Container
										id="projects-tabs"
										defaultActiveKey="first"
									>
										<Nav
											variant="pills"
											className="nav-pills mb-5 justify-content-center align-items-center"
											id="pills-tab"
										>
											<Nav.Item>
												<Nav.Link eventKey="first">
													LOGIN
												</Nav.Link>
											</Nav.Item>
											<Nav.Item>
												<Nav.Link eventKey="second">
													SIGNUP
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Tab.Content
											id="slideInUp"
											className={
												isVisible
													? "animate__animated animate__slideInUp"
													: ""
											}
										>
											<Tab.Pane eventKey="first">
												<div className="login-container">
													<div className="login-content">
														<h2 className="login-title">
															Login
														</h2>
														<form
															className="login-form"
															onSubmit={
																handleSubmit
															}
														>
															<div className="form-group">
																<label
																	className="label"
																	htmlFor="name"
																>
																	Name:
																</label>
																<input
																	type="text"
																	id="name"
																	className="input"
																	value={
																		name1
																	}
																	onChange={
																		handleName1Change
																	}
																	required
																/>
																<label
																	className="label"
																	htmlFor="email"
																>
																	Email/ID:
																</label>
																<input
																	type="text"
																	id="email"
																	className="input"
																	value={
																		email
																	}
																	onChange={
																		handleEmailChange
																	}
																	required
																/>
															</div>
															<div className="form-group">
																<label
																	className="label"
																	htmlFor="password"
																>
																	Password:
																</label>
																<input
																	type="password"
																	id="password"
																	className="input"
																	value={
																		password
																	}
																	onChange={
																		handlePasswordChange
																	}
																	required
																/>
															</div>
															<button
																type="submit"
																className="login-button"
																style={{
																	display:
																		"grid",
																	placeItems:
																		"center",
																	padding:
																		"0.5em 0",
																	fontSize:
																		"1.25rem",
																	fontWeight:
																		"bold",
																}}
															>
																{loading ? (
																	<CircularProgress
																		size="1.5rem"
																		sx={{
																			color: "white",
																		}}
																	/>
																) : (
																	"Login"
																)}
															</button>
														</form>
													</div>
													<div className="login-image">
														<img
															src={Handimg}
															alt="Login"
														/>
													</div>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="second">
												<div className="signup-container">
													<div className="signup-form-container">
														<h2 className="signup-title">
															Sign Up
														</h2>
														<form
															className="signup-form"
															onSubmit={
																handleSubmitsign
															}
														>
															<div className="form-group">
																<label
																	className="label"
																	htmlFor="name"
																>
																	Name:
																</label>
																<input
																	type="text"
																	id="name"
																	className="input"
																	value={name}
																	onChange={
																		handleNameChange
																	}
																	required
																/>
															</div>
															<div className="form-group">
																<label
																	className="label"
																	htmlFor="email"
																>
																	Email:
																</label>
																<input
																	type="email"
																	id="email"
																	className="input"
																	value={
																		email
																	}
																	onChange={
																		handleEmailChange
																	}
																	required
																/>
															</div>
															<div className="form-group">
																<label
																	className="label"
																	htmlFor="password"
																>
																	Password:
																</label>
																<input
																	type="password"
																	id="password"
																	className="input"
																	value={
																		password
																	}
																	onChange={
																		handlePasswordChange
																	}
																	required
																/>
															</div>
															<div className="form-group">
																<label
																	className="label"
																	htmlFor="reenterPassword"
																>
																	Reenter
																	Password:
																</label>
																<input
																	type="password"
																	id="reenterPassword"
																	className="input"
																	value={
																		reenterPassword
																	}
																	onChange={
																		handleReenterPasswordChange
																	}
																	required
																/>
															</div>
															<div className="form-group">
																<label
																	className="label"
																	htmlFor="designation"
																>
																	Designation:
																</label>
																<input
																	type="text"
																	id="designation"
																	className="input"
																	value={
																		designation
																	}
																	onChange={
																		handleDesignationChange
																	}
																	required
																/>
															</div>
															<div className="form-group">
																<label className="label">
																	Purpose:
																</label>
																<label className="radio-label">
																	<input
																		type="radio"
																		value="education"
																		checked={
																			purpose ===
																			"education"
																		}
																		onChange={
																			handlePurposeChange
																		}
																		required
																	/>
																	Education
																</label>
																<label className="radio-label">
																	<input
																		type="radio"
																		value="maintenance"
																		checked={
																			purpose ===
																			"maintenance"
																		}
																		onChange={
																			handlePurposeChange
																		}
																		required
																	/>
																	Maintenance
																</label>
															</div>
															<button
																type="submit"
																className="signup-button"
																style={{
																	display:
																		"grid",
																	placeItems:
																		"center",
																	padding:
																		"0.5em 0",
																	fontSize:
																		"1.25rem",
																	fontWeight:
																		"bold",
																}}
															>
																{loading ? (
																	<CircularProgress
																		size="1.5rem"
																		sx={{
																			color: "white",
																		}}
																	/>
																) : (
																	"Sign Up"
																)}
															</button>
														</form>
													</div>
													<div className="signup-image-container">
														<img
															src={substation}
															alt="Signup"
															className="signup-image"
														/>
													</div>
												</div>
											</Tab.Pane>
										</Tab.Content>
									</Tab.Container>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-right"
				src={colorSharp2}
			></img>
		</section>
	);
};

export default Projects;
