import React from "react";
import { FaStar, FaUtensils, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const domain = "http://localhost:5000";
const defaultImage =
  "https://i.pinimg.com/474x/b3/9f/4f/b39f4f4575a3e376aad55e8af4fb82b8.jpg";

const RecipeCard = ({ recipeData }) => {
  const navigate = useNavigate();

  const imgAddress = (item) =>
    item.recipeImage ? `${domain}/${item.recipeImage}` : defaultImage;

  return (
    <div className="flex flex-wrap gap-6 justify-center p-4">
      {recipeData.map((item) => (
        <div
          key={item._id}
          className="w-full md:w-96 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          onClick={() => navigate(`/recipe/${item._id}`)}
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={imgAddress(item)}
              alt={item.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                if (e.target.src !== defaultImage) e.target.src = defaultImage;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 right-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <FaStar />
              <span>{item.rating || "4.5"}</span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="font-bold text-2xl text-gray-800 line-clamp-2">
              {item.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <FaUtensils className="text-gray-500" />
                <span className="text-sm text-gray-600">
                  Serves: {item.servingSize || "4"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-gray-500" />
                <span className="text-sm text-gray-600">30 mins</span>
              </div>
            </div>

            <div className="py-3 border-y border-gray-200">
              <p className="text-xs text-gray-500">Meal Plan</p>
              <p className="font-medium text-gray-700">
                {item.mealplan?.name || "—"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
