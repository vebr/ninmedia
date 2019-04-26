import React from 'react'
import {
    Container,} from 'reactstrap';


class Footer extends React.Component{
      render() {
        return (
          <div className="footer">
              <Container className="text-center">
                <p>Ninmedia © 2019 Ninmedia</p>
              </Container>
          </div>
        );
      }
}

export default Footer;