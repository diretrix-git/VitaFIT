// AdminDashboard.js
import React, { useEffect, useState } from "react";
import { BellIcon } from "@heroicons/react/outline";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import axiosInstance from "../../config/axiosConfig";

// Register the Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axiosInstance.get("/contact/messages");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, []);

  // Sample data for the chart
  const chartData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 70],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col fixed h-full">
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="flex-1 p-4 space-y-4">
          <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-700">
            Add Recipe
          </button>
          <button className="w-full text-left py-2 px-4 rounded hover:bg-gray-700">
            Add Product
          </button>
          {/* Additional navigation items */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Messages</h1>
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative"
            >
              <BellIcon className="h-8 w-8 text-gray-300" />
              {messages.length > 0 && (
                <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-red-500"></span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-gray-800 shadow-lg rounded-md p-4 text-gray-200">
                {messages.length === 0 ? (
                  <p>No new messages</p>
                ) : (
                  <ul>
                    {messages.slice(0, 5).map((msg) => (
                      <li
                        key={msg._id}
                        className="border-b border-gray-700 py-2"
                      >
                        {msg.name}: {msg.message.slice(0, 30)}...
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </header>

        {/* Chart Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <Bar
              data={chartData}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
          </div>
        </div>

        {/* Messages Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Contact Messages</h2>
          <ul className="space-y-4">
            {messages.map((msg) => (
              <li key={msg._id} className="bg-gray-700 p-4 rounded-md">
                <h3 className="font-semibold">
                  {msg.name} - {msg.email}
                </h3>
                <p>{msg.message}</p>
                <span className="text-gray-500 text-sm">
                  {new Date(msg.createdAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
