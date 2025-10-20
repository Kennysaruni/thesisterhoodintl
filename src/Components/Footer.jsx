import React from 'react';
import { Link } from 'react-router-dom';
// 1. Imported new icons
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "MEMBERSHIP", path: "/membership" },
        { name: "NEWS & EVENT", path: "/news" },
        { name: "CONTACT US", path: "/contact" },
        { name: "DONATE", path: "/donate" },
    ];
    
    const socialLinks = [
        { name: 'Facebook', href: '#', icon: FaFacebook },
        { name: 'Instagram', href: '#', icon: FaInstagram },
        { name: 'Twitter', href: '#', icon: FaTwitter },
        { name: 'Email', href: 'mailto:thesisterhoodintl@gmail.com', icon: FaEnvelope },
        { name: 'Phone', href: 'tel:+16468491747', icon: FaPhone },
    ];

    return (
        <footer className='bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 mt-5'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col items-center md:items-start text-center md:text-left space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>The Sisterhood Intl</h3>
                        <div className='space-y-3 text-gray-600 dark:text-gray-400'>
                            <div className='flex items-start gap-3'>
                                <FaMapMarkerAlt className='text-primary mt-1 h-4 w-4' />
                                <address className='not-italic'>
                                    PO Box 922<br />
                                    Norcross, GA, 30091
                                </address>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaPhone className='text-primary h-4 w-4' />
                                <a href="tel:+16468491747" className='hover:text-primary'>TEL: +1(646) 849-1747</a>
                            </div>
                            <div className='flex items-center gap-3'>
                                <FaEnvelope className='text-primary h-4 w-4' />
                                <a href="mailto:thesisterhoodintl@gmail.com" className='hover:text-primary'>thesisterhoodintl@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Quick Links</h3>
                        <ul className='space-y-2'>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        to={link.path} 
                                        className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Connect With Us</h3>
                        <div className='flex justify-between w-xs'>
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name} 
                                    href={social.href} 
                                    className='text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                                    aria-label={social.name}
                                    // Only open social media in a new tab, not mail or phone
                                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className='h-6 w-6' />
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} The Sisterhood Intl. All rights reserved.</p>
                    <p className='mt-3'>We are our sister's keeper, so we are never alone</p>
                    <p>Made by <a href='https://macklemoresolutions.com/' target='_blank' className='hover:text-amber-300 mt-3'>Latimore</a></p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;