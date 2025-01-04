import React from 'react';
import logo from '../assets/logo.png';

export const Footer = () => {
    const footerNavs = [
        {
            href: 'home',
            name: 'Home'
        },
        {
            href: 'features',
            name: 'Features'
        },
        {
            href: 'team',
            name: 'Team'
        },
        {
            href: 'contact',
            name: 'Contact'
        },
    ];

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer id="contact" className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <img src={logo} width={300} className="mx-auto rounded-full" alt="Logo" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
                {footerNavs.map((item, idx) => (
                    <li key={idx} className="hover:text-gray-800">
                        <button
                            className="text-gray-500 hover:text-gray-800"
                            onClick={() => handleScroll(item.href)}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2025 Astella All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {/* Social media icons */}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
