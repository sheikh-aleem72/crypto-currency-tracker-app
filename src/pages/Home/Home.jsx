import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import CoinTable from "../../components/CoinTable/CoinTable";
import CoinTableContainer from "../../components/CoinTable/CoinTableContainer";

function Home() {
  return (
    <>
      <Banner />
      <CoinTableContainer />
    </>
  );
}

export default Home;
