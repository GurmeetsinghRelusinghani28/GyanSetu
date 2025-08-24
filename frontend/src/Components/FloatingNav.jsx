"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingNav = ({ toggleCalendar }) => {
  const navigate = useNavigate();

  return (
    <div
className=" fixed hidden lg:block text-2xl md:text-[15px] top-4 left-1/4 right-1/4 z-[9999] 
           bg-white shadow-md rounded-2xl 
           items-center justify-center px-6 py-3"

    >
      <div className="flex justify-around items-center gap-6 flex-wrap">
        <button
          className="px-3 py-1 text-gray-700 hover:text-blue-600 hover:bg-orange-200 
                     transition ease-in-out hover:scale-[1.1] duration-300 rounded-md"
          id="calendar"
          onClick={(e) => {
            e.stopPropagation();
            toggleCalendar();
          }}
        >
          Calendar
        </button>

        <button
          className="px-3 py-1 text-gray-700 hover:text-blue-600 hover:bg-green-200 
                     transition ease-in-out hover:scale-[1.1] duration-300 rounded-md"
          id="about"
          onClick={() => navigate("/about")}
        >
          About
        </button>

        <button
          className="px-3 py-1 text-gray-700 hover:text-blue-600 hover:bg-red-200 
                     transition ease-in-out duration-300 hover:scale-[1.1] rounded-md"
          id="home"
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          className="px-3 py-1 text-gray-700 hover:text-blue-600 hover:bg-pink-200 
                     hover:scale-[1.1] transition ease-in-out duration-300 rounded-md"
          id="contact"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>

        <button
          className="px-3 py-1 text-gray-700 hover:text-blue-600 hover:scale-[1.1] 
                     hover:bg-purple-200 transition ease-in-out duration-300 rounded-md"
          id="login"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default FloatingNav;
