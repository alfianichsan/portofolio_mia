import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="w-full p-12 h-24 text-white font-semibold text-base flex flex-col items-center justify-center bg-rose-800">
      <div className="flex flex-row mb-4 text-gray-300">
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
    </div>
  );
};

export default Footer;
