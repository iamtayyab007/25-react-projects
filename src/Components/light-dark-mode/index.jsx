import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./style.css";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleBtn = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hi World!!!</h1>
        <button onClick={handleBtn}>Change Theme</button>
      </div>
    </div>
  );
};
