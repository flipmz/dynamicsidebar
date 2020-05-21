import React, { Component } from "react";

import * as ReactBootStrap from "react-bootstrap";

function BootstrapMenu() {
  return (
    <div>
      {this.state.mz
        .filter((el) => (el.parent_id === 0 ? el.name : null))
        .map((el) => (
          <ReactBootStrap.Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="mr-auto">
                <ReactBootStrap.NavDropdown
                  title="hello"
                  id="collasible-nav-dropdown"
                >
                  {el.name}
                  {/* <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                    НЭГДЭН ОРСОН ОУ-ЫН ГЭРЭЭ
                  </ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                    ХОЁР ТАЛЫН ГЭРЭЭ ХЭЛЭЛЦЭЭР
                  </ReactBootStrap.NavDropdown.Item> */}
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
        ))}
    </div>
  );
}

export default BootstrapMenu;
