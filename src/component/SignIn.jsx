import React from 'react'
import { useState } from 'react'
import MalhubLogo from '../assets/MalhubLogo.png'

const SignIn = () => {
    
        const [text, setText] = useState('');  
        const [number, setNumber] = useState('');
        const [email, setEmail] = useState('');  
        const [password, setPassword] = useState('');  
    
        const handleSubmit = (e) => {  
            e.preventDefault(); 
    
            // Handle login logic here 
            console.log('Text:', text);
            console.log('Number:', number); 
            console.log('Email:', email);  
            console.log('Password:', password);  
        };  

  return (
    <>
    <nav className='flex gap-[900px] justify-center items-center my-3'>
        <div>
            <img className='h-[47px] w-[140px]' src={MalhubLogo} alt="logo" />
        </div>

        <div className='flex gap-5 justify-center items-center'>
        <button className='border-[1px] border-solid border-[#3e4694] rounded-[50px] justify-center h-[50px] w-[80px] flex items-center hover:bg-[#3e4694] text-[15px] hover:text-white'>Sign up</button>

        <button className='border-[1px] border-solid border-[#3e4694] rounded-[50px] justify-center h-[50px] w-[80px] flex items-center hover:bg-[#3e4694] text-[15px] hover:text-white'>Log in</button>
        </div>
    </nav>
    <div className='grid justify-items-center'>
        <h1 className='font-semibold font-mono text-[24px] leading-7'>Create an account</h1>
        <p className='text-[16px] text-[#000000B2] font-semibold leading-5'>Enter your personal details below to proceed</p>

  
 
        <form onSubmit={handleSubmit}>  
      <div className='w-[480px] h-[430px] border-[1px] border-[#8F94C1] rounded-[25px] my-10 bg-[#FCFCFE] shadow-2xl'> 
            <div className='mx-16 text-[16px] text-[#000000B2] font-medium my-5'>  
                <label htmlFor="text">Full name</label>
                <input className='w-[350px] h-[35px] rounded-[15px] border-[1px] border-black' placeholder='  Enter your name here' 
                    type="text"  
                    id="text"  
                    value={text}  
                    onChange={(e) => setText(e.target.value)}  
                    required  
                />  
            </div>  
            <div className='mx-16 text-[16px] text-[#000000B2] font-medium my-5'>  
                <label htmlFor="number">Phone number</label>
                <input className='w-[350px] h-[35px] rounded-[15px] border-[1px] border-black' placeholder='  234' 
                    type="number"  
                    id="number"  
                    value={number}  
                    onChange={(e) => setNumber(e.target.value)}  
                    required  
                />  
            </div>  
            <div className='mx-16 text-[16px] text-[#000000B2] font-medium my-5'>  
                <label  htmlFor="email">Email address</label>
                <input className='w-[350px] h-[35px] rounded-[15px] border-[1px] border-black' placeholder='  Enter email address' 
                    type="email"  
                    id="email"  
                    value={email}  
                    onChange={(e) => setEmail(e.target.value)}  
                    required  
                />  
            </div>  
            <div className='mx-16 text-[16px] text-[#000000B2] font-medium'>  
                <label htmlFor="password">Password</label>
                <input className='w-[350px] h-[35px] rounded-[15px] border-[1px] border-black' placeholder='  Enter password' 
                    type="password"  
                    id="password"  
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}  
                    required  
                />  
            </div>
            <u className='mx-16 text-[12px] font-medium text-[#000000CC] leading-[14px]'>Forgot password?</u>
            <p className='flex justify-center my-3'>Already have an account?<button className='text-[darkblue] mx-1' type="submit">Log in</button></p>  
              
        </div>
        </form>  
    </div>
    </>
    );  
};  
      
export default SignIn;