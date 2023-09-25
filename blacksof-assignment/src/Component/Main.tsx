import React from "react";
import EastIcon from "@mui/icons-material/East";

const Main = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row text-white mt-10 ml-3 md:ml-32">
      <div className="md:w-1/2 ml-3 mr-10">
        <p className="text-3xl">
          Searching for <b>Augmented Development</b> Teams to steer your product
          towards triumph?
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4">
            <div className="text-center">
              <p className="text-2xl font-bold">50+</p>
              <p>Clients</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4">
            <div className="text-center">
              <p className="text-2xl font-bold">80+</p>
              <p>Projects successfully completed</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 my-4">
            <div className="text-center">
              <p className="text-2xl font-bold">60%</p>
              <p>of the clients converted into long term engagement partners</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-5 md:mt-0 bg-white rounded-md p-4 ml-5 mr-5">
        <h2 className="text-2xl font-bold">Fill Out the form.</h2>
        <h3 className="text-lg text-black">
          Our team will touch base with you within 24 hours.
        </h3>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700"> </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
              className="px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email ID*"
              className="px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              className="px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Contact Number"
              className="px-3 py-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700"></label>
            <input
              type="text"
              id="requirements"
              name="requirements"
              placeholder="Tell us your requirements*"
              className="px-3 py-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-neutral-900 hover:bg-neutral-700 text-white text-xl md:text-xl px-3 md:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-700 text-xl md:text-xl px-3 md:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 ml-2">
            <EastIcon style={{ fontSize: "1rem", color: "white" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
