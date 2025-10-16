import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link from React Router
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // 2. Import social icons

function Footer() {
    // 3. Updated paths and added Donate link
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
    ];

    return (
        // FIX: Corrected dark mode background color
        <footer className='bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    
                    {/* Contact Info */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>The Sisterhood Intl</h3>
                        <address className='not-italic text-gray-600 dark:text-gray-400 space-y-1'>
                            <p>PO Box 922</p>
                            <p>Norcross, GA, 30091</p>
                        </address>
                        {/* 4. Made contact info clickable */}
                        <p>
                            <a href="tel:+16468491747" className='text-gray-600 dark:text-gray-400 hover:text-primary'>TEL: (646) 849-1747</a>
                        </p>
                        <p>
                            <a href="mailto:thesisterhoodintl@gmail.com" className='text-gray-600 dark:text-gray-400 hover:text-primary'>thesisterhoodintl@gmail.com</a>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Quick Links</h3>
                        <ul className='space-y-2'>
                            {navLinks.map((link) => (
                                // FIX: Key should be on the outer element (li)
                                <li key={link.name}>
                                    {/* 5. Using <Link> from React Router */}
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

                    {/* Social Links */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Connect With Us</h3>
                        <div className='flex space-x-4'>
                            {/* 6. Added social media icons */}
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name} 
                                    href={social.href} 
                                    className='text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                                    aria-label={social.name}
                                    target="_blank"
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
                </div>
            </div>
        </footer>
    );
}

export default Footer;
