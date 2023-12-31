"use client";

import React, { useContext } from "react";
import MyThemeContext from "../store/ThemeContext";

type Props = {};

const Header = (props: Props) => {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  return (
    <div>
      <button onClick={toggleThemeHandler}>toggle theme</button>
    </div>
  );
};

export default Header;
