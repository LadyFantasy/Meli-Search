import React, { useState } from "react";
import "./index.scss";
import Header from "../../components/Header";
import List from "../../components/List";

function Search() {
  const [searchParam, setSearchParam] = useState("");

  function handleSearch(searchParam) {
    // setea estado con parámetro que vuelve del callback
    setSearchParam(searchParam);
  }
  return (
    <>
      <Header handleCallback={handleSearch} searchParam={searchParam} />
      <div className="search-container">
        <List searchParam={searchParam} />
      </div>
    </>
  );
}

export default Search;
