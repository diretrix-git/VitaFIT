import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
// import "./navbar.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { div } from "framer-motion/client";

export const NavbarComponent = () => {
  return <SlideTabs />;
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  // console.log(authState.isAuthenticated);
  // console.log(authState.userRole);
  //   const isOpen = useSelector((state) => state.navbar.isOpen);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="flex justify-between items-center sticky top-0 w-full p-2.5 shadow-lg z-50 bg-[#2c2b2a59] bg-opacity-50 backdrop-blur-md"
    >
      <h2 className="text-white text-2xl font-bold cursor-pointer">
        <Link to="/">VitaFit</Link>
      </h2>
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full bg-white p-1" //border-2 border-black
      >
        <Tab setPosition={setPosition}>
          <Link to=""> Home </Link>
        </Tab>
        <Tab setPosition={setPosition}>
          <Link to=""> About Us </Link>
        </Tab>
        <Tab setPosition={setPosition}>
          <Link to=""> Services</Link>
        </Tab>
        <Tab setPosition={setPosition}>
          <Link to=""> Workout Plans </Link>
        </Tab>
        <Tab setPosition={setPosition}>
          <Link to=""> Pricing</Link>
        </Tab>
        <Tab setPosition={setPosition}>
          <Link to="/addproduct"> Contact Us </Link>
        </Tab>
        <Cursor position={position} />
      </ul>
      {authState.isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="text-white bg-yellow-500 px-4 py-2 rounded-md"
        >
          Sign In
        </Link>
      )}
    </motion.div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/authSlice";
// import "./navbar.css";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// // import { toggle } from "../../features/navbarSlice";
// const NavbarComponent = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth);
//   // console.log(authState.isAuthenticated);
//   console.log(authState.userRole);
//   //   const isOpen = useSelector((state) => state.navbar.isOpen);

//   const handleLogout = () => {
//     dispatch(logout()); ***
//     navigate("/login");
//   };

//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious();
//     if (latest > previous && latest > 150) {
//       setHidden(true);
//     } else {
//       setHidden(false);
//     }
//   });

//   return (
//     <motion.header
//       variants={{
//         visible: { y: 0 },
//         hidden: { y: -100 },
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       className="flex justify-between items-center sticky top-0 w-full p-5 shadow-lg z-50 bg-black bg-opacity-50 backdrop-blur-md"
//     >
//       <h2 className="text-white text-2xl font-bold cursor-pointer">
//         <Link to="/">VitaFit</Link>
//       </h2>
//       <nav className="navigation space-x-7 justify-between">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/product">Shop</Link>
//         <Link to="/contactus">Contact Us</Link>
//         {authState.isAuthenticated ? (
//           <>
//             <Link to="/workout">Workout</Link>
//             <Link to="/addworkout">Add Workout</Link>
//             <Link to="/nutrition">Nutrition</Link>

//             {authState.userRole === "admin" ? (
//               <>
//                 <Link to="/addproduct">Add Product</Link>
//                 <Link to="/addcategory">Add Category</Link>
//                 <Link to="/addworkout-type">Add Workout-Type</Link>
//               </>
//             ) : null}
//             <button onClick={handleLogout}>Log Out</button>
//           </>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="btnlogin-popup bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300"
//             >
//               Sign In
//             </Link>
//           </>
//         )}
//       </nav>
//     </motion.header>
//   );
// };

// export default NavbarComponent;
