import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <main className="w-full">
      <div
        className="w-full h-120 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      >
        <div className='flex flex-col justify-center items-center space-y-4'>
          <h1 className="text-white text-5xl font-bold drop-shadow-md px-2">
            <span className='text-green-500'>Your Game S</span>tarts Here
          </h1>
          <Link href={"/all-facilities"} className='transition-all ease-in-out scale-100 mt-5'><button className='text-white bg-green-600 px-3 py-1 rounded-full cursor-pointer font-semibold transition-all duration-300 ease-out hover:bg-green-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] active:scale-95'>Explore Facilities</button></Link>
        </div>
      </div>
    </main>
  );
};

export default Home;