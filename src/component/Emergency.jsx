import React from "react";
// import EmergenciBG from "../img/baliEmergencyBG.png">

const Emergency = () => {
  return (
    <div className="p-10">

      <div className="p-6 mt-[60px] bg-white rounded-xl">

        <div className=" px-[35px] py-[30px] rounded-xl grid gap-x-8 gap-y-4 grid-cols-2">
          <div className="bg-white h-[200px] p-3 rounded-xl drop-shadow-lg bg-opacity-[80%] flex justify-center items-center">
            <div className="">

            <p className="text-center text-2xl">
              Nomor Darurat Polisi
            </p> <br />
            <p className="text-center text-2xl mt-3">
              110
            </p>
            </div>
          </div>
          <div className="bg-white h-[200px] p-3 rounded-xl drop-shadow-lg bg-opacity-[80%] flex justify-center items-center">
            <div className="">

            <p className="text-center text-2xl">
              Nomor Darurat Ambulance
            </p> <br />
            <p className="text-center text-2xl mt-3">
              118
            </p>
            </div>
          </div>
          <div className="bg-white h-[200px] p-3 rounded-xl drop-shadow-lg bg-opacity-[80%] flex justify-center items-center">
            <div className="">

            <p className="text-center text-2xl">
              Nomor Darurat SAR
            </p> <br />
            <p className="text-center text-2xl mt-3">
              115
            </p>
            </div>
          </div>
          <div className="bg-white h-[200px] p-3 rounded-xl drop-shadow-lg bg-opacity-[80%] flex justify-center items-center">
            <div className="">

            <p className="text-center text-2xl">
              Nomor Darurat Pemadam Kebakaran
            </p> <br />
            <p className="text-center text-2xl mt-3">
              113
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
