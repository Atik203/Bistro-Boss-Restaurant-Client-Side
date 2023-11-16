import React from "react";

const OrderCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const styles = {
    borderRadius: "8px",
    borderBottom: "3px solid #BB8506",
  };
  return (
    <div
      className="h-[510px] rounded-md"
      style={{ background: "var(--Dark-07, #F3F3F3)" }}
    >
      <img src={image} alt="" className="w-full h-[300px]" />
      <p className="text-white absolute -mt-[288px] ml-72 bg-black px-4 py-2 w-20 rounded-sm text-center">
        ${price}
      </p>
      <div className="py-4 px-2 mt-2">
        <h2 className="text-center text-xl font-bold">{name}</h2>
        <p className="text-center">{recipe}</p>
      </div>
      <div className="card-actions justify-center mt-2">
        <button
          className="btn text-[#BB8506] bg-[#E8E8E8] hover:bg-[#1F2937]"
          style={styles}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
