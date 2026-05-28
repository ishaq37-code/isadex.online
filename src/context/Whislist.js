import { useContext } from "react"
import { WhishlistContext } from ".././context/WhishlistContext"



const useWhishlist=()=>{
    return useContext(WhishlistContext)
}
export default useWhishlist;