import React from 'react'
import img1 from '../assets/IMG_2233.jpeg'
import img2 from '../assets/IMG_1626.jpeg'
import img3 from '../assets/IMG_2220.jpeg'
import img4 from '../assets/IMG_2240.jpeg'
import img5 from '../assets/IMG_2017.jpeg'

function News() {
    return (
        <main className='flex-grow font-display bg-background-light'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8  py-12 md:py-16'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8'>
                        <span className='text-blue-800'>News</span> &amp; <span className='text-amber-300'>Events</span>
                    </h2>
                    <div className='space-y-12'>
                        <section>
                            <h3 className='text-2xl font-bold mb-6 text-slate-900 dark:text-white border-l-4 border-primary  pl-4'>
                                Upcoming Events
                            </h3>
                            <div className='bg-white dark:bg-background-dark/50 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row items-center'>
                                <div className='md:w-1/2 p-6 md:p-8'>
                                    <h4 className='text-xl font-bold text-slate-900 dark:text-white'>Class of '93 30-Year
                                        Reunion
                                    </h4>
                                    <p className='text-primary font-semibold mt-1'>Date TBD</p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h3 className='text-2xl font-bold mb-6 text-slate-900 dark:text-white border-l-4 border-primary pl-4'>
                                Past Events
                            </h3>
                            <div className='space-y-8'>
                                <div>
                                    <h4 className='text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200'>2019</h4>
                                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                                        <div className='aspect-square rounded-lg shadow-md'>
                                            <img
                                                src={img1}
                                                alt="Past event from 2019"
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </div>
                                        <div className='aspect-square rounded-lg shadow-md'>
                                            <img
                                                src={img2}
                                                alt="Past event from 2019"
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </div>
                                        <div className='aspect-square rounded-lg shadow-md'>
                                            <img
                                                src={img3}
                                                alt="Past event from 2019"
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </div>
                                        <div className='aspect-square rounded-lg shadow-md'>
                                            <img
                                                src={img4}
                                                alt="Past event from 2019"
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200'>2018</h4>
                                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                                        <div className='aspect-square rounded-lg shadow-md'>
                                            <img
                                                src={img5}
                                                alt="Past event from 2019"
                                                className='w-full h-full object-cover rounded-lg'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg">
                                    <p className="text-slate-700 dark:text-slate-300 text-center">Please note that all meetings have
                                        been held online since 2020.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default News
