import React, { useState } from "react";
import alcohols from "../AlcoholsData";
import SearchResult from "./SearchResult";

function Search() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchBox, setSearchBox] = useState(false);

  const handleSearch = (value) => {
    const products = alcohols.map((item) => item.product);
    const productsArray = [].concat(...products);
    setData(productsArray);
    setFilterData(productsArray);
    const searchResult = filterData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setSearchBox(true);
    setData(searchResult);
    if (value === "") {
      setSearchBox(false);
      setData([]);
    }
  };

  return (
    <div className="search-bar">
      <form>
        <input
          type="text"
          name="search"
          placeholder="search your spirit..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
      {searchBox && <SearchResult data={data} />}
    </div>
  );
}

export default Search;
