import { FaHeart, FaShoppingBag, FaTrash } from "react-icons/fa";
import useWishlist from "../../context/Whislist";
import useCart from "../../context/usecontext";


const Wishlist = () => {

  const { Whishlist,remove } = useWishlist();
  const {addtoCart}   =  useCart()
  return (
    <div className="max-w-7xl mx-auto px-6 mt-28 pb-20">

      {/* HEADING */}
      <div className="flex items-center gap-3 mb-10">

        <FaHeart className="text-red-500 text-3xl" />

        <h1 className="text-4xl font-black">
          My Wishlist
        </h1>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {Whishlist.map((item) => (

          <div
            key={item.id}
            className="border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* DELETE BTN */}
              <button 
              onClick={()=>remove(item.id)}
              className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition">

                <FaTrash />

              </button>

            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h2 className="text-xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-500 mb-5">
                Rs {item.price}
              </p>

              {/* BUTTONS */}
              <div className="flex items-center gap-3">

                <button  onClick={()=>addtoCart(item)}  className="flex-1 bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl flex items-center justify-center gap-2 transition">

                  <FaShoppingBag />

                  Add To Cart

                </button>

                <button className="w-12 h-12 border rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white transition">

                  <FaHeart />

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Wishlist;