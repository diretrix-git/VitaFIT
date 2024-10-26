import React from "react";
import PricingSection from "../Pricing/Pricing";
import Services from "../Services/Services";
import Contact from "../ContactUs/ContactusComponent";
import transition from "../../transition";
import JourneyComponent from "../Journey/JourneyComponent";
import Test from "./../test3/test";
import Potential from "../Potential/Potential";
import Faqs from "../Faqs/Faqs";

const Home = () => {
  return (
    <>
      <JourneyComponent />
      {/* <Services /> */}

      <Test />
      <Services />
      <Potential />
      <PricingSection/>
      <Faqs />
      <Contact />
    </>
  );
};

export default transition(Home);
