import React from 'react'
import Header from './Header'
import Table from './Table'
import {Container} from 'reactstrap'
import Data from '../../../containers/Data'
import Template from './Template'
import {  withRouter } from 'react-router-dom';


class Dashboard extends React.Component{
  render() {      
    return (
      <div >
        <Header logout={this.props.logout} history={this.props.history}/>
        <div className="text-center mt-5">
          <h2>DATA USER</h2>
        </div>
        <Container className="mt-5">
        <Template>
          <Data Layout={Table} />
        </Template>
        </Container>
      </div>
    );
  }
}

export default withRouter(Dashboard);