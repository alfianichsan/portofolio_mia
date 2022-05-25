import React from "react";
import Navbar from "../../Components/Navbar";
import Contact from "../Contact";
import Education from "../Education";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Interest from "../Interest";
import Profile from "../Profile";
import Skill from "../Skill";
import WorkHistory from "../WorkHistory";
import "./MainApp.css";

const MainApp = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="w-full">
        <section id="Home">
          <HeroSection />
        </section>
        <section id="About" className="flex-col bg-gray-100">
          <Profile />
        </section>
        <section id="About" className="flex-col bg-white">
          <Education />
        </section>
        <section id="About" className="flex-col bg-gray-100">
          <WorkHistory />
        </section>
        <section id="About" className="flex-col bg-white">
          <Skill />
        </section>
        <section id="About" className="flex-col bg-gray-100">
          <Interest />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default MainApp;
