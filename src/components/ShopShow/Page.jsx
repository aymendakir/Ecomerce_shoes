import React, { useContext } from "react";

import "../../index.css";
import Navigation from "../Navigation";
import useAuthContext from "../../context/apiContexte";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Images from "./Image";
import Description from "./Description";
import Card from "../Card";
import Fotter from "../Fotter";
import Loading from "../Loading";

function Page() {
  const { OneProduct, getProduct } = useAuthContext({});
  const { id } = useParams();
  const { data: DataProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: () => {
      return OneProduct(id);
    },
    refetchInterval: false,
    refetchOnMount: false,
  });
  const { data: productData } = useQuery({
    queryKey: ["productShope"],
    queryFn: () => {
      return getProduct();
    },
    refetchInterval: false,
    refetchOnMount: false,
  });
  return (
    <main className="flex flex-col gap-5">
      <Loading />

      <Navigation />
      <section className="flex items-center gap-16 px-36 py-20 max-lg:flex-col max-sm:py-0 max-sm:px-0 mb-10">
        <Images media={DataProduct?.media} image={DataProduct?.media[0]} />
        <Description
          name={DataProduct?.name}
          brand={DataProduct?.brand}
          description={DataProduct?.description}
          price={DataProduct?.price}
          color={DataProduct?.colors}
          size={DataProduct?.size}
        />
      </section>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-5xl font-semibold"> For You!</p>
        <div className="grid grid-cols-4 gap-5">
          {productData?.slice(4, 8).map((index) => (
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
          ))}
        </div>
      </div>
      <Fotter />
    </main>
  );
}

export default Page;
