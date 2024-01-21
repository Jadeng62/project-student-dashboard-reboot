import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export const AboutTheDevs = () => {
  return (
    <>
      <div className="mx-6">
        <h1 className="p-10 text-3xl text-center font-semibold bg-zinc-100">
          About the Developers
        </h1>
        <div className="p-5 rounded-bl-xl rounded-br-xl flex justify-between bg-zinc-200">
          <div className="mx-2 my-2 p-5 flex-1 flex flex-col items-center rounded-lg bg-white">
            <VscAccount className="text-9xl" />
            <div className="m-4 border border-white">
              ___ is a Software Developer who specializes in ___. They are
              interested in UI/UX, new backend technologies, and AI integration.
              "User experience should always be prioritized before any bells and
              whistles."
            </div>
            <div className="flex flex-row text-lg">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10">
              <FaLinkedin className="text-6xl text-blue-500" />
              <BsGithub className="text-6xl" />
              <MdAlternateEmail className="text-6xl text-red-500" />
            </div>
          </div>
          <div className="mx-2 my-2 p-5 flex-1 flex flex-col items-center rounded-lg bg-white">
            <VscAccount className="text-9xl" />
            <div className="m-4 border border-white">
              ___ is a Software Developer who specializes in ___. They are
              interested in UI/UX, new backend technologies, and AI integration.
              "User experience should always be prioritized before any bells and
              whistles."
            </div>
            <div className="flex flex-row text-lg">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10">
              <FaLinkedin className="text-6xl text-blue-500" />
              <BsGithub className="text-6xl" />
              <MdAlternateEmail className="text-6xl text-red-500" />
            </div>
          </div>
          <div className="mx-2 my-2 p-5 flex-1 flex flex-col items-center rounded-lg bg-white">
            <VscAccount className="text-9xl" />
            <div className="m-4 border border-white">
              ___ is a Software Developer who specializes in ___. They are
              interested in UI/UX, new backend technologies, and AI integration.
              "User experience should always be prioritized before any bells and
              whistles."
            </div>
            <div className="flex flex-row text-lg">
              Stay Connected
              <MdKeyboardDoubleArrowRight className="text-3xl" />
            </div>
            <div className="flex flex-row gap-10">
              <FaLinkedin className="text-6xl text-blue-500" />
              <BsGithub className="text-6xl" />
              <MdAlternateEmail className="text-6xl text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
