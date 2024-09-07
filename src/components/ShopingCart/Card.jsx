import { Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";

function Card(props) {
  const [colorName, setColorName] = useState("");
  const [sizeName, setSizeName] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("OrderProducts")) || [];

    // Find the product to update
    const productIndex = data.findIndex((items) => items.id === props.item.id);
    console.log(productIndex);
    // If the product is found, update its quantity
    if (productIndex !== -1) {
      setQuantity(data[productIndex].quantity);
      data[productIndex].size;
      setSizeName(data[productIndex].size);
      setColorName(data[productIndex].color);
    }
  }, []);

  function updateProductQuantity(productId, newQuantity) {
    // Retrieve and parse the data from localStorage
    const data = JSON.parse(sessionStorage.getItem("OrderProducts")) || [];

    // Find the product to update
    const productIndex = data.findIndex((items) => items.id === productId);
    console.log(productIndex);
    // If the product is found, update its quantity
    if (productIndex !== -1) {
      data[productIndex].quantity = newQuantity;

      sessionStorage.setItem("OrderProducts", JSON.stringify(data));
      console.log(
        `Updated quantity for product ID ${productId} to ${newQuantity}`
      );
    } else {
      console.log(`Product with ID ${productId} not found.`);
    }
  }

  return (
    <>
      <header className="h-[190px] w-full mx-auto mt-8 flex items-center justify-between">
        <picture className="bg-gray-200 rounded-xl w-[180px] h-[90%]">
          <img src={props?.item?.media} className="w-full h-full rounded-xl" />
        </picture>
        <div className="flex flex-col items-start gap-4 -ml-24">
          <h2
            className="text-xl font-bold text-gray-900 capitalize font-mono w-[90%] truncate"
            title={props?.item?.name}
          >
            {props?.item?.name.length > 20
              ? `${props?.item?.name.slice(0, 16)}...`
              : props?.item?.name}
          </h2>
          <p className="flex items-center justify-center gap-2 text-lg">
            <span className="text-black/70 capitalize">Size:</span>
            {props?.item?.size?.map((item) => (
              <div
                key={item}
                className={`w-7 h-7 rounded-lg border-2 flex items-center justify-center p-4 cursor-pointer ${
                  item === sizeName ? "border-black" : "border-gray-200"
                }`}
                onClick={() => {
                  const data =
                    JSON.parse(sessionStorage.getItem("OrderProducts")) || [];

                  // Find the product to update
                  const productIndex = data.findIndex(
                    (items) => items.id === props.item.id
                  );
                  console.log(productIndex);
                  // If the product is found, update its quantity
                  if (productIndex !== -1) {
                    data[productIndex].size = item;

                    sessionStorage.setItem(
                      "OrderProducts",
                      JSON.stringify(data)
                    );
                    console.log(
                      `Updated quantity for product ID ${props.item.id} to ${item}`
                    );
                  } else {
                    console.log(`Product with ID ${props.item.id} not found.`);
                  }
                  setSizeName(item);
                }}
              >
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </p>
          <p className="flex items-center justify-center gap-2 text-lg">
            <span className="text-black/70 capitalize">Color:</span>
            {props?.item?.color?.map((item) => (
              <button
                key={item.label}
                className={`w-6 h-6 border-2 flex items-center justify-center cursor-pointer ${
                  item.label === colorName ? "border-black" : ""
                }`}
                onClick={() => {
                  setColorName(item.label);

                  const data =
                    JSON.parse(sessionStorage.getItem("OrderProducts")) || [];

                  // Find the product to update
                  const productIndex = data.findIndex(
                    (items) => items.id === props.item.id
                  );
                  console.log(productIndex);
                  // If the product is found, update its quantity
                  if (productIndex !== -1) {
                    data[productIndex].color = item.label;

                    sessionStorage.setItem(
                      "OrderProducts",
                      JSON.stringify(data)
                    );
                    console.log(
                      `Updated quantity for product ID ${props.item.id} to ${item}`
                    );
                  } else {
                    console.log(`Product with ID ${props.item.id} not found.`);
                  }
                }}
              >
                <p
                  className="w-4 h-4"
                  style={{ backgroundColor: item.label }}
                ></p>
              </button>
            ))}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 mt-3">
          <h2 className="text-lg font-light text-gray-500 capitalize font-mono">
            ${props?.item?.price}
          </h2>
          <div className="flex items-center justify-center gap-3 mt-10 -translate-x-5">
            <button>
              <Minus
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity(quantity - 1);
                    updateProductQuantity(props.item.id, quantity - 1);
                    if (typeof props.onCalcul === "function") {
                      props.onCalcul();
                    }
                  }
                }}
              />
            </button>
            <p className="p-2 bg-gray-200 rounded-full h-10 w-10 text-center font-semibold font-mono">
              {quantity}
            </p>
            <button>
              <Plus
                onClick={() => {
                  if (quantity >= 1 && quantity < 3) {
                    setQuantity(quantity + 1);
                    updateProductQuantity(props.item.id, quantity + 1);
                    if (typeof props.onCalcul === "function") {
                      props.onCalcul();
                    }
                  }
                }}
              />
            </button>
          </div>
        </div>
      </header>
      <hr className="mt-5 bg-gray-300/40 w-[80%] mx-auto"></hr>
    </>
  );
}

export default Card;
