import React from "react";
import Image from "next/image";

const LargeCard = ({ image, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-7">
        <h3 className="text-xl md:text-2xl font-bold mb-3 w-64">{title}</h3>
        <p className="text-sm md:text-md">{description}</p>

        <button className="text-xs md:text-sm text-white bg-gray-900 px-4 cursor-pointer hover:scale-105 transition duration-150 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
