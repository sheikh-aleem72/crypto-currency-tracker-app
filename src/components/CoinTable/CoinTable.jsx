import { useNavigate } from "react-router-dom";
import { Virtuoso } from "react-virtuoso";

function CoinTable({ currency, coins, isError, isLoading, error }) {
  const navigate = useNavigate();

  // const { currency } = useContext(currencyContext);

  function handleCoinDetails(id) {
    navigate(`/details/${id}`);
  }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
      <div className="flex flex-col w-[93vw] mt-5 pb-2 mx-auto justify-center items-center rounded-xl shadow-2xl shadow-[#1f1f22] bg-[#0b1f41]">
        <div className="flex justify-center items-center bg-[#010f27] font-semibold py-4 px-2 text-white w-full rounded-t-lg">
          <div className="basis-[40%] text-[4vw] md:text-[2vw] pl-4">Coin</div>
          <div className="basis-[20%] text-[4vw] md:text-[2vw] text-start">
            Price
          </div>
          <div className="basis-[20%] text-[4vw] md:text-[2vw] text-start">
            24h Change
          </div>
          <div className="basis-[20%] text-[4vw] md:text-[2vw] text-start">
            Market Cap
          </div>
        </div>
        <div className="flex flex-col w-[93vw] mx-auto rounded-b-lg px-1 pb-2">
          {isLoading && <div>Loading....</div>}
          {coins && (
            <Virtuoso
              style={{ height: 1000 }}
              data={coins}
              itemContent={(_, coin) => (
                <div
                  onClick={() => handleCoinDetails(coin.id)}
                  key={coin.id}
                  className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer border-t-0 border border-[#5a5252be] hover:bg-gray-950 rounded"
                >
                  <div className="flex items-center justify-start gap-3 basis-[40%]">
                    <div className="w-[5vw] h-[5vw]">
                      <img src={coin.image} className="h-full w-full" />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-[2.5vw]">{coin.name}</div>
                      <div className="md:text-[1vw] text-[1.5vw]">
                        {coin.symbol}
                      </div>
                    </div>
                  </div>
                  <div className="basis-[20%] md:text-[1.2vw] text-[2.3vw] text-start">
                    {Number(coin.current_price).toFixed(4)}
                  </div>
                  <div className="basis-[20%] md:text-[1.2vw] text-[2.3vw] text-start">
                    {Number(coin.price_change_24h).toFixed(4)}
                  </div>
                  <div className="basis-[20%] md:text-[1.2vw] text-[2.3vw] text-start">
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
