// PricingSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$19",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro",
      price: "$49",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Enterprise",
      price: "$99",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16">
      <h2 className="text-4xl font-bold mb-10">Our Pricing</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-lg p-8 w-80"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-600 mb-2">{feature}</li>
              ))}
            </ul>
            <motion.button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
