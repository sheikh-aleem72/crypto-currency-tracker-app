import React, { useEffect } from "react";
import CoinTable from "./CoinTable";
import useFetchCoinData from "../../hooks/useFetchCoinData";
import store from "../../state/state";

export default function CoinTableContainer() {
  const { coinData: coins, fetchCoinData, currency } = store();
  useEffect(() => {
    fetchCoinData(currency);
  }, [coins, fetchCoinData, currency]);

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
