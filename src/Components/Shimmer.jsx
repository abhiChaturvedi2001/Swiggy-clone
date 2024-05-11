import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shimmer = () => {
  return (
    <>
      <div className="grid grid-cols-4 w-[70%] mx-auto mt-10 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2">
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
        <Skeleton count={1} height={130} width={210} />
      </div>
    </>
  );
};

export default Shimmer;
