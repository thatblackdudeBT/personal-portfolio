import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const Form = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const fNameChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      firstName: event.target.value,
    }));
  };
  const lNameChangeHandler = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      lastName: event.target.value,
    }));
  };
  const emailChangeHandler = (event) => {
    setFormData((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const phoneNoChangeHandler = (event) => {
    setFormData((prevState) => ({ ...prevState, phoneNo: event.target.value }));
  };
  const messageChangeHandler = (event) => {
    setFormData((prevState) => ({ ...prevState, message: event.target.value }));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    // const getFormData = {
    //   firstName: firstName,
    // };
    // emailjs
    //   .sendForm(
    //     "service_sshr0td",
    //     "template_d4bn899",
    //     formData,
    //     "nbfoJ-Gik2Es_IB-8"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("message sent");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    props.onSubmitForm(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      message: "",
    });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Row>
        <Col sm={6} className="px-1">
          <input
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={fNameChangeHandler}
          />
        </Col>
        <Col sm={6} className="px-1">
          <input
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={lNameChangeHandler}
          />
        </Col>
        <Col sm={6} className="px-1">
          <input
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={emailChangeHandler}
          />
        </Col>
        <Col sm={6} className="px-1">
          <input
            type="number"
            placeholder="Phone No."
            value={formData.phoneNo}
            onChange={phoneNoChangeHandler}
          />
        </Col>
        <Col className="px-1">
          <textarea
            row={6}
            placeholder="Message"
            value={formData.message}
            onChange={messageChangeHandler}
          />
          <button type="submit">
            <span>{props.button}</span>
          </button>
        </Col>
        {props.status.message && (
          <Col>
            <p
              className={props.status.success === false ? "danger" : "success"}
            >
              {props.status.message}
            </p>
          </Col>
        )}
      </Row>
    </form>
  );
};

export default Form;
