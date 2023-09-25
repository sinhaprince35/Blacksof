import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import EastIcon from "@mui/icons-material/East";

const Header = () => {
  return (
    // Navbar Area
    <div className="mx-4 md:mx-8 lg:mx-12 xl:mx-20 px-4 md:px-42 py-4 md:py-9.25 pr-0 items-center ml-4 md:ml-72">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-orange-400 mr-4 md:mr-10">
          <AppsIcon style={{ fontSize: "3rem" }} />
          <span className="text-slate-400 text-xs">TECH</span>
        </a>
        <ul className="flex flex-wrap space-x-4 md:space-x-10 mt-2 md:mt-0">
          <li>
            <a href="#" className="text-slate-300">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-slate-300">
              Culture
            </a>
          </li>
        </ul>
        <div className="flex mt-4 md:mt-0">
          <button className="bg-neutral-900 hover:bg-neutral-700 text-white text-xl md:text-2xl px-3 md:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            Contact us
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-700 text-xl md:text-2xl px-3 md:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <EastIcon style={{ fontSize: "2rem", color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
