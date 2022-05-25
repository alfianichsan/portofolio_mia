import React from "react";
import ProfileImage from "../../Assets/profile.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import CV from "../../Assets/cv-mia.jpg";

import { saveAs } from "file-saver";

const HeroSection = () => {
  const downloadCV = () => {
    saveAs(CV, "cv-miahanifah.jpg");
  };
  return (
    <div className="container flex flex-col lg:w-3/5 w-4/5 mt-5">
      <div className="h-full w-full flex flex-wrap items-center">
        <div className="lg:w-3/6 flex flex-col justify-center">
          <p className="text-base font-semibold text-rose-600">Hallo, Nama Saya</p>
          <p className="text-3xl font-semibold text-black ">Mia Hanifah</p>
          <p className="text-base text-black mb-2">Saya adalah seorang yang dapat bekerja secara mandiri dan mudah bersosialisasi</p>
          <div className="flex flex-row mb-4 text-rose-800">
            <a href="https://www.gmail.com" target="_blank" className="mr-2 hover:scale-110 delay-200 transition-all ease-in-out">
              <EmailIcon />
            </a>
            <a href="https://www.facebook.com" target="_blank" className="mr-2 hover:scale-110 delay-200 transition-all ease-in-out">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com" target="_blank" className="mr-2 hover:scale-110 delay-200 transition-all ease-in-out">
              <InstagramIcon />
            </a>
            <a href="https://www.twitter.com" target="_blank" className="mr-2 hover:scale-110 delay-200 transition-all ease-in-out">
              <TwitterIcon />
            </a>
          </div>
          <button onClick={downloadCV} className="w-44 shadow-md shadow-gray-400 px-4 py-2 rounded-2xl text-base font-medium text-white bg-pink-500 hover:scale-110 transition-all ease-in duration-300 hover:ring-2">
            Download CV
          </button>
        </div>
        <div className="lg:w-3/6 flex items-center justify-center mt-5">
          <img src={ProfileImage} alt="profile" className="rounded-full lg:h-96 shadow-md hover:scale-105 transition-all ease-out duration-300 delay-300" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
