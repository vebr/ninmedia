import React from 'react';
import { Row } from 'reactstrap';
import Banner from '../../images/Banner-rev.jpg';

class Heading extends React.Component{
  render() {
    return (
      <Row className="banner-home col-lg-12">
        <img className="img-banner"src={Banner} alt="Banner landing page NINMEDIA"/>
        <a href="#form">
              <button className="btn-pesan-heading">
                PESAN SEKARANG
              </button>
            </a>
      </Row>
    )
  }
};

export default Heading;