import React from "react";
import MalhubSpace from "../assets/MalhubSpace.jpeg";
import Newnav from "./Newnav";
import { PackagesMonthly } from "../data/db";
import { Link } from "react-router-dom";

const BookPlanD = () => {
  return (
    <div>
      <Newnav />
      <div>
        <h1 className="pt-[80px] font-sans text-[40px] font-medium leading-[38px] grid justify-center items-center">
          Step into a World of Productivity at <br />
          <span className="font-sans text-[40px] font-medium leading-[38px] grid justify-center items-center">
            MALhub Co-Work Space!
          </span>
        </h1>{" "}
        <br />
        <br />
        <p className="font-sans text-[24px] font-normal leading-[23px] grid justify-center items-center text-[#575050]">
          Need a space to get creative and get work done? At MALhub, we believe
          that a
        </p>
        <span className="font-sans text-[24px] font-normal leading-[23px] grid justify-center items-center text-[#575050]">
          conducive work environment can make all the difference in your
          professional journey.
        </span>{" "}
        <br />
        <br />
        <div className="flex justify-center items-center">
          <img className="w-[750px] h-[250px]" src={MalhubSpace} alt="frame" />
        </div>
        <br />
        <div>
          <ul className="flex flex-row justify-center items-center gap-10">
            <li className="w-[200px] h-[60px] border border-[black] rounded-xl grid justify-center items-center hover:bg-[#3C4493] hover:text-white">
               <Link to='/bookpland'>Daily</Link>
            </li>
            <li className="w-[200px] h-[60px] border border-[black] rounded-xl grid justify-center items-center hover:bg-[#3C4493]  hover:text-white">
               <Link to='/bookplanw'>Weekly</Link>
            </li>
            <li className="w-[200px] h-[60px] border border-[black] rounded-xl grid justify-center items-center hover:bg-[#3C4493]  hover:text-white">
               <Link to='/bookplanm'>Monthly</Link>
            </li>
            <li className="w-[200px] h-[60px] border border-[black] rounded-xl grid justify-center items-center hover:bg-[#3C4493]  hover:text-white">
               <Link to='/bookplanos'>Office space</Link>
            </li>
          </ul>
        </div>
        <br />
        <div>
          <p className="mx-32 font-sans font-normal text-[32px] leading-[30px] grid items-center">
            Daily Packages
          </p>
          <br />

          <p className="mx-32 font-sans font-normal text-[20px] leading-[19px] grid items-center">
            MALhub daily subscription packages
          </p>
        </div>
        <div>
          <div className=" px-32 py-24 gap-10 grid grid-cols-3  ">
            {PackagesMonthly.map((items, id) => {
              const { item, currency, price, features, cta } = items;

              return (
                <div
                  key={id}
                  className=" px-5 py-4 flex flex-col items-center justify-between h-[70dvh] bg-blue-50 border border-blue-100 rounded-3xl shadow-2xl"
                >
                  <div className="flex  flex-col  justify-center items-center">
                    <span className="font-bold text-[30px]">{item}</span>
                    <div>
                      <span>{currency}</span>
                      <span className="text-[35px]">{price}</span>
                    </div>

                    <div
                      className={`flex  flex-col  divide-y-[1px] divide-black/20 justify-center items-center`}
                    >
                      {features.map((mode, id) => (
                        <div className="w-full text-center py-3">{mode}</div>
                      ))}
                    </div>
                  </div>
                  <button className="w-[180px] h-[50px] border border-blue-300 rounded-2xl flex items-center justify-center bg-blue-300 text-red-500 hover:bg-blue-900 hover:text-white shadow-2xl">
                    <Link to="/payment">{cta}</Link>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPlanD;
