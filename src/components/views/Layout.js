import React, {Component, useState} from 'react';
import { 
    Container, 
    Row, 
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import '../../styles/layout.css'
import {Link} from 'react-router-dom'

class Layout extends Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state={
            isOpen: false
        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
            <div className="layout-container">
            <Navbar fixed="top" color="" className="custom-nav-style" light expand="md">
              <NavbarBrand href="/">Hacking Homelessness</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Organizations</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Become A Contributor
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={()=>window.location.assign('/donate')}>
                        Donation
                      </DropdownItem>
                      <DropdownItem onClick={()=>window.location.assign('/ideas')}>
                        Ideas
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink href="/news">News</NavLink>
                  </NavItem>
                </Nav>
                <NavLink href="/login">Log In</NavLink>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default Layout;