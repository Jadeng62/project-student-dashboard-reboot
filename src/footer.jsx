import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              to={`/aboutthedevs`}
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <Link to="https://github.com/Jadeng62/project-student-dashboard-reboot">
            <BsGithub className="text-gray-400 hover:text-gray-500 text-2xl" />
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          Copyright © 2024 Herb Matrix Code Rhythm, Inc.
        </p>
      </div>
    </section>
  );
};

export default Footer;
