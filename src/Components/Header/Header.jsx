import React,{useState} from 'react'
import DarkLight from '../DarkLightMode/DarkLight';
import "./Header.css";

const Header = () => {
    const [toggle, showMenu] = useState(false);
    window.addEventListener('scroll', function(){
        const TopNav = document.querySelector(".header");
        if(this.scrollY >= 130){
            TopNav.classList.add("border-bottom")
        }else{
            TopNav.classList.remove("border-bottom")
        }
    })

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" 
                className='nav_logo'>Gaurav</a>
                
                <div className={ toggle ? "nav_menu show_menu" :
                  " nav_menu "}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active_link">
                                <i className="uil uil-estate nav_icon"></i>
                                 Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav_icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                            Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#qualifications" className="nav_link">
                                <i className="uil uil-file-alt nav_icon"></i>
                            Qualifications
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <i className="uil uil-briefcase-alt nav_icon"></i>
                                Services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#projects" className="nav_link">
                                <i className="uil uil-scenery nav_icon"></i>
                                Projects
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href ="#contact" className="nav_link">
                                <i className="uil uil-message nav_icon"></i>
                                Contact
                            </a>
                        </li>
                       {/* <li style={{
                        // marginRight:"-6rem",
                        marginLeft:"2rem",
                        marginBottom:"-4rem",
                        fontSize:"1.4rem"
                        // border:"1px solid black"
                        }}>
                         <DarkLight/>
                       </li> */}
                    </ul>
                    <i className="uil uil-times nav_close" 
                    onClick={()=>showMenu(!toggle)}></i>
                </div>

                <div className="nav_toggle"
                  onClick={()=>showMenu(!toggle)}
                >
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header
