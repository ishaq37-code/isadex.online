import { FaTrash } from "react-icons/fa";
import useCart from "../../context/usecontext";

const Cartspage = () => {
  const { cart,increment,decrement,totalPrice,total,shiiping,remove } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-6 mt-28">

      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT ITEMS */}
        <div className="lg:col-span-2 space-y-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center h-50 justify-between border p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >

              <div className="flex items-center w-50 h-full gap-4">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full rounded-lg object-cover"
                />

                <div className="w-50">
                  <h2 className="font-semibold text-2xl w-full ">{item.title}</h2>
                  <p className="text-gray-500 text-sm">
                    Rs {item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button className=" cursor-pointer px-3 py-1 bg-gray-200 rounded" onClick={()=>decrement(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button className="px-3 py-1 cursor-pointer bg-gray-200 rounded" onClick={()=>increment(item.id)}>+</button>
                  </div>
                </div>

              </div>

              <button className="text-red-500 cursor-pointer hover:scale-110 transition"
              onClick={()=>remove(item.id)}
              >
                <FaTrash />
              </button>

            </div>
          ))}

        </div>

        {/* RIGHT SUMMARY */}
       <div className="border rounded-xl p-6 shadow-sm h-fit">

  <h2 className="text-xl font-bold mb-4">Order Summary</h2>

  <div className="flex justify-between mb-2 text-gray-600">
    <span>Subtotal</span>
    <span> {total}</span>
  </div>

  <div className="flex justify-between mb-4 text-gray-600">
    <span>Shipping</span>
    <span>$ {shiiping}</span>
  </div>

  <hr className="my-4" />

  <div className="flex justify-between text-lg font-bold">
    <span>Total</span>
    <span>$ {totalPrice}</span>
  </div>

  <button className="w-full mt-6 bg-amber-700 text-white py-3 rounded-xl hover:bg-amber-800 transition">
    Checkout
  </button>

</div>

      </div>
    </div>
  );
};

export default Cartspage;