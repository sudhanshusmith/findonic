import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedIn} from "@fortawesome/free-solid-svg-icons";

import linkedin from '../../images/socialIcons/linkedin2.jpg'
import whatsapp from '../../images/socialIcons/whatsapp.jpg'
import fullLogo from '../../images/logo/finonicFull.png'
import longLogo from '../../images/logo/findonicLogo2.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {

    function ScrollToTop(){
        window.scrollTo(0, 0)
    }

  return (
      <footer className="footer">
        <div className="container">
            <div>
                <div className="w-layout-grid footer-main-grid">
                    <div className="footer-left-wrapper">
                        <a href="#" className="footer-logo-link w-nav-brand">
                            <img src={longLogo} loading="lazy" width="100" alt=""/>
                        </a>
                        <p className="subhead third">
                        Build wolf pack for your startup game - <span className="gray-text">designed for entrepreneurs and investors.</span>
                        </p>
                        <div className="margin-20px make-15px">
                            <p className="copyright">
                            &#169; Copyright 2022 - 2024
                            </p>
                            {/* <p className="copyright">
                            All rights reserved 
                            </p> */}
                        </div>
                    </div>
                    <div className="w-layout-grid footer-grid">
                        <div className="foorer-list">
                            <div className="footer-title">Navigation</div>
                            <Link to="/" aria-current="page" className="footer-link w-inline-block w--current"
                            onClick={ScrollToTop}>
                                <div>Home</div>
                            </Link>
                            <Link to="about/" className="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>About</div>
                            </Link>
                            <Link to="contact/" className="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>Contact</div>
                            </Link>
                        </div>
                        <div className="foorer-list">
                            <div className="footer-title">Resources</div>
                            <Link href="news/" className="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>News</div>
                            </Link>
                            <a href="#" className="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>Privacy Policy</div>
                            </a>
                            <a href="#" className="footer-link w-inline-block" onClick={ScrollToTop}>
                                <div>Terms & Condition</div>
                            </a>
                           
                        </div>
                        <div className="foorer-list">
                            <div className="footer-title">Social</div>
                            <div className="social-wrapper left">
                                <a href="https://www.instagram.com/findonic4u/" target="_blank" className="social-icon-footer w-inline-block">
                                    {/* <img src="https://assets.website-files.com/62f12c77027bfb4b634fc1b9/62f12c77027bfbbf034fc1f7_instagram.svg" loading="lazy" width="20" alt=""/> */}
                                    <InstagramIcon sx={{
                                        color: 'gray'
                                    }}
                                    />
                                </a>
                               
                                <a href="https://www.linkedin.com/company/findonic/" target="_blank" className="social-icon-footer w-inline-block">
                                    {/* <FontAwesomeIcon icon={faLinkedIn} /> */}
                                    {/* <img src={linkedin}  width="22" alt=""/> */}
                                    <LinkedInIcon sx={{
                                        color: 'gray'
                                    }}
                                    />
                                </a>
                                <a href="https://chat.whatsapp.com/DXslO152avbEzcnuZJIh8C" target="_blank" className="social-icon-footer w-inline-block">
                                    <WhatsAppIcon sx={{
                                        color: 'gray'
                                    }}
                                    />
                                    {/* <img src={whatsapp} width="22" alt="kk"/> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
  )
}

export default Footer