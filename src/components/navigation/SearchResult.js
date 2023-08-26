import React from "react";

function SearchResult({ data }) {
  return (
    <div className="search-result">
      {data.map((item) => {
        return (
          <div className="result-card" key={item.id}>
            <img src={item.image} alt="product" />
            <h2>{item.name}</h2>
            <h4>$ {item.price}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
