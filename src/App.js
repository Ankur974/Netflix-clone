/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Data from "./Data";

const App = () => {
  return (
    <>
      <h1>List of top 5 Netflix series</h1>
      <div className="cards">
        {Data.map((series, index) => (
          <div className="card" key={index}>
            <img src={series.img} alt="Card image" className="card__img" />
            <div className="card_info">
              <span className="card_category">A Netflix original series</span>
              <h3 className="card_title">{series.name}</h3>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
