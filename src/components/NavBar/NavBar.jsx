import { useEffect, useRef, useState } from "react";
import useCart from "../../context/usecontext";
import useWishlist from "../../context/Whislist";
import {
  FaBars,
  FaHeart,
  FaShoppingBag,
  FaTimes,
} from "react-icons/fa";

import { Link, } from "react-router-dom";

import gsap from "gsap";

import Search from "../Serach/Search";

const Navbar = () => {
   
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);
  const iconRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // NAVBAR ANIMATION
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      logoRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );

    tl.fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.7"
    );

    tl.fromTo(
      iconRef.current,
      {
        x: 80,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
      },
      "-=0.7"
    );
  }, []);

  // MOBILE MENU ANIMATION
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        {
          x: "100%",
        },
        {
          x: "0%",
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }
  }, [menuOpen]);
    const{cart}=useCart();
  const {Whishlist}  = useWishlist()
    
  return (
    <>
      {/* NAVBAR */}
      <header
        ref={navbarRef}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-200"
      >
        <div className="max-w-350 mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div ref={logoRef}>
            <h1 className="text-2xl lg:text-4xl font-black">
              ISADEX.
              <span className="text-amber-700">
                ONLINE
              </span>
            </h1>
          </div>

          {/* DESKTOP NAV */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center gap-10"
          >
            <Link
              to="/"
              className="font-semibold hover:text-amber-700 duration-300"
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="font-semibold hover:text-amber-700 duration-300"
            >
              Shop
            </Link>

            <Link
              to="/about"
              className="font-semibold hover:text-amber-700 duration-300"
            >
              About
            </Link>
          </nav>

          {/* RIGHT SIDE */}
          <div
            ref={iconRef}
            className="flex items-center gap-5"
          >
            {/* DESKTOP SEARCH */}
            <div className="hidden lg:block">
            <Search/>
            </div>

            {/* ICONS */}
      <div className="flex items-center gap-6">

        {/* WISHLIST */}
        <div className="relative cursor-pointer">
          <Link to="/Whishlist"><FaHeart className="text-3xl text-red-600" /></Link>

          {/* STATIC BADGE */}
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {Whishlist.length}
          </span>
        </div>

        {/* CART */}
        <div className="relative cursor-pointer">
          <Link to="/cartpage" ><FaShoppingBag className="text-3xl" /></Link>

          {/* STATIC COUNTER */}
          <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
            {cart.length}
          </span>
        </div>

      </div>

            {/* MENU BTN */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-2xl"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OFF CANVAS */}
      {menuOpen && (
        <div className="fixed inset-0 z-100 bg-black/40">

          {/* MENU */}
          <div
            ref={mobileMenuRef}
            className="absolute top-0 right-0 w-[85%] sm:w-100 h-screen bg-white p-6 flex flex-col"
          >

            {/* TOP */}
            <div className="flex items-center justify-between mb-8">

              <h1 className="text-3xl font-black">
                ISADEX
              </h1>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-3xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* SEARCH BAR */}
            <div className="mb-10">
              <Search />
            </div>

            {/* NAV LINKS */}
            <nav className="flex flex-col gap-7 text-xl font-semibold">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-700 duration-300 border-b pb-4"
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-700 duration-300 border-b pb-4"
              >
                Shop
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-700 duration-300 border-b pb-4"
              >
                About
              </Link>
            </nav>

            {/* BOTTOM ICONS */}
            <div className="mt-auto flex items-center gap-6 pt-10">

              <FaShoppingBag className="text-3xl cursor-pointer hover:text-amber-700 duration-300" />

              <FaHeart className="text-3xl cursor-pointer hover:text-red-600 duration-300" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;