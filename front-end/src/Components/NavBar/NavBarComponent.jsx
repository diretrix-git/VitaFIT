import React, { useState } from "react";
import Modal from "react-modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
    borderRadius: "10px",
    backgroundColor: "#1f2937",
  },
};

Modal.setAppElement("#root");

function HeaderComponent() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleLoginSignup = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <header className="flex justify-between items-center p-4 shadow-lg">
      <h2 className="text-white text-2xl font-bold cursor-pointer">
        <Link to="/">VitaFit</Link>
      </h2>
      <nav className="navigation space-x-7 justify-between">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/workout">Workout</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/shop">Shop</Link>
        <button
          className="btnlogin-popup bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300"
          onClick={openModal}
        >
          Sign In
        </button>
      </nav>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
        <h2 className="text-white text-xl font-bold">{isLogin ? "Login" : "Sign Up"}</h2>

        {isLogin ? (
          <form className="modal-form">
            <div className="mb-4">
              <label className="block text-white">Email:</label>
              <input type="email" placeholder="Enter your email" className="input-field" />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white">Password:</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="input-field"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-btn"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
        ) : (
          <form className="modal-form">
            <div className="mb-4">
              <label className="block text-white">Email:</label>
              <input type="email" placeholder="Enter your email" className="input-field" />
            </div>
            <div className="mb-4 relative">
              <label className="block text-white">Password:</label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="input-field"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="password-toggle-btn"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="mb-4 relative">
              <label className="block text-white">Confirm Password:</label>
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm your password"
                className="input-field"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="password-toggle-btn"
              >
                {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button type="submit" className="btn-submit">
              Sign Up
            </button>
          </form>
        )}

        <p className="text-white mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleLoginSignup} className="toggle-btn">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        <button onClick={closeModal} className="close-btn">
          Close
        </button>
      </Modal>
    </header>
  );
}

export default HeaderComponent;
