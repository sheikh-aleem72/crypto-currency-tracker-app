import React, { useEffect } from "react";
import CoinTable from "./CoinTable";
import useFetchCoinData from "../../hooks/useFetchCoinData";
import store from "../../state/state";
import { fetchCoinData } from "../../services/fetchCoinData";

export default function CoinTableContainer() {
  const { currency, coins, isError, isLoading, error } = useFetchCoinData();

  return (
    <CoinTable
      currency={currency}
      coins={coins}
      isError={isError}
      isLoading={isLoading}
      error={error}
    />
  );
}
