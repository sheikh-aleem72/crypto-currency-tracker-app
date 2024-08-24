import React, { useEffect } from "react";
import store from "../../state/state";
import CoinTable from "../../components/CoinTable/CoinTable";
import { useParams } from "react-router-dom";

export default function SearchResult() {
  const { query: value } = useParams();
  const { coinData: coins, fetchCoinData } = store();
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
      {SearchData && <CoinTable coins={SearchData} />}
    </>
  );
}
