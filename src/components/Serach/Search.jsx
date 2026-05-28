import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import { products } from "../Product/data";

const Search = () => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() === "") {
      setFilteredProducts([]);
      setShowDropdown(false);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
      setShowDropdown(true);
    }
  };

  const formhandler = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      // ✅ Search page pe bhej sakte ho ya pehla product
      const firstProduct = filteredProducts[0];
      if (firstProduct) {
        navigate(`/product/${firstProduct.id}`);
      }
    }
    setSearch("");
    setFilteredProducts([]);
    setShowDropdown(false);
  };

  // ✅ Handle product click - navigate to product page
  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearch("");
    setFilteredProducts([]);
    setShowDropdown(false);
  };

  return (
    <form onSubmit={formhandler} className="relative">
      <input
        type="search"
        placeholder="Search products..."
        className="bg-gray-200 rounded-full pl-5 pr-16 py-4 focus:outline-none w-70"
        value={search}
        onChange={handleSearchChange}
        onFocus={() => search.trim() !== "" && setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
      />
      <button
        type="submit"
        className="bg-amber-700 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer duration-300 text-white absolute top-1/2 right-1 -translate-y-1/2 hover:bg-black"
      >
        <FaSearch />
      </button>

      {/* Dropdown */}
      {showDropdown && filteredProducts.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-80 overflow-y-auto z-50">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)} // ✅ Click pe route
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 transition-colors"
            >
              <img 
                src={product.image} 
                alt={product.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800">{product.title}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-amber-700 font-semibold">${product.price}</p>
                <p className="text-xs text-yellow-500">
                  {"★".repeat(product.rating)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No results */}
      {showDropdown && search.trim() !== "" && filteredProducts.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 p-4 text-center text-gray-500">
          No products found for "{search}"
        </div>
      )}
    </form>
  );
};

export default Search;