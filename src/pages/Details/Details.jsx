import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import PageLoader from "../../components/PageLoader/PageLoader";
import CoinInfoContainer from "../../components/CoinInfo/CoinInfoContainer";
import useFetchCoinDetails from "../../hooks/useFetchCoinDetails";

function Details() {
  const { coinId } = useParams();
  const { currency, isLoading, isError, coin } = useFetchCoinDetails(coinId);

  if (isError) {
    return <div>Error: Something went wrong</div>;
  }
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full flex flex-col items-center justify-center mt-6 md:mt-0 border-r-2 border-gray-500 pb-2">
          <img
            alt={coin?.name}
            src={coin?.image?.large}
            className="h-52 mb-5"
            loading="lazy"
          />

          <h1 className="text-3xl font-bold mb-5">{coin?.name}</h1>
          <p className="w-full px-6 py-4 text-justify">
            {parse(coin?.description?.en)}
          </p>

          <div className="w-full flex flex-col md:flex-row md:justify-around px-6">
            <div className="flex items-center mb-4 md:mb-0">
              <h2 className="text-xl font-bold ">Rank</h2>
              <span className="ml-3 text-xl ">{coin?.market_cap_rank}</span>
            </div>

            <div className="flex items-center mb-4 md:mb-0">
              <h2 className="text-xl text-yellow-400 font-bold ">
                Current Price
              </h2>
              <span className="ml-3 text-xl ">
                {coin?.market_data.current_price[currency]}
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 w-full p-6">
          <CoinInfoContainer coinId={coinId} />
        </div>
      </div>
    </>
  );
}

export default Details;
