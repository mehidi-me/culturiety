'use client'

import { Quotes } from '@phosphor-icons/react/dist/ssr'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import ScrollCarousel from 'scroll-carousel-react'

function HomeSlider({data}) {
  // var settings = {
  //     dots: false,
  //     arrows: false,
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     speed: 4000,
  //     autoplaySpeed: 4000,
  //     cssEase: "linear"
  //   };
  return (
    <ScrollCarousel autoplay smartSpeed speed={7} className='slider'>
      {data?.map((v,i) => (
        <div key={i} className="card-3">
        <Quotes />
        <p>
         {v.description}
        </p>
      </div>
      ))}
      
    </ScrollCarousel>
  )
}

export default HomeSlider
