import React, { useEffect, useState } from "react";
import { useFormStore } from "./Store";

function Step2(props) {
    const [surfBoard,setSurfBoard] = useState('Short')
    const [surfCatagory,setsurfCatagory] = useState(false)
    const surfBoardDetails = useFormStore((state) => state.surfBoardDetails);
    const setsurfBoardDetails = useFormStore((state) => state.setsurfBoardDetails);
    let surfBoardTypes = [
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
    useEffect(()=>{
      setSurfBoard(surfBoardDetails.surfboardType)
      setsurfCatagory(surfBoardDetails.surfCatagory)
    },[surfBoardDetails])
    const validateFields =() =>{
      let board = surfBoardTypes.find((item)=>{
        return surfBoard===item.type
      })
      setsurfBoardDetails({
        surfboardType: surfBoard,
        surfBoardAmt: surfCatagory?board.hprice:board.lprice,
        surfCatagory: surfCatagory
      })
      props.nextStep()
    }

    let classes = " select-none  p-4 border-[3px] rounded-md hover:cursor-pointer  flex flex-col gap-4  w-[70%]"
    let surfBoardTypes_jsx = surfBoardTypes.map((item)=>{
        return  <div key={item.type} onClick={()=>setSurfBoard(item.type)} 
        className={classes +(surfBoard===item.type?" border-sky-300":"" ) }>
        <img alt="" src={"/imgs/"+item.img_path} className=" w-12" />
        <div>
          <h3 className=" text-lg font-semibold">{item.type}</h3>
          <h4 className=" text-gray-500 ">{"$"+(surfCatagory?item.hprice:item.lprice)+"/mo"}</h4>
          {
            surfCatagory&&<h4 className=" text-sm ">Free Pad</h4>
          }</div>
      </div>
    })
  return (
    <div>
      <div className="w-[100%] px-10 sm:px-0">
        <div className=" flex flex-col ">
          <h1 className="  text-3xl font-bold">Select Your SurfBoard</h1>
          <p className="pt-1 text-gray-400">
            You have the option of monthly or yearly billing.
          </p>
          <div
            className=" py-5 h-[13pc]  justify-around  flex gap-4 "  >
            {surfBoardTypes_jsx}
          </div>
          <div className=" text-lg pt-3 w-full flex  items-center justify-center gap-3" onClick={()=>setsurfCatagory(!surfCatagory)}>
            <div>
              <h3 className={surfCatagory===false?"font-bold":""}>Wooden</h3>
            </div>
            <div className={" bg-sky-500 outline-sky-800 outline-4 \
             outline-double w-16 rounded-full h-8  "}>
                <div className={" bg-white w-8 h-8 rounded-full relative  duration-200 left-0 "+(surfCatagory&&' left-8')}></div>
            </div>
            <div>
              <h3  className={surfCatagory?"font-bold":""}>Sports PVC</h3>
            </div>
          </div>
        </div>
        <div className={" flex justify-between w-[90%] pt-12 "}>
                <button
                  onClick={props.previousStep}
                  className={" font-semibold bg-sky-400 text-white \
           px-5 rounded-xl "}
                >
                  Go Back
                </button>
                <div></div>
                <button
                  onClick={validateFields}
                  className=" font-semibold text-white bg-sky-400 py-3 px-5 rounded-xl"
                >
                  Next Step
                </button>
              </div>
      </div>
    </div>
  );
}

export default Step2;
