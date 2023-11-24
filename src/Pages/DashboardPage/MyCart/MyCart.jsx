import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxioxSecure";
import CartItem from "../../../Components/CartItem/CartItem";

const MyCart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // axiosSecure.delete(`/orders/${id}`).then((res) => {
        //   if (res.data.deletedCount > 0) {
        //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
        //     // const remaining = orders.filter((order) => order._id !== id);
        //     // setOrders(remaining);
        //   }
        // });
      }
    });
  };

  return (
    <div className="">
      <h1 className="text-center text-[#D99904] text-lg p-2 mb-10 border-b-4 max-w-max mx-auto">
        ---My Cart---
      </h1>
      <h1 className="text-center mb-10 font-normal text-2xl border-b-4 p-2 max-w-max mx-auto">
        WANNA ADD MORE?
      </h1>
      <div className="font-bold text-lg flex items-center gap-3 md:gap-20 justify-center">
        <h1>Total Order: {cart.length}</h1>
        <h1>total price: ${totalPrice}</h1>
        <button className="btn bg-[#D99904] border-none text-base">Pay</button>
      </div>
      <div className="overflow-x-auto mt-4 lg:mt-8">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D99904] text-white rounded-md">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((item, index) => (
              <CartItem
                item={item}
                index={index}
                key={item._id}
                handleDelete={handleDelete}
              ></CartItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
