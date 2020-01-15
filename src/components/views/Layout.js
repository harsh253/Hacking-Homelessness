import React, {Component, useState} from 'react';
import { withRouter } from 'react-router-dom'
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
                    <NavLink onClick={()=>this.props.history.push('/')}>Organizations</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Become A Contributor
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={()=>this.props.history.push('/donate')}>
                        Donation
                      </DropdownItem>
                      <DropdownItem onClick={()=>this.props.history.push('/ideas')}>
                        Ideas
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink onClick={()=>this.props.history.push('/news')}>News</NavLink>
                  </NavItem>
                </Nav>
                <NavLink href="/login">Log In</NavLink>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}

export default withRouter(Layout);