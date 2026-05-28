import { useContext } from "react";
import {CartContext} from "./cartContext.jsx"


const useCart=()=>{
    return useContext(CartContext)
}
export default useCart;