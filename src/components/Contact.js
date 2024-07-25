import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.svg";
import Form from "./UI/Form";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const sentData = (form) => {
    async function sendMail() {
      setButtonText("Sending...");
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(form),
      });
      setButtonText("Send");
      const result = response.json();
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later",
        });
      }
    }

    sendMail()
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-item-center">
          <Col md={6}>
            <img src={contactImg} alt="Connect with us" />
          </Col>
          <Col md={6}>
            <h2>Get in touch</h2>
            <Form button={buttonText} status={status} onSubmitForm={sentData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
