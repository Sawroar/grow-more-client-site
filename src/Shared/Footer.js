import React from 'react';
import { FaUser, FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-dark mt-5 p-2'>
            <div className=''>
                <div >
                    <h6 className='text-white text-center py-2 mt2 p-2 mb-2'>CopyRight @ Grow More Inc</h6></div>
                <div className='text-white text-center'>
                    <a href=" " className='rounded ms-2 text-white' > <FaUser   ></FaUser></a>
                    <a href="https://www.facebook.com/" className='rounded ms-2 text-white' > <FaFacebook></FaFacebook></a>
                    <a href="https://www.instagram.com/" className='rounded ms-2 text-white' >  <FaInstagram></FaInstagram></a>
                </div>
            </div>
            <div className=' text-center py-5'>
                <a className="link link-hover  ms-2">©2022 All rights reserved</a>
                <a className="link link-hover  ms-2">Privacy policy</a>
                <a className="link link-hover  ms-2 ">Terms of service</a>
            </div>



        </div>
    );
};

export default Footer;