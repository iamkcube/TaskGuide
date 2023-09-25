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

const Projects = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleSnackbarOpen } = React.useContext(AppContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
    handleSnackbarOpen("Login Successful");
    console.log("Email/ID:", email);
    console.log("Password:", password);
    navigate("/chat");
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

  const handleSubmitsign = (e) => {
    e.preventDefault();
    handleSnackbarOpen("Signup Successful");
    // You can add your signup logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Reenter Password:", reenterPassword);
    console.log("Designation:", designation);
    console.log("Purpose:", purpose);
    navigate("/chat");
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About us</h2>
                  <p>
                    We can transform substation maintenance by compiling a
                    comprehensive knowledge base, enhancing interactions with a
                    specialized chatbot(only for you), simplifying support for
                    maintenance professionals as well as for educational
                    institutions for learning purposes. Login / signup to know
                    more. Enjoy the beauty of this application.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">LOGIN</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">SIGNUP</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div className="login-container">
                          <div className="login-content">
                            <h2 className="login-title">Login</h2>
                            <form
                              className="login-form"
                              onSubmit={handleSubmit}
                            >
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email/ID:
                                </label>
                                <input
                                  type="text"
                                  id="email"
                                  className="input"
                                  value={email}
                                  onChange={handleEmailChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label className="label" htmlFor="password">
                                  Password:
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  className="input"
                                  value={password}
                                  onChange={handlePasswordChange}
                                  required
                                />
                              </div>
                              <button type="submit" className="login-button">
                                Login
                              </button>
                            </form>
                          </div>
                          <div className="login-image">
                            <img src={Handimg} alt="Login" />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="signup-container">
                          <div className="signup-form-container">
                            <h2 className="signup-title">Sign Up</h2>
                            <form
                              className="signup-form"
                              onSubmit={handleSubmitsign}
                            >
                              <div className="form-group">
                                <label className="label" htmlFor="name">
                                  Name:
                                </label>
                                <input
                                  type="text"
                                  id="name"
                                  className="input"
                                  value={name}
                                  onChange={handleNameChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label className="label" htmlFor="email">
                                  Email:
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="input"
                                  value={email}
                                  onChange={handleEmailChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label className="label" htmlFor="password">
                                  Password:
                                </label>
                                <input
                                  type="password"
                                  id="password"
                                  className="input"
                                  value={password}
                                  onChange={handlePasswordChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  className="label"
                                  htmlFor="reenterPassword"
                                >
                                  Reenter Password:
                                </label>
                                <input
                                  type="password"
                                  id="reenterPassword"
                                  className="input"
                                  value={reenterPassword}
                                  onChange={handleReenterPasswordChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label className="label" htmlFor="designation">
                                  Designation:
                                </label>
                                <input
                                  type="text"
                                  id="designation"
                                  className="input"
                                  value={designation}
                                  onChange={handleDesignationChange}
                                  required
                                />
                              </div>
                              <div className="form-group">
                                <label className="label">Purpose:</label>
                                <label className="radio-label">
                                  <input
                                    type="radio"
                                    value="education"
                                    checked={purpose === "education"}
                                    onChange={handlePurposeChange}
                                    required
                                  />
                                  Education
                                </label>
                                <label className="radio-label">
                                  <input
                                    type="radio"
                                    value="maintenance"
                                    checked={purpose === "maintenance"}
                                    onChange={handlePurposeChange}
                                    required
                                  />
                                  Maintenance
                                </label>
                              </div>
                              <button type="submit" className="signup-button">
                                Sign Up
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
