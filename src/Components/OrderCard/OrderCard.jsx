import { useContext } from "react";
import { AuthContext } from "./../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxioxSecure";
import axios from "axios";

const OrderCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleCart = (food) => {
    if (user && user?.email) {
      const foodItem = {
        menuId: _id,
        email: user.email,
        image,
        price,
        recipe,
        name,
      };

      axiosSecure.post("/carts", foodItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Added Successfully",
            text: "in the cart",
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Login",
        text: "Please Login to Add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
          onClick={() => handleCart(item)}
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
