import React from "react";
import Logo from "../images/logo2.jpeg";
import Denim from "../images/denim.jpeg";

const EventIntro = ({OnNext}) => {
  return (
    <div className="w-[400px] box-border mx-auto h-[95vh] p-0 m-4 bg-slate-100 rounded-lg">
      <div className="w-full h-full ">
        <div className="w-full ">
          <img src={Logo} alt="" className="w-full h-20  rounded-t-lg" />
        </div>
        <div className=" relative w-full h-[82vh]  mx-auto">
          <img src={Denim} alt="" className="w-full h-full bg-cover bg-center" />
          <div className="absolute text-center top-0 left-0 w-full h-full bg-black opacity-60 ">
            <h1 className="text-white pb-2 text-3xl font-semibold">
              Synch, Celebrate and Shine
            </h1>
            <h2 className="text-white pb-8 text-xl">Rocking The Denim Vibe With M365</h2>
                <div className=" w-full p-8 flex justify-center items-baseline pb-8"></div>
            <p className="text-white text-xl font-bold px-2 pb-6">
              Get ready to groove in style and celebrate an epic year with us at
              the M365 Denim Party—where tech meets trends, and we toast to our
              successes together!
            </p>
            <div className="m-8 flex items-center justify-end">
                {/* <button className="cursor-pointer">Next</button> */}
                <div className="w-[100px] p-2 bg-white hover:text-red-500 rounded-lg">
                    <button onClick={OnNext} className="w-full text-xl font-semibold">Next</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventIntro;
