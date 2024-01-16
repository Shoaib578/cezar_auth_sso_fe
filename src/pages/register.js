import axios from "axios";
import React,{useState} from "react";
import base_url from "../base_url";

const Register = ()=>{
    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
      });

      const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
      };
    
    
      const handleRegisterSubmit = async(e) => {
        e.preventDefault();
        const {email,username,password} = registerData
       
          let formData = new FormData()
          formData.append('username',username)
          formData.append('email',email)
  
          formData.append('password',password)
          formData.append('password2',password)
          formData.append('first_name','none')
          formData.append('last_name','none')
  
         axios.post(`${base_url}/api/register/`,formData)
         .then(res=>{
         
          if(res.status == 201){
           alert("Registered successfully")
          }
         })
         .catch(err=>{
          let full_error = ""
         if(err.response.data.username){
          err.response.data.username.map(u_err=>{
            full_error +="Username: \n"+u_err+"\n"
          })
         }
         if(err.response.data.email){
          err.response.data.email.map(e_err=>{
            full_error +="Email: \n"+ e_err+"\n"
          })
         }

         if(err.response.data.password){
          err.response.data.password.map(p_err=>{
            full_error +="Password: \n"+ p_err+"\n"
          })
         }

         alert(full_error)

         })
        
       
        

      };
return(
    <div className="container mt-5 border p-3">
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-3">
              <label htmlFor="registerUsername" className="form-label">Username</label>
              <input type="text" className="form-control" id="registerUsername" name="username" value={registerData.username} onChange={handleRegisterChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="registerEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="registerEmail" name="email" value={registerData.email} onChange={handleRegisterChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="registerPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="registerPassword" name="password" value={registerData.password} onChange={handleRegisterChange} />
            </div>
            <button type="submit" className="btn btn-success">Register</button>
          </form>
    </div>
    
)
}

export default Register