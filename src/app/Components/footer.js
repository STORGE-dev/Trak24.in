import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-48 grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* First Div: Logo and Description */}
        <div className="flex flex-col">
          <img src="/trak24.png" alt="Logo" className="mb-2 w-32" />
          <p className="text-gray-400">
          AIS 140 certified vehicle trackers designed to meet the highest standards of fleet management and vehicle safety.
          </p>
        </div>

        {/* Second Div: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Business Solutions</a></li>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">AIS140</a></li>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">News Room</a></li>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Third Div: Products */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <ul>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">AIS140 Tracker</a></li>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Trak24 AK1</a></li>
            <li className="mb-1"><a href="#" className="text-gray-400 hover:text-white">Trak24 OBD</a></li>
          </ul>
        </div>

        {/* Fourth Div: Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <ul>
            <li className="mb-1 text-gray-400">#44/1535(3), 1st Floor, Kolathparambil Annex, Silver Lane, Ashoka Road, Kaloor, Cochin – 682017, Kerala</li>
            <li className="mb-1 text-gray-400">+91-484-400-0182</li>
            <li className="mb-1 text-gray-400">+91 938-862-8630</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

