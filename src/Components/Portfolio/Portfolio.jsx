import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Admin from "../../img/admin.png";
import Music from "../../img/musicplay.png";
import Unycornwrk from "../../img/unycornwrk.png";
import Office from "../../img/office.png";
import Guyana from "../../img/guyana.png";
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Admin} alt="" />
        </SwiperSlide>

        <SwiperSlide> 
          <img src={Music} alt="" />
        </SwiperSlide>  

        <SwiperSlide>
          <img src={Unycornwrk} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Office} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Guyana} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio