import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[userType,setUsertype]=useState('patinet');
    
    const handelSubmit=async(e)=>{
        e.preventDefault();
        const data={
            email:email,
            password:password,
            user:userType,
        }
        // try{
        //     const response=await fetch('/api/user/signup',{
        //         method:'POST',
        //         headers:{
        //             'content-Type':'application-json'
        //         },
        //         body:JSON.stringify(data)
        //     });
        //     if(response.ok){
        //         const responseData=await response.json();
                navigate("/verify-email", {state: email})
        //     }else{
        //         console.log("error",response.statusText)
        //     }
        // }catch(error){
        //     console.log('fetch error:', error)
        // }
    }
  return (
    <div><div class="container">
    <h2>Login Form</h2>
  
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}    required/>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} required/>
        </div>
        <div class="form-group">
            <label for="userType">User Type:</label>
            <select id="userType" name="userType" onChange={(e)=>setUsertype(e.target.value)}>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>
        </div>
        <button onClick={handelSubmit}>Login</button>
</div></div>
  )
}

export default Register