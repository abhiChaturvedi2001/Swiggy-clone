import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantDataAPI } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addMenuData,
  addNonVegData,
  addRestaurantInfoData,
} from "../utils/DatasSlice";
import { IoMdBicycle } from "react-icons/io";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const SinglePageProduct = () => {
  const [togglees, setTogglees] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const menuData = useSelector((store) => store.datas.menuData);
  const restaurantInfoData = useSelector(
    (store) => store.datas.restaurantInfoData
  );
  const nonVegData = useSelector((store) => store.datas.nonVegData);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(restaurantDataAPI + id);
    const json = await data.json();
    dispatch(
      addMenuData(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      )
    );
    dispatch(addRestaurantInfoData(json?.data?.cards[2]?.card?.card?.info));
    dispatch(
      addNonVegData(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8].card
          .card
      )
    );
  };

  if (restaurantInfoData.length === 0) return <h1>loading.....</h1>;
  if (nonVegData.length === 0) return <h1>loading.....</h1>;

  const {
    name,
    avgRating,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    city,
    areaName,
  } = restaurantInfoData;

  const { slaString } = restaurantInfoData?.sla;
  const { message } = restaurantInfoData?.feeDetails;

  // this function is to remove the html tags from API
  const removeHTMLTags = (message) => {
    return message.replace(/<\/?b>/g, "");
  };
  const sanitizedData = removeHTMLTags(message);

  return (
    <>
      <div className="flex items-center space-x-3 mx-auto w-[55rem] my-10 font-font-Poppins font-bold ">
        <Link to="/">
          <h1>Home / </h1>
        </Link>
        <h1>{city} / </h1>
        <h1>{name} </h1>
      </div>
      <div className="mx-auto w-[55rem] mt-5">
        <div className="main-container">
          <h1 className="text-2xl font-font-Poppins font-bold">{name}</h1>
          <div className="border shadow-lg rounded-2xl px-3 py-3 my-4">
            <h1 className="font-bold text-md font-font-Poppins">
              {avgRating} <span>({totalRatingsString})</span>{" "}
              <span>{costForTwoMessage}</span>
            </h1>
            <h3 className="underline font-md font-font-Poppins text-orange-500 font-bold my-2">
              {cuisines}
            </h3>
            <h3 className=" font-font-Poppins ">
              <span className="font-bold">Outlet</span> {areaName}
            </h3>
            <h3 className="font-bold font-font-Poppins capitalize my-2">
              {slaString}
            </h3>
            <h3 className=" flex items-center space-x-3 font-font-Poppins border-t-2 pt-3 ">
              <IoMdBicycle className="text-2xl" /> <span>{sanitizedData}</span>
            </h3>
          </div>
        </div>
        <div className=" border-t-[20px] mt-5 ">
          <h1 className="font-bold font-font-Poppins my-5 flex items-center justify-between">
            <span>
              Recommended ({menuData.length === 0 ? 0 : menuData.length}){" "}
            </span>{" "}
            {togglees === false ? (
              <MdKeyboardArrowUp
                onClick={() => {
                  setTogglees(true);
                }}
                className="text-3xl cursor-pointer"
              />
            ) : (
              <MdKeyboardArrowDown
                onClick={() => {
                  setTogglees(false);
                }}
                className="text-3xl cursor-pointer"
              />
            )}
          </h1>
          {menuData &&
            menuData.map((items) => {
              return (
                togglees && (
                  <MenuItems
                    key={items?.itemscard?.info.id}
                    menuItemsData={items}
                  />
                )
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SinglePageProduct;
