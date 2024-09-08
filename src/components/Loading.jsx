import React, { useEffect, useState } from "react";
import gif from "../assets/images/running-shoes (1).gif";

function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      window.addEventListener("load", handleLoad);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full fixed bg-white top-0 left-0 z-[1000]">
          <div className="w-[140px] h-[140px]  p-4 relative ">
            <div className="absolute rounded-full border-2 border-dashed border-gray-500 top-0 left-0 w-full h-full animate-spin"></div>
            <img src={gif} alt="loading..." />
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
