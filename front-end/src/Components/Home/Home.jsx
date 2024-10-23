import React from "react";
import PricingSection from "../Pricing/Pricing";
import Services from "../Services/Services";
import transition from "../../transition";
import JourneyComponent from "../Journey/JourneyComponent";
import Test from "./../test3/test";

const Home = () => {
  return (
    <>
      <JourneyComponent />
      <PricingSection />
      <Test />
      <Services />
    </>
  );
};

export default transition(Home);
