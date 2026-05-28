import { createContext,  useState } from "react";

const CartContext = createContext();

 const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addtoCart=(product)=>{
     setCart((prev)=>{
       const exit= prev.find((item)=>item.id===product.id)
       if(exit){
        return prev.map((item)=>item.id=== product.id ?{...item, qty:item.qty+1}:item)
       }
       return [...prev,{...product, qty:1}]
     })



  }

const increment =(id)=>{
   setCart((prev)=>
   prev.map((item)=>
    item.id===id 
  ? {...item, qty:item.qty+1}
  :item
  ))

}
const decrement=(id)=>{
  setCart((prev)=>
    prev.map((item)=>
    item.id===id && item.qty>1
  ?{...item, qty:item.qty-1}
  :item
    )
    .filter((item)=>item.qty>0)
  )
}
const total = cart.reduce((acc,item)=>
 acc+item.price* item.qty,
0
)
const shiiping= total >0 ?100 :0
 
const totalPrice = shiiping+total

const remove=(id)=>{
  setCart((prev)=>
  prev.filter((item)=>item.id !==id
  ))
}
  return (
    <CartContext.Provider value={{ cart,addtoCart,increment,decrement,totalPrice,total,shiiping,remove}}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
export { CartContext };