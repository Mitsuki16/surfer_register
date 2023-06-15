import React from "react";

function Step1(props) {
  return (
    <div className=" sm:w-[40%] ">
      <div className=" p-10 sm:py-0 sm:px-0">
        <div className=" flex flex-col ">
          <h1 className="  text-4xl font-bold">Personal info</h1>
          <p className="pt-1 text-gray-400 ">
            Please provide your name, email address, and phone number.
          </p>
          <div className=" pt-3  flex gap-4 flex-col">
            <div>
              <h3>Name</h3>
              <input className=" p-1 outline-gray-300 rounded-sm outline-2 outline" />
            </div>
            <div>
              <h3>Email Address</h3>
              <input className=" p-1 outline-gray-300 rounded-sm outline-2 outline" />
            </div>
            <div>
              <h3>Phone Number</h3>
              <input className=" p-1 outline-gray-300 rounded-sm outline-2 outline" />
            </div>
          </div>
        </div>
        <div className=" flex justify-end pt-10 pr-10">
          <button className=" bg-sky-400 py-3 px-5 rounded-xl">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1;
