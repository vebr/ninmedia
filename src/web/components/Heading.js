import React from 'react';
import {Row,Col} from 'reactstrap'
import Banner from '../../images/Banner-rev.jpg'

class Heading extends React.Component {
  render() {
    return (
      <Row className="banner-home">
          <img className="img-banner"src={Banner}/>
            <a href="#form">
              <button className="btn-pesan-heading">
                PESAN SEKARANG
              </button>
            </a>
        </Row>
    )  
  }
}

export default Heading;