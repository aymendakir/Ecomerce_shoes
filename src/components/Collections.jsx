import { ChevronRight } from "lucide-react";
import React from "react";
import imgnewcollection from "../assets/images/collectionshoes.png";
import mencollection from "../assets/images/mencollection.png";
import WomenCollection from "../assets/images/womencollection.png";
import { Link } from "react-router-dom";

function Collections() {
  return (
    <section className="w-[70%] mx-auto grid grid-cols-3 gap-16 mt-20 max-lg:grid-cols-2 max-md:grid-cols-1 justify-items-center max-lg:w-[90%] max-md:grid-rows-2 ">
      <div className="relative w-[100%] h-[350px] bg-gradient-to-br from-yellow-100 to-white rounded-xl hover:scale-105 flex flex-col justify-end items-center">
        <img
          src={imgnewcollection}
          className="scale-110 absolute -top-10 max-md:w-[400px]"
        />
        <h5 className="capitalize text-xl font-medium mb-5">new collection</h5>
        <button className="px-2 p-0.5  border-2 border-black rounded-full flex gap-2 items-center justify-center mb-10 hover:bg-black hover:text-white hover:border-yellow-400">
          <span className="font-semibold font-mono uppercase">shop now</span>{" "}
          <ChevronRight />
        </button>
      </div>
      <div className="relative w-[100%] h-[350px]  bg-gradient-to-br from-rose-400 to-rose-200 rounded-xl hover:scale-105 flex flex-col justify-end items-center">
        <img
          src={WomenCollection}
          className="-rotate-[30deg] scale-110 absolute -top-10 max-md:w-[400px]"
        />
        <h5 className="capitalize text-xl font-medium mb-5">for Women</h5>
        <Link to={"/shop/Women"}>
          <button className="px-2 p-0.5  border-2 border-black rounded-full flex gap-2 items-center justify-center mb-10 hover:bg-black hover:text-white hover:border-blue-400">
            <span className="font-semibold font-mono uppercase">shop now</span>{" "}
            <ChevronRight />
          </button>
        </Link>
      </div>
      <div className="relative w-[100%] h-[350px] bg-gradient-to-br from-blue-400 to-blue-200 rounded-xl hover:scale-105 flex flex-col justify-end items-center">
        <img
          src={mencollection}
          className=" absolute -top-16 max-md:w-[300px]"
          width={270}
        />
        <h5 className="capitalize text-xl font-medium mb-5">for men</h5>
        <Link to={"/shop/men"}>
          <button className="px-2 p-0.5  border-2 border-black rounded-full flex gap-2 items-center justify-center mb-10 hover:bg-black hover:text-white hover:border-blue-400">
            <span className="font-semibold font-mono uppercase">shop now</span>{" "}
            <ChevronRight />
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Collections;
