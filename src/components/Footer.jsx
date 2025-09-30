import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold text-white mb-4 transition duration-300 hover:text-indigo-400">
            About Us
          </h3>
          <p className="text-lg tracking-wide text-gray-300">
            We are the leading crypto trading app in India, offering expert guidance at an affordable price with top-tier service and support.
          </p>
        </div>
        
        <div className="text-center md:text-right">
          <h3 className="text-3xl font-semibold text-white mb-4 transition duration-300 hover:text-indigo-400">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-400 transition duration-300">
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-gray-400 text-sm">&copy; 2025 Xcrypto. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;