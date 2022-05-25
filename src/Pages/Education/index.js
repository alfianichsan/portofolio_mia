import React from "react";

const Education = () => {
  return (
    <div className="container mx-auto h-full z-[1] py-8 lg:w-3/5 w-full mt-5 ">
      <h1 className="uppercase mt-2 font-semibold text-lg text-center text-rose-500">Riwayat Pendidikan</h1>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="m-2 p-4 bg-gray-200 shadow-lg shadow-slate-400 flex flex-col w-64 h-32 justify-center">
          <h1 className="uppercase text-lg font-semibold text-rose-500">SD</h1>
          <span className="text-xs mb-2 font-semibold">2004-2010</span>
          <p>SDN Griba 14</p>
        </div>
        <div className="m-2 p-4 bg-zinc-100 shadow-lg shadow-slate-400 flex flex-col w-64 h-32 justify-center">
          <h1 className="uppercase text-lg font-semibold text-rose-500">SMP</h1>
          <span className="text-xs mb-2 font-semibold">2010-2013</span>
          <p>SMPN 45 Bandung</p>
        </div>
        <div className="m-2 p-4 bg-gray-200 shadow-lg shadow-slate-400 flex flex-col w-64 h-32 justify-center">
          <h1 className="uppercase text-lg font-semibold text-rose-500">SMK</h1>
          <span className="text-xs mb-2 font-semibold">2013-2016</span>
          <p>SMK Merdeka Bandung</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
