import React from "react";

const WorkHistory = () => {
  return (
    <div className="container mx-auto h-full z-[1] py-8 lg:w-3/5 w-full mt-5">
      <h1 className="uppercase mt-5 font-semibold text-lg text-center text-rose-500">Riwayat Pekerjaan</h1>
      <div className="relative wrap overflow-hidden lg:p-10 p-3 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-2/4"></div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className=" flex items-center order-1 bg-rose-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg  text-white shadow-xl w-5/12 px-6 py-4">
            <div className="flex flex-row justify-between items-center mb-2 flex-wrap">
              <h3 className="font-bold mr-2 mb-2 lg:text-xl md:text-lg text-base">CV Tunas Multijaya</h3>
              <span className="lg:text-xs md:text-sm text-xs font-semibold">2017</span>
            </div>
            <p className="lg:text-xs text-xs leading-snug tracking-wide text-white text-opacity-100">
              Bekerja sebagai admin gudang yang bertugas melakukan stock opname setiap minggunya. Memilah barang yang masih layak untuk di distribusikan.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className=" flex items-center order-1 bg-rose-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-teal-400  rounded-lg text-white shadow-xl w-5/12 px-6 py-4">
            <div className="flex flex-row justify-between items-center mb-2 flex-wrap">
              <h3 className="font-bold mr-2 mb-2 lg:text-xl md:text-lg text-base">PT. Sitcomasia</h3>
              <span className="lg:text-xs md:text-sm text-xs font-semibold">2017-2019</span>
            </div>
            <p className="lg:text-xs text-xs leading-snug tracking-wide text-white text-opacity-100">
              Menjadi customer service yang memberikan pelayanan serta solusi terbaik terhadap customer yang ingin service elektronik. Menawarkan product dan melakukan penjualan untuk pencapaian target.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className=" flex items-center order-1 bg-rose-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg text-white shadow-xl w-5/12 px-6 py-4">
            <div className="flex flex-row justify-between items-center mb-2 flex-wrap">
              <h3 className="font-bold mr-2 mb-2 lg:text-xl md:text-lg text-base">PT. Sicepat Ekspress</h3>
              <span className="lg:text-xs md:text-sm text-xs font-semibold">2019-2022</span>
            </div>
            <p className="lg:text-xs text-xs leading-snug tracking-wide text-white text-opacity-100">
              Saya seorang tim leader memimpin admin operasional di seluruh cabang Bandung serta kota - kota besar di Jawa Barat. Melakukan recruitment dan training, memonitor kinerja KPI anggota tim, kontrol cabang dan evaluasi kekurangan
              keadaan cabang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
