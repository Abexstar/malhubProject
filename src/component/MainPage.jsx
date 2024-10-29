import React from "react";
import MalhubLogo from "../assets/MalhubLogo.png";
import malhubWorkSpace from "../assets/malhubWorkSpace.jpg";

function MainPage() {
  return (
    <div className="flex gap-20">
      <div>
        <img
          className="w-[500px] h-[500px] rounded-full ml-16 mt-5"
          src={malhubWorkSpace}
          alt="image"
        />
      </div>
      <div className="mt-5">
        <i className="font-semibold">
          Makers and Leaders Hub <span>(MALhub) </span> <br />
          is an open, serene and beautiful shared workspace <br /> for startups and
          entrepreneurs at a lower cost than they <br /> would spend on space of their
          own. 
        </i>
        <img
          className="w-[300px] h-[100px] mt-[150px] ml-[150px]"
          src={MalhubLogo}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default MainPage;
