import React from "react";
import { MdDelete } from "react-icons/md";
const CartItem = ({ item, handleDelete, index }) => {
  const { name, _id, price, image } = item;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}$</td>

      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-ghost text-base hover:text-black bg-red-500 text-white btn-xs"
        >
          <MdDelete></MdDelete>
        </button>
      </th>
    </tr>
  );
};

export default CartItem;
