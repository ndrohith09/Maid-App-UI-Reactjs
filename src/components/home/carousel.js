import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import CarouselImg from "../assets/images/carousel1.png"
import CarouselImg1 from "../assets/images/carousel2.jpg"
class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  render() {  
    return (
      <>
   <Carousel>
 
<Carousel.Item key = "2"  interval={2000}>
  <img
    className="d-block w-100"
    src={CarouselImg}
    style={{height: '80vh'}}
    alt="carousel"
  />
</Carousel.Item>

<Carousel.Item key = "2"  interval={2000}>
  <img
    className="d-block w-100"
    src={CarouselImg1}
    style={{height: '80vh'}}
    alt="carousel"
  />
</Carousel.Item>

</Carousel>

</>
  );
  }
}
 
export default Banner;
