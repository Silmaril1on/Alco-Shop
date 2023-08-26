import React from "react";
import PriceRange from "./PriceRange";
import Header from "../Header";

function FilterButtons({ spirits, callBack, setSpirits }) {
  const categoryBtn = [
    {
      id: 0,
      category: "all",
      name: "all",
    },
    {
      id: 1,
      category: "whiskey",
      name: "whiskey",
    },
    {
      id: 2,
      category: "gin",
      name: "gin",
    },
    {
      id: 3,
      category: "cognac",
      name: "cognac",
    },
    {
      id: 4,
      category: "rum",
      name: "rum",
    },
    {
      id: 5,
      category: "beer",
      name: "beer",
    },
    {
      id: 6,
      category: "vodka",
      name: "vodka",
    },
    {
      id: 7,
      category: "tequila",
      name: "tequila",
    },
    {
      id: 8,
      category: "liqueur",
      name: "liqueur",
    },
    {
      id: 9,
      category: "wine",
      name: "wine",
    },
    {
      id: 10,
      category: "vermouth",
      name: "vermouth",
    },
  ];

  return (
    <div className="filter-container">
      <Header $variants="primary">{spirits.length} products</Header>
      <h3 className="filter-buttons-header">search by category</h3>
      <div className="filter-buttons">
        {categoryBtn.map((item) => {
          return (
            <h1
              className="active-button"
              key={item.id}
              id={item.id}
              onClick={() => callBack(item.category)}
            >
              {item.name}
            </h1>
          );
        })}
      </div>
      <PriceRange setSpirits={setSpirits} />
    </div>
  );
}

export default FilterButtons;
