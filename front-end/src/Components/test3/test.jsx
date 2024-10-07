import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import "./style.css";
// import { toggle } from "../../features/navbarSlice";
const Test = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  console.log(authState.isAuthenticated);
  //   const isOpen = useSelector((state) => state.navbar.isOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center fixed w-full p-4 shadow-lg z-50">
      <h2 className="text-white text-2xl font-bold cursor-pointer">
        <Link to="/">VitaFit</Link>
      </h2>
      <nav className="navigation space-x-7 justify-between">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
        {authState.isAuthenticated ? (
          <>
            <Link to="/workout">Workout</Link>
            <Link to="/nutrition">Nutrition</Link>

            {authState.userRole === "admin" ? (
              <>
                <Link to="/addproduct">Add Product</Link>
                <Link to="/addcategory">Add Category</Link>
              </>
            ) : null}
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            {/* <Link to="/login">Log In</Link> */}
            {/* <Link to="/signup">Sign Up</Link> */}
            <Link
              to="/login"
              className="btnlogin-popup bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300"
            >
              Sign In
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Test;
