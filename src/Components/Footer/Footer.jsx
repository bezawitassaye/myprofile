import React from 'react'
import "./Footer.css"
import user_icon from '../../assets/user_icon.svg'
import assets from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
            <img src={assets.logo} alt="" /> 
                <p>I am a frontend developer from, US with 1 years of experiance as web developer , ui/ux designerand QA tester </p>
                 
            </div>

            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />

                </div>

                <div className='footer-subscribe'>
                    Subscribe
                </div>

            </div>

        </div>

        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>
              <span className='copyw'>©</span>  2023 Bezawit Assaye. All rights reserved. 
            </p>

            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>

            </div>
        </div>

      
    </div>
  )
}

export default Footer
