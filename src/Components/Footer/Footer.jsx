import React from 'react'
import "./Footer.css"

import footer__logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer__logo} alt="footer__logo" />
            <p>SHOPPER</p>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Proudcts</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className='footer-social-icon'>
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="instagram" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="pintester" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All rights reserved.</p>
        </div>
    </div>
  )
}
    