import React, { useState } from 'react'

const Login = () => {
    const[email,setEmail]=useState('');
    const[password,setPassword]=('');
    const[userType,setUserType]=('patient');
    const handelSubmit=async(e)=>{
        e.preventDefault();
        const data={
            email:email,
            password:password,
            user:userType,
        }
        try{
            const response=await fetch('/api/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            });
            if(response.ok){
                const responseData=await response.json();
                console.log("Response from API",responseData)
            }else{
                console.log("error",response.statusText);
            }
        }catch (error) {
            
            console.error('Fetch error:', error);
          }
    }
  return (
    <div class="container">
        <h2>Login Form</h2>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email"onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" 
                onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="userType">User Type:</label>
                <select id="userType" name="userType" onChange={(e)=>setUserType(e.target.value)}>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                </select>
            </div>
            <button onClick={handelSubmit}>Login</button>
        
    </div>
  )
}

export default Login