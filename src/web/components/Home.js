import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'

import Header from './Header'
import Heading from './Heading'
import Footer from './Footer'
import Section from './Section'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      noTlp: '',
      email: '',
      areaDomisili: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  }

  onFormSubmit = (data) => {
    const { onFormSubmit } = this.props;
    return onFormSubmit(data)
      .then(mes => this.setState({ successMessage: mes, errorMessage: null }))
      .catch((err) => { this.setState({ errorMessage: err, successMessage: null }); throw err; });
  }

  handleSubmit = (event) => {
    this.setState({
      progress: 50,
      isUploadSuccess:false,
    })
    event.preventDefault();
    this.onFormSubmit(this.state)
      .then(() => {
        this.setState({progress: 100})
        window.scrollTo(0, 0)
      })
      .catch(e => {
        this.setState({progress: 100});
        console.log(`Error: ${e}`)});
  }

  render() {
    const {success} =this.props
    if (success) return <Redirect to='/thanks' />
    return (
      <div>
        <Header/>
        <Heading/>
        <Section/>
        
        <Row className="mt-4 col-lg-12">
          <Col xs="12" className="text-center">
            <h3 className="title-form-home">Pesan Sekarang Juga, mulai 200 ribuan saja!</h3>
          </Col>

          <Col className="col-sm-12 col-md-8 offset-md-2 mt-3">
            <Form onSubmit={this.handleSubmit}>
              <Row form className="pl-4">
                <Col md={5} className="mr-3 ml-5">
                  <FormGroup>
                    <Label for="name" style={{color:"black"}}>Nama</Label>
                    <Input type="text" name="nama" value={this.state.nama} id="nama"
                      onChange={({ target }) => this.setState({ nama: target.value })}/>
                  </FormGroup>
                </Col>
                <Col md={5} className="ml-3">
                  <FormGroup>
                    <Label for="no-tlp" style={{color:"black"}}>No Tlp</Label>
                    <Input type="number" name="no-tlp" value={this.state.noTlp} id="no-tlp"
                      onChange={({ target }) => this.setState({ noTlp: target.value })}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row form className="pl-4">
                <Col md={5} className="mr-3 ml-5">
                  <FormGroup>
                    <Label for="email" style={{color:"black"}}>Email</Label>
                    <Input type="email" name="email" id="email" value={this.state.email}
                      onChange={({ target }) => this.setState({ email: target.value })}/>
                  </FormGroup>
                </Col>
                <Col md={5} className="ml-3">
                  <FormGroup>
                    <Label for="domisili" style={{color:"black"}}>Area Domisili</Label>
                    <Input type="text" name="domisili" id="domisili" value={this.state.areaDomisili}
                      onChange={({ target }) => this.setState({ areaDomisili: target.value })}/>
                  </FormGroup>
                </Col>
              </Row>
              <div className="text-center btn-form">
                <Button className="btn-pesan">PESAN SEKARANG</Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Footer className="pl-4"/>
      </div>
    )
  }
}


export default Home;
