import React from "react";

const Profile = () => {
  return (
    <div className="py-8 container flex flex-col lg:w-3/5 w-4/5 mt-5">
      <h1 className="uppercase mt-5 font-semibold text-2xl text-center text-rose-600">Profile</h1>
      <div className="mt-10">
        <p className="text-center">
          Perkenalkan nama saya Mia Hanifah. Saya lahir dan tinggal di kota Bandung. Saya adalah anak pertama dari 4 bersaudara. Saya berumur 23 tahun dan status saya pada saat ini belum menikah. Saya seorang yang memiliki rasa keingin
          tahuan yang tinggi sehingga saya dapat mengembangkan diri dan mengasah kemampuan.
        </p>
      </div>
    </div>
  );
};

export default Profile;
