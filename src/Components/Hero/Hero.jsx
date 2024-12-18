import React from 'react';
import './Hero.css';
import assets from '../../assets/assets';

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <img src={assets.hero} alt="Hero Image" />
      </div>

      <div>
        <section>
          <div className="video-container">
            <video src="smoke.mp4" autoPlay loop muted></video>
            <h1>
              <span className="first">I'm</span>
              <span>B</span>
              <span>e</span>
              <span>z</span>
              <span>a</span>
              <span>w</span>
              <span>i</span>
              <span>t</span>
              <span className="last">A</span>
              <span>s</span>
              <span>s</span>
              <span>a</span>
              <span>y</span>
              <span>e</span>
            </h1>
          </div>
        </section>


        <div className="hero-action">


          <div class="animated-text">
            I'm a <span></span>
          </div>

          <div className='hero-act'>
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>

          </div>

        </div>


      </div>
    </div>
  );
};

export default Hero;
