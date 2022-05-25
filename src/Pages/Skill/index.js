import React from "react";
import ComputerLogo from "../../Assets/computer.jpg";
import MsOffice from "../../Assets/ms.png";
import LeaderLogo from "../../Assets/leader.jpg";

const Skill = () => {
  return (
    <div className="py-8 container flex flex-col lg:w-3/5 w-4/5 mt-5">
      <h1 className="uppercase mt-5 font-semibold text-2xl text-center text-rose-600">SKILLS</h1>
      <div className="mt-10 flex flex-row flex-wrap justify-evenly items-center">
        <div className="flex flex-col items-center justify-center p-3 m-2">
          <img src={ComputerLogo} alt="komputer" className=" rounded-full h-48 w-48 object-contain border-2 mb-4 " />
          <p className="font-semibold text-base uppercase ">Mengopresikan Komputer</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 m-2">
          <img src={MsOffice} alt="MsOffice" className=" rounded-full h-48 w-48 object-contain border-2 mb-4 " />
          <p className="font-semibold text-base uppercase ">Terbiasa dengan MS Office</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 m-2">
          <img src={LeaderLogo} alt="olahraga" className=" rounded-full h-48 w-48 object-contain border-2 mb-4 " />
          <p className="font-semibold text-base uppercase ">Leadership</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
