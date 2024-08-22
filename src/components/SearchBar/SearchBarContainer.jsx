import React from "react";
import { SearchBar } from "./SearchBar";
import useFetchCoinData from "../../hooks/useFetchCoinData";

export default function SearchBarContainer() {
  const { coins } = useFetchCoinData();
  return (
    <>
      <SearchBar coins={coins} />
    </>
  );
}
