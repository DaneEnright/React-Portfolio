import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return <div>
      <Form className = "contactForm">
        <Form.Group className = "mb-1" controlID = "name">
          <Form.Label>Name</Form.Label>
          <Form.Control></Form.Control>
        </Form.Group>
      </Form>
  </div>;
};

export default Contact;
