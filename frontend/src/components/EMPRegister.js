import React,{useState} from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'


const EMPRegister = () => {

  const navigate=useNavigate ()
  const [user,setUser]=useState({
    name:"",cname:"",email:"",phone:"",password:"",cpassword:""
  })

  let name,value

  const handleInputs=(e)=>{
    name=e.target.name
    value=e.target.value
    setUser({...user,[name]:value})
  }

  const PostData=async(e)=>{
    e.preventDefault()

    const {name,cname,email,phone,password,cpassword}=user

    const res=await fetch("/EMPregister",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        name,cname,email,phone,password,cpassword
      })
    })

    const data=await res.json();
    if(data.status===422 || !data){
      window.alert("Invalid Registration")
    }
    else{
      window.alert("Successfull Registration")
      navigate("/EMPlogin")
    }
  }

  return (
    <>
      <section className="register">
        <div className="container mt-5">
          <div className="register-content">
            <div className="register-form">
              <h2 className='form-title'>Employer Register</h2>

              <form method='POST' className='register-form' id='register-form'>

              <div className='form-group'>
                <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Your Name' />
              </div>

              <div className='form-group'>
                <input type="text" name="cname" id="cname" autoComplete='off' value={user.cname} onChange={handleInputs} placeholder='Your Company Name' />
              </div>

              <div className='form-group'>
                <input type="text" name="email" id="email" autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Your Email' />
              </div>

              <div className='form-group'>
                <input type="text" name="phone" id="phone" autoComplete='off' value={user.phone}  onChange={handleInputs} placeholder='Your Phone' />
              </div>

              <div className='form-group'>
                <input type="password" name="password" id="password" autoComplete='off' value={user.password} onChange={handleInputs} placeholder='Your Password' />
              </div>

              <div className='form-group'>
                <input type="password" name="cpassword" id="cpassword" autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Confirm Your Password' />
              </div>

              <div className='form-group form-button'>
                <input type="submit" name="register" id="register" className='btn' value='register' onClick={PostData}
                />
              </div>

              </form>
              </div>

              <div>
                <NavLink to="/EMPlogin" className='navlink'>Already Registered</NavLink>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EMPRegister
