import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 shadow-md bg-black/90">
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-400 transition duration-200">
          <button className="bg-transparent border-none">
            Home
          </button>
        </Link>
        <Link to="/exchanges" className="text-white hover:text-gray-400 transition duration-200">
          <button className="bg-transparent border-none">
            Exchanges
          </button>
        </Link>
        <Link to="/coins" className="text-white hover:text-gray-400 transition duration-200">
          <button className="bg-transparent border-none">
            Coins
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
