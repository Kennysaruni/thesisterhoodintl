import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // 1. Import NavLink
import logo from '../assets/Logo.svg';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // 2. Update the paths to match your routes
    const navLinks = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "MEMBERSHIP", path: "/membership" },
        { name: "NEWS & EVENT", path: "/news" },
        { name: "CONTACT US", path: "/contact" },
    ];

    // Style for the active NavLink
    const activeLinkStyle = 'text-primary dark:text-primary';
    const inactiveLinkStyle = 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary';

    return (
        <>
            <header className='bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm font-display'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-20'>
                        {/* 3. Make the logo a link to the homepage */}
                        <NavLink to="/" className='flex items-center gap-3'>
                            <img src={logo} alt="Logo" width='70px' height='70px' />
                            <h1 className='text-xl font-bold text-gray-800 dark:text-white'>The Sisterhood Intl</h1>
                        </NavLink>
                        
                        <nav className='hidden md:flex items-center space-x-5'>
                            {navLinks.map((link) => (
                                // 4. Replace <a> with NavLink and use `to` instead of `href`
                                <NavLink 
                                    key={link.name} 
                                    to={link.path} 
                                    // This function applies styles based on whether the link is active
                                    className={({ isActive }) => `${isActive ? activeLinkStyle : inactiveLinkStyle} text-sm font-medium transition-colors`}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <NavLink to="/donate" className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
                                DONATE
                            </NavLink>
                        </nav>
                        
                        <button className='md:hidden p-2 focus:outline-none' onClick={() => setIsOpen(!isOpen)} aria-label='Toggle Menu'>
                            <span className='material-symbols-outlined text-3xl text-gray-800 dark:text-white'>menu</span>
                        </button>
                    </div>
                </div>
            </header>

            {isOpen && (
                <nav className='md:hidden fixed inset-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8'>
                    <button onClick={() => setIsOpen(false)} className="absolute top-7 right-4 focus:outline-none" aria-label="Close menu">
                        <span className="material-symbols-outlined text-4xl text-gray-800 dark:text-white">close</span>
                    </button>

                    {navLinks.map((link) => (
                        <NavLink key={link.name} to={link.path} className='text-2xl text-gray-700 dark:text-gray-300 hover:text-primary font-medium' onClick={() => setIsOpen(false)}>
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink className="px-8 py-3 text-2xl font-semibold text-white bg-primary rounded-full hover:bg-primary/90" to="/donate" onClick={() => setIsOpen(false)}>
                        DONATE
                    </NavLink>
                </nav>
            )}
        </>
    );
}

export default Navbar;