import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "@/context/apiContexte";

function OurBest() {
  const { getProduct } = useAuthContext({});

  const { data: productData } = useQuery({
    queryKey: ["productShop"],
    queryFn: () => {
      return getProduct();
    },
    refetchInterval: false,
    refetchOnMount: false,
  });
  return (
    <div className="mt-20 w-[95%] mx-auto flex flex-col">
      <div className="flex justify-between mx-10">
        <h1 className="text-5xl font-bold font-mono">Our Best</h1>
        <button className="p-2 w-[150px] bg-blue-400 font-semibold text-lg rounded-full">
          See More
        </button>
      </div>
      <section className="relative min-h-[70vh] mx-auto  grid grid-cols-4  gap-5 max-md:grid-cols-1 max-lg:grid-cols-2 mb-10 items-center justify-items-center justify-center  ">
        {productData?.slice(0, 4).map((index) => {
          return (
            <Card
              key={index}
              id={index.id}
              name={index?.name}
              brand={index?.brand}
              price={index?.price}
              color={index?.colors}
              media={index?.media[0]?.name}
              quantity={1}
            />
          );
        })}
      </section>
    </div>
  );
}

export default OurBest;
