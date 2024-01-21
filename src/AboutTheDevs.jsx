import React from "react";
import { Link } from "react-router-dom";

export const AboutTheDevs = () => {
  return (
    <>
      <div className="mx-2">
        <h1 className="p-10 text-3xl text-center font-semibold bg-zinc-200">
          About the Developers
        </h1>
        <div className="p-5 rounded-bl-xl rounded-br-xl flex justify-between bg-yellow-500">
          <div className="mx-2 my-2 p-5 flex-1 rounded-lg bg-blue-500">
            <div className="border border-white"> Max Power</div>
          </div>
        </div>
      </div>
    </>
  );
};
