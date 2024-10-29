import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import Istock  from "../assets/Istock.jpg"
import Mail from '../assets/Mail.png'
import Lock from '../assets/Lock.png';
import { RxDividerVertical } from "react-icons/rx";

const SignIn = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle login logic here
    console.log("Text:", text);
    console.log("Number:", number);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Navbar />
      <div className="grid justify-items-center">
        <h1 className="mt-24 font-semibold font-mono text-[24px] leading-7">
          Create an account
        </h1>
        <p className="text-[16px] text-[#000000B2] font-semibold leading-5">
          Enter your personal details below to proceed
        </p>

        <form onSubmit={handleSubmit}>
          <div className="w-[480px] h-[450px] border-[1px] border-[#8F94C1] rounded-[25px] my-10 bg-[#FCFCFE] shadow-2xl">
            <div className="mx-16 text-[16px] text-[#000000B2] font-medium my-5">
              <label htmlFor="text">Full name</label>
              <input
                className="w-[350px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[10px]"
                placeholder="  Enter your name here"
                type="text"
                id="text"
                autoComplete="off"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
            </div>
            <div className="mx-16 text-[16px] text-[#000000B2] font-medium my-5 relative">
            <label htmlFor="email">Phone number</label>
              <div className="absolute flex pl-2 pt-1 items-center">
                <img className="h-7 w-7" src={Istock} alt="" />
                <FaChevronDown />
                <RxDividerVertical />
              </div>
              <input
                className="w-[350px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[65px]"
                placeholder="+234"
                type="number"
                id="number"
                autoComplete="off"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="mx-16 text-[16px] text-[#000000B2] font-medium my-5 relative">
              <label htmlFor="email">Email address</label>
              <div className=" pl-80">
                <img className="pt-1 absolute" src={ Mail } alt="" />
              </div>
              <input 
                className="w-[350px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[10px]"
                placeholder=" Enter email address"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mx-16 text-[16px] text-[#000000B2] font-medium relative">
              <label htmlFor="password">Password</label>
              <div className="pl-80">
                 <img className="absolute pt-1" src={ Lock } alt="" />
              </div>
              <input
                className="w-[350px] h-[35px] rounded-[15px] border-[1px] border-black caret-blue-500 pl-[10px]"
                placeholder=" Enter password"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <u className="mx-16 text-[12px] font-medium text-[#000000CC] leading-[14px] hover:text-[darkblue]">
              Forgot password?
            </u> <br />
            <button className="text-white bg-[darkblue] grid items-center mt-2 ml-[170px] h-[30px] w-[150px] border border-[darkblue] rounded-lg hover:bg-[#3c4493]" 
            type="submit">
            <Link to='/login'>Sign up</Link></button>
            <p className="flex justify-center my-3">
              Already have an account?
              <button className="text-[darkblue] mx-1" type="submit">
                <Link to='/login'>Log in</Link>
              </button>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;

