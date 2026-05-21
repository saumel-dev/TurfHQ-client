import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black w-full mt-30'>
            <div className='max-w-7xl mx-auto'>
                <div className=' text-center text-white pt-20 space-y-4'>
                    <h1 className='text-5xl font-bold'>Turf<span className='text-green-500'>HQ</span></h1>
                    <p>
                        Every sport. Every slot. One platform.
                    </p>
                    <div className='flex justify-center flex-col'>
                        <p className='text-[17px]'>Social Links</p>
                        <div className='flex justify-center gap-4 mt-2'>
                            <a href='#' className='text-[#b3bab6] hover:text-green-500 transition-colors text-2xl'>
                                <FaFacebook />
                            </a>
                            <a href='#' className='text-[#b3bab6] hover:text-green-500 transition-colors text-2xl'>
                                <FaInstagram />
                            </a>
                            <a href='#' className='text-[#b3bab6] hover:text-green-500 transition-colors text-2xl'>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                    <div className='border-t border-green-500'></div>
                    <div className='flex flex-col md:flex-row justify-between text-[#b3bab6] pb-5'>
                        <p>© 2026 LibRova. All rights reserved.</p>
                        <div className='flex flex-row justify-center gap-3 mb-5'>
                            <p className='hover:t   ext-green-500 cursor-pointer transition-colors'>Privacy Policy</p>
                            <p className='hover:text-green-500 cursor-pointer transition-colors'>Terms of Service</p>
                            <p className='hover:text-green-500 cursor-pointer transition-colors'>Cookies</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;