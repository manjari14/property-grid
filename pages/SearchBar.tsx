import React, { useState, useEffect, Component } from "react";
//import { json } from "stream/consumers";
// @ts-ignore
//import NextTagInputProps from "next-js-suggest-input"
const SearchBar = () => {
  const [suggestionData, setSuggestionData] = useState([]);
  function Search(body = null) {
    if (body === null) {
      let body1 = {
        query: "a",
        type: "address", //city/ MLS/ etcc
      };
      body = body1;
    }
    let method = "POST";
    fetch("http://34.130.143.118:81/services/home/getAutoSuggestionData", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("==============Results Search ", json);
        
        setSuggestionData(json);
      });
  }
  useEffect(() => {
    Search();
  }, []);
  function handleChange(e) {
    var Change = e.target.value;
    let obj = {
      query: Change,
      type: "address",
    };
    Search(obj);
  }
  return (
    <div>
      <div className="SearchBarContainer">
        <div className="CustomSearchBar">
          <div>
            <input
              className="input"
              placeholder="Search by MLS Listing#,Address,City, or Neighborhood"
              type={"search"}
              onChange={handleChange}
            />
          </div>
          <div className="icon">
            <img className="img" src="Image/SearchIcon.png" />
          </div>
        </div>
        <ul className="ul">
          {suggestionData &&
            suggestionData.length > 0 &&
            suggestionData.map((items, key) => {
              return (<li key={key}>{items.value}</li>)
            })}
        </ul>
      </div>
    </div>
  )
};
export default SearchBar;
