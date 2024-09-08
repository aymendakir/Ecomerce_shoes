import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import shoes1 from "../assets/images/pngwing.com (4).png";
import shoes2 from "../assets/images/pngwing.com (5).png";
import "../assets/fonts/BebasNeue-Regular.ttf";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
              AIR JORDAN 3 Retro 88
            </h1>
            <Link className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] max-[1199px]:py-[3px] max-[1199px]:px-[15px] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff] mt-10">
              Shop Now
            </Link>
          </div>
          <div className="">
            <LazyLoadImage
              src={
                "https://res.cloudinary.com/dfqlgqnft/image/upload/f_auto,q_auto/n3p99tojxnypenv4if2y"
              }
              alt="nike"
              title="nike"
              className="-mt-20"
              width={700}
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative w-[90%] mx-auto h-1/2 after:absolute after:-top-10 after:left-[10%] after:bg-black/30 after:h-0.5 after:w-[80%] flex justify-around  gap-5 mt-16 ">
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">model</h5>
            <span>AIR JORDAN </span>
          </div>
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">Brand</h5>
            <span>Nike </span>
          </div>
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">Price</h5>
            <span>$79</span>
          </div>
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">color</h5>
            <span>White </span>
          </div>
        </div>
        <button
          name="previous"
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
          name="next"
          className="rounded-lg h-[40px] w-[40px] bg-black absolute right-5 bottom-5 flex items-center justify-center"
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
              Air Jordan 1 Reverse
            </h1>
            <Link className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] max-[1199px]:py-[3px] max-[1199px]:px-[15px] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff] mt-10">
              Shop Now
            </Link>
          </div>
          <div className="">
            <LazyLoadImage
              src={
                "https://res.cloudinary.com/dfqlgqnft/image/upload/f_auto,q_auto/doxcwyeqnhtdnu39ivox"
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
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">model</h5>
            <span>AIR JORDAN </span>
          </div>
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">Brand</h5>
            <span>Nike </span>
          </div>
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">Price</h5>
            <span>$79 </span>
          </div>
          <div id="model">
            <h5 className="capitalize text-black font-bold text-xl">color</h5>
            <span>Blue </span>
          </div>
        </div>
        <button
          name="previous"
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
          name="next"
          className="rounded-lg h-[40px] w-[40px] bg-black absolute right-5 bottom-5 flex items-center justify-center"
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
