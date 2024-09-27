import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col justify-center ">
            <div className='p-10'>
                <h1 className="text-4xl font-bold mb-8">About Us</h1>
            </div>


            <div className='items-center flex flex-col'>
                <div className="text-center mb-8 ">
                    <p className="text-lg leading-relaxed ">
                        Trak24 GPS , an AIS 140 certified vehicle trackers designed to meet the highest standards of fleet management and vehicle safety. Whether you're managing a large fleet or ensuring personal vehicle safety, Trak24 offers real-time tracking, route monitoring, and more! </p>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <img
                        src='/GPS-Vehicle-Tracker-Image-01.jpg'
                        alt="GPS Vehicle Tracker"
                        className="w-full sm:max-w-xs md:max-w-4xl lg:max-w-5xl rounded-lg shadow-md"
                    />
                    <img
                        src='/fleet-management-system-image-01.png'
                        alt="Fleet Management System"
                        className="w-full sm:max-w-xs md:max-w-2xl lg:max-w-3xl rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
