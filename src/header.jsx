import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <div className=" mx-2 my-2">
      <div className="flex flex-row p-5 rounded-lg bg-red-500">
        <Link to="/">
          <h1 className=" text-5xl font-semibold text-white">
            Student Dashboard
          </h1>
        </Link>
        <span className="flex flex-auto my-2 py-1 justify-end ml-20 pl-10">
          {/* this theme will become a toggle button that will show sun/moon */}
          <button
            type="button"
            className=" mx-1 px-2 rounded-full bg-black text-white hover:bg-blue-200"
          >
            Light Dark Toggle
          </button>
          <button
            type="button"
            className=" mx-1 px-2 rounded-full bg-black text-white hover:bg-green-200"
          >
            About the Devs
          </button>
        </span>
      </div>
    </div>
  );
};
