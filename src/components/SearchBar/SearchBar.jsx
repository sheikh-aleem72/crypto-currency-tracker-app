import React, { useState } from "react";
import CoinInfoContainer from "../CoinInfo/CoinInfoContainer";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ coins }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function handleTextChange(event) {
    console.log(event.target.value);
    setValue(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(value);
  }

  function goToCoinDetails(coinId) {
    setValue("");
    navigate(`/details/${coinId}`);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit} className="">
        <label className="input input-bordered items-center gap-2 rounded-md md:flex hidden">
          <input
            onChange={handleTextChange}
            type="text"
            value={value}
            className="grow hidden md:flex"
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
        <div className="absolute z-10 max-h-[30vw] rounded-md overflow-auto w-[100vw] md:w-[30vw] bg-[#141111] top-10 md:top-14 right-1 shadow-sm shadow-gray-500 ">
          {coins.map((coin, index) => {
            if (value && coin && coin.name.toLowerCase().includes(value)) {
              return (
                <div
                  key={index}
                  className="py-2 px-4 text-[1.5vw] cursor-pointer hover:font-bold hover:bg-slate-800 flex items-center gap-4 border-b border-opacity-5 border-slate-300"
                  onClick={() => goToCoinDetails(coin.id)}
                >
                  <div className="h-[2vw] w-[2vw]">
                    <img src={coin.image} />
                  </div>
                  <div>{coin.name}</div>
                </div>
              );
            }
          })}
        </div>
      )}
    </>
  );
};
