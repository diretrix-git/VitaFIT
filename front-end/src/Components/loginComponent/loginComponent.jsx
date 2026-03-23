import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axiosInstance from "../../config/axiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authSlice";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!loginData.email) errs.email = "Email is required";
    if (!loginData.password) errs.password = "Password is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/user/login", loginData);
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userRole", user.userRole);
      dispatch(login({ token, userRole: user.userRole }));

      toast.success(response.data.msg);
      setTimeout(() => {
        user.userRole === "admin" ? navigate("/admin") : navigate("/workout");
      }, 1000);
    } catch (error) {
      toast.error(error.response?.data?.msg || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#050505]">
      <ToastContainer position="top-right" theme="dark" />

      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 bg-[#0f0f0f] border-r border-[#2a2a2a] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#B76CF1] opacity-10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#B76CF1] opacity-10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="flex items-center gap-3 z-10">
          <span className="text-white text-xl font-bold tracking-wide">FitZone</span>
        </div>

        {/* Center content */}
        <div className="z-10">
          <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
            Train smarter.<br />
            <span className="text-[#B76CF1]">Live stronger.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-sm">
            Access your personalized workouts, meal plans, and recipes — all in one place.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex gap-8 z-10">
          {[["500+", "Workouts"], ["200+", "Recipes"], ["50+", "Meal Plans"]].map(([num, label]) => (
            <div key={label}>
              <p className="text-[#B76CF1] text-2xl font-bold">{num}</p>
              <p className="text-gray-500 text-sm">{label}</p>
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

          <h2 className="text-3xl font-bold text-white mb-1">Welcome back</h2>
          <p className="text-gray-500 mb-8">Sign in to continue your journey</p>

          <form onSubmit={handleSubmit} noValidate>
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
                value={loginData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#B76CF1] transition-all ${
                  errors.email ? "border-red-500" : "border-[#2a2a2a] hover:border-[#444]"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-7">
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-medium text-gray-400" htmlFor="password">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#B76CF1] transition-all pr-12 ${
                    errors.password ? "border-red-500" : "border-[#2a2a2a] hover:border-[#444]"
                  }`}
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
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
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
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#B76CF1] hover:text-[#d49ef7] font-medium transition-colors">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
