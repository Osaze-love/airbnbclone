import Image from "next/image";
import React from "react";

const MediumCard = ({ image, title }) => {
  return (
    <div className="cursor-pointer my-4 hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-72 w-72">
        <Image src={image} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-sm font-extrabold md:text-md mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
