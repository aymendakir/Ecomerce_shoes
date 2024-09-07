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

function Page() {
  const { OneProduct } = useAuthContext({});
  const { id } = useParams();
  const { data: DataProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: () => {
      return OneProduct(id);
    },
    refetchInterval: false,
    refetchOnMount: false,
  });

  return (
    <>
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Fotter />
    </>
  );
}

export default Page;
