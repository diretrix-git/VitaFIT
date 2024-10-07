import { Link } from "react-router-dom";

const CategoryCard = ({categoryData}) => {
  const {_id,categoryTitle, categoryImage, recipes } = categoryData
  return (
    <div className="max-h-[152.9px] min-w-[300px] relative bg-white flex-grow p-4 rounded-xl flex gap-4 font-righteous border border-gray-200 shadow-md overflow-hidden">
      <img src={categoryImage}
      alt=""
      className="w-[180px] object-cover min-h-[180px] rounded-full absolute -top-4 -left-[78px] sm:-left-10" />
      <div className="flex flex-col justify-center gap-3 pl-[100px] sm:pl-[140px] flex-grow">
        <h4 className="text-[20px]">{categoryTitle} Recipes</h4>
        <p className="text-[#636363] text-[12px] font-medium ">
          Explore {categoryTitle} Recipes and Learn, Cook $ Eat your {categoryTitle} Food
        </p>
        <span className="flex justify-between items-center">
          <p className="text-[#636363] text-[12px] font-medium ">{recipes.length}+ Recipes</p>
          <Link  to={`/category/${_id}`} className="border-[#00B412] border-2 rounded-full text-[#00B412] text-[12px] px-3 py-1 bg-[#DEEEDF] hover:bg-[#00B412] hover:text-white transition-all">
            View Recipes
          </Link>
        </span>
      </div>
    </div>
  );
};


export default CategoryCard;


// import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

// const ZzzComponent = () => {
//   return (
//     <>
//     {/* up */}
//       <motion.div
//         variants={fadeIn("up", 0.3)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.5 }}
//         className=" flex-col lg:flex-row about flex pt-[10rem] justify-evenly mb-[5rem] gap-x-[1rem] ml-[5rem] mr-[5rem] items-center"
//       >
//         <div className="about-left shadow-xl p-[2em] rounded max-w-[40rem] flex-grow ">
//           <h2 className="text-[#ff6b6b] font-bold text-[1.8rem]">About Us</h2>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Welcome to <strong className="text-[#ff6b6b]">VitaFit</strong>,
//             where we believe in empowering every individual to reach their full
//             fitness potential. Our platform is designed to provide you with
//             everything you need to lead a healthier, stronger, and more balanced
//             life.
//           </p>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Whether you’re just beginning your fitness journey or looking to
//             take your performance to the next level, we offer:
//           </p>
//         </div>
//         <div className="about-pic w-full lg:w-auto mt-6 lg:mt-0 flex justify-center">
//           <img
//             src="./media/about.jpg"
//             alt="VitaFit - About Us Image"
//             className=" ml-[5rem] mr-[5rem] flex-grow max-w-[80%] lg:max-w-[25rem] lg:flex-grow-0 max-h-[80%] lg:max-h-[20rem]   "
//           />
//         </div>
//       </motion.div>
//       {/* left */}
//       <motion.div
//         variants={fadeIn("left", 0.3)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.7 }}
//         className=" flex-col lg:flex-row about flex  justify-evenly mb-[5rem] gap-x-[1rem] ml-[5rem] mr-[5rem] items-center"
//       >
//         <div className="about-left shadow-xl p-[2em] rounded max-w-[40rem] flex-grow ">
//           <h2 className="text-[#ff6b6b] font-bold text-[1.8rem]">About Us</h2>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita cumque exercitationem ad porro voluptates provident! Voluptatibus repellendus, deserunt aliquam velit sed commodi asperiores praesentium, iusto temporibus dolore, fugit quibusdam recusandae!
//           </p>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Whether you’re just beginning your fitness journey or looking to
//             take your performance to the next level, we offer:
//           </p>
//         </div>
//         <div className="about-pic w-full lg:w-auto mt-6 lg:mt-0 flex justify-center">
//           <img
//             src="./media/about.jpg"
//             alt="VitaFit - About Us Image"
//             className=" ml-[5rem] mr-[5rem] flex-grow max-w-[80%] lg:max-w-[25rem] lg:flex-grow-0 max-h-[80%] lg:max-h-[20rem]   "
//           />
//         </div>
//       </motion.div>
//       {/* right */}
//       <motion.div
//         variants={fadeIn("right", 0.3)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.5 }}
//         className=" flex-col lg:flex-row about flex  justify-evenly mb-[5rem] gap-x-[1rem] ml-[5rem] mr-[5rem] items-center"
//       >
//         <div className="about-left shadow-xl p-[2em] rounded max-w-[40rem] flex-grow ">
//           <h2 className="text-[#ff6b6b] font-bold text-[1.8rem]">About Us</h2>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Welcome to <strong className="text-[#ff6b6b]">VitaFit</strong>,
//             where we believe in empowering every individual to reach their full
//             fitness potential. Our platform is designed to provide you with
//             everything you need to lead a healthier, stronger, and more balanced
//             life.
//           </p>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Whether you’re just beginning your fitness journey or looking to
//             take your performance to the next level, we offer:
//           </p>
//         </div>
//         <div className="about-pic w-full lg:w-auto mt-6 lg:mt-0 flex justify-center">
//           <img
//             src="./media/about.jpg"
//             alt="VitaFit - About Us Image"
//             className=" ml-[5rem] mr-[5rem] flex-grow max-w-[80%] lg:max-w-[25rem] lg:flex-grow-0 max-h-[80%] lg:max-h-[20rem]   "
//           />
//         </div>
//       </motion.div>
//       <motion.div
//         variants={fadeIn("up", 0.3)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.5 }}
//         className=" flex-col lg:flex-row about flex  justify-evenly mb-[5rem] gap-x-[1rem] ml-[5rem] mr-[5rem] items-center"
//       >
//         <div className="about-left shadow-xl p-[2em] rounded max-w-[40rem] flex-grow ">
//           <h2 className="text-[#ff6b6b] font-bold text-[1.8rem]">About Us</h2>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Welcome to <strong className="text-[#ff6b6b]">VitaFit</strong>,
//             where we believe in empowering every individual to reach their full
//             fitness potential. Our platform is designed to provide you with
//             everything you need to lead a healthier, stronger, and more balanced
//             life.
//           </p>
//           <p className="text-[1.1rem] text-[#555] mt-4">
//             Whether you’re just beginning your fitness journey or looking to
//             take your performance to the next level, we offer:
//           </p>
//         </div>
//         <div className="about-pic w-full lg:w-auto mt-6 lg:mt-0 flex justify-center">
//           <img
//             src="./media/about.jpg"
//             alt=""
//             className=" ml-[5rem] mr-[5rem] flex-grow max-w-[80%] lg:max-w-[25rem] lg:flex-grow-0 max-h-[80%] lg:max-h-[20rem]   "
//           />
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default ZzzComponent;
