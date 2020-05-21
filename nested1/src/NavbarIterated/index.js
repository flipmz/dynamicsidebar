import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
class NavbarInterated extends Component {
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
          id: 10,
          name: "SubMenu2-Menu1",
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
          url: "",
          order: 210,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
        {
          id: 12,
          name: "SubMenu2-Menu2",
          url: "",
          order: 220,
          type: 3,
          is_active: true,
          parent_id: 2,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.mz
          .filter((el) => (el.parent_id === 0 ? el.name : null))
          .map((el) => (
            <ReactBootStrap.Navbar>
              {el.name}

              <ReactBootStrap.Navbar.Collapse>
                <ReactBootStrap.Nav>
                  <ReactBootStrap.NavDropdown>
                    {el.name}
                  </ReactBootStrap.NavDropdown>
                </ReactBootStrap.Nav>
              </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
          ))}
      </div>
    );
  }
}
export default NavbarInterated;
