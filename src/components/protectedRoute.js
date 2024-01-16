import {
    redirect,
    Navigate
  } from "react-router-dom";

const ProtectedRoute = ({children})=>{
    const user = localStorage.getItem('token')
    if(!user){
        

        return <Navigate to={'/login'} />
    }else{
        return children
    }
}

export default ProtectedRoute