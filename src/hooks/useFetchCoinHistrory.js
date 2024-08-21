import { useState } from "react";
import store from "../state/state";
import { fetchCoinHistoricalData } from "../services/fetchCoinHistoricalData";
import { useQuery } from "react-query";

function useFetchCoinHistory(coinId) {
  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState("daily");
  const { currency } = store();

  const {
    data: historicData,
    isError,
    isLoading,
  } = useQuery(
    ["coinHistoricData", coinId, days, interval, currency],
    () => fetchCoinHistoricalData(coinId, days, interval, currency),
    {
      cacheTime: 2 * 1000,
      staleTime: 2 * 1000,
    }
  );

  return {
    days,
    setDays,
    historicData,
    setCoinInterval,
    currency,
    isError,
    isLoading,
  };
}

export default useFetchCoinHistory;
