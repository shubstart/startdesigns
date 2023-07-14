// import Styles from './FooterContactForm.module.scss';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import Styles from '../FooterContactForm';

function FooterContactForm() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    defaultValue="Mark Steve" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Enter Your Email"
                    defaultValue="marksteve@mail.com" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustomPhonename">
                <Form.Label>Phone Number</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M18 24h-12c-1.104 0-2-.896-2-2v-20c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v20c0 1.104-.896 2-2 2zm1-5.083h-14v3.083c0 .552.449 1 1 1h12c.552 0 1-.448 1-1v-3.083zm-7 3c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm7-17h-14v13h14v-13zm-1-3.917h-12c-.551 0-1 .449-1 1v1.917h14v-1.917c0-.551-.448-1-1-1zm-4.5 1.917h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s-.224.5-.5.5z"/></svg>
                    </InputGroup.Text>
                    <Form.Control
                        type="number"
                        placeholder="**********"
                        aria-describedby="inputGroupPrepend"
                        required />
                    <Form.Control.Feedback type="invalid">
                        Please enter a phone number.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomSkypeID">
                <Form.Label>Skype ID</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="Enter ID"
                        aria-describedby="inputGroupPrepend"
                        required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group controlId="validationCustomInterstedIn">
                <Form.Label>Intersted In</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Select aria-describedby="inputGroupPrepend" required>
                        <option disabled selected>Choose any</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Ecommerce Development">Ecommerce Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="other">Other</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Row>
        <Row className="mb-5">
            <Form.Group controlId="validationCustomDetails">
                <Form.Label>Details</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Your description here..."
                        aria-describedby="inputGroupPrepend"
                        rows={4}
                        required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Form.Group className="mb-5">
            <Form.Check
                required
                label="Receive new services & offers regarding web, web-app, mobile app solutions."
                feedback="You must agree before submitting."
                feedbackType="invalid" />
        </Form.Group>
        <Button type="submit" className={Styles.BtnSubmit}>SUBMIT</Button>
    </Form>
  )
}

export default FooterContactForm