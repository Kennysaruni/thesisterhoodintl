import React from 'react'
import logo from '../assets/Logo.svg'

function Navbar() {

    const navLinks = [
        { name: "HOME", path: "#" },
        { name: "ABOUT", path: "#" },
        { name: "MEMBERSHIP", path: "#" },
        { name: "NEWS & EVENT", path: "#" },
        { name: "CONTACT US", path: "#" },
    ];

    return (
        <header className='bg-background-light dark:bg-background-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm font-display'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-20'>
                    <div className='flex items-center gap-3'>
                        <img src={logo} alt="Logo" width='70px' height='70px' />
                        <h1 className='text-xl font-bold text-gray-800 dark:text-white'>The Sisterhood Intl</h1>
                    </div>
                    <nav className='hidden md:flex items-center space-x-5'>
                        {navLinks.map((links) => (
                            <a key={links.name}
                                href={links.path}
                                className='text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors'>{links.name}
                            </a>
                        ))}
                        <a className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
                            href="#">DONATE</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar
