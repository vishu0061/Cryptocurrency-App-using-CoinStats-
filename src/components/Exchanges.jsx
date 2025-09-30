import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import { server } from "../Constant";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error)
    return <ErrorComponent message={"Error While Fetching Exchanges"} />;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {exchanges.map((exchange) => (
            <ExchangeCard
              key={exchange.id}
              name={exchange.name}
              img={exchange.image}
              rank={exchange.trust_score_rank}
              url={exchange.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 p-6 text-center hover:bg-indigo-50"
  >
    <img
      src={img}
      alt={name}
      className="w-16 h-16 mx-auto object-contain mb-4 rounded-full shadow-sm"
    />
    <h3 className="text-lg font-semibold text-gray-800 transition duration-300">{name}</h3>
    <p className="text-sm text-gray-500 mt-2 transition duration-300">Rank: #{rank}</p>
  </a>
);

export default Exchanges;
