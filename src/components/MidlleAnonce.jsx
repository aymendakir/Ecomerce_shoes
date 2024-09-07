import React from "react";
import shoes from "../assets/images/mencollection.png";
import shoes2 from "../assets/images/nike-free-nike-air-max-sneakers-shoe-red-shoes-78c3ee1eb5170ce50ef0c55755e33899.png";

function Middle() {
  return (
    <section className=" flex max-lg:flex-col w-[95%] gap-5 mx-auto">
      <div className="w-[40%] max-lg:w-[100%] max-lg:h-[500px] h-[80vh] bg-gray-200 rounded-xl relative">
        <div className="ml-10 font-mono mt-5  ">
          <p className="text-[50px] w-[90%]  capitalize font-bold ">
            Footwear that Complements Your Every Step
          </p>
          <button className="p-2 w-[150px] rounded-xl bg-yellow-300 text-lg ml-10 mt-5 z-10">
            Show product
          </button>
        </div>
        <span className="absolute w-[300px]  h-[300px] bg-[#e1be219e] rounded-full max-md:right-[5%] max-md:top-[55%] top-[45%] right-[5%] max-md:w-[200px] max-md:h-[200px] "></span>
        <img
          src={shoes}
          alt="shoes"
          width={350}
          className="absolute max-md:right-[5%] max-md:top-[55%] top-[45%] right-[5%] max-md:w-[240px]"
        />
      </div>
      <div className="md:w-[60%] max-lg:h-[500px] bg-cyan-200 rounded-xl relative">
        <div className="ml-10 font-mono mt-5  ">
          <p className="text-[50px] w-[90%]  capitalize font-semibold ">
            Comfort and Style Combined for You!
          </p>
          <button className="p-2 w-[150px] rounded-xl bg-yellow-300 text-lg ml-10 mt-5 z-10">
            Show product
          </button>
        </div>
        <span className="absolute w-[300px]  h-[300px] bg-[#214be19e] rounded-full max-md:right-[5%] max-md:top-[55%] top-[45%] right-[5%] max-md:w-[200px] max-md:h-[200px] "></span>
        <img
          src={shoes2}
          alt="shoes"
          width={550}
          className="absolute max-md:right-[5%] max-md:top-[55%] top-[21%] right-[5%] max-md:w-[240px]"
        />
      </div>
    </section>
  );
}

export default Middle;
