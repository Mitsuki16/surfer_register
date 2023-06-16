import React from "react";

function FinalPage(props) {
  return (
    <div>
      <div className=" px-10 py-10 sm:py-0 sm:px-0">
        <div className=" flex flex-col items-center justify-center ">
          <div className=" min-w-[19pc] w-[20pc]  lg:w-[26pc]">
            <img alt="" src="/imgs/si1.jpg" className=" rounded-md" />
          </div>
          <h1 className="  text-3xl font-bold">Thank You!</h1>
          <p className="pt-5 px-20 text-center text-gray-400">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@surferscalifornia.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FinalPage;
