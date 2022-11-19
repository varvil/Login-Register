import React from "react";
import data from "./ListData.json";
import './list.css'

const List = (props) => {

    //Create new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input return the original
        if (props.input === '') {
            return el;
        }
        //return the item which containts the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })

  return (
    <div className="search__result">
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
    </div>
  );
};

export default List;
