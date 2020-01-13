import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './navigation.css';

export class Navigation extends Component {
      render() {
        return(

          <Navbar default collapseOnSelect bg="dark">
            <Navbar.Collapse>
            <Nav className="justify-content-center mr-auto" >
                <Nav.Item>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/about">About</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink className=" p-2 bg-dark text-white" to="/contact">Contact</NavLink>
                </Nav.Item>
                <Nav.Item>
                <NavLink className=" p-2 bg-dark text-white" to="/Portfolio">Portfolio</NavLink>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>





            //<NavLink className="d-inline p-2 bg-dark text-white" to="/">Home</NavLink>
            //<NavLink className="d-inline p-2 bg-dark text-white" to="/about">About</NavLink>
            //<NavLink className="d-inline p-2 bg-dark text-white" to="/contact">Contact</NavLink>



        )
      }
}
