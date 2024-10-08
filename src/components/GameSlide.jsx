import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import line from "../assets/line.png";
import lineThird from "../assets/lineThird.png";
import box1 from "../assets/box1.png";

const GameSlide = ({ list }) => {
  const sliderRef = useRef(null); // Create a reference to the slider

  const validList = list && Array.isArray(list) ? list : [];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for larger screens (2xl)
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1536, // For screens smaller than 2xl (1536px)
        settings: {
          slidesToShow: 4, // Show 4 slides on 2xl screens
        },
      },
      {
        breakpoint: 1280, // For screens smaller than xl (1280px)
        settings: {
          slidesToShow: 4, // Show 3 slides on xl screens
        },
      },
      {
        breakpoint: 1024, // For screens smaller than lg (1024px)
        settings: {
          slidesToShow: 2, // Show 2 slides on lg screens
        },
      },
      {
        breakpoint: 768, // For screens smaller than md (768px)
        settings: {
          slidesToShow: 2, // Show 2 slides on md screens
        },
      },
      {
        breakpoint: 640, // For screens smaller than sm (640px)
        settings: {
          slidesToShow: 1, // Show 1 slide on sm screens
        },
      },
    ],
  };

  return (
    <div className="game-slider-main relative">
      {/* Custom Prev Arrow */}
      <div
        className="hidden xl:flex absolute top-40 -left-16 bg-purple-300 text-primary rounded-full p-4 cursor-pointer z-10"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaChevronLeft size={20} />
      </div>

      {/* Custom Next Arrow */}
      <div
        className="hidden xl:flex absolute top-40 -right-16 bg-purple-300 text-primary p-4 rounded-full cursor-pointer z-10"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaChevronRight size={20} />
      </div>

      <Slider ref={sliderRef} {...settings} className="mt-16">
        {validList.map((item, index) => {
          return (
            <div
              key={item.id}
              className=" w-[400px] h-[400px]   2xl:ml-12 ml-5"
            >
              <div className="relative">
                <div className="absolute top-[67px] right-[70px]   xl:right-[44px]  2xl:right-[107px] ">
                  <img src={line} alt="" className="object-cover" />
                </div>
                <div className="absolute top-[78px] right-[63px]  xl:right-[49px] 2xl:right-[113px]">
                  <img src={lineThird} alt="" className="object-cover" />
                </div>
                <div>
                  <div className="relative">
                    <img
                      src={box1}
                      alt=""
                      className="w-[250px]  h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-[5%] left-[3%] rounded-lg ">
                    <img
                      src={item.image}
                      alt="Background"
                      className="w-[224px]  h-full object-cover  "
                    />
                  </div>

                  {/* Title */}
                  <div className=" absolute top-[70%] left-[3%] ">
                    <h4 className="text-white font-Poppins font-semibold md:text-[22px] text-[18px] uppercase">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div
                  className="bg-[#7c309c]/70 absolute  -bottom-[42%] left-[10%] pt-1 pl-4 w-[240px] h-[48%]"
                  style={{
                    boxShadow: "0px 3px 19px #000000",
                    borderRadius: "10px",
                  }}
                >
                  <div className="flex justify-start items-center gap-7">
                    <p className="text-white text-[10px] font-Poppins uppercase  font-semibold">
                      {item.ratingText}
                    </p>
                    <div className="flex items-center ">
                      <FaStar className="text-[#ffbc1b] text-[10px]" />
                      <FaStar className="text-[#ffbc1b] text-[10px]" />
                      <FaStar className="text-[#ffbc1b] text-[10px]" />
                      <FaStar className="text-[#ffbc1b] text-[10px]" />
                      <FaStar className="text-[#ffbc1b] text-[10px]" />
                    </div>
                  </div>

                  <p className="text-[8px] font-Poppins leading-3  text-white pt-4">
                    {item.body}
                  </p>
                </div>
              </div>

              <div className=" relative flex justify-center items-center mt-28">
                <button className="ml-[54px] 2xl:ml-0  bg-[#511e8a] rounded-full text-white  px-6 py-1 text-[8px] font-Poppins font-medium  gap-2 flex justify-center items-center">
                  <img
                    src={item.link}
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />{" "}
                  {item.linkName}
                </button>
                <button className="absolute  left-7 bg-white rounded-full text-primary py-2 px-[14px] text-[13px] font-Poppins font-bold uppercase tracking-wide">
                  {item.button}
                </button>

                <div className="absolute -top-28 left-3">
                  <div className="relative">
                    <div className="bg-[#7c309c] w-[2px] h-32"></div>

                    <div className="bg-[#7c309c] w-[15px] h-[2px] absolute bottom-0 left-full "></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GameSlide;
