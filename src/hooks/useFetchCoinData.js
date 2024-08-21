import { useQuery } from "react-query";
import { fetchCoinData } from "../services/fetchCoinData";
import store from "../state/state";

function useFetchCoinData() {
  const { currency } = store();
  const {
    data: coins,
    isLoading,
    isError,
    error,
  } = useQuery(["coins", currency], () => fetchCoinData(currency), {
    // retry: 2,
    // retryDelay: 1000,
    cacheTime: 2 * 1000 * 60,
    staleTime: 2 * 1000 * 60,
  });

  return {
    coins,
    isError,
    isLoading,
    currency,
    error,
  };
}

export default useFetchCoinData;
