import React from 'react'
import MalhubLogo from "../assets/MalhubLogo.png"
import SignIn from './SignIn'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className='flex items-center my-[20px] ml-[15px] gap-[250px]'>
          <div>
            <img className='h-[47px] w-[140px]' src={MalhubLogo} alt="logo"></img>
          </div> 

        <div className='flex gap-16 text-[14px] font-mono'>
            <p className='hover:text-[#3c4493]'>Register</p>

            <p className='hover:text-[#3c4493]'>See Plan</p>

            <p className='hover:text-[#3c4493]'>Book Plan</p>

            <p className='hover:text-[#3c4493]'>Payment</p>

        </div>
        
        <div className='flex gap-3'>
        
        <button className='border-[1px] border-solid border-[#3e4694] rounded-[50px] justify-center h-[50px] w-[80px] flex items-center hover:bg-[#3e4694] text-[15px] hover:text-white'>
          <Link to="signin">Sign up</Link>
          </button>

        <button className='border-[1px] border-solid border-[#3e4694] rounded-[50px] justify-center h-[50px] w-[80px] flex items-center hover:bg-[#3e4694] text-[15px] hover:text-white'>Log in</button>

        </div>

    </div>
    </>
  )
}

export default Navbar;