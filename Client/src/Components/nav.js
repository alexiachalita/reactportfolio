import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Router, Link } from 'react-router-dom';
function NavBar(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/"><Navbar.Brand>Navbar</Navbar.Brand></Link>
        <Nav className="mr-auto">
          <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
          <Link to="/projects"><Nav.Link href="#features">Projects</Nav.Link></Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
export default NavBar;