import React from "react";
import { Form, Col, Button } from "react-bootstrap";

export default function DetailForm(props) {
  
  return (
    <div>
      <Form onSubmit={props.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              className="form"
              onChange={e => {props.setEmail(e.target.value)}}
              value={props.email}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              className="form"
              onChange={e => props.setPassword(e.target.value)}
              value={props.password}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Location"
            className="form"
            onChange={e => props.setAddress(e.target.value)}
            value={props.address}
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              as="select"
              className="form"
              onChange={e => props.setState(e.target.value)}
              value={props.State}
            >
              <option>Province no 1</option>
              <option>Province no 2</option>
              <option>Province no 3</option>
              <option>Province no 4</option>
              <option>Province no 5</option>
              <option>Province no 6</option>
              <option>Province no 7</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              className="form"
              onChange={e => props.setZip(e.target.value)}
              value={props.zip}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" onClick={props.handleClose}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
