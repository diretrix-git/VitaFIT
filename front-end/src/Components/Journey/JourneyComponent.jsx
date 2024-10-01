import React from "react";

const JourneyComponent = () => {
  return (
    <>
      <div className="bg-[url('/media/fitness.avif')] bg-no-repeat bg-cover bg-center h-screen flex">
        {/* Left side */}
        <div className="left flex-1 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            Your Journey to Greatness Starts Here.
          </h1>
        </div>
        {/* Right side */}
        <div className="right flex-1 flex items-center justify-center">
          {/* Right side content can go here */}
        </div>
      </div>
    </>
  );
};

export default JourneyComponent;
