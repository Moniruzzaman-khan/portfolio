import React, {useState} from 'react';
import './nav.css'
import {IoHome} from "react-icons/io5";
import {FaUserAlt,FaBook} from "react-icons/fa";
import {MdMiscellaneousServices} from "react-icons/md";
import {RiMessage2Fill} from "react-icons/ri";


const Nav = () => {
    const [activeNav,setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNav('#a')} className={activeNav === '#' ? 'active':''}><IoHome/></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><FaUserAlt/></a>
            <a href="#experience" onClick={()=>setActiveNav("#experience")} className={activeNav === "#experience" ? 'active':''}><FaBook/></a>
            <a href="#services" onClick={()=>setActiveNav("#services")} className={activeNav === "#services" ? 'active':''}><MdMiscellaneousServices/></a>
            <a href="#contact" onClick={()=>setActiveNav("#contact")} className={activeNav === "#contact" ? 'active':''}><RiMessage2Fill/></a>
        </nav>
    );
};

export default Nav;