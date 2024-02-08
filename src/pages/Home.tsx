// Import necessary dependencies from React and React Bootstrap
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Define the Home functional component using React functional component syntax
const Home: React.FC = () => {
  return (
    // Main container div with a class of "main-div"
    <div className="main-div">
      {/* Navbar component for navigation */}
      <Navbar id="desktop-nav" bg="transparent" expand="lg">
        <Navbar.Brand href="Home">Digital Transformation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="Hobbies">About Me</Nav.Link>
            <Nav.Link href="Calculator">Calculator</Nav.Link>
            <Nav.Link href="JSON">JSON</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Profile section */}
      <section id="profile">
        {/* Container for profile picture */}
        <div className="section__pic-container"></div>

        {/* Text content in the profile section */}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Benjie Gonzales Jr</h1>
          <p className="section__text__p2">Frontend Developer</p>

          {/* Additional text content */}
          <div className="section__text">
            <p className="section__text__p1">
              Hi! I'm a passionate web developer. Click the button below to
              learn more about me.
            </p>
          </div>

          {/* Button container with a link to the "/Hobbies" route */}
          <div className="btn-container">
            <Link to="/Hobbies">
              <Button variant="outline-dark">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Export the Home component as the default export
export default Home;
