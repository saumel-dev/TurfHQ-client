import Link from 'next/link';
import React from 'react';

const Error = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col min-h-screen justify-center items-center'>
                <h1 className='text-7xl text-green-500 font-bold'>404 ERROR</h1>
                <h1 className='font-bold text-3xl'>Page Not Found</h1>
                <Link href={"/"} className='transition-all ease-in-out scale-100 mt-5'><button className='text-white bg-green-600 px-3 py-1 rounded-full cursor-pointer font-semibold transition-all duration-300 ease-out hover:bg-green-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] active:scale-95'>Back to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;