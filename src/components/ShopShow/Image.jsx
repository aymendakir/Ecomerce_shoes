import React, { useEffect, useState } from "react";

const Images = (props) => {
  const [isLightbox, setLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  function handleClick() {
    setLightbox(!isLightbox);
  }
  useEffect(() => {
    setSelectedImage(props?.image?.name);
  }, [props?.image]);

  const HandlChangeImage = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="grid grid-cols-1 w-1/2 max-lg:w-10/12 max-sm:h-3/4 max-sm:w-screen max-sm:mb-[-140px]">
      <div className="w-[500px] h-[500px] bg-gray-200/20 rounded-lg mt-10 flex items-center justify-center">
        {selectedImage && (
          <img
            src={selectedImage}
            className="rounded-lg    max-sm:rounded-none w-full h-auto "
            alt=""
          />
        )}
      </div>

      <div className="grid grid-cols-4 gap-3 pt-4 w-10/12 max-sm:hidden items-center justify-items-center justify-center h-[190px] mt-20">
        {props?.media?.map((image, imageIndex) => {
          return (
            <button
              onClick={() => {
                HandlChangeImage(image.name);
              }}
              key={imageIndex}
              className="focus:opacity-60 "
            >
              <img
                className="rounded-md hover:opacity-70 "
                src={image.name}
                alt={image.name}
              />
            </button>
          );
        })}
      </div>
      <div
        style={{ display: isLightbox ? "flex" : "none" }}
        className="flex flex-col items-center justify-center group-hover:block fixed inset-0 bg-black bg-opacity-50 max-sm:justify-start"
      >
        <div className="relative flex flex-col items-end">
          <svg
            className=" fill-white active:fill-orange cursor-pointer"
            width="15"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Images;
