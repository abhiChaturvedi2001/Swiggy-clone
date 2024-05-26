import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIncreaseQty, decreaseQty } from "../utils/DatasSlice";
import CartLoader from "./CartLoader";

const Cart = () => {
  const cartData = useSelector((store) => store.datas.cartData);
  const itemsTotal = useSelector((store) => store.datas.itemsTotal);
  const dispatch = useDispatch();
  const platformFee = 5;
  const deliveryCharges = 60;

  return cartData.length === 0 ? (
    <CartLoader />
  ) : (
    <>
      <div className="bg-[#e9ecee] min-h-screen h-auto w-full flex justify-center pt-5 space-x-10 py-5">
        <div className="w-[50rem]">
          <div
            className="h-[40vh] shadow-lg bg-white rounded-md flex space-x-5  items-center
           justify-center"
          >
            <div>
              <h1 className="font-bold font-font-Poppins text-2xl">Account</h1>
              <p className="mt-2 font-font-Poppins">
                To place your order now, log in to your existing account or sign
                up.
              </p>
              <br />
              <button className="border border-2-green px-2 py-2">
                Have an Account ? <span>Log in </span>
              </button>
              <button className="border border-green-600 hover:shadow-lg cursor-pointer bg-green-600 text-white  px-2 ml-2 py-2">
                New to Swiggy ? <span>Sign In </span>
              </button>
            </div>
            <img
              className="w-[100px] h-[100px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
              alt=""
            />
          </div>
        </div>
        <div className="w-[25rem] bg-white shadow-lg rounded-md h-screen  px-5 py-5">
          <h1 className=" uppercase font-bold tracking-wide font-font-Poppins ">
            Cart items
          </h1>
          <div className="h-[60vh] overflow-y-scroll">
            {cartData.map((items) => {
              const { id, name, quantity, totalAmount } = items;
              return (
                <>
                  <div
                    key={id}
                    className="flex items-center justify-between mt-5 "
                  >
                    <h1 className=" w-[50%] font-font-Poppins font-semibold">
                      {name}
                    </h1>
                    <div className="border px-4 py-1">
                      <span
                        onClick={() => dispatch(decreaseQty(id))}
                        className=" text-green-500 font-semibold cursor-pointer  font-font-Poppins"
                      >
                        -
                      </span>
                      <span className="ml-4 text-green-500 font-semibold  font-font-Poppins">
                        {quantity}
                      </span>
                      <span
                        onClick={() => dispatch(addIncreaseQty(id))}
                        className="ml-4 text-green-500 font-semibold cursor-pointer  font-font-Poppins"
                      >
                        +
                      </span>
                    </div>
                    <h3 className="font-semibold font-font-Poppins">
                      ₹ {totalAmount}
                    </h3>
                  </div>
                </>
              );
            })}
          </div>

          <div>
            <h4>Bill details</h4>
            <div className="border-b-2 pb-3">
              <h6 className="flex justify-between">
                Items Total <span>{itemsTotal}</span>{" "}
              </h6>
              <h6 className="flex justify-between">
                Delivery Fee | 1.0 kms <span>{deliveryCharges}</span>{" "}
              </h6>
            </div>
            <div className="mt-3">
              <h6 className="flex justify-between">
                Platform fee <span>{platformFee}</span>{" "}
              </h6>
            </div>
            <div className=" border-t-black border-t-4  mt-4">
              <h6 className="flex justify-between my-2">
                TO PAY <span>{itemsTotal + platformFee + deliveryCharges}</span>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
