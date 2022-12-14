import React from "react";
import "./home.css";
import List from "../List/List";
import { useState } from "react";
import Slider from "../Slider/Slider";

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
          <h1 className="home__title">Itemstore</h1>
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
      <Slider/>
    </div>
  );
};

export default Home;
