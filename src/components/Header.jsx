import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import nike from "../assets/images/nike-free-nike-air-max-sneakers-shoe-red-shoes-78c3ee1eb5170ce50ef0c55755e33899.png";
import { headerProduct } from "../lib/Constance";
import "../assets/fonts/BebasNeue-Regular.ttf";

function Header() {
  const [x, setX] = useState(1);
  return (
    <section className=" relative h-[90vh]   ml-3    ">
      <header
        className={`absolute h-[90vh] w-[205vh] mx-auto rounded-xl  flex flex-col justify-center items-center bg-gray-300/50 ${
          x <= 2500 ? "-translate-x-[2500px]" : "-translate-x-[0]"
        }    `}
      >
        <div className="flex  justify-center items-center h-1/2 mt-32 ">
          <div className="w-[370px] flex-col">
            <h1 className="text-[50px] uppercase font-semibold header">
              Nike air zoom 1 rep coral
            </h1>
            <button className="w-[150px] flex gap-1 bg-black rounded-full p-2 mt-2 items-center justify-center ">
              <span className="font-semibold text-xl text-white capitalize ">
                shop now
              </span>{" "}
              <ArrowRight className="text-white" />
            </button>
          </div>
          <div className="">
            <img
              src={
                "https://res.cloudinary.com/dfqlgqnft/image/upload/f_webp/f_auto,q_auto/v1/products/lv7t5zl7am9zdllc17wg"
              }
              alt="nike"
              title="nike"
              className="-mt-20"
              width={800}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative w-[90%] mx-auto h-1/2 after:absolute after:-top-10 after:left-[10%] after:bg-black/30 after:h-0.5 after:w-[80%] flex justify-around  gap-5 mt-16 ">
          {headerProduct.map((index) => (
            <div key={index} id="model">
              <h5 className="capitalize text-black font-bold text-xl">
                {index.name}
              </h5>
              <span>
                {index.label} {index.name === "price" ? "USD" : ""}
              </span>
            </div>
          ))}
        </div>
        <button
          className="rounded-lg h-[40px] w-[40px] bg-black absolute right-20 bottom-5 flex items-center justify-center"
          onClick={() => {
            if (x >= 2500) {
              setX(x - 2500);
            }
          }}
        >
          <ArrowLeft className="text-white" />
        </button>
        <button
          className="rounded-lg h-[40px] w-[40px] bg-black absolute right-0 bottom-5 flex items-center justify-center"
          onClick={() => {
            if (x <= 2500) {
              setX(x + 2500);
            }
          }}
        >
          <ArrowRight className="text-white" />
        </button>
      </header>
      <header
        className={`absolute h-[90vh] w-[205vh] mx-auto rounded-xl  flex flex-col justify-center items-center bg-gray-300/50 ${
          x > 2500 ? "-translate-x-[2500px]" : "-translate-x-[0]"
        }    `}
      >
        <div className="flex  justify-center items-center h-1/2 mt-32 ">
          <div className="w-[370px] flex-col">
            <h1 className="text-[50px] uppercase font-semibold">
              Nike air zoom super rep coral
            </h1>
            <button className="w-[150px] flex gap-1 bg-black rounded-full p-2 mt-2 items-center justify-center ">
              <span className="font-semibold text-xl text-white capitalize ">
                shop now
              </span>{" "}
              <ArrowRight className="text-white" />
            </button>
          </div>
          <div className="">
            <img
              src={
                "https://res.cloudinary.com/dfqlgqnft/image/upload/f_webp/f_auto,q_auto/v1/products/lv7t5zl7am9zdllc17wg"
              }
              alt="nike"
              title="nike"
              className="-mt-20"
              width={800}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative w-[90%] mx-auto h-1/2 after:absolute after:-top-10 after:left-[10%] after:bg-black/30 after:h-0.5 after:w-[80%] flex justify-around  gap-5 mt-16 ">
          {headerProduct.map((index) => (
            <div key={index} id="model">
              <h5 className="capitalize text-black font-bold text-xl">
                {index.name}
              </h5>
              <span>
                {index.label} {index.name === "price" ? "USD" : ""}
              </span>
            </div>
          ))}
        </div>
        <button
          className="rounded-lg h-[40px] w-[40px] bg-black absolute right-20 bottom-5 flex items-center justify-center"
          onClick={() => {
            if (x >= 2500) {
              setX(x - 2500);
            }
          }}
        >
          <ArrowLeft className="text-white" />
        </button>
        <button
          className="rounded-lg h-[40px] w-[40px] bg-black absolute right-0 bottom-5 flex items-center justify-center"
          onClick={() => {
            if (x <= 2500) {
              setX(x + 2500);
            }
          }}
        >
          <ArrowRight className="text-white" />
        </button>
      </header>
    </section>
  );
}

export default Header;
