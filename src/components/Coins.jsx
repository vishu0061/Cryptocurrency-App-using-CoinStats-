import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import { server } from "../Constant";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {loading ? (
        <Loader />
      ) : (
        <>
          
          <div className="flex justify-center gap-6 mb-8">
            <button
              className={`px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                currency === "inr" ? "bg-indigo-600 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
              onClick={() => setCurrency("inr")}
            >
              INR
            </button>
            <button
              className={`px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                currency === "usd" ? "bg-indigo-600 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
              onClick={() => setCurrency("usd")}
            >
              USD
            </button>
            <button
              className={`px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                currency === "eur" ? "bg-indigo-600 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
              onClick={() => setCurrency("eur")}
            >
              EUR
            </button>
          </div>

          {/* Coin Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {coins.map((coin) => (
              <CoinCard
                id={coin.id}
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                img={coin.image}
                symbol={coin.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8">
            <div className="flex space-x-2 overflow-x-auto px-4">
              {btns.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  className={`px-5 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    page === index + 1
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"
                  }`}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Coins;
