import React from "react";
import img from "../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured-section bg-fixed">
      <h1 className="text-center text-[#D99904] pt-8 text-lg p-2 mb-6 border-b-4 max-w-max mx-auto">
        ---Check it out---
      </h1>
      <h1 className="text-center mb-6 font-normal text-white text-2xl border-b-4 p-2 max-w-max mx-auto">
        FROM OUR MENU
      </h1>
      <div className="flex text-white items-center gap-8 w-10/12 mx-auto p-16">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h1>March 20, 2023 </h1>
          <p>
            WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button
            className="text-center text-lg mt-10 hover:text-red-500 rounded-lg"
            style={{ borderBottom: "3px solid #FFF" }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
