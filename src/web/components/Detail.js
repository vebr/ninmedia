import React from 'react'
import { TabContent, TabPane, Container,Row,Col } from 'reactstrap'
import Image1 from '../../images/LOGO2/8.jpg'
import Image2 from '../../images/LOGO2/15.png'

import Image12 from '../../images/LOGO2/12.png'
import Image13 from '../../images/LOGO2/13.png'
import Image27 from '../../images/LOGO2/27.png'
import Image28 from '../../images/LOGO2/28.png'

import Image26 from '../../images/LOGO2/26.png'
import Image34 from '../../images/LOGO2/34.png'
import Image35 from '../../images/LOGO2/35.png'
import Image29 from '../../images/LOGO2/29.png'

import Image10 from '../../images/LOGO2/10.png'
import Image19 from '../../images/LOGO2/19.png'
import Image11 from '../../images/LOGO2/11.png'
import Image4 from '../../images/LOGO2/4.png'
import Image3 from '../../images/LOGO2/3.png'

import Image6 from '../../images/LOGO2/6.png'
import Image5 from '../../images/LOGO2/5.png'
import Image9 from '../../images/LOGO2/9.png'
import Image23 from '../../images/LOGO2/23.jpg'
import Image43 from '../../images/LOGO2/43.png'

import Image14 from '../../images/LOGO2/14.png'
import Image21 from '../../images/LOGO2/21.png'

import Image37 from '../../images/LOGO2/37.jpg'
import Image20 from '../../images/LOGO2/20.png'
import Image42 from '../../images/LOGO2/42.png'
import Image30 from '../../images/LOGO2/30.png'
import Image46 from '../../images/LOGO2/46.png'
import Image33 from '../../images/LOGO2/33.png'
import Image32 from '../../images/LOGO2/32.png'
import Image31 from '../../images/LOGO2/31.png'

import Image16 from '../../images/LOGO2/16.png'
import Image48 from '../../images/LOGO2/48.jpg'
import Image45 from '../../images/LOGO2/45.png'
import Image51 from '../../images/LOGO2/51.png'
import Image18 from '../../images/LOGO2/18.png'
import Image17 from '../../images/LOGO2/17.png'
import Image36 from '../../images/LOGO2/36.jpg'
import Image50 from '../../images/LOGO2/50.png'
import Image47 from '../../images/LOGO2/47.png'
import Image44 from '../../images/LOGO2/44.png'
import Image7 from '../../images/LOGO2/7.png'

import ImageDetailLeft from '../../images/banner-left.jpg' 
import ImageDetailRight from '../../images/banner-right.jpg'
import ImageInfo from '../../images/img-info.png'
import ImageMap from '../../images/img-peta.png'
import ImageBannerBottom from '../../images/banner-2.jpg'
import classnames from 'classnames';

