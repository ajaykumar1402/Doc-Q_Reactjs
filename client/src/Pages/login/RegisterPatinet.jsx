import React from 'react'

const RegisterPatinet = () => {
    const [name,setName]=useState('');
    const [phone,setPhone]=useState('');
    const[city,setCity]=useState('');
    const[gender,setGender]=useState('male');
    const[age,setAge]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const data={
            name:name,
            phone:phone,
            city:city,
            gender:gender,
            age:age,
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
            <label for="city">City</label>
            <input type="text" id="city" name="city" onChange={(e)=> setCity(e.target.value)} />
            <span id="errcity" class="err"></span>
        </div>
        <div class="formwrp">
        <label for="gender">Gender</label>
        <select id="gender" name="gender" onChange={(e)=>setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nottosay">Perfer not to say</option>
        </select>
        <span id="errusertype" class="err"></span>
      </div>
      <div class="formwrp">
        <label for="age">Age</label>
        <input
        name="age"
          type="number"
          id="age"
          min="1"
          step="1"
          max="150"
          onkeypress="return event.charCode >= 48 && event.charCode <= 57"
          onChange={(e)=>setAge(e.target.value)}
        />
        <span id="errage" class="err"></span>
      </div>
        <div id="frmbtnwrp">
            <button id="frmbtndcotor" class="frmbtn" type="submit" onClick={handleSubmit}>Finish</button>
        </div>
    </div>
  )
}

export default RegisterPatinet