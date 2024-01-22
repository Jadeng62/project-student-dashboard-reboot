import React from "react";
import { Link } from "react-router-dom";
import { MdSchool } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { LuSunMoon } from "react-icons/lu";

export const Header = ({
  asideInvisible,
  setAsideInvisible,
  handleVisibility,
}) => {
  return (
    <div className=" pt-6">
      <div className="flex flex-row p-5 rounded-tl-xl rounded-tr-xl bg-red-500">
        <Link to="/">
          <h1 className=" text-5xl font-semibold text-white">
            <MdSchool />
            Student Dashboard
          </h1>
        </Link>
        <div className="flex flex-auto mt-12 mr-14 py-4 pr-1 justify-end ml-20 pl-10 ">
          {/* this theme will become a toggle button that will show sun/moon */}
          <button
            type="button"
            className=" mx-1 mr-6 px-3 py-3 rounded-full bg-black text-white  hover:bg-gray-500"
          >
            {/* Light Dark Toggle */}
            <LuSunMoon className="text-2xl" />
          </button>
          <Link to={`/aboutthedevs`}>
            <button
              type="button"
              className=" mx-1 px-3 py-3 rounded-full bg-black text-white hover:bg-gray-500"
              onClick={handleVisibility}
            >
              {/* About the Devs  */}
              <RiTeamFill className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
