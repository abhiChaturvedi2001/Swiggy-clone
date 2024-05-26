import React from "react";
import { itemsImagesURL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addCartData } from "../utils/DatasSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MenuItems = ({ menuItemsData }) => {
  const dispatch = useDispatch();
  const { id, name, defaultPrice, price, description, imageId } =
    menuItemsData?.card?.info;
  return (
    <>
      <ToastContainer />
      <div
        key={id}
        className="flex justify-between my-5 border-b-2 min-h-[30vh] h-auto pt-5"
      >
        <div className="w-[60%]">
          <h1 className=" font-font-Poppins text-xl font-bold ">{name}</h1>
          <h5 className=" font-font-Poppins font-bold ">
            ₹ {defaultPrice / 100 || price / 100}
          </h5>
          <p className="font-font-Poppins mt-2">{description}</p>
        </div>
        <div className="relative">
          <img
            className="w-[250px] h-[160px] rounded-lg shadow-md object-cover "
            src={itemsImagesURL + imageId}
            alt=""
          />
          <button
            onClick={() => {
              dispatch(addCartData(menuItemsData?.card?.info));
            }}
            className="font-font-Poppins bg-white shadow-xl font-bold border rounded-md w-1/2 py-2 text-green-600 absolute bottom-[35px] left-[65px] "
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
