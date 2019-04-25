import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import Header from './Header'
import Banner from '../../images/Banner.png'

class Home extends React.Component {
  con
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
            <h3 className="title-form-home">Pesan Sekarang Juga, mulai 200 ribuan saja!</h3>
          </Col>

          <Col className="col-sm-12 col-md-8 offset-md-2 mt-3">
            <Form>
              <Row form>
                <Col md={5} className="mr-3 ml-5">
                  <FormGroup>
                    <Label for="name" style={{color:"black"}}>Nama</Label>
                    <Input type="text" name="nama" id="nama" />
                  </FormGroup>
                </Col>
                <Col md={5} className="ml-3">
                  <FormGroup>
                    <Label for="no-tlp" style={{color:"black"}}>No Tlp</Label>
                    <Input type="telp" name="no-tlp" id="no-tlp"/>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={5} className="mr-3 ml-5">
                  <FormGroup>
                    <Label for="email" style={{color:"black"}}>Email</Label>
                    <Input type="email" name="email" id="email" />
                  </FormGroup>
                </Col>
                <Col md={5} className="ml-3">
                  <FormGroup>
                    <Label for="domisili" style={{color:"black"}}>Area Domisili</Label>
                    <Input type="text" name="domisili" id="domisili"/>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="text-center">
                <Button className="btn-pesan">PESAN SEKARANG</Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home;
