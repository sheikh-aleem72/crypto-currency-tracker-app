import { useNavigate } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";
import useFetchCoinData from "../../hooks/useFetchCoinData";

function CoinTable() {
  const navigate = useNavigate();

  // const { currency } = useContext(currencyContext);
  const { currency, coins, isError, isLoading, error } = useFetchCoinData();

  function handleCoinDetails(id) {
    navigate(`/details/${id}`);
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex flex-col w-[95vw] my-5 gap-5 mx-auto justify-center items-center">
        <div className="flex justify-center items-center bg-yellow-300 font-semibold py-4 px-2 text-black w-full">
          <div className="basis-[35%]">Coin</div>
          <div className="basis-[20%]">Price</div>
          <div className="basis-[25%]">24h Change</div>
          <div className="basis-[20%]">Market Cap</div>
        </div>
        <div className="flex flex-col w-[95vw] mx-auto">
          {isLoading && <div>Loading....</div>}
          {coins && (
            <Virtuoso
              style={{ height: 1000 }}
              data={coins}
              itemContent={(_, coin) => (
                <div
                  onClick={() => handleCoinDetails(coin.id)}
                  key={coin.id}
                  className="w-full bg-transparent text-white flex py-4 px-1 font-semibold items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center justify-start gap-3 basis-[35%]">
                    <div className="w-[7vw] h-[7vw]">
                      <img src={coin.image} className="h-full w-full" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[2.5vw]">{coin.name}</div>
                      <div className="md:text-[1vw] text-[1.5vw]">
                        {coin.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="basis-[20%] md:text-[1.2vw] text-[2vw]">
                    {coin.current_price}
                  </div>
                  <div className="basis-[25%] md:text-[1.2vw] text-[2vw]">
                    {coin.price_change_24h}
                  </div>
                  <div className="basis-[20%] md:text-[1.2vw] text-[2vw]">
                    {coin.market_cap}
                  </div>
                </div>
              )}
            />
          )}
          {/* {data &&
            data.map((coin) => {
              return (
                <div
                  onClick={() => handleCoinDetails(coin.id)}
                  key={coin.id}
                  className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center justify-start gap-3 basis-[35%]">
                    <div className="w-[7vw] h-[7vw]">
                      <img src={coin.image} className="h-full w-full" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-3xl">{coin.name}</div>
                      <div className="text-xl">{coin.symbol}</div>
                    </div>
                  </div>
                  <div className="basis-[25%]">{coin.current_price}</div>
                  <div className="basis-[20%]">{coin.price_change_24h}</div>
                  <div className="basis-[20%]">{coin.market_cap}</div>
                </div>
              );
            })} */}
        </div>
        {/* <div className="flex gap-4 justify-center items-center">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="btn btn-primary btn-wide text-white text-2xl"
          >
            Prev
          </button>
          <button
            onClick={() => setPage(page + 1)}
            className="btn btn-secondary btn-wide text-white text-2xl"
          >
            Next
          </button>
        </div> */}
      </div>
    </>
  );
}

export default CoinTable;
