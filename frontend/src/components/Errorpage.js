import React from 'react'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
    <div>
      <div>
        <h1 className='pt-5'>404</h1>
        <h2 className='pt-5'>PAGE NOT FOUND</h2>
        <h4 className='pt-5'>YOU HAVE ENTERED A WRONG PAGE</h4>
      </div>

      <NavLink to='/'>Back To Homepage</NavLink>
    </div>
    </>
  )
}

export default Errorpage
