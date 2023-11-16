import React from "react";
import img from "../../assets/menu/banner3.jpg";

const MenuCover = () => {
  return (
    <div
      className="hero min-h-[90vh] mb-20"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 max-w-4xl h-80"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl font-bold">OUR MENU</h1>
          <p className="mb-5 text-xl">Would you like to try a dish?</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCover;
