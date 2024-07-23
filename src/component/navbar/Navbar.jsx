import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" shadow-md">
      <nav className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-20 py-8 md:py-0 text-xl md:text-2xl h-auto md:h-24">
        <div className="mb-4 md:mb-0">
          <NavLink to="/">
            <div className="flex items-center gap-2">
              <div className="rounded-full border-2 border-white p-1">
                <img
                  src="./sudip.jpg"
                  alt="Profile"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </div>
              <div className="">
                <h1 className="hover:text-red-700">InBio</h1>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 list-none">
          <li className="hover:text-red-600">
            <NavLink to="/" activeClassName="text-red-600">
              Home
            </NavLink>
          </li>
          <li className="hover:text-red-600">
            <NavLink to="about" activeClassName="text-red-600">
              About
            </NavLink>
          </li>
          <li className="hover:text-red-600">
            <NavLink to="project" activeClassName="text-red-600">
              Project
            </NavLink>
          </li>
          <li className="hover:text-red-600">
            <NavLink to="contact" activeClassName="text-red-600">
              Contact Me
            </NavLink>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
