import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import axiosInstance from "../../config/axiosConfig";

const RecipeCard = ({ recipeData }) => {
  const domain = `http://localhost:5000`;

  const imgAddress = (item) => {
    return item.productImage ? `${domain}/${item.productImage}` : item.imgUrl;
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {recipeData.map((item, index) => (
        <motion.div
          key={index}
          className="w-full md:w-80 bg-white space-y-6 p-6 rounded-[20px] shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link to={`/recipes`} className="block">
            <motion.img
              src={`${imgAddress(item)}`}
              alt="recipe image"
              className="w-full h-48 object-cover bg-[#969696] rounded-[20px]"
              whileHover={{ scale: 1.05 }}
            />
          </Link>

          <motion.h3
            className="w-full h-16 font-semibold text-xl md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {item.title}
          </motion.h3>

          <div className="flex flex-col gap-4">
            <Link to={`/recipes/`}>
              <div className="flex flex-row gap-8">
                <span className="space-y-2">
                  <p className="text-xs text-black/50 font-normal">Category</p>
                  <p className="text-base text-black/70 font-semibold">
                    {item.mealplan._id}
                  </p>
                </span>
                <span className="w-[1px] h-[50px] bg-black/30"></span>
                <span className="space-y-2">
                  <p className="text-xs text-black/50 font-normal">Rating</p>
                  <span className="flex items-center gap-1 text-[#FFC700]">
                    <FaStar className="w-6 h-6" />
                    <p className="text-base text-black/70 font-semibold">
                      {item.rating || "rating"}
                    </p>
                  </span>
                </span>
              </div>
            </Link>

            <span className="w-full h-[1px] bg-black/30"></span>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src="../Cook.jpg"
                  alt="profile"
                  className="bg-[#D9D9D9] rounded-full w-8 h-8"
                />
                <h5 className="font-normal text-base text-black/70">
                  {item.author || "Author"}
                </h5>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link to={`/update/`}>
                <motion.button
                  className="flex rounded-[9px] bg-black py-3 px-3 items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-6 h-6 text-white" />
                  <h6 className="text-base font-normal text-white">Edit</h6>
                </motion.button>
              </Link>

              <motion.button
                className="flex rounded-[9px] bg-[#EC2626] py-3 px-3 items-center gap-2"
                whileHover={{ scale: 1.1 }}
                onClick={() => console.log("Delete recipe")}
              >
                <MdDeleteOutline className="w-6 h-6 text-white" />
                <h6 className="text-base font-normal text-white">Delete</h6>
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RecipeCard;

// {
//   function handleLinkClick() {
//     window.scrollTo(0, 0);
//   }

// async function addFavourite() {
//   try {
//     const response = await axiosInstance.post(`/favourite/${id}`);

//     console.log(await response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function editRecipe() {
//   try {
//     const response = await axiosInstance.get(`/update/${id}`);

//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function removeRecipe() {
//   try {
//     const response = await axiosInstance.delete(`/recipes/${id}/delete`);

//     console.log(await response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// import React from "react";
// import { AiFillEdit, AiFillDelete } from "react-icons/ai";

// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const RecipeCard = ({ recipeData, userRole, handleEdit, handleDelete }) => {
//   const domain = `http://localhost:5000`;
//   const imgAddress = (item) => {
//     if (item.recipeImage) {
//       return `${domain}/${item.recipeImage}`;
//     } else {
//       return item.imgUrl;
//     }
//   };

//   return (
//     <div className="flex flex-wrap justify-around items-center my-2 gap-2">
//       {recipeData.map((item) => (
//         <motion.div
//           key={item.id}
//           className="max-w-sm rounded-lg overflow-hidden shadow-lg relative" // Use relative for positioning
//           initial={{ opacity: 0, y: 50 }} // Cards start slightly below and invisible
//           animate={{ opacity: 1, y: 0 }} // Cards animate into position
//           transition={{ duration: 0.5 }} // Animation timing
//         >
//           {/* Edit and Delete Buttons */}
//           {userRole === "admin" && (
//             <div className="absolute top-2 right-2 flex space-x-1">
//               <button
//                 onClick={() => handleEdit(item.category)}
//                 className="text-blue-500 hover:text-blue-700"
//               >
//                 <AiFillEdit />
//               </button>
//               <button
//                 onClick={() => handleDelete(item._id)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <AiFillDelete />
//               </button>
//             </div>
//           )}

//           <img
//             className="w-full h-auto max-h-64 object-contain p-5 rounded"
//             src={`${imgAddress(item)}`}
//             alt={item.name}
//           />

//           <div className="px-6 py-4">
//             <div className="font-bold text-xl mb-2">{item.name}</div>
//             <p className="text-gray-700 text-base mb-2">
//               <strong>Title: {item.title}</strong>
//             </p>
//             <p className="text-gray-700 text-base mb-2">
//               <strong>Brand:</strong> {item.brand}
//             </p>
//             <p className="text-gray-700 text-base mb-2">
//               <strong>Price:</strong> ${item.price}
//             </p>
//             <p className="text-gray-700 text-base mb-2">
//               <strong>Stock Left:</strong> {item.countInStock}
//             </p>
//             <p className="text-gray-700 text-base mb-2">{item.description}</p>
//           </div>

//           <div className="px-6 py-4 text-left flex justify-between">
//             <motion.button
//               className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
//               whileHover={{ scale: 1.05 }}
//             >
//               Add to Cart
//             </motion.button>
//             <motion.button
//               className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-700 transition-colors duration-200"
//               whileHover={{ scale: 1.05 }}
//             >
//               Buy Now
//             </motion.button>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default RecipeCard;
