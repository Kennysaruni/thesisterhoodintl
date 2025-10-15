import React from 'react'
import img from '../assets/IMG_1621.jpeg'

function About() {
    return (
        <main className='flex-1 font-display'>
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
                            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Mission Statement</h2>
                            <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                The Sisterhood Intl is a non-profit organization dedicated to fostering a supportive
                                community for women. Our mission is to empower women through mentorship, networking,
                                and resource sharing, enabling them to achieve their personal and professional
                                goals. We strive to create a safe and inclusive space where women can connect,
                                collaborate, and uplift one another, regardless of their backgrounds or aspirations.
                            </p>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Vision Statement</h2>
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
                        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>Conduct</h2>
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
            </div>
        </main>
    )
}

export default About
