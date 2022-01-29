import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
 // <video src='/videos/video-1.mp4' autoPlay loop muted />
  return (
    <div className='hero-container'>
      
      <h1>LOVE YOUR HOME ?</h1>
      <p>We make it easy to find and hire</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
