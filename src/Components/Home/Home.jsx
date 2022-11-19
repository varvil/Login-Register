import React from "react";
import "./home.css";
import List from "../List/List";
import { useState } from "react";

const Home = () => {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="home__wrapper">
      <div className="home__section">
        <div className="home__content">
          <h3 className="home__description">Up to 10 items on</h3>
          <h1 className="home__title">Lorem ipsum lopsum</h1>

          <div className="home__search">
            <i class="uil uil-search"></i>
            <input
              type="text"
              id="search__input"
              className="text"
              onChange={inputHandler}
            />
          </div>
        </div>
        <List input={inputText} />
      </div>

      <div className="category__section">
        <h1 className="category__title">Top Categories</h1>
        <h3 className="category__description">Here are the top categories</h3>
        <div className="category__items">
          <ul>
            <li className="category__item">
              <i>here</i>
            </li>
            <li className="category__item">
              <i>there</i>
            </li>
            <li className="category__item">
              <i>nere</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
