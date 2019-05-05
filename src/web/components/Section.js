import React from 'react'
import { Container } from 'reactstrap';
import Images  from './Images';

import Slider from "react-slick";

class Section extends React.Component{
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            },
          },]
      };
    return (
            <Container className="section text-center">
                <h3>Channel Unggulan</h3>
                <Slider {...settings}>
                    {Images.map(({id, src,}) => <img key={id} src={src} className="img-slide" alt=""/>)}
                </Slider>  
            </Container>
        );
      }
}

export default Section;