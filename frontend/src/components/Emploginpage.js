import React from 'react'
import { NavLink } from 'react-router-dom';

const Emploginpage = () => {

  return (
    <>
    <div className="mainbanner">
         <div className="bannercover">
          <h1><span className="span">W</span>elcome , <span className="span" >T</span>o <span className="span">H</span>ome <span className="span">P</span>age</h1>
         </div>
        </div>

        <div>
            <NavLink to="/CreateEmployee"><h1 className="my-3 text-center"><span className="span1">C</span>reate <span className="span1">E</span>mployee</h1></NavLink>
        </div>

    </>
  )
}

export default Emploginpage
