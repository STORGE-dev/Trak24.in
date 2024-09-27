import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';


function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative">

                <Image    width={600}
                         height={600}
                         src='/slider-image-01-min.jpg' alt="AIS140 GPS Tracking Image" className="w-full h-[50vh] lg:h-[80vh] object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center space-y-5 text-white font-bold text-center px-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">IMPROVING SAFETY, EFFICIENCY & PERFORMANCE!</h1>
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mt-2">AIS 140 Certified GPS</h2>
                    </div>
                </div>
            </div>

            {/* Highlight Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-950 px-6 lg:px-32 py-3 text-white">
                <div className="text-center lg:text-left mb-4 lg:mb-0">
                    <h1 className="text-xl lg:text-2xl font-semibold">World-class reliable GPS Software & Hardware provider.</h1>
                </div>

                <div>
                    <a href='contact-us'>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:scale-110 transform transition duration-300">
                        Start Tracking
                    </button></a>
                </div>
            </div>

            {/* Description Section */}
            <div className="flex justify-center items-center  p-3 lg:p-10">
                <p className="text-center  text-base lg:text-lg">
                    Trak24 brings you world-class vehicle tracking software and hardware solutions that can be effectively used by delivery and distribution companies, security services, rental car companies, taxi services, public transport buses, school and company buses, private cars, etc. for fulfilling different security and regulatory requirements. Trak24 is a cutting-edge fleet management program that makes it easy to effectively and efficiently monitor your vehicles using PCs and Mobile devices.
                </p>
            </div>

            {/* Services Section with Heading */}
            <div className="py-6">
                <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                    Our Services
                </h1>

                {/* Cards Section */}
                <div className="p-3 lg:p-10 flex flex-wrap justify-center gap-8">
                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={200}
                        height={200} alt="Fleet Management" src="/Merchant-Fleet-Management1.jpg" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Fleet Management</h1>
                            <p className="text-center max-w-xs">
                                When managing a fleet of vehicles, knowing the real-time location of all drivers allows management to meet customer needs more efficiently.
                            </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={200}
                        height={200} alt="Asset Tracking" src="/gps-tracking-image-02_9f89fa33e7025f56208f1bc34d7e2621.jpg" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Asset Tracking</h1>
                            <p className="text-center max-w-xs">
                                Companies needing to track valuable assets for insurance or other monitoring purposes can now plot the real-time asset location on a map.
                            </p>
                        </div>
                    </Card>

                    <Card
                        hoverable
                        className="shadow-lg"
                        style={{ width: 320 }}
                        cover={<Image width={200}
                        height={200} alt="Vehicle Tracking" src="/gps-tracking-image-02_9f89fa33e7025f56208f1bc34d7e2621.jpg" />}
                    >
                        <div className="flex items-center justify-center flex-col">
                            <h1 className="text-xl font-bold">Vehicle Tracking</h1>
                            <p className="text-center max-w-xs">
                                Vehicle telematics define connected vehicles interchanging electronic data for purposes such as managing road usage and collecting road tolls.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>



            {/* Our Presence Section */}
            <div className="flex flex-col items-center my-12">
                <h1 className="text-3xl font-bold mb-6">Our Presence</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-4/5">
                    {/* Location Cards */}
                    <div className="flex flex-col items-center">
                        <h1 className="text-orange-500 font-bold text-xl">OMAN</h1>
                        <h2 className="font-semibold">Al Gushiba United Trading L.L.C. P.O. Box - 121</h2>
                        <p className='text-center'>Sanaya Street, Mobeilla Seeb, Muscat, Sultanate<br />of Oman</p>
                        <h3 className='pt-3'>Phone: +968-9593 4141</h3>
                        <h3>E-mail: sales@trak247.com</h3>
                        <h3>Website: www.trak247.com</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-orange-500 font-bold text-xl">DUBAI</h1>
                        <h2 className="font-semibold">P.O Box 80715, Deira, Dubai</h2>
                        <p>United Arab Emirates</p>
                        <h3 className='pt-3'>Phone: +971 4 238 6144</h3>
                        <h3>E-mail: sales@waytracksystems.com</h3>
                        <h3>Website: www.waytracksystems.com</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-orange-500 font-bold text-xl">COCHIN</h1>
                        <h2 className="font-semibold">#44/1535(3), 1st Floor, Kolathparambil Annex</h2>
                        <p className='text-center'>Silver Lane, Ashoka Road, Kaloor,<br />Cochin - 682017, Kerala, India</p>
                        <h3 className='pt-3'>Phone: +91 484-400-0182</h3>
                        <h3>Mobile: +91 9388628630</h3>
                        <h3>E-mail: info@trak24.com</h3>
                        <h3>Website: www.trak24.com</h3>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-orange-500 font-bold text-xl">HYDERABAD</h1>
                        <h2 className="font-semibold">#9-6-192 1st Floor, Sun Complex</h2>
                        <p className='text-center'>Santosh Nagar Main Road, Opp. Indo English School,<br />Durgabhavani Nagar, Hyderabad - 500059</p>
                        <h3 className='pt-3'>Phone: +91 898-542-0421</h3>
                        <h3>Mobile: 9490390036</h3>
                        <h3>E-mail: info@greenladder.in</h3>
                        <h3>Website: www.greenladder.in</h3>
                    </div>
                </div>
            </div>

            {/* Support Section */}
            <div className="flex items-center justify-center my-12 px-4">
                <div className="flex items-center justify-center bg-orange-500 w-full lg:w-2/3 rounded-3xl py-12 px-8 flex-col text-white">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-5 text-center">We Provide 24×7 Customer Support</h1>
                    <p className="text-center text-base lg:text-lg  mb-8">
                        Our experienced support engineers are ready to assist you with any technical issues 24×7. Kindly give us a call at the below number or email us by visiting our Contact page.
                    </p>
                    <h1 className="text-3xl lg:text-4xl font-bold">+91 484 400 0182</h1>
                </div>
            </div>

        </>
    );
}

export default HomePage;
