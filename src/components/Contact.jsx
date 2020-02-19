import React, { useState } from "react";
import { Modal, Button, Table } from "react-bootstrap";
import styled from "styled-components";
import DetailForm from "../components/DetailForm";

const AddButton = styled(Button).attrs({
  className: "AddButton"
})`
  float: right;
  margin-right: 10px;
`;

function Contact(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [State, setState] = useState("");
  const [zip, setZip] = useState("");
  const [list, setList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    const newList = [...list, { email, password, address, State, zip }];
    setList(newList);
    return list;
  }

  return (
    <div>
      <h1>Contact us</h1>
      <AddButton bsClass="AddButton" onClick={handleShow} variant="primary">
        Join Us
      </AddButton>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>State</th>
            <th>Zip</th>
          </tr>
        </thead>
        <tbody>
          {list.map(value => (
            <tr>
              <td>{value.email}</td>
              <td>{value.password}</td>
              <td>{value.address}</td>
              <td>{value.State}</td>
              <td>{value.zip}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onhide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Fill up details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <DetailForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            address={address}
            setAddress={setAddress}
            State={State}
            setState={setState}
            zip={zip}
            setZip={setZip}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;
