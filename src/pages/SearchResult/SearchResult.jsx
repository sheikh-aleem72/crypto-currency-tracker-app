import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import store from "../../state/state";
import { Virtuoso } from "react-virtuoso";

export default function SearchResult() {
  const { query: value } = useParams();
  const { coinData: coins, fetchCoinData } = store();
  const navigate = useNavigate();
  let SearchData;

  useEffect(() => {
    if (!coins) {
      fetchCoinData("usd"); // You can change 'usd' to any other currency
    }
  }, [coins, fetchCoinData]);

  if (coins) {
    SearchData = coins.filter((coin) => {
      if (value && coin.name.toLowerCase().includes(value)) {
        return coin;
      }
    });
    if (SearchData.length === 0) {
      return <div className="p-4">No result Found</div>;
    }
  }

  return (
    <>
      {!SearchData && <div>Loading...</div>}
      {SearchData && (
        <div className="flex flex-col w-[93vw] my-5 gap-5 mx-auto justify-center items-center">
          <div className="flex justify-center items-center bg-yellow-300 font-semibold py-4 px-2 text-black w-full">
            <div className="basis-[35%]">Coin</div>
            <div className="basis-[20%]">Price</div>
            <div className="basis-[25%]">24h Change</div>
            <div className="basis-[20%]">Market Cap</div>
          </div>

          {SearchData.map((coin, index) => {
            return (
              <div
                onClick={() => {
                  navigate(`/details/${coin.id}`);
                }}
                key={index}
                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer "
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[7vw] h-[7vw]">
                    <img src={coin.image} className="h-full w-full" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-[2.5vw]">{coin.name}</div>
                    <div className="md:text-[1vw] text-[1.5vw]">
                      {coin.symbol}
                    </div>
                  </div>
                </div>
                <div className="basis-[20%] md:text-[1.2vw] text-[2vw]">
                  {coin.current_price}
                </div>
                <div className="basis-[25%] md:text-[1.2vw] text-[2vw]">
                  {coin.price_change_24h}
                </div>
                <div className="basis-[20%] md:text-[1.2vw] text-[2vw]">
                  {coin.market_cap}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
