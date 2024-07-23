import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between min-h-screen px-4 md:px-20 w-auto gap-2">
      <div className="md:p-24 w-full md:w-1/2 md:mt-60">
        <div className="flex flex-col gap-8 text-3xl">
          <h2>Welcome TO My World</h2>
          <h1 className="text-2xl font-bold flex flex-col gap-4">
            Hi, I am{" "}
            <span className="block text-4xl text-red-600">Sudip Raut</span>
            <span className="block text-4xl text-red-600">a Web Developer</span>
          </h1>
          <h4 className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            modi aut illo minima ab? Assumenda ducimus aspernatur optio. Modi
            nostrum assumenda adipisci distinctio illum aspernatur, asperiores
            iusto molestias provident? Ipsum.
          </h4>
        </div>
        <div className="py-2">
          <NavLink to="contact">
            <button className="w-full bg-sky-500 p-2 rounded-md text-2xl">
              Contact me
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end w-full md:w-1/2 mt-10 md:mt-0">
        <div className="h-[90%] w-[80%] bg-white rounded-lg relative flex items-end justify-center md:items-center md:justify-end">
          <img
            src="./sudip.jpg"
            alt="userImage"
            className="h-full w-full border-4 border-white rounded-md shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
