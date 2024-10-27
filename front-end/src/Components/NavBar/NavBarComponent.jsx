import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authSlice";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export const NavbarComponent = () => {
  return <SlideTabs />;
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [menuOpen, setMenuOpen] = useState(false); // To toggle the mobile menu
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  console.log(authState.isAuthenticated); // Check the authentication state
  console.log(authState.userRole); // Check the user role
  console.log(authState.token); // Check the user role

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

  const handleMenuToggle = () => {
    setMenuOpen((prev) => {
      console.log("Menu Open:", !prev); // Check the state here
      return !prev;
    });
  };

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="flex justify-between items-center sticky top-0 w-full p-2.5 shadow-lg z-50 bg-[#2c2b2a59] bg-opacity-50 backdrop-blur-md overflow-x-hidden"
    >
      {/* Logo */}
      <h2 className="text-white text-2xl font-bold cursor-pointer">
        <Link to="/">VitaFit</Link>
      </h2>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={handleMenuToggle}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Full Navigation - Hidden on Mobile */}
      <ul
        className={`relative mx-auto  hidden md:flex w-full md:w-auto rounded-full bg-white p-1 `}
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
      >
        {/* <Tab setPosition={setPosition}>
          <Link className="text-sm md:text-base" to="/">
            
            Home
          </Link>
        </Tab> */}
        {authState.isAuthenticated ? (
          <>
            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="about"
                smooth={true}
                duration={500}
                offset={-340}
              >
                About Us
              </ScrollLink>
            </Tab>
            <Tab setPosition={setPosition}>
              <Link className="text-sm md:text-base" to="/workout">
                Workout Plans
              </Link>
            </Tab>
            <Tab setPosition={setPosition}>
              <Link className="text-sm md:text-base" to="/recipe">
                Recipes
              </Link>
            </Tab>
            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="faqs"
                smooth={true}
                duration={500}
                offset={0}
              >
                FAQs
              </ScrollLink>
            </Tab>
            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="contactus"
                smooth={true}
                duration={500}
                offset={0}
              >
                Contact Us
              </ScrollLink>
            </Tab>
          </>
        ) : (
          <>
            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="about"
                smooth={true}
                duration={500}
                offset={-340}
              >
                About Us
              </ScrollLink>
            </Tab>

            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="services"
                smooth={true}
                duration={500}
                offset={60}
              >
                Services
              </ScrollLink>
            </Tab>
            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="pricing"
                smooth={true}
                duration={500}
                offset={0}
              >
                Pricing
              </ScrollLink>
            </Tab>
            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="faqs"
                smooth={true}
                duration={500}
                offset={0}
              >
                FAQs
              </ScrollLink>
            </Tab>
            <Tab setPosition={setPosition}>
              <ScrollLink
                className="text-sm md:text-base"
                to="contactus"
                smooth={true}
                duration={500}
                offset={0}
              >
                Contact Us
              </ScrollLink>
            </Tab>
          </>
        )}

        {/* <Tab setPosition={setPosition}>
          <ScrollLink
            className="text-sm md:text-base"
            to="services"
            smooth={true}
            duration={500}
            offset={60}
          >
            Services
          </ScrollLink>
        </Tab>
        <Tab setPosition={setPosition}>
          <ScrollLink
            className="text-sm md:text-base"
            to="pricing"
            smooth={true}
            duration={500}
            offset={0}
          >
            Pricing
          </ScrollLink>
        </Tab>
        <Tab setPosition={setPosition}>
          <ScrollLink
            className="text-sm md:text-base"
            to="faqs"
            smooth={true}
            duration={500}
            offset={0}
          >
            
            FAQs
          </ScrollLink>
        </Tab>
        <Tab setPosition={setPosition}>
          <ScrollLink
            className="text-sm md:text-base"
            to="contactus"
            smooth={true}
            duration={500}
            offset={0}
          >
            
            Contact Us
          </ScrollLink>
        </Tab> */}
        <Cursor position={position} />
      </ul>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col text-white space-y-4 z-1000"
        >
          {/*  flex flex-col items-center bg-gray-700 text-white space-y-4 mt-4 p-4 rounded-md top-16 right-4 z-1000 */}
          <Link className="text-sm" to="/">
            Home
          </Link>
          <Link className="text-sm" to="/about">
            About Us
          </Link>
          <Link className="text-sm" to="/services">
            Services
          </Link>
          <Link className="text-sm" to="/workout">
            Workout Plans
          </Link>
          <Link className="text-sm" to="/pricing">
            Pricing
          </Link>
          <Link className="text-sm" to="/contact">
            Contact Us
          </Link>
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
              className="bg-black text-white rounded-xl px-4 py-2 text-sm"
            >
              Login
            </Link>
          )}
        </motion.div>
      )}

      {/* Auth Button for Desktop */}
      {authState.isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="hidden md:block text-white bg-red-500 px-4 py-2 rounded-md"
        >
          Logout
        </button>
      ) : (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            to="/login"
            className="bg-black rounded-3xl text-white text-xl hover:rounded-xl px-8 py-3 transition-all duration-300"
          >
            Login
          </Link>
        </motion.div>
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
