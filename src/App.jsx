import { Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar/NavBar"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import About from "./pages/About/About"
import Cartspage from "./pages/Cart/Cartspage"
import Whishlist from "./pages/Whislist/Whishlist"
import SingleProducts from "./pages/SingleProduct/SingleProducts"




const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cartpage" element={<Cartspage/>}/>
          <Route path="/Whishlist" element={<Whishlist/>}/>
          <Route path="/product/:id" element={<SingleProducts/>}/>
      </Routes>
    </div>
  )
}

export default App