import React from 'react';

function Header() {
    return (
        <>
            {/* Top bar for contact information */}
            {/* <div className="flex flex-col md:flex-row justify-between bg-blue-950 px-6 md:px-20 p-3 text-white space-y-2 md:space-y-0">
                <div className="flex flex-col md:flex-row md:space-x-5">
                    <div className='hidden md:block lg:block'>
                        <a href="tel:+91-484-400-0182">+91-484-400-0182</a>
                    </div>

                    <div>
                        <a href="tel:+91-9388628630">+91 9388628630</a>
                    </div>

                    <div>
                        <a href="mailto:indiasales@trak24.com">indiasales@trak24.com</a>
                    </div>
                </div>

                <div>
                    <a href="#" className="hover:underline">Request Demo</a>
                </div>
            </div> */}

            {/* Main header section with logo and navigation */}
            <header className="bg-gray-100 shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href='/'>
                            <img 
                                src="/trak24b.png" 
                                alt="Logo" 
                                className="h-8 md:h-10 w-auto hover:cursor-pointer" 
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-6 lg:space-x-10">
                        <button className="text-gray-700 hover:text-orange-500 transition"><a href='/'>Home</a></button>
                        <button className="text-gray-700 hover:text-orange-500 transition" ><a href='/about'>About Us</a></button>
                        <button className="text-gray-700 hover:text-orange-500 transition"><a href='/business-solutions'>Business Solutions</a></button>
                        <button className="text-gray-700 hover:text-orange-500 transition"><a href='/products'>Products</a></button>
                        <button className="text-gray-700 hover:text-orange-500 transition"><a href='/ais140'>AIS 140</a></button>
                        <button className="text-gray-700 hover:text-orange-500 transition"><a href='/news-room'>News Room</a></button>
                        <button className="text-gray-700 hover:text-orange-500 transition"><a href='/contact-us'>Contact Us</a></button>

                        {/* Special Orange Button */}
                        <a href="https://clientlogin.trak24.com/" target="_blank">
    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:scale-110 transform transition">
        Login to Portal
    </button>
</a>
                    </nav>

                    {/* Mobile Navigation - Hamburger Menu */}
                    <div className="md:hidden">
                        <button className="text-gray-700 hover:text-orange-500 transition focus:outline-none">
                            {/* Simple Hamburger Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
