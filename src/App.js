import React, { Component } from 'react';
import './App.css';
import { Container, Button, Navbar, Nav, Card } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar bg="primary">
          <Navbar.Brand href="#home">Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Card>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quibusdam pariatur dicta ipsa aliquid sed! Quaerat nisi veniam similique, iste aspernatur repudiandae, rerum ipsam facere sapiente perferendis obcaecati perspiciatis! Enim.
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default App;
