import React, { useState } from "react";
import { motion } from "framer-motion";
import axiosInstance from "../../config/axiosConfig";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const response = await axiosInstance.post("/contact/create", data, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success(response.data.message);
      console.log("Message sent successfully:", response);
      //   make form data empty
      // setFormData({
      //   name: "",
      //   email: "",
      //   message: "",
      // });
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.msg || "An error occurred");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       alert("Failed to send message.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("There was an error sending your message.");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E2DDDB]">
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y:20 }}
        animate={{ opacity: 1, scale: 1, y:0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-800 text-gray-100 p-10 rounded-lg shadow-lg w-full max-w-4xl flex"
      >
        {/* Left section with text */}
        <div className="w-1/2 pr-12">
          <h2 className="text-4xl font-bold mb-6">Talk to Our Specialists</h2>
          <p className="text-lg mb-8">
            Fill in your details, and our team will contact you shortly.
          </p>
          <div className="text-sm">
            <p>Email: contact@yourcompany.com</p>
            <p>WhatsApp: +1 123-456-7890</p>
          </div>
        </div>

        {/* Right section with form */}
        <div className="w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-600 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-600 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-600 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
