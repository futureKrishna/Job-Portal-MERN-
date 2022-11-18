import React,{useState} from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'


const JSRegister = () => {

  const navigate=useNavigate ()
  const [user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  })

  let name,value

  const handleInputs=(e)=>{
    name=e.target.name
    console.log(name)
    value=e.target.value
    console.log(value)

    setUser({...user,[name]:value})
  }

  const PostData=async(e)=>{
    e.preventDefault()

    const {name,email,phone,password,cpassword}=user

    const res=await fetch("/JSregister",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,email,phone,password,cpassword
      })
    })

    const data=await res.json();
    if(data.status===422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    }
    else{
      window.alert("Successfull Registration")
      console.log("Successfull Registration")

      navigate("/JSlogin")
    }
  }

  return (
    <>
      <section className="register">
        <div className="container mt-5 ">
          <div className="JSregister1">
            <div className="register-form">
              <h2 className='form-title'>Jobseeker Register</h2>

              <form method='POST' className='register-form' id='register-form'>

              <div className='form-group'>
                <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Your Name' />
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
                <input type="submit" name="register" id="register" className='btn' value='Register' onClick={PostData}
                />
              </div>

              </form>
              </div>

              <div>
                <NavLink to="/JSlogin" className='navlink' >Already Registered</NavLink>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default JSRegister
