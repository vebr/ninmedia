import React from 'react';
import { Row } from 'reactstrap';
import Banner from '../../images/Banner-rev.jpg';

class Heading extends React.Component{
  render() {
    return (
      <Row className="banner-home col-lg-12">
        <img className="img-banner"src={Banner} alt="Banner landing page NINMEDIA"/>
        <span onClick={this.props.formRef}>
              <button className="btn-pesan-heading">
                PESAN SEKARANG
              </button>
            </span>
      </Row>
    )
  }
};

export default Heading;