import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../state/state";
import axiosInstance from "../../helpers/axiosInstance";
import useDebounce from "../../hooks/useDebounce";

export const SearchBar = ({}) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const { currency } = store();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const debounceSearch = useDebounce(value);

  useEffect(() => {
    const loadCoins = async () => {
      setLoading(true);
      const res = await axiosInstance.get(
        `/coins/markets?vs_currency=${currency}&order=market_cap_desc`
      );
      if (value !== "") {
        const timeout = setTimeout(() => {
          const responseData = res.data.filter((coin) => {
            return coin.name.toLowerCase().includes(debounceSearch);
          });
          setCoins(responseData);
          setLoading(false);
          console.log(responseData);
        }, 500);
        return () => clearTimeout(responseData);
      }
    };
    loadCoins();
  }, [debounceSearch]);

  function handleTextChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleSearchQuery(event) {
    event.preventDefault();
    if (value === "") {
      alert("Please name of the crypto");
      return;
    }
    const query = value;
    setValue("");
    navigate(`/search/${query}`);
  }

  function goToCoinDetails(coinId) {
    setValue("");
    navigate(`/details/${coinId}`);
  }

  return (
    <>
      <form onSubmit={handleSearchQuery} className="">
        <label className="input input-bordered items-center gap-2 rounded-md md:flex hidden bg-transparent">
          <input
            onChange={handleTextChange}
            type="text"
            value={value}
            className="grow hidden md:flex "
            placeholder="Search"
          />
          <button>
            <svg
              xmlns="http://w ww.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                cdivprule="evenodd"
              />
            </svg>
          </button>
        </label>
        <label className="input input-bordered items-center gap-2 rounded-md md:hidden flex">
          <input
            onChange={handleTextChange}
            type="text"
            className="grow md:hidden"
            placeholder="Search"
          />
        </label>
      </form>
      {value && (
        <div className="absolute z-50 max-h-[30vw] rounded-md overflow-auto w-[100vw] md:w-[29.2vw] bg-[#010f27] top-10 md:top-14 right-1 shadow-sm shadow-gray-500 ">
          {loading && (
            <div className="py-2 px-4 text-[1.5vw] cursor-pointer hover:font-bold hover:bg-slate-800 flex items-center justify-center gap-4 border-b border-opacity-5 border-slate-300">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          )}

          {!loading && coins.length == 0 && (
            <div className="py-2 px-4 text-[1.5vw] cursor-pointer hover:font-bold hover:bg-slate-800 flex items-center gap-4 border-b border-opacity-5 border-slate-300">
              No Match Found
            </div>
          )}

          {!loading &&
            coins.map((coin, index) => {
              return (
                <div
                  key={index}
                  className="py-2 px-4 text-[1.5vw] cursor-pointer hover:font-bold hover:bg-slate-800 flex items-center gap-4 border-b border-opacity-5 border-slate-300"
                  onClick={() => goToCoinDetails(coin.id)}
                >
                  <div className="h-[2vw] w-[2vw]">
                    <img src={coin.image} />
                  </div>
                  <div className="text-[2.3vw] md:text-[1vw]">{coin.name}</div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};
