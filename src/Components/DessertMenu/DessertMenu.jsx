import React from "react";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
const DessertMenu = () => {
  return (
    <div
      className="hero min-h-[90vh] mb-20"
      style={{
        backgroundImage: `url(${dessertImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 max-w-5xl h-80"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-5xl font-bold">DESSERTS</h1>
          <p className="mb-5 text-xl">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DessertMenu;
