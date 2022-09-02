import React from 'react'
import './Services.css'
import Card from '../Card/Card';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Resume from "./Resume.pdf";

const Services = () => {
  return (
    <div className="s-wrapper">
      <div className="s-left">
        <span>My Awesome</span>
        <span>Services</span>
        <spane>Here are my awesome services.</spane>

        <a href={Resume} download>
        <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{background: "#abf1ff94"}}></div>
      </div>
      <div className="s-right">
        <div style={{left: '14rem'}}>
          <Card
          emoji={Humble}
          heading={'Develoer'}
          details={"Html, Css, Javascript, React, Wordpress, Node.js, etc"}
          />
        </div>
        <div style={{left: '-4rem', top: '12rem'}}>
          <Card
          emoji={HeartEmoji}
          heading={'Design'}
          details={"Figma, Photoshop, etc"}
          />
        </div>
        <div style={{left: '12rem', top: '19rem'}}>
          <Card
          emoji={Glasses}
          heading={'Developer Tools'}
          details={"Slack, Git, Github, Monday, Asana, AnyDesk etc"}
          />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services