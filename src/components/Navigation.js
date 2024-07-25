import { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

import logo from "../assets/img/logo.svg";

import navIcon1 from "../assets/img/github-icon.png";
import navIcon2 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/twitter-icon.png";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("projects");
              }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="github.com/thatblackdudeBT">
                <img src={navIcon1} alt="Github profile" />
              </a>
              <a href="https://www.linkedin.com/in/balogun-oluwatosin-73b33a225">
                <img src={navIcon2} alt="LinkedIn profile" />
              </a>
              <a href="https://www.x.com/that_blackdude_">
                <img src={navIcon3} alt="Twitter profile" />
              </a>
            </div>
            <NavLink href="#connect">
              <button type="button" className="vvd">
                <span>Let's connect</span>
              </button>
            </NavLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// const style = {
//   onmouseover:   filter: brightness(0) saturate(100%) invert(0%) sepia(7%) saturate(98%)
//     hue-rotate(346deg) brightness(95%) contrast(86%)
// }
export default Navigation;
