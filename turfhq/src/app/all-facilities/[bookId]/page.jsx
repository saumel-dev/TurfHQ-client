import InputBooking from '@/Components/InputBooking';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { GoArrowLeft } from 'react-icons/go';
const BookFacilitiesPage = async ({ params }) => {
    const { bookId } = await params;
    const res = await fetch(`http://localhost:5000/facilities/${bookId}`);
    const facility = await res.json();
    const { _id, name, facility_type, image, location, description, price_per_hour, capacity, booking_count, owner_email, available_slots } = facility;
    console.log(image);
    return (
        <>
            <div className='w-full max-w-7xl mx-auto px-5'>
                <div className='mt-10 flex gap-1 items-center'>
                    <GoArrowLeft className='text-gray-400'></GoArrowLeft>
                    <Link href={`/all-facilities`} className='text-gray-400'>Back to Facilities</Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5'>
                    <div className='w-full flex flex-col justify-center items-center gap-2'>
                        <Image
                            alt={facility.name}
                            src={facility.image}
                            width={500}
                            height={400}
                            className='rounded-2xl'
                        >
                        </Image>
                        <h1 className='text-xl font-bold'>{name}</h1>
                        <div className='w-full flex flex-wrap justify-center items-center gap-3'>
                            <div className='card rounded-xl w-50 gap-1'>
                                <div>
                                    <div className='flex items-center gap-1 text-gray-500'>
                                        <CiLocationOn className='text-[11px]'></CiLocationOn>
                                        <p className='text-[12px]'>Location</p>
                                    </div>
                                </div>
                                <p className='text-sm'>{location}</p>
                            </div>
                            <div className='card rounded-xl w-50 gap-1'>
                                <div>
                                    <div className='flex items-center gap-1 text-gray-500'>
                                        <CiLocationOn className='text-[11px]'></CiLocationOn>
                                        <p className='text-[12px]'>Capacity</p>
                                    </div>
                                </div>
                                <p className='text-sm'>Up to {capacity} players</p>
                            </div>
                            <div className='card rounded-xl w-50 gap-1'>
                                <div>
                                    <div className='flex items-center gap-1 text-gray-500'>
                                        <CiLocationOn className='text-[11px]'></CiLocationOn>
                                        <p className='text-[12px]'>Price</p>
                                    </div>
                                </div>
                                <p className='text-sm'>{price_per_hour} bdt/hour</p>
                            </div>
                            <div className='card rounded-xl w-50 gap-1'>
                                <div>
                                    <div className='flex items-center gap-1 text-gray-500'>
                                        <CiLocationOn className='text-[11px]'></CiLocationOn>
                                        <p className='text-[12px]'>Slots</p>
                                    </div>
                                </div>
                                <p className='text-sm'>{available_slots.length} available</p>
                            </div>
                        </div>
                    </div>
                    <InputBooking facility={facility}></InputBooking>
                </div>
            </div>
        </>
    );
};

export default BookFacilitiesPage;