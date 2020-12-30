import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    'images/slider-01.jpg',
    'images/slider-02.jpg',
    'images/slider-03.jpg'
  ];

export default function Slideshow() {
    return (
      <div className="container-slider">
          <Fade duration={3000} pauseOnHover={false}>
            <div className="each-fade">
              <img key={"1"} className="slide-pic" src={fadeImages[0]} alt="" />
            </div>    
            <div className="each-fade">
              <img key={"2"} className="slide-pic" src={fadeImages[1]} alt="" />
            </div>   
            <div className="each-fade">
              <img key={"3"} className="slide-pic" src={fadeImages[2]} alt="" />
            </div>
          </Fade>
      </div>
    );
  }