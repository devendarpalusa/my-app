import Carousel from 'react-bootstrap/Carousel';
import ImageComponent from '../../image/image-component';


function Corousel() {

  return (
    <Carousel>
      <Carousel.Item>
        <ImageComponent  imageURL={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} dimensions={{width:"50%",height:400}}  />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageComponent  imageURL={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"} dimensions={{width:"50%",height:400}}  />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <ImageComponent  imageURL={"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"} dimensions={{width:"50%",height:400}}  />

        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;
