import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <nav className="bg-red-500">
      <Link to="/">
        <h1 className="text-5xl font-semibold text-white">Student Dashboard</h1>
      </Link>
      <span>
        {/* this theme will become a toggle button that will show sun/moon */}
        <button type="button">Light Dark Toggle</button>
        <button>About the Devs</button>
      </span>
    </nav>
  );
};
