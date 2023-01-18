import React from 'react';
import "./footer.css"
import { SocialLinks } from '../../Datas';

const linkData = ["About"," Projects", "Services"]

const Footer = () => {
  return (
   <footer className="footer">
   <div className="footer_container container">
        <h1 className="footer_title">Gaurav</h1>
        <ul className="footer_list">
        { linkData.map(item =>
             <li><a href={`#${item.toLowerCase()}`}>{item}</a></li>
            )
        }
        </ul>
        <div className="footer_social">
        { SocialLinks.map(link=>
            <a
                href={link.link}
                target='_blank'
                rel='noreferrer'
                className="footer_social-link"
            >
                <i className= {` ${link.icon} ${link.iconClass}`}></i>
            </a>
            )
        }
        </div>
        <span className="footer_copyright">
          &#169; GauravGupta. All rights reserved      
        </span>
   </div>

   </footer>
  )
}

export default Footer