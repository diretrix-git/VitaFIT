import React from "react";

const CardComponent = ({ datas }) => {
  // const domain = `http://localhost:5000`;
  const imgAddress = (item) => {
    if (item.productImage) {
      return `${item.productImage}`;
    } else {
      return item.imgUrl;
    }
  };

  console.log(datas);

  return (
    <div className="flex flex-wrap justify-around items-center my-2 gap-2">
      {datas.map((item) => {
        return (
          <div className="max-w-sm rounded-lg  overflow-hidden shadow-lg ">
            <img
              className="w-full h-64 object-cover p-5 bg-cover rounded "
              src={`${imgAddress(item)}`}
              alt={item.alt}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"> {item.name}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
              <p>{item.price}</p>
              <p>{item.sets}</p>
            </div>
            <div className="px-6 py-4 text-left">
              <button className="bg-black text-white px-5 py-2 text-center">
                Learn more..
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardComponent;
