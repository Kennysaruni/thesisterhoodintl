import React from 'react'
import img from '../assets/IMG_1621.jpeg'

function About() {
    return (
        <main className='flex-1 font-display bg-background-light'>
            <div className='relative h-96 w-full'>
                <img
                    src={img}
                    alt="Women empowering each other at an event"
                    className='absolute top-0 left-0 w-full h-full object-cover z-0'
                />
                <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-10'></div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center z-20">
                    <h1 className="text-5xl font-bold text-white text-center">About Us</h1>
                </div>
            </div>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
                    <div className='space-y-8'>
                        <div>
                            <h2 className='text-3xl font-bold text-blue-700 dark:text-white mb-4'>Mission Statement</h2>
                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                The Sisterhood mission is to create a sense of belonging and connectivity between members of our alum. The Sisterhood seeks to embrace and operate with integrity to create a positive atmosphere to foster love, care and unity among all. The Sisterhood will engage in interactions of different discussions to enlighten, respect viewpoints and build confident minds
                            </p>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold text-blue-700 dark:text-white mb-4'>Vision Statement</h2>
                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                The Sisterhood vision is to one day become an institution that will lend support to
                                any sister in need. It is our FUTURE goal to offer scholarships to students that are
                                attending HCHS and aide in the building of the HCHS community. The Sisterhood aims
                                to have fundraising events and seek out assistance from corporate America in an
                                effort to aide us in reaching these goals. The Sisterhood will aim to have a
                                platform that alums can reach out to each other and network within as well as having
                                a convention bi-annual where we will meet in a set place and time.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <h2 className='text-3xl font-bold text-amber-300 dark:text-white mb-4'>Conduct</h2>
                        <ul className='space-y-4 text-base text-gray-600 dark:text-gray-400'>
                            <li className='flex items-start gap-3'>
                                <span class="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Respect &amp; Empathy:</strong> Treat all members with kindness,
                                    understanding, and respect, valuing their unique perspectives and
                                    experiences.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Dependability:</strong> Be reliable and follow through on commitments,
                                    contributing actively to the community's goals.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Confidentiality:</strong> Respect the privacy of members and maintain
                                    confidentiality of shared information.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Constructive Communication:</strong> Engage in open, honest, and
                                    respectful dialogue, addressing disagreements with maturity and empathy.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Support &amp; Encouragement:</strong> Offer support and encouragement
                                    to fellow members, fostering a positive and uplifting environment.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Humility &amp; Compassion:</strong> Approach interactions with
                                    humility and compassion, recognizing the strengths and vulnerabilities of
                                    others.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Service &amp; Compassion:</strong> Demonstrate a commitment to serving
                                    others and showing compassion in all interactions.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                <span><strong>Integrity &amp; Ethics:</strong> Act with integrity and uphold ethical
                                    standards in all activities and communications within the community.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-16 lg:mt-24'>
                    <h2 className='text-3xl font-bold text-center text-amber-300 dark:text-white mb-5'>Core Values</h2>
                    <p className='text-base leading-relaxed text-gray-600 dark:text-gray-400 text-center mb-10'>The Sisterhood core values can be summed up with these simple words </p>
                    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4'>
                        <div className='flex flex-col items-center text-center p-6 bg-white dark:bg-background-black/50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                            <span className="material-symbols-outlined text-primary text-4xl mb-3">handshake</span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">Respect</h3>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-primary text-4xl mb-3">shield</span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">Integrity</h3>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-primary text-4xl mb-3">favorite</span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">Courage</h3>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-primary text-4xl mb-3">diversity_3</span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">Diversity</h3>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-primary text-4xl mb-3">balance</span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">Equality</h3>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-primary text-4xl mb-3">loyalty</span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">Loyalty</h3>
                        </div>
                        <div
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark/50 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-primary text-4xl mb-3">visibility</span>
                            <h3 className="text-base font-bold text-gray-900 dark:text-white">Transparency</h3>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
