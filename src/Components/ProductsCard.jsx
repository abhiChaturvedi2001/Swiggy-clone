import React from "react";
import { base_img_url } from "../utils/constant";

const ProductsCard = ({ items }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, areaName } =
    items?.info;
  const { slaString } = items?.info?.sla;

  return (
    <>
      <div className="">
        <img
          className="w-full shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out h-[150px] object-cover"
          src={`${base_img_url}/${cloudinaryImageId}`}
          alt=""
        />
        <div className="my-3">
          <h3 className="text-md capitalize font-bold font-font-Poppins ">
            {name}
          </h3>
          <h3 className="font-bold">
            {avgRating} {slaString}
          </h3>
          <h3 className="font-bold font-font-Poppins">{areaName}</h3>
          <h3 className=" font-font-Poppins ">{cuisines.join(", ")}...</h3>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
