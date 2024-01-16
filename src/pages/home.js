import axios from "axios";
import React,{useEffect, useState} from "react";
import base_url from "../base_url";


const Home = ()=>{
    const [userDetail,setUserDetail] = useState({
        email:'',
        username:'',
        id:''
    })
    const fetchUser = ()=>{
        const token = localStorage.getItem('token')
        axios.get(`${base_url}/api/profile/`,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        .then(res=>{
           setUserDetail({email:res.data.email,username:res.data.username,id:res.data.user_id})
        })
        .catch(err=>{
           alert(err.response.data.detail)
        })
    }

    useEffect(()=>{
        fetchUser()
    },[])
    return(
       <div className="border p-4">
        <button className="btn btn-danger mt-4 ml-3" onClick={()=>{
            localStorage.removeItem('token')
            window.location = "/login"
        }}>Logout</button>
        <h1>user id :{userDetail.id} </h1>

        <h1>email : {userDetail.email}</h1>

        <h1>Username : {userDetail.username}</h1>
       </div>
    )
}


export default Home