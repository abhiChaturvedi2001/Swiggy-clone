import React, { useEffect, useState } from "react";
import { API_URL } from "../utils/constant";
import ProductsCard from "./ProductsCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Products = () => {
  const [restaurantData, setrestaurantData] = useState([]);
  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setrestaurantData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1 className="text-center font-bold text-2xl my-5">
        Restaurants with online food delivery in Indore
      </h1>
      <div className="grid grid-cols-4 w-[70%] mx-auto mt-10 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2 ">
        {restaurantData.map((items) => (
          <Link key={items?.info?.id} to={`/singlePageProduct/${items?.info?.id}`}>
            <ProductsCard  items={items} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
