import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const EMPLogin = () => {

  const navigate=useNavigate ()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const loginUser=async(e)=>{
    e.preventDefault();

    const res=await fetch("/EMPlogin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })

    const data=await res.json();
    if(res.status===400 || !data){
      window.alert("Invalid Credential")
    }
    else{
      // window.alert("Successfull Login")
      navigate("/Emploginpage")
    }
  }

  return (
    <div className="register-form">
    <div className="container mt-5">
      <h2 className='form-title'>Employer Login</h2>

      <form method="POST" className='login-form' id='login-form'>

        <div className='form-group'>
          <input type="email" name="email" id="email" autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Your Email' />
        </div>

        <div className='form-group'>
          <input type="password" name="password" id="password" autoComplete='off' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Your Password' />
        </div>

        <div className='form-group form-button'>
          <input type="submit" name="login" id="login" className='btn' value='Login' onClick={loginUser} />
        </div>

      </form>

    </div>
    </div>
  )
}

export default EMPLogin
