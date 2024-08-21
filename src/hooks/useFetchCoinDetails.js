import { useQuery } from "react-query";
import store from "../state/state";
import fetchCoinDetails from "../services/fetchCoinDetails";

function useFetchCoinDetails(coinId) {
  const { currency } = store();

  const {
    isError,
    isLoading,
    data: coin,
  } = useQuery(["coin", coinId], () => fetchCoinDetails(coinId), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  return {
    currency,
    isError,
    isLoading,
    coin,
  };
}

export default useFetchCoinDetails;
