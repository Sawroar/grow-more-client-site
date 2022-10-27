import React from 'react';
import { FaUser, } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-dark mt-5 mb-5'>
            <h6 className='text-white text-center py-2 mb-5'>CopyRight @ Grow More Inc</h6>
            <FaUser></FaUser>
            <div>
                <span className="footer-title">Services</span>

                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>



        </div>
    );
};

export default Footer;