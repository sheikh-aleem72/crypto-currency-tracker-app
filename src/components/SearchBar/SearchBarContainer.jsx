import React, { useEffect } from "react";
import { SearchBar } from "./SearchBar";
import useFetchCoinData from "../../hooks/useFetchCoinData";
import store from "../../state/state";

export default function SearchBarContainer() {
  const { coinData: coins, fetchCoinData, currency } = store();
  useEffect(() => {
    fetchCoinData(currency); // You can change 'usd' to any other currency
  }, [coins, fetchCoinData, currency]);
  return (
    <>
      <SearchBar coins={coins} />
    </>
  );
}
