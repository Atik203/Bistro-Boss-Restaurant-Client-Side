import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const UserTable = ({ user, handleDelete, index, handleAdmin }) => {
  const { name, _id, email } = user;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <div
          onClick={() => handleAdmin(_id)}
          className="bg-[#D99904] p-2 text-white cursor-pointer hover:bg-gray-400"
        >
          <FaUser></FaUser>
        </div>
      </td>

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

export default UserTable;
