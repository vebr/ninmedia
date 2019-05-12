import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormFeedback,Alert
} from 'reactstrap';
import '../../styles/style.scss';

import {  withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
      validate: {
        emailState: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    success: null,
    error: null,
    member: {},
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onFormSubmit, history } = this.props;
    this.setState({error:false,emailNull:false,passwordNull:false})
    if (this.state.email === "") {
      this.setState({emailNull: true})
    }
    if (this.state.password === "") {
      this.setState({passwordNull: true})
    } else {
    onFormSubmit(this.state)
      .then(() => history.push('/backoffice'))
      .catch(e => {
        this.setState({
          email: "",
          password: "",
          error: true})
        console.log(`Error: ${e}`)});
      }
  }


  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (this.state.email === "") {
      console.log('teto')
      validate.emailState = ''
    }
      if (emailRex.test(e.target.value)) {
        if (this.state.email !== "") {
          validate.emailState = 'has-success'
        }
        
      } else {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
    }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  render() {
    const { email, password,error,emailNull, passwordNull } = this.state;
    return (
      <Container className="Dashboard">
        <div className="text-center">
         <h2>Ninmedia Backoffice</h2>
        </div>
        {error ? <Alert color="danger">User dan Password yang anda masukkan salah, Silahkan ulangi kembali.</Alert> : <div></div>}
        {emailNull ? <Alert color="danger">Tolong masukkan email anda!</Alert> : <div></div>}
        {passwordNull ? <Alert color="danger">Tolong masukkan password anda!</Alert> : <div></div>}
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={ email }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
                Silahkan masukan password
              </FormFeedback>
              <FormFeedback>
                Uh oh! Tolong masukkan format email yang benar!
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={ password }
                onChange={ (e) => this.handleChange(e) }
            />
            </FormGroup>
          </Col>
          <div className="text-center">
            <Button color="primary">Masuk</Button>
          </div>
      </Form>
      </Container>
    );
  }
}

export default withRouter(Login);