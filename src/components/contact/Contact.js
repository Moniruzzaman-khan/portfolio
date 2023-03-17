import React,{ useRef } from 'react';
import './contact.css'
import {RiMailOpenFill,RiWhatsappFill} from "react-icons/ri";
import {BsMessenger} from "react-icons/bs";
import {} from "react-icons";
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vh1vzcm', 'template_2g5qkw7', form.current, '4ECb23bTugGy9GNWN')
        e.target.reset()
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <RiMailOpenFill classNmae="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>25monirkhan25@gmail.com</h5>
                        <a href="mailto:25monirkhan25@gmail.com" target='_blank'>Send Email</a>
                    </article>
                    <article className='contact_option'>
                        <BsMessenger classNmae="contact_option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Moniruzzaman</h5>
                        <a href="http://m.me/moniruzzaman.mbstu" target='_blank'>Send Massage</a>
                    </article>
                    <article className='contact_option'>
                        <RiWhatsappFill classNmae="contact_option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+8801949968118</h5>
                        <a href="https://wa.me/qr/ZIDMVS3YKDKTK1" target='_blank'>Send Massage</a>
                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;