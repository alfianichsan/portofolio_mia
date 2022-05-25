import React from "react";
import MusicLogo from "../../Assets/note-music.png";
import CulinaryLogo from "../../Assets/culinaryicon.png";
import MovieLogo from "../../Assets/movie.jpg";

const Interest = () => {
  return (
    <div className="py-8 container flex flex-col lg:w-3/5 w-4/5 mt-5">
      <h1 className="uppercase mt-5 font-semibold text-2xl text-center text-rose-600">Interest</h1>
      <div className="mt-10 flex flex-row flex-wrap justify-evenly items-center">
        <div className="flex flex-col items-center justify-center p-3 m-2">
          <img src={MusicLogo} alt="music" className=" rounded-full h-48 w-48 object-contain border-2 mb-4 " />
          <p className="font-semibold text-base uppercase ">Musik</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 m-2">
          <img src={CulinaryLogo} alt="kuliner" className=" rounded-full h-48 w-48 object-contain border-2 mb-4 " />
          <p className="font-semibold text-base uppercase ">Kuliner</p>
        </div>
        <div className="flex flex-col items-center justify-center p-3 m-2">
          <img src={MovieLogo} alt="olahraga" className=" rounded-full h-48 w-48 object-contain border-2 mb-4 " />
          <p className="font-semibold text-base uppercase ">Film</p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
