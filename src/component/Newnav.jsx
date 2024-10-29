import React from 'react'
import ProfilePic from '../assets/ProfilePic.png'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import MalhubLogo from "../assets/MalhubLogo.png"

const Newnav = () => {
  return (
    <div className='fixed flex items-center w-[100%] gap-[180px] bg-transparent backdrop-blur border shadow-2xl px-3 py-3'>
          <div>
          <Link to='/'><img className='h-[47px] w-[140px]' src={MalhubLogo} alt="logo"></img></Link>
          </div> 

        <ul className='flex gap-16 text-[14px] font-mono'>
        
            <li className='hover:text-[#3c4493]'><Link to='/signin'>Register</Link></li>

            <li className='hover:text-[#3c4493]'><Link to='/bookpland'>See Plan</Link></li>

            <li className='hover:text-[#3c4493]'><Link to='/payment'> Book Plan</Link></li>

            <li className='hover:text-[#3c4493]'><Link to='/payment'>Payment</Link></li>

        </ul>
        
        <div className='pl-32 flex gap-10'>
        
        <FaRegBell />
        
        <img className='w-[35px] h-[35px]' src={ ProfilePic } alt="Profile pic" /> 

        <RiArrowDropDownLine />

        </div>

    </div>
    
  );
};

export default Newnav;