import React from "react";
import { Link } from "react-router-dom";
import { FaCoins } from "react-icons/fa";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coin/${id}`}>
      <div className="w-60 bg-white shadow-2xl p-6 rounded-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:rotate-2 m-4 text-center">
        <div className="flex justify-center items-center mb-4">
          {img ? (
            <img
              src={img}
              alt={name}
              className="w-20 h-20 object-contain mx-auto rounded-full shadow-lg"
            />
          ) : (
            <FaCoins className="text-gray-400 text-5xl" />
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{symbol}</h3>
        <p className="text-gray-600 text-sm">{name}</p>
        <p className="text-xl font-medium text-indigo-600 mt-3 transition-colors duration-300 hover:text-indigo-800">
          {price ? `${currencySymbol}${price}` : "NA"}
        </p>
      </div>
    </Link>
  );
};

export default CoinCard;
