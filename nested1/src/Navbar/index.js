import React, { Component } from "react";

import * as ReactBootStrap from "react-bootstrap";

import {
  NavBar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mz: [
        {
          id: 1,
          name: "Menu1",
          parent_id: 0,
        },
        {
          id: 9,
          name: "SubMenu1-Menu1",
          parent_id: 1,
        },
        {
          id: 2,
          name: "Menu2",
          parent_id: 0,
        },
        {
          id: 11,
          name: "SubMenu1-Menu2",
          parent_id: 2,
        },
      ],
    };
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar;
