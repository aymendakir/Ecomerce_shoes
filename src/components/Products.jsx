import React from "react";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../context/apiContexte";

function Products() {
  const { getProduct } = useAuthContext({});
  const { data: productData } = useQuery({
    queryKey: ["product"],
    queryFn: () => {
      return getProduct();
    },
    refetchInterval: false,
    refetchOnMount: false,
  });
  return (
    <section className="w-[95%] min-h-[70vh] mx-auto mt-20 grid grid-cols-4  lg:grid-rows-2 gap-5 max-md:grid-cols-1 max-lg:grid-cols-2 mb-10 items-center justify-items-center justify-center3  ">
      {productData?.map((index) => {
        return (
          <Card
            key={index}
            id={index.id}
            name={index.name}
            brand={index.brand}
            price={index.price}
            color={index.colors}
            media={index.media[0].name}
            size={index.size}
            quantity={1}
          />
        );
      })}
    </section>
  );
}

export default Products;
