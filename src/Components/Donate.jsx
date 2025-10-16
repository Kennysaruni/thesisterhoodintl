import React from 'react'
import shirt from '../assets/Shirt.jpeg'
import shirt1 from '../assets/Shirt1.jpeg'
import { IoLogoPaypal } from "react-icons/io5";
import { BiLogoVenmo } from "react-icons/bi";
import { TbBrandCashapp } from "react-icons/tb";
import { SiZelle } from "react-icons/si";

function Donate() {
    const paymentMethods = [
        {
            name: 'Paypal',
            href: 'https://www.paypal.com/donate/?hosted_button_id=7UFHMSKE56ZSE',
            icon: <IoLogoPaypal className='text-blue-700' size={24} />,
            hoverClass: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
        },
        {
            name: 'Venmo',
            href: 'https://www.venmo.com/u/TheSisterhoodIntl',
            icon: <BiLogoVenmo className='text-cyan-500' size={24} />,
            hoverClass: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30'
        },
        {
            name: 'Cash App',
            href: 'https://cash.app/$thesisterhoodintl', // Standard link format for Cash App
            icon: <TbBrandCashapp className='text-green-500' size={24} />,
            hoverClass: 'hover:bg-green-100 dark:hover:bg-green-900/30'
        },
        {
            name: 'Zelle',
            href: 'mailto:thesisterhoodintl@gmail.com', // mailto: opens the user's email client
            icon: <SiZelle className='text-purple-600' size={24} />,
            hoverClass: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
        }
    ];

    return (
        <main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
            <div className='max-w-4xl mx-auto'>
                <section className='mb-12'>
                    <h2 className='text-3xl font-bold text-blue-700 dark:text-white mb-6 text-center'>Support Our Mission</h2>
                    <div className='rounded-lg overflow-hidden aspect-video shadow-lg mb-12'>
                        <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" class="w-full h-full" frameborder="0"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"></iframe>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-stone-900 dark:text-white mb-6 text-center">Donor Incentives</h2>

                    <div className="max-w-3xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-md border border-stone-200 dark:border-stone-700 flex flex-col">
                                <div className="relative bg-stone-200 dark:bg-stone-700 aspect-[3/4] flex items-center justify-center">
                                    <img src={shirt} alt="Shirt" className='w-full h-full object-contain ' />
                                </div>
                                <div className="p-6 text-center flex-grow flex flex-col">
                                    <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200">The Sisterhood Intl T-Shirt</h3>
                                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 flex-grow">Make a one-time donation of $40 to get a T-shirt.</p>
                                </div>
                            </div>
                            <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-md border border-stone-200 dark:border-stone-700 flex flex-col">
                                <div className="relative bg-stone-200 dark:bg-stone-700 aspect-[3/4] flex items-center justify-center">
                                    <img src={shirt1} alt="Travel Mug" className='w-full h-full object-contain ' />
                                </div>
                                <div className="p-6 text-center flex-grow flex flex-col">
                                    <h3 className="text-lg font-semibold text-stone-800 dark:text-stone-200">The Sisterhood Intl Travel Mug</h3>
                                    <p className="text-sm text-stone-600 dark:text-stone-400 mt-2 flex-grow">Make a one-time donation of $20 to get a Travel Mug.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="bg-white dark:bg-background-dark p-6 sm:p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-white mb-4">Payment
                        Information</h2>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <div className='flex flex-wrap gap-4 mb-8 mt-8'>
                            {paymentMethods.map((method) => (
                                <a
                                    key={method.name}
                                    href={method.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 p-4 rounded-lg bg-primary/10 dark:bg-primary/20 transition-colors ${method.hoverClass}`}
                                >
                                    {method.icon}
                                    <span className='font-medium text-gray-700 dark:text-gray-300'>{method.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Donate
