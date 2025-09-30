import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "./Chart";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import { server } from "../Constant";


const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (
    <div className="max-w-7xl mx-auto p-3 md:p-6 lg:p-8">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full border rounded-lg shadow-md p-2 md:p-4 bg-white">
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </div>

          <div className="flex space-x-2 md:space-x-3 overflow-x-auto py-2 md:py-4 scrollbar-hide">
            {btns.map((i) => (
              <button
                key={i}
                onClick={() => setDays(i)}
                className={`px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-md transition-all duration-200 whitespace-nowrap ${
                  days === i ? "bg-blue-500 text-white" : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {i}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-2 md:gap-4 py-2 md:py-4">
            {["inr", "usd", "eur"].map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-md uppercase ${
                  currency === curr ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8 space-y-3 md:space-y-4">
            <p className="text-gray-600 text-center text-xs md:text-sm">
              Last Updated On {new Date(coin.market_data.last_updated).toLocaleString()}
            </p>
            
            <div className="flex justify-center">
              <img src={coin.image.large} alt={coin.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
            
            <div className="text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{coin.name}</h2>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-700">
                {currencySymbol}{coin.market_data.current_price[currency]}
              </p>
            </div>
            
            <div className="flex justify-center items-center space-x-2">
              <span className={`px-2 md:px-3 py-1 text-sm md:text-base rounded-full text-white ${
                coin.market_data.price_change_percentage_24h > 0 ? "bg-green-500" : "bg-red-500"
              }`}>
                {coin.market_data.price_change_percentage_24h}%
              </span>
            </div>
            
            <div className="flex justify-center">
              <span className="text-center text-base md:text-lg font-semibold bg-gray-900 text-white px-3 md:px-4 py-1 md:py-2 rounded-md">
                #{coin.market_cap_rank}
              </span>
            </div>

            <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.low_24h[currency]}`} />

            <div className="space-y-2 md:space-y-3">
              <Item title="Max Supply" value={coin.market_data.max_supply} />
              <Item title="Circulating Supply" value={coin.market_data.circulating_supply} />
              <Item title="Market Cap" value={`${currencySymbol}${coin.market_data.market_cap[currency]}`} />
              <Item title="All Time Low" value={`${currencySymbol}${coin.market_data.atl[currency]}`} />
              <Item title="All Time High" value={`${currencySymbol}${coin.market_data.ath[currency]}`} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Item = ({ title, value }) => (
  <div className="flex justify-between bg-gray-100 p-2 md:p-3 rounded-md shadow-sm">
    <span className="font-semibold text-sm md:text-base">{title}</span>
    <span className="text-sm md:text-base">{value}</span>
  </div>
);

const CustomBar = ({ high, low }) => (
  <div className="w-full bg-gray-200 rounded-md p-2 md:p-3">
    <div className="relative w-full h-1.5 md:h-2 bg-gray-400 rounded-md">
      <div className="absolute w-1/2 h-1.5 md:h-2 bg-teal-500 rounded-md"></div>
    </div>
    <div className="flex justify-between text-xs md:text-sm mt-1">
      <span className="text-red-500">{low}</span>
      <span className="text-gray-700">24H Range</span>
      <span className="text-green-500">{high}</span>
    </div>
  </div>
);

export default CoinDetails;
