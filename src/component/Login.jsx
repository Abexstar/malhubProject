import React from 'react'
import { useState } from 'react';
import Newnav from './Newnav';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const Login = () => {

  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  

  const handleSubmit = (e) => {  
      e.preventDefault(); 


  
      // Handle login logic here 
      console.log('Email:', email);
      console.log('Password:', password); 
  };

  return (
<>
<div>
<Newnav />
</div>
<div className='grid justify-center mt-[100px]'>
    <div className=' flex items-center w-[179px] h-[38px] gap-[30px] ml-[60px]'>
      <Link to='/login'><b>Sign in</b></Link>
       
      <Link to='/signin'><b>Sign up</b></Link>
      
    </div>
    <div className='w-14 h-1 bg-black ml-[61px]'></div>


    <form onSubmit={handleSubmit}>  
      <div> 
            <div className='mx-16 text-[15px] text-black font-bold leading-[18px] font-mono mt-5'>  
                <label htmlFor="email">Email address*</label> <br />
                <input className='w-[400px] h-[35px] rounded-[15px] border-[1px] border-[#BFB7B74D] mt-5 bg-[#BFB7B74D] hover:bg-white caret-blue-500 pl-[10px]'
                    type="email"  
                    id="email"  
                    autoComplete='off'
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)}  
                    required  
                />  
              </div>  
            <div className='mx-16 text-[15px] text-black font-bold leading-[18px] font-mono mt-5'>  
                <label htmlFor="password">Password*</label> <br />
                <input className='w-[400px] h-[35px] rounded-[15px] border-[1px] border-[#BFB7B74D] mt-5 bg-[#BFB7B74D] hover:bg-white caret-blue-500 pl-[10px]'
                    type="password"  
                    id="password"
                    autoComplete='off'  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}  
                    required  
                />  
            </div>  
          </div>
          <br />
          <div className='flex items-center gap-[12px] ml-[60px] font-normal text-[13px] leading-[15px]'>
            <input className='w-[24px] h-[16px]' type="checkbox"/> <p>Remember me</p>
          </div>  
          <div>
            <button className='w-[400px] h-[35px] rounded-[15px] border-[1px] text-white border-[#50599e] mt-5 bg-[#50599e] ml-[61px] hover:bg-[#0617ab]'>
              <Link to='/bookpland' className='flex flex-row items-center justify-center gap-2'>Sign in <FaArrowRight className='mt-1'/></Link>
              </button>
          </div>
     </form>

</div>
</>
);
};

export default Login;

