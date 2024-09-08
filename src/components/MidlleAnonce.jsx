import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
function Middle() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="flex flex-wrap w-full mb-[-24px]">
      <div
        className="min-[992px]:w-[50%] w-full px-[12px] mb-[24px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div className="banner-box p-[30px] rounded-[20px] relative overflow-hidden bg-box-color-one bg-[#fbf2e5]">
          <div className="inner-banner-box relative z-[1] flex justify-between max-[480px]:flex-col">
            <div className="side-image px-[12px] flex items-center max-[480px]:p-[0] max-[480px]:mb-[12px] max-[480px]:justify-center">
              <img
                src={
                  "https://res.cloudinary.com/dfqlgqnft/image/upload/f_auto,q_auto/xtz3fh50jeeat0ijqsib"
                }
                alt="one"
                className="max-w-max w-[280px] h-[280px] max-[1399px]:w-[230px] max-[1399px]:h-[230px] max-[1199px]:w-[140px] max-[1199px]:h-[140px] max-[991px]:w-[280px] max-[991px]:h-[280px] max-[767px]:h-[200px] max-[767px]:w-[200px] max-[575px]:w-full max-[575px]:h-[auto] max-[480px]:w-[calc(100%-70px)]"
              />
            </div>
            <div className="inner-contact max-w-[250px] px-[12px] flex flex-col items-start justify-center max-[480px]:p-[0] max-[480px]:max-w-[100%] max-[480px]:text-center max-[480px]:items-center">
              <h5 className="font-quicksand mb-[15px] text-[31px] text-[#3d4750] font-bold tracking-[0.03rem] text-[#3d4750] leading-[1.2] max-[991px]:text-[28px] max-[575px]:text-[24px] max-[480px]:mb-[2px] max-[480px]:text-[22px]">
                Comfort Meets &amp; Style
              </h5>
              <p className="font-Poppins text-[16px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d] mb-[15px] max-[480px]:mb-[8px] max-[480px]:text-[14px]">
                Discover shoes that fit your lifestyle effortlessly.
              </p>
              <Link
                to={"/shop"}
                className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[5px] px-[15px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="min-[992px]:w-[50%] w-full px-[12px] mb-[24px] aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <div className="banner-box p-[30px] rounded-[20px] relative overflow-hidden bg-box-color-two bg-[#ffe8ee]">
          <div className="inner-banner-box relative z-[1] flex justify-between max-[480px]:flex-col">
            <div className="side-image px-[12px] flex items-center max-[480px]:p-[0] max-[480px]:mb-[12px] max-[480px]:justify-center">
              <img
                src={
                  "https://res.cloudinary.com/dfqlgqnft/image/upload/f_auto,q_auto/z4hsduo0eg2kawwqvc14"
                }
                alt="two"
                className="max-w-max w-[280px] h-[280px] max-[1399px]:w-[230px] max-[1399px]:h-[230px] max-[1199px]:w-[140px] max-[1199px]:h-[140px] max-[991px]:w-[280px] max-[991px]:h-[280px] max-[767px]:h-[200px] max-[767px]:w-[200px] max-[575px]:w-full max-[575px]:h-[auto] max-[480px]:w-[calc(100%-70px)]"
              />
            </div>
            <div className="inner-contact max-w-[250px] px-[12px] flex flex-col items-start justify-center max-[480px]:p-[0] max-[480px]:max-w-[100%] max-[480px]:text-center max-[480px]:items-center">
              <h5 className="font-quicksand mb-[15px] text-[31px] text-[#3d4750] font-bold tracking-[0.03rem] text-[#3d4750] leading-[1.2] max-[991px]:text-[28px] max-[575px]:text-[24px] max-[480px]:mb-[2px] max-[480px]:text-[22px]">
                Step Up &amp; Your Style
              </h5>
              <p className="font-Poppins text-[16px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d] mb-[15px] max-[480px]:mb-[8px] max-[480px]:text-[14px]">
                Find the perfect pair for every occasion.
              </p>
              <Link
                to={"/shop"}
                className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[5px] px-[15px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
