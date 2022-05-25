import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  window.onscroll = () => {
    const nav = document.querySelector("nav");
    const fixedNav = nav.offsetTop;
    if (window.pageYOffset > fixedNav) {
      nav.classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  };

  const menuBarHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="w-full z-40">
      <div className="nav-container">
        <div className="text-white font-bold text-lg">MIA HANIFAH</div>
        <div className={`navbar-list ${isActive ? "active" : ""}`}>
          <div className="navbar-items">
            <Link activeClass="active" to="Home" spy={true} smooth={true} onClick={menuBarHandler} offset={-100} duration={500} className="mx-4 hover:scale-110 cursor-pointer">
              Beranda
            </Link>
            <Link to="About" activeClass="active" spy={true} smooth={true} onClick={menuBarHandler} offset={-100} duration={500} className="mx-4 hover:scale-110 cursor-pointer">
              Tentang Saya
            </Link>
            <Link to="Contact" activeClass="active" spy={true} smooth={true} onClick={menuBarHandler} offset={-100} duration={500} className="mx-4 hover:scale-110 cursor-pointer">
              Hubungi Saya
            </Link>
          </div>
        </div>
        <div className="menu-bars">{!isActive ? <MenuIcon sx={{ fontSize: 36 }} className="text-white" onClick={menuBarHandler} /> : <CloseIcon sx={{ fontSize: 36 }} className="text-white" onClick={menuBarHandler} />}</div>
      </div>
    </nav>
  );
};

export default Navbar;
