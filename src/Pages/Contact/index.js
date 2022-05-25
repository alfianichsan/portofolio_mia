import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const serviceID = "service_ahv5x99";
  const userID = "-aG8mcsTlSDshHLW3";
  const templateID = "template_xck6u87";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      (result) => {
        toast.success("Terima kasih! Pesan kamu telah terkirim", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="py-8 container flex flex-col lg:w-3/5 w-4/5 mt-5 items-center">
      <ToastContainer />
      <h1 className="uppercase mt-5 font-semibold text-2xl text-center text-rose-600">Contact me</h1>
      <div className="mt-16 flex flex-col flex-wrap justify-evenly items-start lg:w-3/5 w-4/5">
        <form onSubmit={sendEmail} ref={form}>
          <label htmlFor="name" className="text-gray-600 mb-2 text-sm font-semibold uppercase">
            Nama Lengkap
          </label>
          <input type="text" className="border-2 w-full border-solid rounded-md border-gray-600 mb-4 focus:ring-2 px-2 py-1 ring-rose-400" id="name" name="name" />
          <label htmlFor="telepon" className="text-gray-600 mb-2 text-sm font-semibold uppercase">
            No. Telepon/Whatsapp
          </label>
          <input type="text" name="telp" className="border-2 w-full border-solid rounded-md border-gray-600 mb-4 focus:ring-2 px-2 py-1 ring-rose-400" id="telepon" />
          <label htmlFor="email_body" className="text-gray-600 mb-2 text-sm font-semibold uppercase">
            Pesan
          </label>
          <textarea type="text" name="message" className="border-2 w-full h-28 border-solid rounded-md border-gray-600 mb-4 focus:ring-2 px-2 py-1 ring-rose-400" id="email_body" />
          <button className="w-full shadow-md shadow-gray-400 px-4 py-2 rounded-2xl text-base font-medium text-white bg-pink-500 hover:scale-110 transition-all ease-in duration-300 hover:ring-2">Kirim</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
