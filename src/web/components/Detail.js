import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import Image1 from '../../images/LOGO2/8.jpg'
import Image2 from '../../images/LOGO2/15.png'
import Image3 from '../../images/LOGO2/49.jpg'
import Image4 from '../../images/LOGO2/24.png'
import Image5 from '../../images/LOGO2/25.png'
import ImageDetailLeft from '../../images/banner-left.jpg' 
import ImageDetailRight from '../../images/banner-right.jpg'
import ImageInfo from '../../images/img-info.png'
import ImageMap from '../../images/img-peta.png'

class Detail extends React.Component {
    render() {
        return (
          <div>
            <Container className = "text-center detail-title" >
              <h4> CHANNEL </h4>
            </Container>
            <Container className = "text-center detail-list">
              <span>Music Channel</span>
              <span>Movie Channel</span>
              <span>News & General</span>
              <span>Local Channel</span>
              <span>Religion Channel</span>
              <span>Community Channel</span>
            </Container>
            <Container className="text-center ">
              <div className="detail-list-image">
                <img src={Image1} alt=""/> <span>DMI Channel</span>  
              </div>
              <div className="detail-list-image">
                <img src={Image2} alt=""/> <span>Nu Channel</span>   
              </div>
              <div className="detail-list-image">
                <img src={Image3} alt=""/> <span>Tribrata TV</span>  
              </div>
              <div className="detail-list-image">
                <img src={Image4} alt=""/> <span>TV BMW</span>  
              </div>
              <div className="detail-list-image">
                <img src={Image5} alt=""/> <span>TV Desa</span>
              </div>
            </Container>
            <Container>
               <Row style={{marginTop: "5em",}}>
                 <Col xs="6"><img src={ImageDetailLeft} alt="" width="100%"/></Col>
                 <Col xs="6"><img src={ImageDetailRight} alt="" width="100%"/></Col>
               </Row>  
            </Container>
            <Container>
              <div className="container-img-info">
                <img src={ImageInfo} alt="" className="d-inline-block"/>
                <h2 className="d-inline-block">Tentang Ninmedia</h2>
                <p><em>Ninmedia</em> adalah Ekosistem penyiaran Satelit Free to Air dengan frekuensi Ku-Band, yang disiarkan melalui Satelit Chinasat 11. Menjangkau seluruh pelosok Indonesia</p>
              </div>
            </Container>
            <Container>
            <Row style={{marginTop: "5em", padding: "0 3em"}}>
                 <Col xs="6">
                  <img src={ImageMap} alt="" width="100%"/>
                 </Col>
                 <Col xs="6" className="text-left">
                 <h2 className="font-weight-bold  text-dark">
                   JANGKAUAN LUAS
                 </h2>
                 <p style={{color: "#595959"}}>Siaran ninmedia menjangkau seluruh pelosok tanah air dari sabang sampai merauke.
                   <br/>
                   <br/>
                   Menggunakan satelit CHINASAT-11 yang memiliki distribusi terkuat merata diI ndonesia</p>
                 </Col>
               </Row>
              </Container>
            
          </div>
        )
    }

}

export default Detail;