import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
const PopularFacilities = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
           <h1 className='text-4xl font-bold text-center'>Popular <span className='text-green-500'>Facilities</span></h1>
            <Marquee>
                <div className='mt-5 p-2 flex justify-between gap-6'>
                    <div className='card w-40 h-35 bg-white flex flex-col justify-center items-center'>
                        <Image
                            src={"/assets/basketball.png"}
                            alt='basketball'
                            width={50}
                            height={50}
                        ></Image>
                        <p className='mb-4 text-center text-black'>Basketball</p>
                    </div>
                    <div className='card w-40 h-35 bg-white flex flex-col justify-center items-center'>
                        <Image
                            src={"/assets/batminton.png"}
                            alt='batminton'
                            width={50}
                            height={50}
                            style={{ width: 'auto' }}
                        ></Image>
                        <p className='mb-4 text-center text-black'>Batminton</p>
                    </div>
                    <div className='card w-40 h-35 bg-white flex flex-col justify-center items-center'>
                        <Image
                            src={"/assets/calistheni.png"}
                            alt='calisthenics'
                            width={50}
                            height={50}
                        ></Image>
                        <p className='mb-4 text-center text-black'>Calisthenics</p>
                    </div>
                    <div className='card w-40 h-35 bg-white flex flex-col justify-center items-center'>
                        <Image
                            src={"/assets/cricket.png"}
                            alt='cricket'
                            width={50}
                            height={50}
                        ></Image>
                        <p className='mb-4 text-center text-black'>Cricket</p>
                    </div>
                    <div className='card w-40 h-35 bg-white flex flex-col justify-center items-center'>
                        <Image
                            src={"/assets/Football.png"}
                            alt='cricket'
                            width={50}
                            height={50}
                        ></Image>
                        <p className='mb-4 text-center text-black'>Football</p>
                    </div>
                    <div className='card w-40 h-35 bg-white flex flex-col justify-center items-center'>
                        <Image
                            src={"/assets/swimming.png"}
                            alt='swimming'
                            width={50}
                            height={50}
                        ></Image>
                        <p className='mb-4 text-center text-black'>Swimming</p>
                    </div>
                    <div className='card w-40 h-35 bg-white flex flex-col justify-center items-center'>
                        <Image
                            src={"/assets/vollyball.png"}
                            alt='vollyball'
                            width={50}
                            height={50}
                        ></Image>
                        <p className='mb-4 text-center text-black'>Vollyball</p>
                    </div>
                </div>
            </Marquee>
        </div >
    );
};

export default PopularFacilities;