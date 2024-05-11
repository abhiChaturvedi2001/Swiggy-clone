import React from "react";
import { navLinks } from "../utils/constant";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { RiUserSearchLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { FaPhabricator } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handleSingInToggle, handleToggle } from "../utils/ToggleSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const tog = useSelector((store) => store.toggle.navbarValue);
  // function of rendring the icons
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "PiShoppingBagOpenThin":
        return <PiShoppingBagOpenThin />;
      case "RiUserSearchLine":
        return <RiUserSearchLine />;
      case "CiSearch":
        return <CiSearch />;
      case "TbCircleDashedPercentage":
        return <TbCircleDashedPercentage />;
      case "FaPhabricator":
        return <FaPhabricator />;
      default:
        return null;
    }
  };

  // handling toggle
  const handlingToggle = () => {
    dispatch(handleToggle());
  };

  const handleSignInPage = (id) => {
    dispatch(handleSingInToggle(id));
  };
  return (
    <>
      {/* website navbar */}
      <nav className="flex  items-center justify-around py-3 shadow-lg font-font-Poppin max-lg:justify-between max-lg:px-8 ">
        <img
          src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
          alt=""
          className="logo w-[40px]"
        />
        <ul className="flex items-center space-x-4 max-lg:hidden">
          {navLinks.map((links) => {
            return (
              <>
                <li
                  className="flex items-center font-semibold hover:cursor-pointer hover:text-orange-600"
                  key={links.id}
                  onClick={() => handleSignInPage(links.id)}
                >
                  <span className="mr-4 text-2xl">
                    {renderIcon(links.linksLogo)}
                  </span>{" "}
                  {links.linksName}{" "}
                </li>
              </>
            );
          })}
        </ul>
        <RiMenu3Line
          onClick={handlingToggle}
          className="hidden max-lg:block text-3xl font-bold hover:cursor-pointer"
        />
      </nav>

      {/* mobile navbar */}
      <div
        className={`bg-gray-200  w-full h-[40vh] ${
          tog === false ? "hidden" : "false"
        }`}
      >
        <ul className="flex  flex-col justify-center items-center h-[40vh]">
          {navLinks.map((links) => {
            return (
              <>
                <li
                  className="flex items-center mt-4 font-semibold hover:cursor-pointer hover:text-orange-600"
                  key={links.id}
                >
                  <span className="mr-4 text-2xl">
                    {renderIcon(links.linksLogo)}
                  </span>{" "}
                  {links.linksName}{" "}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
