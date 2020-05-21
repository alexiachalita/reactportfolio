import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

function Header(props) {
  return (
    <Jumbotron>
    <h1>Hello, I'm Alexia.</h1>
    <p>
      This is my story...
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
  );
}
export default Header;