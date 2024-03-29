import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="http://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Moniruzzaman-khan" target="_blank"><BsGithub/></a>
            <a href="https://www.facebook.com/moniruzzaman.mbstu/" target="_blank"><BsFacebook/></a>
        </div>
    );
};

export default HeaderSocials;