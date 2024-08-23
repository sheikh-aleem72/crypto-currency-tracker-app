import React, { useEffect } from "react";
import CoinTable from "./CoinTable";
import useFetchCoinData from "../../hooks/useFetchCoinData";
import store from "../../state/state";

export default function CoinTableContainer() {
  const { coinData: coins, fetchCoinData, currency } = store();
  useEffect(() => {
    if (!coins) {
      fetchCoinData(currency);
    }
  }, [coins, fetchCoinData]);

  useEffect(() => {
    fetchCoinData(currency);
  }, [currency]);
  //   if (!coins) return <div>Loading...</div>;
  //   const { currency, coins, isError, isLoading, error } = useFetchCoinData();

  return (
    <CoinTable
      //   currency={currency}
      coins={coins}
      //   isError={isError}
      //   isLoading={isLoading}
      //   error={error}
    />
  );
}
