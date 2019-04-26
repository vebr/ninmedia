import React from 'react';
import {Row,Col} from 'reactstrap'
import Banner from '../../images/Banner.png'

class Heading extends React.Component {
  render() {
    return (
      <Row className="banner-home col-lg-12">
          <Col xs="6" className="pt-3 cont-home">
            <h4 className="heading-home">Nonton Film Premium <br/>Bollywood & Hollywood</h4>
            <p className="sub-heading-home">SEMUA BISA <br/>BEBAS IURAN BULANAN!</p>
            <button className="btn-pesan-heading">
              PESAN SEKARANG
            </button>
          </Col>
          <Col xs="6">
            <img src={Banner} alt="" width="100%"/>
          </Col>
        </Row>
    )  
  }
}

export default Heading;