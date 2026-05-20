import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { GoPerson } from 'react-icons/go';
import { MdTimelapse } from 'react-icons/md';

const FeaturedCard = async () => {
    const res = await fetch('http://localhost:5000/facilities');
    const facilities = await res.json();
    return (
        <>
            <div className='mt-10'>
                <h1 className='text-4xl font-bold text-center'>Featured <span className='text-green-500'>Facilities</span></h1>
            </div>
            <div className='max-w-7xl mt-5 mx-auto flex flex-wrap gap-5 justify-center items-center'>
                {
                    facilities.slice(4, 10).map(facility => <div key={facility._id} className='card w-96 transition-all duration-300 ease-out hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] active:scale-95'>
                        <Image
                            src={facility.image}
                            alt={facility.name}
                            height={300}
                            width={300}
                            className='w-full h-48 object-cover rounded-2xl'
                        >
                        </Image>
                        <p className='text-black font-semibold'>{facility.name}</p>
                        <div className='text-sm space-y-2'>
                            <div className='flex items-center gap-2'>
                                <CiLocationOn className='mb-0.5 text-green-500'></CiLocationOn>
                                <p>{facility.location}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <GoPerson className='mb-0.5 text-green-500'></GoPerson>
                                <p>Up to {facility.capacity} players</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdTimelapse className='mb-0.5 text-green-500'></MdTimelapse>
                                <p>{facility.available_slots.length} slots available</p>
                            </div>
                            <div className='flex justify-center'>
                                <Link href={`/all-facilities/${facility._id}`}><button className='bg-green-500 px-3 py-2 rounded-full text-white font-bold cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-95'>Book Now</button> </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default FeaturedCard;