import { NavLink, Outlet } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import {
  FaHome,
  FaCalendarAlt,
  FaWallet,
  FaCalendarCheck,
  FaShoppingBag,
  FaAlignJustify,
  FaBook,
  FaUsers,
  FaList,
  FaUtensils,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";

const DrawerLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "text-white" : "text-black"
    }
  >
    {children}
  </NavLink>
);

const Dashboard = () => {
  // TODO: get isAdmin value from database
  const isAdmin = true;

  const userlinks = (
    <>
      <li>
        <DrawerLink to="/dashboard/userhome">
          <FaHome></FaHome> User Home
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/reservation">
          <FaCalendarAlt></FaCalendarAlt> Reservation
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/history">
          <FaWallet></FaWallet> Payment History
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/cart">
          <BsCart4></BsCart4>My Cart
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/review">
          <MdReviews></MdReviews>Add Review
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/booking">
          <FaCalendarCheck></FaCalendarCheck>my booking
        </DrawerLink>
      </li>
    </>
  );
  const adminlinks = (
    <>
      <li>
        <DrawerLink to="/dashboard/admin-home">
          <FaHome></FaHome> Admin Home
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/add-items">
          <FaUtensils /> AddItems
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/manage-items">
          <FaList></FaList> Manage Items
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/manage-booking">
          <FaBook></FaBook> Manage bookings
        </DrawerLink>
      </li>
      <li>
        <DrawerLink to="/dashboard/users">
          <FaUsers />
          All Users
        </DrawerLink>
      </li>
    </>
  );

  const menuLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : "text-black"
          }
        >
          <FaHome></FaHome> HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : "text-black"
          }
        >
          <FaMessage></FaMessage> CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : "text-black"
          }
        >
          <FaAlignJustify></FaAlignJustify> OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white" : "text-black"
          }
        >
          <FaShoppingBag></FaShoppingBag> OUR SHOP
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center mt-4">
        <label
          htmlFor="my-drawer-2"
          className="btn border-none text-sm bg-[#D1A054] mt-5 drawer-button lg:hidden"
        >
          Open Menu
        </label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] uppercase text-white font-bold text-lg min-h-full">
          {/* Sidebar content here */}
          {isAdmin ? adminlinks : userlinks}
          <div className="divider divider-neutral"></div>
          {menuLinks}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
