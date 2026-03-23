import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../../config/axiosConfig";

const SignupComponent = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!userData.username) errs.username = "Username is required";
    if (!userData.email) errs.email = "Email is required";
    if (!userData.password) errs.password = "Password is required";
    if (!userData.confirmPassword) errs.confirmPassword = "Please confirm your password";
    else if (userData.password !== userData.confirmPassword)
      errs.confirmPassword = "Passwords don't match";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/user/register", {
        name: userData.username,
        email: userData.email,
        password: userData.password,
      });
      toast.success(response.data.msg);
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      toast.error(error.response?.data?.msg || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#B76CF1] transition-all ${
      errors[field] ? "border-red-500" : "border-[#2a2a2a] hover:border-[#444]"
    }`;

  return (
    <div className="min-h-screen flex bg-[#050505]">
      <ToastContainer position="top-right" theme="dark" />

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-[#0f0f0f] border-r border-[#2a2a2a] relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#B76CF1] opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#B76CF1] opacity-10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="flex items-center gap-3 z-10">
          <span className="text-white text-xl font-bold tracking-wide">FitZone</span>
        </div>

        {/* Center content */}
        <div className="z-10">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            Start your<br />
            <span className="text-[#B76CF1]">fitness journey.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-sm">
            Join thousands of members tracking workouts, following meal plans, and hitting their goals.
          </p>
        </div>

        {/* Steps */}
        <div className="z-10 space-y-4">
          {[
            ["01", "Create your account"],
            ["02", "Set up your profile"],
            ["03", "Start training"],
          ].map(([step, label]) => (
            <div key={step} className="flex items-center gap-4">
              <span className="text-[#B76CF1] font-bold text-sm w-6">{step}</span>
              <span className="text-gray-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 relative">
        <Link
          to="/"
          className="absolute top-6 right-8 text-gray-500 hover:text-white text-3xl leading-none transition-colors"
          aria-label="Go home"
        >
          &times;
        </Link>

        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <span className="text-white text-lg font-bold">FitZone</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-1">Create an account</h2>
          <p className="text-gray-500 mb-8">Free forever. No credit card needed.</p>

          <form onSubmit={handleSubmit} noValidate>
            {/* Username */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-400 mb-1.5" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="johndoe"
                value={userData.username}
                onChange={handleChange}
                className={inputClass("username")}
              />
              {errors.username && <p className="text-red-400 text-xs mt-1">{errors.username}</p>}
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-400 mb-1.5" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={userData.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-400 mb-1.5" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={userData.password}
                  onChange={handleChange}
                  className={`${inputClass("password")} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="mb-7">
              <label className="block text-sm font-medium text-gray-400 mb-1.5" htmlFor="confirm-password">
                Confirm password
              </label>
              <div className="relative">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  className={`${inputClass("confirmPassword")} pr-12`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-lg bg-[#B76CF1] hover:bg-[#9f50e0] active:bg-[#7C2DC0] text-white font-semibold text-base transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-[#B76CF1] hover:text-[#d49ef7] font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
