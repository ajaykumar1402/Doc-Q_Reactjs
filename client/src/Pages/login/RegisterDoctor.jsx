import React, { useState } from 'react'

const RegisterDoctor = () => {
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const[specialization,setSpecialization]=useState('');
    const[firm,setFirm]=useState('');
    const[city,setCity]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            name:name,
            phone:phone,
            specialization:specialization,
            firm:firm,
            city:city,
        }
        try{
            const response=await fetch("/api/user/signup/doctor",{
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                },
                body:JSON.stringify(data)
            } );
            if(response.ok){
                responseDate=await response.json();
                console.log("Response from api ",responseDate)
            }else{
                console.log("Error",response.statusText);
            }
        }catch(error){
            console.log('Fetch error :',error);
        }
    }
  return (
    
    <div>
        <div class="formwrp">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} />
            <span id="errname" class="err"></span>
        </div>
        
        <div class="formwrp">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" name="phone" onChange={(e)=>setPhone(e.target.value)} />
            <span id="errphone" class="err"></span>
        </div>
    
        <div class="formwrp">
            <label for="specializations">Specializations</label>
            <input type="text" id="specializations" name="specializations" onChange={(e)=>setSpecialization(e.target.value)} />
            <span id="errspecializations" class="err"></span>
        </div>
        
        <div class="formwrp">
            <label for="firm">Firm</label>
            <input type="text" id="firm" name="firm" onChange={(e)=>setFirm(e.target.value)}/>
            <span id="errfirm" class="err"></span>
        </div>
        
        <div class="formwrp">
            <label for="city">City</label>
            <input type="text" id="city" name="city" onChange={(e)=> setCity(e.target.value)} />
            <span id="errcity" class="err"></span>
        </div>
        
        <div id="frmbtnwrp">
            <button id="frmbtndcotor" class="frmbtn" type="submit" onClick={handleSubmit}>Finish</button>
        </div>
    </div>
  )
}

export default RegisterDoctor