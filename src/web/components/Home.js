import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Redirect } from 'react-router-dom';

import Header from './Header';
import Heading from './Heading';
import Footer from './Footer';
import Section from './Section';
import Detail from './Detail';


import Select from 'react-select';

import Kabupaten from "../data/kabupaten";
import createFilterOptions from "react-select-fast-filter-options";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      noTlp: '',
      email: '',
      areaDomisili: '',
      namaError:false,
      noTlpError:false,
      domisiliError:false,
      emailError:false,
    };

    this.handleChangeSel = this.handleChangeSel.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChangeSel = (event) => {
    this.setState({
      areaDomisili: event.value})
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
    })
    event.preventDefault();
    const{ nama,email,areaDomisili,noTlp} = this.state
    if (nama === "") {this.setState({namaError:true})}
    if (email === "") {this.setState({emailError:true})}
    if (areaDomisili === "") {this.setState({domisiliError:true})}
    if (noTlp === "") {this.setState({noTlpError:true})}
    if (nama !== "") {this.setState({namaError:false})}
    if (email !== "") {this.setState({emailError:false})}
    if (areaDomisili !== "") {this.setState({domisiliError:false})}
    if (noTlp !== "") {this.setState({noTlpError:false})}
    this.onFormSubmit(this.state)
      .then(() => {
        this.setState({progress: 100})
      })
      .catch(e => {
        this.setState({progress: 100});
        console.log(`Error: ${e}`)});
  }

  render() {
    const {success} =this.props
    const filterOptions = createFilterOptions({
      Kabupaten
    });

    if (success) return <Redirect to='/thanks' />
    return (
      <div>
        <Header/>
        <Heading/>
        <Section/>
        <Detail/>
        
        <div className="mt-4 col-lg-12">
          <Col xs="12" className="text-center">
            <h3 className="title-form-home">Pesan sekarang juga TV satelit ninmedia cuma 600 ribuan saja bayar sekali bisa nonton sepuasnya</h3>
          </Col>

          <Col className="col-sm-12 col-lg-8 offset-lg-2 mt-3 col" id="form">
            <Form onSubmit={this.handleSubmit}>
              <Row form className="pl-md-4">
                <Col xs="12" md={5} className="mr-3 ml-md-5">
                  <FormGroup>
                    <Label for="name" style={{color:"black"}}>Nama</Label>
                    <Input invalid={this.state.namaError} type="text" name="nama" value={this.state.nama} id="nama"
                      onChange={({ target }) => this.setState({ nama: target.value })}/>
                    <FormFeedback>*Nama wajib di isi</FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md={5} className="">
                  <FormGroup>
                    <Label for="no-tlp" style={{color:"black"}}>No Tlp</Label>
                    <Input invalid={this.state.noTlpError} type="number" name="no-tlp" value={this.state.noTlp} id="no-tlp"
                      onChange={({ target }) => this.setState({ noTlp: target.value })}/>
                    <FormFeedback>*No telepon wajib di isi</FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row form className="pl-md-4">
                <Col xs="12" md={5} className="mr-3 ml-md-5">
                  <FormGroup>
                    <Label for="email" style={{color:"black"}}>Email</Label>
                    <Input invalid={this.state.emailError} type="email" name="email" id="email" value={this.state.email}
                      onChange={({ target }) => this.setState({ email: target.value })}/>
                    <FormFeedback>*Email wajib di isi</FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md={5} className="">
                  <FormGroup>
                    <Label for="domisili" style={{color:"black"}}>Area Domisili</Label>
                    <Select
                      className='react-select-container'
                      classNamePrefix="react-select"
                      defaultInputValue={this.state.areaDomisili}
                      defaultValue={this.state.areaDomisili}
                      filterOptions={filterOptions}
                      onChange={this.handleChangeSel}
                      options={Kabupaten}
                      placeholder="Pilih domisili"
                    />
                    {this.state.domisiliError ? <div className="invalid-domisili">*Domisili wajib di isi</div> : <div></div>}
                     
                    {/* <Input type="text" name="domisili" id="domisili" value={this.state.areaDomisili}
                      onChange={({ target }) => this.setState({ areaDomisili: target.value })}/> */}
                  </FormGroup>
                </Col>
              </Row>
              <div className="text-center btn-form">
                <button type="submit" className="btn-pesan">PESAN SEKARANG</button>
              </div>
            </Form>
          </Col>
        </div>
        <Footer className="pl-4"/>
      </div>
    )
  }
}


export default Home;
