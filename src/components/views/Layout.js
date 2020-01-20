import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { 
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
  Modal, 
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import '../../styles/layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {GoogleLogin} from 'react-google-login';
import {connect} from 'react-redux';
import store from '../../store/store';
import * as actions from '../../actions';
import { NavLink as RRNavLink } from 'react-router-dom';

class Layout extends Component {
    constructor(props){
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);

        this.state={
            isOpen: false,
            modal:false,
        }
    }

    toggleNav(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    toggleModal(){
      this.setState({
        modal: !this.state.modal
      })
    }

    logout(){
      localStorage.removeItem('accessToken')
      localStorage.removeItem('name')
      store.dispatch(actions.logOutUser())
    }

    render(){
      const responseFacebook = (response) => {
        console.log(response);
          localStorage.setItem('accessToken', response.accessToken)
          localStorage.setItem('name', response.name)
          window.location.reload()

      }
  
      const responseGoogle = (response) => {
        console.log(response);
        localStorage.setItem('accessToken', response.accessToken)
        localStorage.setItem('name', response.profileObj.name)
        window.location.reload()
      }  

      return(
        <div className="layout-container">
          <Navbar fixed="top" color="" className="custom-nav-style" dark expand="md">
            <NavbarBrand>Hacking Homelessness</NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
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
              {this.props.name ? (
              <div>
                <span>{this.props.name}
                  <h6 style={{cursor:'pointer'}}onClick={this.logout}>Logout</h6>
                </span>
                
              </div>):<NavLink style={{paddingLeft:0, paddingRight:0, color:'#007bff'}} onClick={()=>this.toggleModal()}>Log In</NavLink>}
              
            </Collapse>
          </Navbar>
          <Modal centered isOpen={this.state.modal} toggle={this.toggleModal} className="text-center">
            <ModalHeader toggle={this.toggleModal}>Log in</ModalHeader>
            <ModalBody>
              Sign in using
              <div className="login-services">
                
                <FacebookLogin 
                  appId="1043474982652148" 
                  fields="name,email,picture"
                  callback={responseFacebook}
                  isMobile={false}
                  render={renderProps => (
                    <Button onClick={renderProps.onClick} className="fb-login-btn">
                      <FontAwesomeIcon className="fb-login-icon" icon={['fab', 'facebook-f']}></FontAwesomeIcon>
                      Facebook
                    </Button>
                    
                  )}
                />
                <GoogleLogin
                  clientId="491014928615-punuriroth7d8l3g5r8d0c83gu2keatf.apps.googleusercontent.com"
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google-login-btn">
                      <FontAwesomeIcon className="google-login-icon" icon={['fab', 'google']}></FontAwesomeIcon>
                      Google
                    </Button>
                  )}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    }
}

function mapStateToProps(state){
  return{
    name: state.authReducer.name
  }
}

export default connect(mapStateToProps)(withRouter(Layout));