import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then().catch();
  };
  useEffect(() => {
    const handleScroll = () => {
      // Adjust the threshold as needed based on your design
      const threshold = 100; // For example, set to 100 pixels

      // Check the scroll position and toggle the transparent class accordingly
      setIsNavbarTransparent(window.scrollY <= threshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : "text-white"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
          }
        >
          OUR SHOP
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar  ${
        isNavbarTransparent ? "bg-[#15151580]" : "hidden"
      } text-white fixed z-10 px-3 md:px-10`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <div id="res-title" className="cursor-pointer text-white">
          <Link to={"/"}>
            <p className="text-base md:text-2xl uppercase font-extrabold">
              Bistro Boss
            </p>
            <p className="text-base md:text-lg  font-bold uppercase tracking-widest md:tracking-[6px]">
              Restaurant
            </p>
          </Link>
        </div>
      </div>

      <div className="justify-end w-3/4 hidden lg:flex">
        <ul className="flex gap-8 px-1 pr-12">{links}</ul>
        <div className="mr-8 flex items-center gap-1 text-2xl cursor-pointer">
          <div>
            <BsCart4></BsCart4>
          </div>
          <div className="badge badge-secondary inline">+0</div>
        </div>
        <div className="mr-4 uppercase cursor-pointer">
          {user ? (
            <button onClick={handleLogout}>LOGOUT</button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#EEFF25]" : ""
              }
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
