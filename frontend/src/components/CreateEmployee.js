import React,{useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'

const CreateEmployee = () => {

  const navigate=useNavigate ()
  const callCreateEmployeePage=async()=>{
    try{
      const res= await fetch('/CreateEmployee',{
        method:"GET",
        headers:{
          "Content-Type":"application/jason",
          "Accept":"application/json"
        },
        credentials:"include"
      })

      const data=await res.json()

      if(res.status===200){
        const error=new Error(res.error)
        throw error
      }

    }catch(err){
      console.log(err)
      // navigate("/EMPlogin")
    }
  }

  useEffect(()=>{
    callCreateEmployeePage();
  },[])
  

  
  const [user,setUser]=useState({
    name:"",pemail:"",phone:"",password:"",cpassword:""
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

    const {name,pemail,phone,password,cpassword}=user

    const res=await fetch("/CreateEmployee",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        name,pemail,phone,password,cpassword
      })
    })

    const data=await res.json();
    if(data.status===422 || !data){
      window.alert("Invalid Registration")
    }
    else{
      window.alert("Successfull Registration")
      navigate("/about")
    }
  }

  return (
    <>
      <section className="register">
        <div className="container mt-5">
          <div className="register-content">
            <div className="register-form">
              <h2 className='form-title'>Register Employee</h2>

              <form method='POST' className='register-form' id='register-form'>

              <div className='form-group'>
                <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Your Name' />
              </div>

              <div className='form-group'>
                <input type="email" name="pemail" id="pemail" autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Personal Email' />
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

          </div>
        </div>
      </section>
    </>
  )
}

export default CreateEmployee
