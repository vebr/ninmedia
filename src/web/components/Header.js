import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    Container,} from 'reactstrap';
import Logo from '../../images/logo-header.png'


class Header extends React.Component{
      render() {
        return (
          <div>
            <Navbar color="white" light expand="md" className="navbar-home">
              <Container>
                <NavbarBrand href="/"><img src={Logo} alt=""/></NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <button className="btn-pesan">
                      PESAN SEKARANG
                  </button>    
                </Nav>
              </Container>
            </Navbar>
          </div>
        );
      }
}

export default Header;