class Detail extends React.Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        activeTab: '1'
      };
    }

    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }

    render() {
        return (
          <div>
            <Container className = "text-center detail-title" >
              <h4> CHANNEL </h4>
            </Container>
            <Container className = "text-center detail-list">
              <span className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style={{cursor:"pointer"}}>Music Channel</span>
              <span className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('2'); }} style={{cursor:"pointer"}}>Movie Channel</span>
              <span className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('3'); }} style={{cursor:"pointer"}}>News & General</span>
              <span className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('4'); }} style={{cursor:"pointer"}}>Local Channel</span>
              <span className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('5'); }} style={{cursor:"pointer"}}>Religion Channel</span>
              <span className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('6'); }} style={{cursor:"pointer"}}>Community Channel</span>
            </Container>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Container className="text-center ">
                  <div className="detail-list-image">
                    <img src={Image12} alt=""/> <span>Maleo Channel</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image13} alt=""/> <span>MKTV</span>   
                  </div>
                  <div className="detail-list-image">
                    <img src={Image27} alt=""/> <span>Zing</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image28} alt=""/> <span>Pop Musik</span>  
                  </div>
                </Container> 
              </TabPane>
              <TabPane tabId="2">
                <Container className="text-center ">
                  <div className="detail-list-image">
                    <img src={Image26} alt=""/> <span>Zee Bioskop</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image34} alt=""/> <span>Galaxy</span>   
                  </div>
                  <div className="detail-list-image">
                    <img src={Image35} alt=""/> <span>Galaxy Premium</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image29} alt=""/> <span>Citra Drama</span>  
                  </div>
                </Container> 
              </TabPane>
              <TabPane tabId="3">
                <Container className="text-center ">
                  <div className="detail-list-image">
                    <img src={Image10} alt=""/> <span>Kitanesia</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image19} alt=""/> <span>RRI net</span>   
                  </div>
                  <div className="detail-list-image">
                    <img src={Image11} alt=""/> <span>Ladies Channel</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image4} alt=""/> <span>Aljazeera English</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image3} alt=""/> <span>TFC</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image1} alt=""/> <span>Lifestyle Network</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image2} alt=""/> <span>Sports + Action</span>   
                  </div>
                  <div className="detail-list-image">
                    <img src={Image37} alt=""/> <span>GPR TV</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image20} alt=""/> <span>Rumah TV</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image42} alt=""/> <span>Horee</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image30} alt=""/> <span>Citra Entertaiment</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image46} alt=""/> <span>O Shop</span>
                  </div>
                  <div className="detail-list-image">
                    <img src={Image33} alt=""/> <span>FightBox</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image32} alt=""/> <span>Fast & FunBox</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image31} alt=""/> <span>DocuBox</span>  
                  </div>
                </Container> 
              </TabPane>
              <TabPane tabId="4">
                <Container className="text-center ">
                  <div className="detail-list-image">
                    <img src={Image6} alt=""/> <span>Arek TV (Jawa Timur)</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image5} alt=""/> <span>Banten Raya TV</span>   
                  </div>
                  <div className="detail-list-image">
                    <img src={Image9} alt=""/> <span>Inspira TV</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image23} alt=""/> <span>Tabalong TV (Tabalong)</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image43} alt=""/> <span>PAL TV (Palembang)</span>  
                  </div>

                  
                  <div className="detail-list-image"><img src={Image16} alt=""/> <span>Radar Lampung TV (Lampung)</span></div>
                  <div className="detail-list-image"><img src={Image48} alt=""/> <span>SPM TV</span></div>
                  <div className="detail-list-image"><img src={Image45} alt=""/> <span>PONTV</span></div>
                  <div className="detail-list-image"><img src={Image51} alt=""/> <span>TVRI Sumatera Utara</span></div>
                  <div className="detail-list-image"><img src={Image18} alt=""/> <span>RCTV (Cirebon)</span></div>
                  <div className="detail-list-image"><img src={Image17} alt=""/> <span>RBTV</span></div>
                  <div className="detail-list-image"><img src={Image36} alt=""/> <span>Gemilang TV</span></div>
                  <div className="detail-list-image"><img src={Image50} alt=""/> <span>TVRI Riau</span></div>
                  <div className="detail-list-image"><img src={Image47} alt=""/> <span>Riau TV</span></div>
                  <div className="detail-list-image"><img src={Image44} alt=""/> <span>Jambi TV</span></div>

                  <div className="detail-list-image">
                    <img src={Image7} alt=""/> <span>BETV</span>  
                  </div>
                </Container> 
              </TabPane>
              <TabPane tabId="5">
                <Container className="text-center ">
                  <div className="detail-list-image">
                    <img src={Image14} alt=""/> <span>Nabawi TV</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image21} alt=""/> <span>Salingsapa TV</span>   
                  </div>
                </Container> 
              </TabPane>
              <TabPane tabId="6">
                <Container className="text-center ">
                  <div className="detail-list-image">
                    <img src={Image1} alt=""/> <span>DMI Channel</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image2} alt=""/> <span>NU Channel</span>   
                  </div>
                  <div className="detail-list-image">
                    <img src={Image3} alt=""/> <span>Tribata TV</span>  
                  </div>
                  <div className="detail-list-image">
                    <img src={Image4} alt=""/> <span>TV Desa</span>  
                  </div>
                </Container> 
              </TabPane>
            </TabContent>
            
            <Container>
               <Row style={{marginTop: "5em",}}>
                 <Col xs="12" md="6" className="mb-3 mb-md-0"><img src={ImageDetailLeft} alt="" width="100%"/></Col>
                 <Col xs="12" md="6"><img src={ImageDetailRight} alt="" width="100%"/></Col>
               </Row>  
            </Container>
            <Container>
              <Row className="map-detail" style={{marginTop: "1em"}}>
                 <Col xs="12">
                  <img src={ImageBannerBottom} alt="" width="100%"/>
                 </Col>
               </Row>
            </Container>
            <Container>
              <div className="container-img-info text-center">
                <img src={ImageInfo} alt="" className="d-inline-block"/>
                <h2 className="d-inline-block">Tentang Ninmedia</h2>
                <p><em>Ninmedia</em> adalah Ekosistem penyiaran Satelit Free to Air dengan frekuensi Ku-Band, yang disiarkan melalui Satelit Chinasat 11. Menjangkau seluruh pelosok Indonesia</p>
              </div>
            </Container>
            <Container>
            <Row className="map-detail" style={{marginTop: "5em"}}>
                 <Col xs="12" md="6">
                  <img src={ImageMap} alt="" width="100%"/>
                 </Col>
                 <Col xs="12" md="6" className="text-center">
                 <h2 className="font-weight-bold  text-dark word-break">
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