import { useParams } from "react-router-dom"

import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { products } from "../../components/Product/data"
import useCart from "../../context/usecontext";
import useWhishlist from "../../context/Whislist";
const SingleProducts = () => {
const {id}=useParams()
const {addtoCart}=useCart()
const {add}= useWhishlist()
const product=

  products.find((item)=>item.id===Number(id))

 if (!product) {
    return <div>Product not found</div>;
  }
  return (
  <div className="max-w-6xl mx-auto px-6 mt-32 pb-20">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* IMAGE */}
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-cover rounded-2xl"
          />
        </div>

        {/* INFO */}
        <div>

          <p className="text-amber-600 font-semibold mb-2">
            {product.category}
          </p>

          <h1 className="text-4xl font-black mb-4">
            {product.title}
          </h1>

          {/* RATING */}
          <div className="flex items-center gap-1 text-amber-500 mb-4">
            {[...Array(product.rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-500 ml-2">
              ({product.rating}/5)
            </span>
          </div>

          {/* PRICE */}
          <h2 className="text-3xl font-bold text-amber-700 mb-6">
            Rs {product.price}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-7 mb-8">
            This is a premium quality {product.category.toLowerCase()} designed with modern aesthetics, durable materials, and high performance. Perfect for daily use and long-term reliability.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-4">

            <button onClick={()=>addtoCart(product)} className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-amber-700 transition">
              <FaShoppingCart />
              Add to Cart
            </button>

            <button  onClick={()=>add(product)}className="w-12 h-12 border rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition">
              <FaHeart />
            </button>

          </div>

        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* DESCRIPTION BOX */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4">
            Product Description
          </h2>
          <p className="text-gray-600 leading-7">
            {product.title} is crafted with precision and attention to detail. It delivers high performance and premium build quality that ensures long-lasting usage. Designed for modern users who want style + performance in one product.
          </p>
        </div>

        {/* REVIEW BOX */}
        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-2xl font-bold mb-4">
            Reviews
          </h2>

          <div className="space-y-4">

            <div className="border-b pb-3">
              <p className="font-semibold">Ali Khan</p>
              <div className="text-amber-500 flex">
                <FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-sm text-gray-500">
                Amazing product, totally worth it!
              </p>
            </div>

            <div>
              <p className="font-semibold">Sara Ahmed</p>
              <div className="text-amber-500 flex">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p className="text-sm text-gray-500">
                Premium quality, fast delivery.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default SingleProducts