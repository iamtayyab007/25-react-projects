{
  /*

import React, { useEffect } from "react";
import { useState } from "react";
import { Data } from "./Data";

export const SearchAutoComplete = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [dropDownList, setDropDownList] = useState(false);
  async function fetchDummyUrl() {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    const refinedResult = result.users.map((items) => items.firstName);
    setData(refinedResult);
  }
  console.log(data);
  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filterSuggestions = data.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filterSuggestions);
  };

  const handleItems = (event) => {
    setInput(event.target.innerText);
  };
  useEffect(() => {
    fetchDummyUrl();
  }, []);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter name"
          value={input}
          onChange={handleChange}
        />
      </div>
      <Data suggestions={suggestions} handleClick={handleItems} />
    </div>
  );
};

*/
}

import React, { useState, useEffect } from "react";
import { Data } from "./Data";

export const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((items) => items.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event) => {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    //setFilteredUsers([]);
  };

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((items) => items.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users, filteredUsers);
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h2>Loading Data ! Please Wait!</h2>
      ) : (
        <input
          type="text"
          name="search-users"
          placeholder="Search users name...."
          value={searchParam}
          onChange={handleChange}
        />
      )}

      {showDropDown && (
        <Data data={filteredUsers} handleOnClick={handleClick} />
      )}
    </div>
  );
};
