import axios from 'axios';
import React, { useState } from 'react'

function Signup() {
    const[datas,setdata]=useState('')
    let handlechange=(e)=>{
        setdata({...datas,[e.target.name]:e.target.value})
        console.log(datas);
    }

    let callingsubmit=async(e)=>{
      e.preventDefault()
      console.log(datas,'aftersubmit');
      let response=await axios.post('http://localhost:4000/add',datas)
      console.log('response',response);
    }
  return (
    
    <div>
        <form  onSubmit={callingsubmit}>
        <input type="text" onChange={handlechange} name='username' />
        <input type="text" onChange={handlechange} name='password' />
        <input type="text" onChange={handlechange} name='email' />
        <input type="submit"  />
        </form>
    </div>
  )
}

export default Signup