import React,{useState} from 'react'
// import DarkLight from '../DarkLightMode/DarkLight';
import "./Header.css";
import { NavData } from '../../Datas';

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
                <a href="#home" className='nav_logo'>Gaurav</a>
                <div className={ toggle ? "nav_menu show_menu" : " nav_menu "}>
                    <ul className="nav_list grid">
                        {
                            NavData.map((navlink)=>
                                <li className="nav_item" key={navlink.id}>
                                    <a href={navlink.href} className="nav_link active_link">
                                        {/* <i className="uil uil-estate nav_icon"></i> */}
                                        {navlink.navTitle}
                                    </a>
                                </li>
                            )
                        }
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
                    <i className="uil uil-times nav_close" onClick={()=>showMenu(!toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={()=>showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}
export default Header