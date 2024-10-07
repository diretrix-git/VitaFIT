import React, { useEffect, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const JourneyComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all h1 elements within the container
      gsap.from(".journey h1", {
        y: 100, // Start from below
        opacity: 0, // Start invisible
        duration: 0.7, // Duration for each h1
        stagger: 0.2, // Stagger delay for each h1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/** interface*/}
      <motion.div ref={containerRef} className="journey" >
      
        <h1 className=" text-white text-[5.5em] font-bold  h-[18vh]  ml-[.8em] ">
          Your
        </h1>
        <h1 className=" text-white text-[5.5em] font-bold   h-[18vh] ml-[.8em] ">
          Journey to
        </h1>
        <h1 className=" text-white text-[5.5em] font-bold   h-[18vh] ml-[.8em]  ">
          Greatness Starts
        </h1>
        <h1 className=" text-white text-[5.5em] font-bold   h-[18vh] ml-[.8em]  ">
          Here.
        </h1>
      </motion.div>
      {/**body */}

      <div className="container bg-[#f4f4f4] w-full pt-[5em] mx-auto pb-[2em] min-w-full ">
        <motion.div
          variants={fadeIn(1)} // Fade in with a 0.3s delay
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className=" flex-col lg:flex-row about flex  justify-evenly mb-[5rem] gap-x-[1rem] ml-[5rem] mr-[5rem] items-center"
        >
          <div className="about-left shadow-xl p-[2em] rounded max-w-[40rem] flex-grow ">
            <h2 className="text-[#ff6b6b] font-bold text-[1.8rem]">About Us</h2>
            <p className="text-[1.1rem] text-[#555] mt-4">
              Welcome to <strong className="text-[#ff6b6b]">VitaFit</strong>,
              where we believe in empowering every individual to reach their
              full fitness potential. Our platform is designed to provide you
              with everything you need to lead a healthier, stronger, and more
              balanced life.
            </p>
            <p className="text-[1.1rem] text-[#555] mt-4">
              Whether you’re just beginning your fitness journey or looking to
              take your performance to the next level, we offer:
            </p>
          </div>
          <div className="about-pic w-full lg:w-auto mt-6 lg:mt-0 flex justify-center">
            <img
              src="./media/about.jpg"
              alt=""
              className=" ml-[5rem] mr-[5rem] flex-grow max-w-[80%] lg:max-w-[25rem] lg:flex-grow-0 max-h-[80%] lg:max-h-[20rem]   "
            />
          </div>
        </motion.div>

        <div className="tailored">
          <div className="t-pic">
            {/* <img src="./media/tailored.jpg" alt=""> */}
          </div>
          <div className="w-r">
            <strong className="text-[#ff6b6b]">
              <h2>Tailored Workout Plans</h2>
            </strong>
            <p className="text-[1.1rem] text-[#555]">
              Our expertly designed workout plans cater to all fitness
              levels—from complete beginners to seasoned athletes. With a wide
              range of programs targeting different goals like strength,
              endurance, or weight loss, you can choose a plan that fits your
              specific needs and schedule.
            </p>

            <p className="text-[1.1rem] text-[#555]">
              Beyond just exercises, we focus on progression. Whether you're
              doing bodyweight workouts at home or using gym equipment, our
              plans evolve with your performance, helping you continuously push
              past your limits and achieve real, lasting results.
            </p>
          </div>
        </div>

        <div className="nutri">
          <div className="n-l">
            <strong className="text-[#ff6b6b]">
              <h2>Nutritional Guidance</h2>
            </strong>
            <p className="text-[1.1rem] text-[#555]">
              Nutrition is a key part of any fitness journey, and at{" "}
              <strong className="text-[#ff6b6b]">VitaFit</strong>, we’re here to
              guide you through it. Our platform offers personalized meal plans
              that align with your workout goals—whether you're aiming for
              muscle gain, fat loss, or overall wellness. From calorie counts to
              macronutrient breakdowns, every meal plan is crafted to fuel your
              body efficiently while satisfying your taste buds.
            </p>
          </div>
          <div className="n-r">{/* <img src="./media/n-r.jpg" alt=""> */}</div>
        </div>

        <div className="shop">
          <div className="s-l">{/* <img src="./media/s-l.avif" alt=""> */}</div>
          <div className="s-r">
            <strong className="text-[#ff6b6b]">
              <h2>Shop for Essentials</h2>
            </strong>
            <p className="text-[1.1rem] text-[#555]">
              Your fitness journey is supported by the right gear, and our shop
              is packed with everything you need to succeed. We offer a curated
              selection of high-quality fitness equipment, from dumbbells and
              resistance bands to yoga mats and kettlebells. No matter your
              fitness level or the type of workouts you enjoy, you’ll find the
              tools you need to train effectively at home or in the gym.
            </p>
            <p className="text-[1.1rem] text-[#555]">
              In addition to equipment, we stock top-rated supplements and
              accessories designed to maximize your performance and recovery.
              Explore products that boost your energy, enhance muscle recovery,
              and keep you on track to meet your fitness goals. Our shop is your
              one-stop destination for all things fitness!
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="m-l">
            <strong className="text-[#ff6b6b]">
              <h2>Our Mission: Building a Lifestyle of Fitness and Wellness</h2>
            </strong>
            <p className="text-[1.1rem] text-[#555]">
              At VitaFit, our mission is to make fitness a sustainable
              lifestyle, not just a temporary goal. We’re here to support you in
              every aspect of your journey—physically, mentally, and
              emotionally—through personalized workout plans, expert nutrition
              advice, and high-quality fitness gear.
            </p>
            <p className="text-[1.1rem] text-[#555]">
              Join our community and transform your approach to fitness.
              Together, we’ll help you unlock your full potential and make
              health and wellness an essential part of your everyday life.
            </p>
          </div>
          <div className="m-pic">
            {/* <img src="./media/mission.avif" alt=""/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyComponent;
