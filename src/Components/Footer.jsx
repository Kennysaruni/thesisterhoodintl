import React from 'react'

function Footer() {
    const navLinks = [
        { name: "HOME", path: "#" },
        { name: "ABOUT", path: "#" },
        { name: "MEMBERSHIP", path: "#" },
        { name: "NEWS & EVENT", path: "#" },
        { name: "CONTACT US", path: "#" },
    ];

    return (
        <footer className='bg-background-light dark:bg-background-black border-t border-gray-200 dark:border-gray-800'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>The Sisterhood Intl</h3>
                        <address className='not-italic text-gray-600 dark:text-gray-400 space-y-1'>
                            <p>PO Box 922</p>
                            <p>Norcross, GA, 30091</p>
                        </address>
                        <p className='text-gray-600 dark:text-gray-400'>TEL: (646) 849-1747</p>
                        <p className='text-gray-600 dark:text-gray-400'>thesisterhoodintl@gmail.com</p>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Quick Links</h3>
                        <ul className='space-y-2'>
                            {navLinks.map((link) => (
                                <li><a key={link.name} className='text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                                    href={link.path}>
                                    {link.name}
                                </a></li>
                            ))}
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>Connect With Us</h3>
                        <div className='space-x-4'>

                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>© 2025 The Sisterhood Intl. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
