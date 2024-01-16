import {
    redirect,
    Navigate
  } from "react-router-dom";
const GuestRoute = ({children})=>{
    const user = localStorage.getItem('token')
    if(user){
        return <Navigate to={'/'} />
    }else{
        return children
    }
}

export default GuestRoute