import React from 'react'
import img from '../assets/IMG_2240.jpeg'
import { IoLogoPaypal } from "react-icons/io5";
import { BiLogoVenmo } from "react-icons/bi";
import { TbBrandCashapp } from "react-icons/tb";
import { SiZelle } from "react-icons/si";

function Membership() {
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
        <main className='flex-1 font-display bg-background-light'>
            <div className='w-full mx-auto'>
                <div className='relative h-96 w-full'>
                    <img
                        src={img}
                        alt="Women empowering each other at an event"
                        className='absolute top-0 left-0 w-full h-full object-cover z-0'
                    />
                    <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10'></div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center z-20">
                        <h1 className="text-5xl font-bold text-white text-center">Membership</h1>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto space-y-8 mt-8">
                    <div
                        className="bg-white dark:bg-background-dark p-6 sm:p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Membership
                            Requirements</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none space-y-4">
                            <p>To become a member of The Sisterhood Intl, you must meet the following criteria:</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Age:</strong> Be at least 18 years of age.</li>
                                <li><strong>Commitment:</strong> Demonstrate a commitment to the mission and values
                                    of The Sisterhood Intl.</li>
                                <li><strong>Application:</strong> Complete and submit a membership application form.
                                </li>
                                <li><strong>References:</strong> Provide two references who can attest to your
                                    character and commitment.</li>
                                <li><strong>Interview:</strong> Participate in an interview with a member of the
                                    membership committee.</li>
                                <li><strong>Dues:</strong> Pay the required membership dues (see below).</li>
                                <li><strong>Orientation:</strong> Attend a new member orientation session.</li>
                            </ol>
                            <p>Upon meeting these requirements, your application will be reviewed by the membership
                                committee, and you will be notified of the decision.</p>
                        </div>
                    </div>
                    <div
                        className="bg-white dark:bg-background-dark p-6 sm:p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Payment
                            Methods</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <p>We accept payments through the following methods:</p>
                            <div className='flex flex-wrap gap-4 mb-8 mt-8'>
                                {paymentMethods.map((method) => (
                                    <a
                                        key={method.name}
                                        href={method.href}
                                        // target="_blank" opens the link in a new tab
                                        target="_blank"
                                        // rel="noopener noreferrer" is a security best practice for external links
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 p-4 rounded-lg bg-primary/10 dark:bg-primary/20 transition-colors ${method.hoverClass}`}
                                    >
                                        {method.icon}
                                        <span className='font-medium text-gray-700 dark:text-gray-300'>{method.name}</span>
                                    </a>
                                ))}
                            </div>
                            {/* <div className='flex flex-wrap gap-4 mb-8 mt-8'>
                                    <button className='flex items-center gap-3 p-5 rounded-lg bg-primary/10 dark:bg-primary/20 hover:bg-blue-500 dark:hover:bg-primary/30 transition-colors mx-auto'>
                                        <IoLogoPaypal className='text-blue-700'/> <span className='font-medium text-gray-700 dark:text-gray-300'> Paypal</span>
                                    </button>
                                    <button className='flex items-center gap-3 p-5 rounded-lg bg-primary/10 dark:bg-primary/20 hover:bg-green-500 dark:hover:bg-primary/30 transition-colors mx-auto'>
                                        <BiLogoVenmo className='text-green-700'/> <span className='font-medium text-gray-700 dark:text-gray-300'> Venmo</span>
                                    </button>
                                    <button className='flex items-center gap-3 p-5 rounded-lg bg-primary/10 dark:bg-primary/20 hover:bg-green-300 dark:hover:bg-primary/30 transition-colors mx-auto'>
                                        <TbBrandCashapp className='text-green-500'/> <span className='font-medium text-gray-700 dark:text-gray-300'> Cash App</span>
                                    </button>
                                    <button className='flex items-center gap-3 p-5 rounded-lg bg-primary/10 dark:bg-primary/20 hover:bg-purple-500 dark:hover:bg-primary/30 transition-colors mx-auto'>
                                        <SiZelle className='text-purple-600'/> <span className='font-medium text-gray-700 dark:text-gray-300'> Zelle</span>
                                    </button>
                                </div> */}
                        </div>
                    </div>
                    <div
                        className="bg-white dark:bg-background-dark p-6 sm:p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-800">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">Commitment
                        </h2>
                        <p className="prose prose-slate dark:prose-invert max-w-none">
                            We ask that you commit a minimum of 3-4 meetings per year and be prepared for 2-4 hours per month for the monthly meetings and the other scheduled events that The Sisterhood International may have.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Membership
