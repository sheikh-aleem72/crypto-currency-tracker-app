import { useState } from "react";
import CoinInfo from "./CoinInfo";
import store from "../../state/state";
import { useQuery } from "react-query";
import { fetchCoinHistoricalData } from "../../services/fetchCoinHistoricalData";
import Alert from "../Alert/Alert";
import PageLoader from "../PageLoader/PageLoader";
import useFetchCoinHistory from "../../hooks/useFetchCoinHistrory";

function CoinInfoContainer({ coinId }) {
  const {
    days,
    currency,
    historicData,
    setDays,
    setCoinInterval,
    isError,
    isLoading,
  } = useFetchCoinHistory(coinId);

  if (isError) {
    return <Alert message={"Error fetching data"} type="error" />;
  }

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <CoinInfo
      days={days}
      currency={currency}
      historicData={historicData}
      setDays={setDays}
      setCoinInterval={setCoinInterval}
    />
  );
}

export default CoinInfoContainer;
