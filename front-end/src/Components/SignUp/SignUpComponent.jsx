import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
export const SignupComponent = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(userData);
  // const [userName, setuserName] = useState("Krish");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState(""); // Fix: initialize as empty string
  // const [showPassword, setShowPassword] = useState(false); // Add showPassword state

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!userData.username) {
      errors.username = "Username is required";
    }
    if (!userData.email) errors.email = "Email is required";
    if (!userData.password) errors.password = "Password is required";
    if (!userData.confirmPassword)
      errors.confirmPassword = "Confirm Password is required";
    if (userData.password !== userData.confirmPassword)
      errors.confirmPassword = "Passwords must match";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/register",
          {
            name: userData.username,
            email: userData.email,
            password: userData.password,
          }
        );
        console.log(response);
        toast.success(response.data.msg);

        // navigate to login page
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        // console.error(error.response);
        // console.error(error.message);
        toast.error(error.response.data.msg);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505]">
      <div className="bg-[#212121] relative p-8 rounded-lg shadow-[0px_0px_24px_1px_#B76CF1] w-full max-w-md">
        <Link
          to="/"
          //   onClick={closeModal}

          className="absolute top-2 right-4 text-3xl text-gray-500 hover:text-white"
        >
          &times; {/* Close icon */}
        </Link>
        <h2 className="text-2xl font-bold mb-6 text-white">Register</h2>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-white bg-[#27272A] "
              type="text"
              id="username"
              placeholder="Enter your username"
              name="username"
              value={userData.username}
              onChange={handleChange}
              // onChange={(e)=>setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="text-red-500 text-sm">{errors.username}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#27272A] text-white "
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              // onChange={(e)=>setEmail(e.target.value)}
            />
            {/* {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )} */}
          </div>
          <div className="mb-4 relative ">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-[#27272A] text-white "
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-white font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border bg-[#27272A]  border-gray-300 rounded-md text-white"
              type={showConfirmPassword ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm your password"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.confirmPassword && (
              <div className="text-red-500 text-sm">
                {errors.confirmPassword}
              </div>
            )}
          </div>
          <button
            className="w-full bg-[#B76CF1] text-white py-2 px-4 rounded-md hover:bg-[#7C2DC0] focus:outline-none focus:bg-indigo-600"
            type="submit"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 space-y-2">
          <span className="text-white">
            Already have an account?{" "}
            <span
              className="text-[#B76CF1] hover:underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
            .
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupComponent;
