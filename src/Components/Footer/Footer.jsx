import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
   <footer className="footer">
   <div className="footer_container container">
        <h1 className="footer_title">Gaurav</h1>
        <ul className="footer_list">
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#services">Services</a></li>
        </ul>
        <div className="footer_social">
                <a
                    href='https://www/instagram.com'
                    target='_blank'
                    rel='noreferrer'
                    className='footer_social-link'
                >
                    <i className='bx bxl-instagram'></i>
                </a>
                <a
                    href='https://www/linked.com'
                    target='_blank'
                    rel='noreferrer'
                    className='footer_social-link'
                >
                    <i className='bx bxl-linkedin'></i>
                </a>
                <a
                    href='https://www/github.com'
                    target='_blank'
                    rel='noreferrer'
                    className='footer_social-link'
                >
                    <i className='bx bxl-github'></i>
                </a>
        </div>
        <span className="footer_copyright">
          &#169; Codingalay. All rights reserved      
        </span>

   </div>

   </footer>
  )
}

export default Footer