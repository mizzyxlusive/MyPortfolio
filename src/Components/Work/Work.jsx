import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png";
import Google from "../../img/google.png";
import Wordpress from "../../img/wordpress.png";
import Amazon from "../../img/amazon.png";
import Facebook from "../../img/facebook.png";

const Work = () => {
  return (
    <div className="work">
      <div className="s-left w-left">
        <span>Works For All These</span>
        <span>Brands & Clients</span>
        <spane>We are proud of all the brands we work with but here are some 
          <br/>
          of the more famous ones you will probably recognise....</spane>
        <button className="button s-button">Hire Me</button>
      </div>


      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img className='photo' src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Google} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img className='photo' src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Wordpress} alt="" />
          </div>
        </div>
        <div className='w-backCircle blueCircle'></div>
        <div className='w-backCircle yellowCircle'></div>
      </div>
    </div>
  )
}

export default Work