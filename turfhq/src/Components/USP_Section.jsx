import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { GrTrophy } from 'react-icons/gr';
import { HiMiniCalendar } from 'react-icons/hi2';
const USP_Section = () => {
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center'>Why Choose Turf<span className='text-green-500'>HQ</span>?</h1>
            <div className='flex flex-wrap mt-10 justify-center px-5 gap-5 md:justify-between'>
                <div className='card w-70 h-55 border-t-3 border-green-200 shadow-xl dark:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:bg-zinc-700'>
                    <div className='flex flex-col justify-center items-center mt-5 space-y-2'>
                        <div className='bg-green-100 p-2 rounded-full'>
                            <CgCalendarDates className=' text-4xl text-green-500'></CgCalendarDates>
                        </div>
                        <h1 className='text-xl font-bold'>Instant Booking</h1>
                        <p className='text-center text-[14px]'>Reserve your favourite sports facility in under 60 seconds, anytime, anywhere.</p>
                    </div>
                </div>
                <div className='card w-70 h-55 border-t-3 border-sky-200 shadow-xl dark:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:bg-zinc-700'>
                    <div className='flex flex-col justify-center items-center mt-5 space-y-2'>
                        <div className='bg-sky-100 p-2 rounded-full'>
                            <GrTrophy className=' text-4xl text-sky-500'></GrTrophy>
                        </div>
                        <h1 className='text-xl font-bold'>Premium Venues</h1>
                        <p className='text-center text-[14px]'>Hand-curated, top-quality sports facilities across the city.</p>
                    </div>
                </div>
                <div className='card w-70 h-55 border-t-3 border-violet-200 shadow-xl dark:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:hover:bg-zinc-700'>
                    <div className='flex flex-col justify-center items-center mt-5 space-y-2'>
                        <div className='bg-violet-100 p-2 rounded-full'>
                            <FaClockRotateLeft className=' text-4xl text-violet-500'></FaClockRotateLeft>
                        </div>
                        <h1 className='text-xl font-bold'>Flexible time slots</h1>
                        <p className='text-center text-[14px]'>Choose from morning to late-night slots that fit your schedule perfectly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default USP_Section;