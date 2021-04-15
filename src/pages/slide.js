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
            {fadeImages.map((image, index) => (
              <div key={index} className="each-fade">
                <img className="slide-pic"
                  src={image} alt="tt"
                  ></img>
              </div>
            ))}
          </Fade>
      </div>
    );
  }