import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-base-200 rounded-sm text-gray-700"
            : ""
        }
      >
        <li className="py-2 px-4 text-gray-600 font-medium">Home</li>
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-base-200 rounded-sm text-gray-700"
            : ""
        }
      >
        <li className="py-2 px-4 text-gray-600 font-medium">Add Product</li>
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "bg-base-200 rounded-sm text-gray-700"
            : ""
        }
      >
        <li className="bg-base-200 rounded-sm font-medium text-gray-700">My Cart</li>
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-10 w-full glass">
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="normal-case text-xl">Automotive</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="hover:bg-gray-600 py-2 px-5 hover:text-white hover:rounded-md rounded-md border">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
