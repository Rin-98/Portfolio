import React, {useState} from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav.jsx";

function Navbar(){

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return(
        <div>

            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h4 className="logo">RIN</h4>

                    <ul>
                        <li><a className="menu-item" href="">Home</a></li>
                        <li><a className="menu-item" href="">Skills</a></li>
                        <li><a className="menu-item" href="">Projects</a></li>
                        <li><a className="menu-item" href="">Contact Me</a></li>

                        <button className="contact-btn">Hire Me</button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span style={{ fontSize: "1.8rem" }}>
                        {openMenu ? <i class="fa-solid fa-x"></i> : <i class="fa-solid fa-bars"></i>}
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;