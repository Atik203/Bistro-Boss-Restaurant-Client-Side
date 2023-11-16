import { Helmet } from "react-helmet";
import ShopCover from "../../Components/ShopCover/ShopCover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderCard from "../../Components/OrderCard/OrderCard";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = ["salad", "pizza", "dessert", "soup"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const { Menu } = useMenu();
  const desserts = Menu.filter((item) => item.category === "dessert");
  const soups = Menu.filter((item) => item.category === "soup");
  const salads = Menu.filter((item) => item.category === "salad");
  const pizza = Menu.filter((item) => item.category === "pizza");

  const [tabIndex, setTabIndex] = useState(initialIndex);

  return (
    <div className="text-center">
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <ShopCover></ShopCover>
      <div className="w-10/12 mx-auto mb-20">
        <Tabs
          className=""
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="border-none text-orange-500">
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-center my-20 gap-8">
              {salads?.map((item) => (
                <OrderCard item={item} key={item._id}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-center my-20 gap-8">
              {pizza?.map((item) => (
                <OrderCard item={item} key={item._id}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-center my-20 gap-8">
              {desserts?.map((item) => (
                <OrderCard item={item} key={item._id}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 items-center justify-center my-20 gap-4">
              {soups?.map((item) => (
                <OrderCard item={item} key={item._id}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="my-20">
              <h1 className="text-4xl my-40 text-center font-bold">
                Sorry,No Items Available
              </h1>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
