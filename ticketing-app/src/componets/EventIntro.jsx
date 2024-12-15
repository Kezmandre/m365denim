import React from "react";
import Logo from "../images/logo2.jpeg";
import Denim from "../images/denim.jpeg";

const EventIntro = ({ OnNext }) => {
  return (
    <div className="relative w-[400px] box-border mx-auto my-4 p-0 overflow-hidden bg-black rounded-lg">
      <div className="w-full h-full rounded-lg ">
        <div className="w-[400px] ">
          <img src={Logo} alt="" className="w-full rounded-t-lg" />
        </div>
        <div className=" relative w-full  mx-auto">
          <img
            src={Denim}
            alt=""
            className="w-full h-full bg-cover bg-center"
          />
          <div className="absolute text-center top-0 left-0 w-full h-full bg-black opacity-60 ">
            <h1 className="text-white pb-2 text-2xl w-[400px]:text-3xl font-semibold">
              Synch, Celebrate and Shine
            </h1>
            <h2 className="text-white pb-8 text-xl">
              Rocking The Denim Vibe With M365
            </h2>
            <div className=" w-full p-8 flex justify-center items-baseline pb-8"></div>
            <p className="text-white text-[16px] text-justify sm:text-2xl font-bold px-2 pb-6">
              Get ready to groove in style and celebrate an epic year with us at
              the M365 Denim Party—where tech meets trends, and we toast to our
              successes together!
            </p>
            <div className="m-8 flex items-center justify-end">
              {/* <button className="cursor-pointer">Next</button> */}
              <div className="absolute w-[100px] bottom-20 right-6 p-2 z-10 bg-white hover:text-red-500 rounded-lg">
                <button
                  onClick={OnNext}
                  className="w-full text-xl font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventIntro;
