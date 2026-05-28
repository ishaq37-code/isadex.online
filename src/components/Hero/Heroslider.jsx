import { useEffect, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";



import watch from "/src/assets/watch.png"
import headphone from "/src/assets/headphone.png"
import shoes from "/src/assets/shoes.png"
import { heroAnimation } from "../../animation/HeroAnimation";

const HeroData = [
  {
    id: 1,
    title: "Luxury Smart Watch",
    desc: "Premium smartwatch with elegant modern design for your lifestyle.",
    image: watch,
    price: "$299",
  },

  {
    id: 2,
    title: "Wireless Headphones",
    desc: "Crystal clear sound quality with premium bass experience.",
    image: headphone,
    price: "$199",
  },

  {
    id: 3,
    title: "Men Stylish Shoes",
    desc: "Comfortable lightweight shoes made for speed and performance.",
    image: shoes,
    price: "$149",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const contentRef = useRef(null);
  const imageRef = useRef(null);

  // NEXT
 const nextSlide = () => {
    setCurrent((prev) =>
      prev === HeroData.length - 1 ? 0 : prev + 1
    );
  };

  // PREV
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? HeroData.length - 1 : prev - 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  // GSAP
  useEffect(() => {
   heroAnimation(contentRef,imageRef)
  }, [current]);

  return (
    <section className="relative overflow-hidden min-h-screen bg-[#f5f5f5]">

      {/* BACKGROUND EFFECTS */}

      <div className="absolute top-0 left-0 w-100 h-100 bg-amber-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-orange-300 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute top-1/2 left-1/2 w-175 h-175 bg-white rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* BIG TEXT */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] lg:text-[220px] font-black text-black/5 uppercase pointer-events-none whitespace-nowrap">
        ISADEX
      </h1>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-350 mx-auto px-6 lg:px-16 min-h-screen grid lg:grid-cols-2 items-center gap-10">

        {/* LEFT CONTENT */}
        <div
          ref={contentRef}
          className="space-y-7 text-center lg:text-left pt-28 lg:pt-0"
        >
          <p className="uppercase tracking-[6px] text-amber-700 font-bold">
            Trending Collection
          </p>

          <h1 className="text-4xl sm:text-4xl lg:text-7xl font-black leading-tight">
            {HeroData[current].title}
          </h1>

          <p className="text-gray-600 text-lg max-w-137.5 mx-auto lg:mx-0">
            {HeroData[current].desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">

            <button className="px-8 py-4 bg-black text-white rounded-full flex items-center gap-3 hover:bg-amber-700 duration-300">
              Shop Now
              <FaShoppingBag />
            </button>

            <h2 className="text-4xl font-black text-amber-700">
              {HeroData[current].price}
            </h2>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className="relative flex justify-center items-center"
        >

          {/* OUTER RING */}
          <div className="absolute w-[320px] h-80 lg:w-112.5 lg:h-112.5 rounded-full border-25 border-amber-200 animate-pulse"></div>

          {/* SECOND RING */}
          <div className="absolute w-105 h-105 lg:w-137.5 lg:h-137.5 rounded-full border border-amber-400/40"></div>

          {/* GLOW */}
          <div className="absolute w-7- h-70 lg:w-95 lg:h-95 bg-amber-300 rounded-full blur-3xl opacity-40"></div>

          {/* IMAGE BOX */}
          <div className="relative w-70 h-70 lg:w-130 lg:h-130 rounded-full bg-linear-to-br from-white to-gray-200 shadow-2xl flex items-center justify-center overflow-hidden border border-white/50">

            {/* DECORATION */}
            <div className="absolute top-10 left-10 w-5 h-5 rounded-full bg-amber-500"></div>

            <div className="absolute bottom-10 right-10 w-7 h-7 rounded-full bg-black"></div>

            {/* IMAGE */}
            <img
              src={HeroData[current].image}
              alt=""
              className="relative z-10 w-full sm:w-full lg:w-full object-cover hover:scale-110 duration-500"
            />
          </div>
        </div>

        {/* SLIDER BUTTONS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5">

          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 duration-300"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;