import React, { Component } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import data from "../data/project";


class Projects extends Component {
  state = {
    data: []
  };

  componentDidMount(){
    this.setState({
      data
    });
  }

  render() {
      return (
      <CardGroup>
        {this.state.data.length > 0 ? (
          this.state.data.map((project, index) => (
            <Card key={index}>
          <Card.Img variant="top" src={project.img} />
          <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button>Live Project</Button>
            <Button>Github Repo</Button>
          </Card.Footer>
        </Card>
          ))
          ):(
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      )}
      </CardGroup>
      );
  }

}
export default Projects;