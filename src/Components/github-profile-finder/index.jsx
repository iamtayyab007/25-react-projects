import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import { Cards } from "./Cards";

export const GithubProfileFinder = () => {
  const [username, setUsername] = useState("iamtayyab007");
  const [data, setData] = useState(null);

  async function fetchGithubUrl() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();

      if (result) {
        setData(result);
        setUsername("");
        console.log(result);
      }
    } catch (error) {
      console.log("", error);
    }
  }

  const handleSubmit = () => {
    fetchGithubUrl();
  };

  useEffect(() => {
    fetchGithubUrl();
  }, []);

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {data ? <Cards users={data} /> : "no data found"}
    </div>
  );
};
