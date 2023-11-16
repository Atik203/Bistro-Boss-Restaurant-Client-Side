import React from "react";
import { Helmet } from "react-helmet";
import MenuCover from "../../Components/MenuCover/MenuCover";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import DessertMenu from "../../Components/DessertMenu/DessertMenu";
import SaladMenu from "../../Components/SaladMenu/SaladMenu";
import SoupMenu from "../../Components/SoupMenu/SoupMenu";
import PizzaMenu from "../../Components/PizzaMenu/PizzaMenu";
import useMenu from "../../Hooks/useMenu";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";

const Menu = () => {
  const { Menu } = useMenu();
  const desserts = Menu.filter((item) => item.category === "dessert");
  const soups = Menu.filter((item) => item.category === "soup");
  const salads = Menu.filter((item) => item.category === "salad");
  const pizza = Menu.filter((item) => item.category === "pizza");
  const offers = Menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuCover></MenuCover>
      <div className="my-20">
        <h1 className="text-center text-[#D99904] text-lg p-2 mb-10 border-b-4 max-w-max mx-auto">
          ---Don't miss---
        </h1>
        <h1 className="text-center mb-10 font-normal text-2xl border-b-4 p-2 max-w-max mx-auto">
          TODAY'S OFFER
        </h1>
        <div className="grid grid-cols-2 items-center justify-center gap-8 w-10/12 mx-auto mt-10">
          {offers?.map((menu) => (
            <PopularMenu menu={menu} key={menu._id}>
              {" "}
            </PopularMenu>
          ))}
        </div>
        <div className="text-center">
          <button
            className="text-center text-lg mt-10 rounded-lg"
            style={{ borderBottom: "3px solid #1F2937" }}
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
      {/* dessert section */}
      <DessertMenu></DessertMenu>
      <div className="my-20">
        <div className="grid grid-cols-2 items-center justify-center gap-8 w-10/12 mx-auto mt-10">
          {desserts?.map((menu) => (
            <PopularMenu menu={menu} key={menu._id}>
              {" "}
            </PopularMenu>
          ))}
        </div>
        <div className="text-center">
          <button
            className="text-center text-lg mt-10 rounded-lg"
            style={{ borderBottom: "3px solid #1F2937" }}
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
      {/* pizza section */}
      <PizzaMenu></PizzaMenu>
      <div className="my-20">
        <div className="grid grid-cols-2 items-center justify-center gap-8 w-10/12 mx-auto mt-10">
          {pizza?.map((menu) => (
            <PopularMenu menu={menu} key={menu._id}>
              {" "}
            </PopularMenu>
          ))}
        </div>
        <div className="text-center">
          <button
            className="text-center text-lg mt-10 rounded-lg"
            style={{ borderBottom: "3px solid #1F2937" }}
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
      {/* soup section */}
      <SoupMenu></SoupMenu>
      <div className="my-20">
        <div className="grid grid-cols-2 items-center justify-center gap-8 w-10/12 mx-auto mt-10">
          {soups?.map((menu) => (
            <PopularMenu menu={menu} key={menu._id}>
              {" "}
            </PopularMenu>
          ))}
        </div>
        <div className="text-center">
          <button
            className="text-center text-lg mt-10 rounded-lg"
            style={{ borderBottom: "3px solid #1F2937" }}
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
      {/* salad section */}
      <SaladMenu></SaladMenu>
      <div className="my-20">
        <div className="grid grid-cols-2 items-center justify-center gap-8 w-10/12 mx-auto mt-10">
          {salads?.map((menu) => (
            <PopularMenu menu={menu} key={menu._id}>
              {" "}
            </PopularMenu>
          ))}
        </div>
        <div className="text-center">
          <button
            className="text-center text-lg mt-10 rounded-lg"
            style={{ borderBottom: "3px solid #1F2937" }}
          >
            ORDER YOUR FAVOURITE FOOD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
