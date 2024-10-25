import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E2DDDB]">
      {/* Modal container with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
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
                htmlFor="telephone"
              >
                Telephone (With DDD)
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
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
