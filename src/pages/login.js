import axios from "axios";
import React,{useState} from "react";
import base_url from "../base_url";

 const Login = ()=>{
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
      });
      const handleLoginSubmit = (e) => {
        e.preventDefault();
        
        const {username,password} = loginData
       
        let formData = new FormData()
        formData.append('username',username)
      
        formData.append('password',password)
       

       axios.post(`${base_url}/api/login/`,formData)
       .then(res=>{
       
        if(res.status == 200){
        localStorage.setItem('token',res.data.access)
        window.location = "/"
        }
       })
       .catch(err=>{
        

       alert(err.response.data.detail)

       })
      
      };
      

      const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
      };


    return(
        <div className="container mt-5 border p-3">
        <div className="row">
          <div className="col-md-6">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="loginUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="loginUsername" name="username" value={loginData.username} onChange={handleLoginChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword" name="password" value={loginData.password} onChange={handleLoginChange} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>

              <a href="/register" className="ml-4">Dont Have Any Account Want to Register</a>
            </form>
          </div>
          </div>
        </div>
    )
 }

 export default Login