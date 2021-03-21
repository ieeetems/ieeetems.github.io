import React from "react"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import "../css/carousel.css"
import Event from "./event"
const Carousel = ()=>{
  const res={
    0: {
        margin:10,
        items: 1
      },
      450: {
        items: 1,
        margin:10

      },
      600: {
        items: 1.5,
        margin:10
      },
      1000: {
        items: 4
      }
};


    return(
      <div class="carousel"> 
      <h1 class="events-title">Few Of Our Events</h1>  
        <OwlCarousel 
         items={1.5}
         center={true}
         className="owl-theme"
         loop={true}
         margin={100}
         autoplayHoverPause={true}
         dots={false}
         nav={true}
         autoplay={true}
         smartSpeed={1000}
         autoplayTimeout={4000}
         responsive={res}

        > 
        <Event />
        </OwlCarousel>

      </div>
    )
}
export default Carousel