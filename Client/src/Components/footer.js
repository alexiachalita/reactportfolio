import React from 'react';
import {Card, Button} from 'react-bootstrap';

function Footer(props) {
  return (
    <Card>
  <Card.Header>Get in Touch</Card.Header>
  <Card.Body>
    <Card.Title>achalita@callutheran.edu</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="primary" href="https://www.linkedin.com/in/alexia-chalita-42810071/" target="_blank">LinkedIn</Button>
    <Button variant="primary" href="mailto:achalita@callutheran.edu">Email</Button>
  </Card.Body>
</Card>
  );
}
export default Footer;