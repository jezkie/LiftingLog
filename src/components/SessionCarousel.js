import React from 'react';
import { Carousel } from 'react-bootstrap/lib';

const SessionCarousel = () => {
  return (
    <div>
    <Carousel slide={false}>
      <Carousel.Item>
        <img width={300} height={250} src="https://placehold.it/350x150?text=Slide1"/>
      </Carousel.Item>
      <Carousel.Item>
        <img width={300} height={250} src="https://placehold.it/350x150?text=Slide2"/>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default SessionCarousel;
