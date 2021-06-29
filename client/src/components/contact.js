import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
  <div>
      <Form className = "contactForm">
        <Form.Group className = "mb-1" controlId = "name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className = "mb-1" controlId = "email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className = "mb-1" controlId = "message">
          <Form.Label>Message</Form.Label>
          <Form.Control type="textarea" placeholder="Your Message Here" rows={4} />
        </Form.Group>
        <Button variant="primary">Submit</Button>
      </Form>
  </div>
  );
};

export default Contact;
