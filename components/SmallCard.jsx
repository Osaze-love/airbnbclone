import React from "react";
import Image from "next/image";

const SmallCard = ({ image, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200">
      <div className="relative h-12 w-12">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>
      <div>
        <h2 className="text-md">{location}</h2>
        <h3 className="text-xs text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
