import { useContext } from "react"
import { AuthContext } from "../../Context/AuthPorvider"

const useAuth=()=>{
    return useContext(AuthContext)
}



export default useAuth;