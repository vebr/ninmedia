import React from 'react'
import {
    Navbar,
    Nav,
    Container,} from 'reactstrap';
import Logo from '../../images/logo-header.png'


class Header extends React.Component{
      render() {
        return (
          <div>
            <Navbar color="white" light expand="md" className="navbar-home">
              <Container>
                <a className="logo-nav" href="/"><img src={Logo} width="100%" alt=""/></a>
                <Nav className="wrapper-btn-psn" navbar>
                <span onClick={this.props.formRef}>
                  <button className="btn-pesan ml-auto">
                      PESAN SEKARANG
                  </button>
                  </span>    
                </Nav>
              </Container>
            </Navbar>
          </div>
        );
      }
}

export default Header;