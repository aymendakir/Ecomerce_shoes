import React, { useEffect, useState } from "react";
import Card from "../Card";
import Navigation from "../Navigation";
import { ChevronDown } from "lucide-react";
import CheckBox from "../CostumUi/ChecBox";
import useAuthContext from "../../context/apiContexte";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import PriceFilter from "./PriceFilter";
import Loading from "../Loading";

function Shop() {
  //const { isSignedIn, user, isLoaded } = useUser();

  const { getProduct, GetBrand } = useAuthContext({});
  const { name } = useParams();
  const [dataFilter, setDataFilter] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const { data: productData } = useQuery({
    queryKey: ["productShop"],
    queryFn: () => {
      return getProduct();
    },
    refetchInterval: false,
    refetchOnMount: false,
  });
  const { data: brands } = useQuery({
    queryKey: ["brandShop"],
    queryFn: () => {
      return GetBrand();
    },
    refetchInterval: false,
    refetchOnMount: false,
  });
  useEffect(() => {
    if (name) {
      const filteredData = productData?.filter((item) => item?.genre === name);
      setDataFilter(filteredData);
    } else {
      setDataFilter(productData);
    }
  }, [productData, name]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  function handleDataFromChild(brand) {
    let updatedBrands = [...selectedBrands];

    if (updatedBrands.includes(brand)) {
      updatedBrands = updatedBrands.filter((b) => b !== brand);
    } else {
      updatedBrands.push(brand);
    }

    setSelectedBrands(updatedBrands);

    if (updatedBrands.length > 0) {
      const filteredData = productData.filter((item) =>
        updatedBrands.includes(item?.brand)
      );
      setDataFilter(filteredData);
    } else {
      setDataFilter(productData);
    }
    applyFilters(updatedBrands, minPrice, maxPrice);
  }

  const HandleMin = (min) => {
    setMinPrice(min);
    applyFilters(selectedBrands, min, maxPrice);
  };

  const HandleMax = (max) => {
    setMaxPrice(max);
    applyFilters(selectedBrands, minPrice, max);
  };

  const applyFilters = (brands, min, max) => {
    let filteredData = productData;

    // Filter by selected brands if any are selected
    if (brands.length > 0) {
      filteredData = filteredData.filter((item) =>
        brands.includes(item?.brand)
      );
    }

    // Filter by price range if both min and max are set
    if (min !== null) {
      filteredData = filteredData.filter((item) => item.price >= min);
    }
    if (max !== null) {
      filteredData = filteredData.filter((item) => item.price <= max);
    }

    setDataFilter(filteredData);
  };
  return (
    <section className="w-full overflow-hidden">
      <Loading />
      <Navigation />
      <header className="h-[70px] w-full"></header>
      <section className="flex  w-full gap-5 mx-5">
        <div className="!w-[30%] rounded-lg min-h-[120vh]  border-gray-300 border px-5 ">
          <div className="flex items-center justify-between w-full mt-5  font-mono relative after:absolute after:-bottom-3 after:left-0 after:bg-gray-300 after:w-full after:h-[1px] h-[40px]">
            <h1 className="text-3xl    ">Categories</h1>
            <ChevronDown className=" " />
          </div>
          <ul className="flex flex-col gap-5 mt-5">
            {brands?.map((item, index) => (
              <li
                key={item.id}
                className=" rounded-lg p-2 hover:bg
                    -gray-300 cursor-pointer"
              >
                <CheckBox value={item.name} handleCheck={handleDataFromChild} />
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between w-full mt-5  font-mono relative after:absolute after:-bottom-3 after:left-0 after:bg-gray-300 after:w-full after:h-[1px] h-[40px]">
            <h1 className="text-3xl    ">Price </h1>
            <ChevronDown className=" " />
          </div>
          <ul className="flex flex-col gap-5 mt-5">
            <PriceFilter MIN={HandleMin} MAX={HandleMax} />
          </ul>
        </div>

        <div className="w-[90%] min-h-[100vh] justify-items-center    ">
          <div className="grid grid-cols-3 justify-center gap-4 w-[90%]">
            {dataFilter?.length > 0 &&
              dataFilter?.map((index) => {
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
          </div>
        </div>
      </section>
    </section>
  );
}

export default Shop;
