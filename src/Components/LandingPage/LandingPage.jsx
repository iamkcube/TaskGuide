import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { NavBar } from "./NavBar";
import  Banner  from "./Banner";
import Projects from "./Projects";
import { Footer } from "./Footer";

function LandingPage() {
  return (
    <div className="Land">
      <NavBar />
      < Banner />
      <Projects />
      <Footer />
    </div>
  );
}

export default LandingPage;
