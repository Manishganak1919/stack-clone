import React from 'react'
import '../LeftSidebar/LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import { FaGlobeAfrica } from 'react-icons/fa'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeClass='active' >
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to='/Questions' className='side-nav-links' activeClass='active'  style={{paddingLeft:"40px"}}>
            {/* <img src={globe} alt='Globe'/> */}
            <FaGlobeAfrica/>
            <p style={{paddingLeft:"10px"}}>Question</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
              <p>Tags</p>
          </NavLink>

          <NavLink to='/Users' className='side-nav-links' activeClass='active' style={{paddingLeft:"40px"}}>
              <p>Users</p>
          </NavLink>
        </div>

      </nav>
      
    </div>
  )
}

export default LeftSidebar