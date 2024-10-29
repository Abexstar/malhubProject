import React from 'react'
import MalhubLogo from "../assets/MalhubLogo.png"
import { Link } from 'react-router-dom'

 
  const Navbar = () => {


  return (
    <>
    <nav className='fixed flex items-center w-[100%] gap-[180px] bg-transparent backdrop-blur border shadow-2xl px-3 py-3'>
          <div>
            <Link to='/'><img className='h-[47px] w-[140px]' src={MalhubLogo} alt="logo"></img></Link>
          </div> 

        <ul className='flex gap-16 text-[14px] font-mono'>
        
            <li className='hover:text-[#3c4493]'><Link to="signin">Register</Link></li>

            <li className='hover:text-[#3c4493]'><Link to='payment'>See Plan</Link></li>

            <li className='hover:text-[#3c4493]'><Link to='payment'> Book Plan</Link></li>

            <li className='hover:text-[#3c4493]'><Link to="payment">Payment</Link></li>

        </ul>
        
        <div className='flex gap-5 ml-20'>
        
        <button className='border-[1px] border-solid border-transparent rounded-[50px] justify-center h-[40px] w-[80px] flex items-center hover:bg-[#3e4694] text-[15px] hover:text-white'>
          <Link to="signin">Sign up</Link>
          </button>

        <button className='border-[1px] border-solid border-transparent rounded-[50px] justify-center h-[40px] w-[80px] flex items-center hover:bg-[#3e4694] text-[15px] hover:text-white'>
          <Link to='login'>Log in</Link>
          </button>

        </div>

    </nav>
    </>
  )
}

export default Navbar;