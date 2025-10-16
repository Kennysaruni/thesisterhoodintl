import React, { useState, useEffect } from 'react';
import logo from '../assets/Logo.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // This effect prevents the body from scrolling when the menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

     const navLinks = [
        { name: "HOME", path: "#" },
        { name: "ABOUT", path: "#" },
        { name: "MEMBERSHIP", path: "#" },
        { name: "NEWS & EVENT", path: "#" },
        { name: "CONTACT US", path: "#" },
    ];

    return (
        <>
            <header className='bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm font-display'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-20'>
                        <div className='flex items-center gap-3'>
                            <img src={logo} alt="Logo" width='70px' height='70px' />
                            <h1 className='text-xl font-bold text-gray-800 dark:text-white'>The Sisterhood Intl</h1>
                        </div>
                        
                        <nav className='hidden md:flex items-center space-x-5'>
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.path} className='text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors'>{link.name}</a>
                            ))}
                            <a className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors" href="#">DONATE</a>
                        </nav>
                        
                        <button
                            className='md:hidden p-2 focus:outline-none'
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label='Toggle Menu'>
                            <span className='material-symbols-outlined text-3xl text-gray-800 dark:text-white'>menu</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. The mobile menu is now a SIBLING to the header, not a child */}
            {isOpen && (
                <nav className='md:hidden fixed inset-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8'>
                    <button 
                        onClick={() => setIsOpen(false)} 
                        className="absolute top-7 right-4 focus:outline-none"
                        aria-label="Close menu"
                    >
                        <span className="material-symbols-outlined text-4xl text-gray-800 dark:text-white">close</span>
                    </button>

                    {/* ... Mobile links ... */}
                    {navLinks.map((link) => (
                         <a key={link.name} href={link.path} className='text-2xl text-gray-700 dark:text-gray-300 hover:text-primary font-medium' onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                     <a className="px-8 py-3 text-2xl font-semibold text-white bg-primary rounded-full hover:bg-primary/90" href="#" onClick={() => setIsOpen(false)}>
                        DONATE
                    </a>
                </nav>
            )}
        </>
    );
}

export default Navbar;