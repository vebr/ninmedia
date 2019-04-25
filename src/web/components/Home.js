import React from 'react';
import { Row, Col, Jumbotron,Container } from 'reactstrap';

import Header from './Header'
import Banner from '../../images/Banner.png'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>
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
        <Row className="mt-4 col-lg-12">
          <Col xs="12" className="text-center">
            <h4 className="title-form-home">Pesan Sekarang Juga, mulai 200 ribuan saja!</h4>
          </Col>

          <Col className="col-sm-12 col-md-6 offset-md-3">
            <img src={Banner} alt="" width="100%"/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;
