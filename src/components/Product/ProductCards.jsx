import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import useCart from"../../context/usecontext"
import useWhishlist from "../../context/Whislist";
import { Link } from "react-router-dom";

import { products } from "./data";

const Products = () => {
 
  const {addtoCart}=  useCart()
 const {add}= useWhishlist()
  return (
    <section className="py-24 bg-[#f5f5f5] overflow-hidden">

      {/* TOP */}
      <div className="max-w-350 mx-auto px-6 lg:px-16 mb-16">

        <p className="uppercase tracking-[5px] text-amber-700 font-bold mb-3">
          Trending Products
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

          <h1 className="text-4xl lg:text-4xl font-black">
            Featured Products
          </h1>

          <button className="px-8 py-4 rounded-full bg-black text-white hover:bg-amber-700 duration-300 w-fit">
            View All
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-350 mx-auto px-6 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-[35px] overflow-hidden p-5 shadow-lg hover:-translate-y-3 duration-500"
          >

            {/* CATEGORY */}
            <span className="absolute top-7 left-7 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold z-20">
              {product.category}
            </span>

            {/* HEART */}
            <button className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-20 hover:bg-red-500 hover:text-white duration-300">
              <FaHeart onClick={()=>{add(product)}} />
            </button>

            {/* IMAGE BG */}
              <Link to={`/product/${product.id}`}>
            <div className="relative bg-[#f5f5f5] rounded-[30px] overflow-hidden h-75 flex items-center justify-center">

              {/* GLOW */}
              <div className="absolute w-300 h-300 bg-amber-200 rounded-full blur-3xl opacity-50"></div>

              {/* IMAGE */}
              <img
                src={product.image}
                alt=""
                className="relative z-10 w-70 h-75 object-cover group-hover:scale-110 group-hover:rotate-6 duration-500"
                />
            </div>
                </Link>

            {/* CONTENT */}
            <div className="pt-6">

              {/* RATING */}
              <div className="flex items-center gap-1 text-amber-500 mb-3">

                {[...Array(product.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* TITLE */}
              <h2 className="text-xl font-bold mb-3">
                {product.title}
              </h2>

              {/* PRICE + BTN */}
              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-black text-amber-700">
                  {product.price}
                </h3>

                <button onClick={()=>{ addtoCart(product)}} className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 duration-300">
                  <FaShoppingCart />
                </button>
              </div>
            </div>

            {/* HOVER BORDER */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300 rounded-[35px] duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
