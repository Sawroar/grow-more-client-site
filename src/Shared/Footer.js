import React from 'react';
import { FaUser, FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='bg-dark mt-5 mb-5 p-2'>
            <div className=''>
                <div >
                    <h6 className='text-white text-center py-2 mb-2'>CopyRight @ Grow More Inc</h6></div>
                <div className='text-white text-center'>
                    <FaUser className='rounded ms-2' ></FaUser>
                    <FaFacebook className='rounded ms-2' ></FaFacebook>
                    <FaInstagram className='rounded ms-2'></FaInstagram>
                </div>
            </div>
            <div className=' text-center p-5'>
                <a className="link link-hover  ms-2">©2022 All rights reserved</a>
                <a className="link link-hover  ms-2">Privacy policy</a>
                <a className="link link-hover  ms-2 ">Terms of service</a>
            </div>



        </div>
    );
};

export default Footer;