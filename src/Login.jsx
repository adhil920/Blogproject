import React, { useState } from 'react'

function Login() {
  const [data,setdata]=useState('')
  let handlechange=(event)=>{
    setdata({...data,[event.target.name]:event.target.value})
    console.log(data);
  }
  



  return (
    <div>
      <input type="text" onChange={handlechange}  name='username' placeholder='username' /><br></br>
      <input type="text" onChange={handlechange} name='password' placeholder='password' />
      <input type="Submit" />
    </div>
  )
}

export default Login