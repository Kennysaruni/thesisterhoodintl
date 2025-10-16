import React from 'react';
import heroBg from '../assets/IMG_2220(1).jpeg';

function Hero() {
    return (
        <main className='flex-grow font-display bg-background-light'>
            <div className='relative min-h-[50vh] md:min-h-[65vh] flex items-center justify-center text-center px-4'>
                <img
                    src={heroBg}
                    alt="Women empowering each other at an event"
                    className='absolute top-0 left-0 w-full h-full object-cover z-0'
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
                <div className='relative max-w-3xl mx-auto z-20'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight'>
                        Empowering Women
                    </h1>
                    <p className='mt-4 text-lg sm:text-xl text-white/90'>
                        Join The Sisterhood Intl in our mission to support and uplift women. Together, we can make a difference.
                    </p>
                </div>
            </div>
            <div className='py-16 sm:py-24'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='max-w-4xl mx-auto space-y-12'>
                        <div className='text-center'>
                            <h2 className='text-3xl font-bold tracking-tight text-amber-300 dark:text-white sm:text-4xl'>Who We Are</h2>
                             <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                               Welcome to the official page of <span className='text-blue-700'>THE SISTERHOOD INTERNATIONAL</span> a chapter of H.C.H.S past
                                alums. This body was formed in July 2018 and became official in November 2020. The
                                intent of this group is to be able to give back to an Alum who may need a hand
                                financially, mentally or physically. We also work to give back to Holy Childhood High
                                School through various fundraising events that we take on each year.
                            </p>
                        </div>
                        <div className='text-center'>
                             <h2 className="text-3xl font-bold tracking-tight text-blue-700 dark:text-white sm:text-4xl">What
                                We Do</h2>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                We organize workshops, provide resources, and facilitate networking opportunities to
                                support women's personal and professional growth. Our initiatives focus on leadership
                                development, financial literacy, and community building.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;