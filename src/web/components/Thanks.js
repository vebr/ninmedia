import React from 'react';
import {Row,Col} from 'reactstrap'
import Logo from '../../images/white-logo.png'
import Countdown from 'react-countdown-now';
import { Redirect } from 'react-router-dom'

const url="https://api.whatsapp.com/send?phone=6285219846220&text=Halo%20NINMEDIA%20saya%20tertarik%20untuk%20mengetahui%20informasi%20bagaimana%2C%20cara%20mendapatkan%20channel%20premium%20pilihan%20terbaik%20%3F&fbclid=IwAR1E8znJGYkS6eWs-ad-gCfry2y-v9Raq7GuZt8FEI6cdEJ3Mx7eN_eORJ8"
// Random component
const Completionist = () => <div><p className="countdown">0</p><span style={{display:"none"}}>{window.location.href = url}</span></div>;


// Renderer callback with condition
// eslint-disable-next-line
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <p className="countdown">{seconds}</p>
  }
};

class Thanks extends React.Component {
  render() {
    return (
      <Row className="banner-thanks col-lg-12 text-center">
          <Col xs="12" className="pt-3 cont-home">
          <img src={Logo} alt="" width="20%" className="mb-5"/>
            <p className="count-thanks">Terimakasih , Kami akan segera melayani anda</p>
            
            <Countdown
              date={Date.now() + 5000}
              renderer={renderer}
            />
            <p className="count-click">Atau <a href={url} className="href-countdown">Klik Disini</a> Jika tidak berhasil diarahkan secara otomatis</p>
          </Col>
        </Row>
    )  
  }
}

export default Thanks;