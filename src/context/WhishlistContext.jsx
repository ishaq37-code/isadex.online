import { createContext, useState } from "react"




const WhishlistContext= createContext()
const WhishlistProvider = ({children}) => {
   const [Whishlist, setWhishlist] = useState([])

const add=(product)=>{
   const exit=Whishlist.find((item)=>item.id===product.id)
   if(exit)return

   setWhishlist((prev)=>[...prev,product])
}
const remove =(id)=>{
   setWhishlist((prev)=>
    prev.filter((item)=>item.id !== id)
   )
}

    return (
    <WhishlistContext.Provider value={{Whishlist,setWhishlist,add,remove}} >

    {children}
    </WhishlistContext.Provider>
  )
}

export default WhishlistProvider
export{ WhishlistContext };