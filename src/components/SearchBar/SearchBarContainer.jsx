import React, { useEffect } from "react";
import { SearchBar } from "./SearchBar";
import useFetchCoinData from "../../hooks/useFetchCoinData";
import store from "../../state/state";

export default function SearchBarContainer() {
  const { coinData: coins, fetchCoinData, currency } = store();
  useEffect(() => {
    if (!coins) {
      fetchCoinData(currency);
    }
  }, [coins, fetchCoinData]);

  useEffect(() => {
    fetchCoinData(currency);
  }, [currency]);
  return (
    <>
      <SearchBar coins={coins} />
    </>
  );
}
