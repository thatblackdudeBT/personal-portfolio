import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/github-icon.png";
import navIcon2 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/twitter-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.github.com/thatblackdudeBT">
                <img src={navIcon1} alt="Github profile" />
              </a>
              <a href="https://www.linkedin.com/in/balogun-oluwatosin-73b33a225/">
                <img src={navIcon2} alt="LinkedIn profile" />
              </a>
              <a href="https://www.x.com/that_blackdude_">
                <img src={navIcon3} alt="Twitter profile" />
              </a>
            </div>
            <p>CopyRight 2024. All Right Reserved By TosinDEV.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
