import React, { useEffect, useState } from "react";

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
            <img
              src={
                "https://res.cloudinary.com/dfqlgqnft/image/upload/f_auto,q_auto/yg6w2y4ycl23on93qjbj"
              }
              alt="loading..."
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Loading;
