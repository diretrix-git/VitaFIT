import React from "react";

const Card = ({ image, title, details }) => {
  return (
    <div className="relative h-96 w-full md:w-80 [perspective:1000px] group">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            src={image}
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            alt={title}
          />
        </div>
        {/* Back side */}
        <div className="absolute inset-0 h-full w-full bg-black/70 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center flex-col">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-lg">{details}</p>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      image:
        "https://i.pinimg.com/originals/e5/e4/2d/e5e42d3d7013bf14aabe6d979670f2d2.jpg",
      title: "Card 1",
      details: "",
    },
    {
      image:
        "https://i.pinimg.com/control/564x/fe/5c/f3/fe5cf30aec2b23cea36355320b809ba4.jpg",
      title: "Card 2",
      details: "Details for card 2",
    },
    {
      image:
        "https://i.pinimg.com/originals/e5/e4/2d/e5e42d3d7013bf14aabe6d979670f2d2.jpg",
      title: "Card 3",
      details: "Details for card 3",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-slate-100 p-4">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            details={card.details}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
