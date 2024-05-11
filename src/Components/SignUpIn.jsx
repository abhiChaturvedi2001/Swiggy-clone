import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleCrossToggle } from "../utils/ToggleSlice";

const SignUpIn = () => {
  const tog = useSelector((store) => store.toggle.sideBarValue);
  const [isSignUpForm, setisSignUpForm] = useState(false);
  const [referralInput, setreferralInput] = useState(false);
  const dispatch = useDispatch();

  // close the side navbar
  const handle = () => {
    dispatch(handleCrossToggle());
  };
  return (
    <>
      <div
        className={`fixed top-0  z-50   ${
          tog ? `w-screen h-screen` : `hidden`
        }  bg-gradient-to-b from-transparent to-black transition-all duration-100 ease-in-out `}
      >
        <div
          className={`h-[100vh] px-5 absolute ${
            tog ? "right-0" : `right-[-40%]`
          } bg-white w-[40%]`}
        >
          <RxCross2
            className="text-3xl my-3 mb-3 cursor-pointer"
            onClick={handle}
          />
          <div>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">
                    {isSignUpForm ? "Sign up" : "Login"}
                  </h1>
                  <p>
                    or{" "}
                    <span
                      onClick={() =>
                        isSignUpForm === false
                          ? setisSignUpForm(true)
                          : setisSignUpForm(false)
                      }
                      className="text-orange-300 hover:underline cursor-pointer font-font-Poppins"
                    >
                      {isSignUpForm
                        ? "login to your account "
                        : "Create your Account"}
                    </span>
                  </p>
                </div>
                <img
                  className="w-[100px]  "
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-3">
              <input
                className="block py-5 w-full border px-2 "
                type="number"
                placeholder="PhoneNumber"
              />
              {isSignUpForm && (
                <input
                  className="block py-5 w-full border px-2 "
                  type="text"
                  placeholder="Name"
                />
              )}
              {isSignUpForm && (
                <input
                  className="block py-5 w-full border px-2 "
                  type="email"
                  placeholder="Email"
                />
              )}
              {referralInput && isSignUpForm && (
                <input
                  className="block py-5 w-full border px-2 "
                  type="text"
                  placeholder="code"
                />
              )}
              {!referralInput && isSignUpForm && (
                <p
                  onClick={() =>
                    referralInput === false
                      ? setreferralInput(true)
                      : window.addEventListener("load", () => {
                          setreferralInput(false);
                        })
                  }
                  className="font-bold text-sm my-4 text-blue-500 cursor-pointer"
                >
                  Have a Referral Code ?
                </p>
              )}
              <button className="bg-orange-400 mt-4 w-full py-3 text-white font-font-Poppins font-bold">
                {isSignUpForm ? "Continue" : "Login"}
              </button>
              <p className="font-bold mt-4">
                By clicking on Login, I accept the Terms & Conditions & Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpIn;
