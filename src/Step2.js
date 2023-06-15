import React, { useState } from "react";

function Step2(props) {
    const [surfBoard,setSurfBoard] = useState('Short')
    const [surfCatagory,setsurfCatagory] = useState(false)
    let a = [
        {
            type:"Short",
            lprice: "3",
            hprice: "12",
            img_path: "1-star.png",
        },
        {
            type:"Long",
            lprice: "5",
            hprice: "14",
            img_path: "2-stars.png"
        },
        {
            type:"Gun",
            lprice: "10",
            hprice: "25",
            img_path: "3-stars.png"
        }
    ]
    let classes = " select-none  p-4 border-[3px] rounded-md hover:cursor-pointer  flex flex-col gap-4  w-[60%]"
    let b = a.map((item)=>{
        return  <div onClick={()=>setSurfBoard(item.type)} 
        className={classes +(surfBoard===item.type?" border-sky-300":"" ) }>
        <img src={"/imgs/"+item.img_path} className=" w-12" />
        <div>
          <h3 className=" text-lg font-semibold">{item.type}</h3>
          <h4 className=" text-gray-500 ">{"$"+(surfCatagory?item.hprice:item.lprice)+"/mo"}</h4>
          {
            surfCatagory&&<h4>Free Pad</h4>
          }</div>
      </div>
    })
  return (
    <div>
      <div className=" px-10 sm:px-0">
        <div className=" flex flex-col ">
          <h1 className="  text-3xl font-bold">Select Your SurfBoard</h1>
          <p className="pt-1 text-gray-400">
            You have the option of monthly or yearly billing.
          </p>
          <div
            className=" py-5 h-[13pc]  justify-around  flex gap-4 "  >
            {b}
          </div>
          <div className=" text-lg pt-3 w-full flex  items-center justify-center gap-3" onClick={()=>setsurfCatagory(!surfCatagory)}>
            <div>
              <h3 className={surfCatagory==false&&"font-bold"}>Wooden</h3>
            </div>
            <div className={" bg-sky-500 outline-sky-800 outline-4 \
             outline-double w-16 rounded-full h-8 flex delay-100 "+(surfCatagory&&'justify-end')}>
                <div className=" bg-white w-8 z-10 h-8 rounded-full delay-100"></div>
            </div>
            <div>
              <h3  className={surfCatagory&&"font-bold"}>Sports PVC</h3>
            </div>
          </div>
        </div>
        <div className=" flex justify-between pt-10 pr-10">
          <button className=" bg-sky-400 py-3 px-5 rounded-xl">
            Go Back
          </button>
          <button className=" bg-sky-400 py-3 px-5 rounded-xl">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step2;
