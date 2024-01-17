import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1> Student Dashboard</h1>
      <span>
        {/* this theme will become a toggle button that will show sun/moon */}
        <button>Light Dark Toggle</button>
        <button>About the Devs</button>
      </span>
    </header>
  );
};
