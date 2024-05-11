import React, { useState } from "react";
import { MetroSpinner } from "react-spinners-kit";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <div className=" bg-slate-900  h-[40vh] w-full flex items-center justify-center flex-col ">
        <div className="spinner">
          <MetroSpinner size={40} color="white" loading={loading} />
        </div>
        <h1 className="text-3xl text-gray-300 mt-8 font-font-Poppins font-semibold">
          Looking for great food near you ...
        </h1>
      </div>
    </>
  );
};

export default Loader;
