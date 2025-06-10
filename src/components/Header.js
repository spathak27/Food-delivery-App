import { LOGO_URL } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-50" src={LOGO_URL} />
      </div>
      <div className="flex items-center m-10 text-fuchsia-800">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 ">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>

          <li>
            <button
              className="cursor-pointer"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
