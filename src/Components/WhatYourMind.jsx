import React, { useEffect, useState } from "react";
import { foodChoice } from "../utils/constant";
import Loader from "./Loader";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const WhatYourMind = () => {
  const [foodChoiceData, setFoodChoiceData] = useState([]);
  const [slide, setSlide] = useState(0);

  // setting the interval when the time is up this function will called
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFoodChoiceData(foodChoice);
    }, 3000);

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const nextSlide = () => {
    if (foodChoiceData.length - 8 === slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };
  return foodChoiceData.length === 0 ? (
    <Loader />
  ) : (
    <>
      <div className="flex items-center justify-around mt-10">
        <h1 className="font-bold text-2xl font-font-Poppins">
          What's on your mind
        </h1>
        <div className="flex items-center space-x-2">
          <FaArrowCircleLeft
            onClick={prevSlide}
            className="text-2xl cursor-pointer"
          />
          <FaArrowCircleRight
            onClick={nextSlide}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
      <div className="flex w-[70%] max-md:w-[80%] mx-auto mt-5  overflow-hidden  ">
        {foodChoiceData.map((items, index) => {
          return (
            <>
              <div
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                }}
                key={index}
                className="w-[120px] shrink-0 duration-500 "
              >
                <img src={items.foodImage} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default WhatYourMind;
