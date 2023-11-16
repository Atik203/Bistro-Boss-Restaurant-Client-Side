import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Category from "../../Components/Category/Category";
import PopularMenu from "../../Components/PopularMenu/PopularMenu";
import img from "../../assets/home/chef-service.jpg";
import ChefRecommend from "../../Components/ChefRecommend/ChefRecommend";
import Featured from "../../Components/Featured/Featured";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { Helmet } from "react-helmet";
import useMenu from "../../Hooks/useMenu";

const Home = () => {
  const { Menu } = useMenu();
  const menus = Menu.filter((item) => item.category === "popular");
  const items = Menu.filter((item) => item.recommend === "yes");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      {/* Home Slider */}
      <div className="w-10/12 mx-auto my-20">
        <h1 className="text-center text-[#D99904] text-lg p-2 mb-10 border-b-4 max-w-max mx-auto">
          ---From 11:00am to 10:00pm---
        </h1>
        <h1 className="text-center mb-10 font-normal text-2xl border-b-4 p-2 max-w-max mx-auto">
          ORDER ONLINE
        </h1>
        <Category></Category>
      </div>
      {/* Bistro Boss section */}
      <div className="relative w-10/12 mx-auto mb-20">
        <div className="relative">
          <img src={img} className="w-full h-auto" alt="Restaurant Image" />
          <div className="absolute inset-0"></div>
        </div>
        <div className="w-3/4 p-8 mx-auto text-black bg-white rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-4xl font-normal uppercase text-center">
            Bistro Boss
          </h1>
          <p className="text-base justify-center mt-4">
            Indulge your senses at our exquisite restaurant, where culinary
            artistry meets unparalleled ambiance. Savor a diverse menu crafted
            with passion, featuring fresh, locally sourced ingredients that
            ignite a symphony of flavors. From mouthwatering appetizers to
            decadent desserts, each dish is a celebration of taste and
            creativity. Our attentive staff ensures a dining experience beyond
            compare, where every detail caters to your satisfaction.
          </p>
        </div>
      </div>
      {/* Popular Menu */}
      <div className="w-10/12 mx-auto my-20 text-center">
        <h1 className="text-center text-[#D99904] text-lg p-2 mb-10 border-b-4 max-w-max mx-auto">
          ---Check it out---
        </h1>
        <h1 className="text-center mb-10 font-normal text-2xl border-b-4 p-2 max-w-max mx-auto">
          FROM OUR MENU
        </h1>
        <div className="grid grid-cols-2 items-center justify-center gap-8">
          {menus?.map((menu) => (
            <PopularMenu menu={menu} key={menu._id}></PopularMenu>
          ))}
        </div>
        <button
          className="text-center text-lg mt-10 rounded-lg"
          style={{ borderBottom: "3px solid #1F2937" }}
        >
          View Full Menu
        </button>
      </div>
      {/* Call Us section */}
      <div className="mx-auto text-center w-10/12 bg-black h-60 rounded-md mb-20">
        <h1 className="text-white font-bold pt-24 text-5xl">
          Call Us: +88 0192345678910
        </h1>
      </div>
      {/* Chef recommendations */}
      <div className="mx-auto w-10/12 my-20">
        <h1 className="text-center text-[#D99904] text-lg p-2 mb-10 border-b-4 max-w-max mx-auto">
          ---Should Try---
        </h1>
        <h1 className="text-center mb-10 font-normal text-2xl border-b-4 p-2 max-w-max mx-auto">
          CHEF RECOMMENDS
        </h1>
        <div className="flex items-center justify-center gap-8">
          {items?.map((item) => (
            <ChefRecommend item={item} key={item._id}></ChefRecommend>
          ))}
        </div>
      </div>
      {/* featured sections */}
      <div className="my-20">
        <Featured></Featured>
      </div>
      {/* Testimonials section */}
      <div className="w-10/12 mx-auto">
        <h1 className="text-center text-[#D99904] text-lg p-2 mb-10 border-b-4 max-w-max mx-auto">
          ---What Our Clients Say---
        </h1>
        <h1 className="text-center mb-10 font-normal text-2xl border-b-4 p-2 max-w-max mx-auto">
          TESTIMONIALS
        </h1>
        <div>
          <Testimonial></Testimonial>
        </div>
      </div>
    </div>
  );
};

export default Home;
