import React from 'react';
import './footer.css'
import {BsFacebook} from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import {FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer_logo'>Monir</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://www.facebook.com/moniruzzaman.mbstu/" target='_blank'><BsFacebook/></a>
                <a href="https://www.instagram.com/moniruzzaman.mbstu/" target='_blank'><GrInstagram/></a>
                <a href="https://twitter.com" target='_blank'><FaTwitter/></a>
            </div>

            <div className="footer_copyright">
                <smal>&copy; Monir sites. All rights reserved.</smal>
            </div>

        </footer>
    );
};

export default Footer;