import React from 'react';
import { CgCalendarDates } from 'react-icons/cg';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { GrTrophy } from 'react-icons/gr';
import { HiMiniCalendar } from 'react-icons/hi2';

const Stats_section = () => {
    return (
        <div className='max-w-6xl mx-auto my-20'>
            <h1 className='text-4xl font-bold text-center'>Our Growing <span className='text-green-500'>Community</span></h1>
            <div className='flex flex-wrap mt-11 justify-center px-5 gap-5 md:justify-between'>
                <div className='card w-60 h-45 flex justify-center items-center bg-slate-100'>
                    <h1 className='text-4xl font-bold'>11+</h1>
                    <p className='text-center'>Sports Facilities</p>
                </div>
                <div className='card w-60 h-45 flex justify-center items-center bg-slate-100'>
                    <h1 className='text-4xl font-bold'>9+</h1>
                    <p className='text-center'>Sport Categories</p>
                </div>
                <div className='card w-60 h-45 flex justify-center items-center bg-slate-100'>
                    <h1 className='text-4xl font-bold'>500+</h1>
                    <p className='text-center'>Bookings Made</p>
                </div>
                <div className='card w-60 h-45 flex justify-center items-center bg-slate-100'>
                    <h1 className='text-4xl font-bold'>3</h1>
                    <p className='text-center'>Cities Covered</p>
                </div>
            </div>
        </div>
    );
};

export default Stats_section;