import React from 'react';

function ContactUs() {
    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.415 2.175 8.796 2.163 12 2.163zm0 1.441c-3.111 0-3.469.012-4.68.068-2.652.121-3.993 1.462-4.114 4.114-.056 1.21-.067 1.558-.067 4.68s.011 3.47.067 4.68c.121 2.652 1.462 3.993 4.114 4.114 1.21.056 1.568.067 4.68.067s3.47-.011 4.68-.067c2.652-.121 3.993-1.462 4.114-4.114.056-1.21.067-1.558.067-4.68s-.011-3.47-.067-4.68c-.121-2.652-1.462-3.993-4.114-4.114-1.21-.056-1.568-.067-4.68-.067zM12 6.875a5.125 5.125 0 100 10.25 5.125 5.125 0 000-10.25zm0 8.441a3.316 3.316 0 110-6.632 3.316 3.316 0 010 6.632zm6.406-9.394a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: '+1(646) 849-1747',
            href: 'tel:+1(646)8491747',
            icon: <span className="material-symbols-outlined text-primary">call</span>,
        },
        {
            name: 'thesisterhoodintl@gmail.com',
            href: 'mailto:thesisterhoodintl@gmail.com',
            icon: <span className="material-symbols-outlined text-primary">mail</span>,
        },
    ];

    return (
        <main className='flex-grow container mx-auto px-6 py-12'>
            <div className='max-w-4xl mx-auto'>
                <div className='bg-background-light dark:bg-background-dark p-8 rounded-lg shadow-lg'>
                    <h3 className='text-2xl font-bold text-blue-900 dark:text-gray-200 mb-4 border-l-4 border-primary pl-4'>
                        Connect With Us
                    </h3>
                    <div className='flex flex-wrap gap-4 mb-8'>
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon}
                                <span className='font-medium text-gray-700 dark:text-gray-300'>{link.name}</span>
                            </a>
                        ))}
                    </div>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                        The Sisterhood will aim to have a platform that Alums can reach out to each other and network.
                        If you would like to join us please sign up using the form below...until then we have our meetings on Zoom
                        <strong className="text-blue-900"> Meeting ID: 309 451 9651</strong>.
                    </p>
                    <form className="space-y-6 mt-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                for="full-name">Full Name</label>
                            <input
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                id="full-name" name="full-name" required="" type="text" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" for="email">Email
                                Address</label>
                            <input
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                id="email" name="email" required="" type="email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                for="message">Message</label>
                            <textarea
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                id="message" name="message" required="" rows="4"></textarea>
                        </div>
                        <div>
                            <button
                                className="w-full sm:w-auto bg-primary text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/50 transition-all duration-300 transform hover:scale-105"
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default ContactUs;