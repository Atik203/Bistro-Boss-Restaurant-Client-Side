import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxioxSecure";
import UserTable from "../UserTable/UserTable";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");

            refetch();
          }
        });
      }
    });
  };

  const handleAdmin = (id) => {
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
        axiosSecure.patch(`/users/${id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire("Update!", "User has been Updated.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-[#D99904] text-lg p-2 mb-10 border-b-4 max-w-max mx-auto">
        ---How many?---
      </h1>
      <h1 className="text-center mb-10 font-normal text-2xl border-b-4 p-2 max-w-max mx-auto">
        MANAGE ALL USERS
      </h1>
      <div className="text-center font-bold text-2xl">
        <h1>Total Users: {users.length}</h1>
        <div className="overflow-x-auto mt-4 lg:mt-8">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D99904] text-white rounded-md">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <UserTable
                  user={user}
                  index={index}
                  key={user._id}
                  handleAdmin={handleAdmin}
                  handleDelete={handleDelete}
                ></UserTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
