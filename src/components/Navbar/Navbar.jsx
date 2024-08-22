import { useContext, useState } from "react";
import { currencyContext } from "../../contexts/currencyContext";
import store from "../../state/state";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // const { setCurrency } = useContext(currencyContext);
  const { currency, setCurrency } = store();
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }

  const [value, setValue] = useState("");

  function handleTextChange(event) {
    setValue(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("searces");
  }
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
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
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl" onClick={() => goToHome()}>
            Coin Gecko
          </a>
        </div>
        <form className="navbar-end" onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Search"
            className="p-2 w-[20vw] border rounded-3xl"
          />
          <button className="btn btn-ghost btn-circle" type="submit">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default Navbar;
