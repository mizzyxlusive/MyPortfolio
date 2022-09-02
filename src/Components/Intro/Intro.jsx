import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Facebook from '../../img/facebook.png';
import Gmail from '../../img/gmail-logo.png';
import Whatsapp from '../../img/whatsapp.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';


const Intro = () => {
  return (
    <div className="i-wrapper">
      <div className="i-left">
        <div className="i-name">
        <span>Hy! I Am</span>
        <span>Miracle Emmanuel</span>
        <span>Frontend Developer with high level of experience in web designing and development, producting the Quality work</span>
        </div>
        <button className="button  i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/mizzyxlusive/">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-miracle/">
          <img src={Linkedin} alt="" />
          </a>
          <a href="mailto: emmanuelmiracle67@gmail.com">
          <img src={Gmail} alt="" />
          </a>
          <a href="https://www.facebook.com/emmanuel.miracle.7921/">
          <img src={Facebook} alt="" />
          </a>
          <a href="https://wa.me/2348107191472">
          <img src={Whatsapp} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top: '-4%', left: '68%'}}>
          <FloatingDiv  image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top: '18rem', left: '1rem'}}>
        <FloatingDiv  image={thumbup} txt1='User' txt2='Friendly'/>
        </div>
        {/* blurs */}
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: '#c1f5ff', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro