import React from "react";

const PopularMenu = ({ menu }) => {
  const { name, recipe, image, price } = menu;

  return (
    <div>
      <div className="flex items-center gap-6">
        <div>
          <img
            src={image}
            alt=""
            className="w-28 h-24"
            style={{ borderRadius: "0px 200px 200px 200px" }}
          />
        </div>
        <div className="flex items-center gap-2 max-w-md">
          <div>
            <h1 className="uppercase text-xl">{name}--------</h1>
            <p>{recipe}</p>
          </div>
          <div>
            <h1 className="text-[#BB8506] text-xl">${price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
