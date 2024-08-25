import React from "react";
import "./style.css";

export const Cards = ({ users }) => {
  const {
    avatar_url,
    url,
    name,
    followers,
    following,
    public_repos,
    created_at,
    login,
  } = users;

  // Convert to Date object
  const date = new Date(created_at);

  // Get day, month, and year
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="card-wrapper">
      <div className="main-content">
        <div className="images">
          <img src={avatar_url} alt="" />
        </div>
        <div className="credentials">
          <span>
            <a href={url}>{name || login}</a>
          </span>
          <span> {`joined on ${day} ${month} ${year}`}</span>
        </div>
        <div className="other-content">
          <p>followers: {followers}</p>
          <p>following: {following}</p>
          <p>public repos: {public_repos}</p>
        </div>
      </div>
    </div>
  );
};
