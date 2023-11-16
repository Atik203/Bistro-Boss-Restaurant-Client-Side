import { Helmet } from "react-helmet";
import ShopCover from "../../Components/ShopCover/ShopCover";

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      <ShopCover></ShopCover>
    </div>
  );
};

export default Shop;
