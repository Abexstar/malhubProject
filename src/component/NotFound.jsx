import React from "react";
import Newnav from "./Newnav";
import Not from '../assets/Not.png';

const NotFound = () => {
  return (
    <div>
      <Newnav />
      <div className="grid justify-center py-[15%]">
        <img src={Not} alt="not found" />
        <p className="text-[50px] text-center font-extrabold font-mono mb-[5%]">
          ...Not Found</p>
          <p className="text-center font-mono">Kindly click on the logo</p>
      </div>
      
    </div>
  );
};

export default NotFound;
