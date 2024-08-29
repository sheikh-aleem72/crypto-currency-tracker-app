import { useContext, useState } from "react";
import { currencyContext } from "../../contexts/currencyContext";
import store from "../../state/state";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";

function Navbar() {
  // const { setCurrency } = useContext(currencyContext);
  const { setCurrency } = store();
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <div className="navbar flex md:flex-row  md:w-[50%]">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a
                    onClick={() => {
                      setCurrency("usd");
                    }}
                  >
                    USD
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setCurrency("inr");
                    }}
                  >
                    INR
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:navbar-center">
            <a className="btn btn-ghost text-xl" onClick={() => goToHome()}>
              Crypto Tracker
            </a>
          </div>
        </div>
        <div className="navbar-end relative self-center w-full md:w-[30%]">
          <SearchBar />
        </div>
      </div>
    </>
  );
}

export default Navbar;
