import React from "react";
import { useFormStore } from "./Store";

function Step4(props) {
  const addons = useFormStore((state) => state.addOnDetails);
  const surfBoardDetails = useFormStore((state) => state.surfBoardDetails);

  let addons_list = addons.map((item) => {
    if(item.addon_checked){
    return (
      <label key={item.id} 
        className={"  cursor-pointer flex justify-between rounded-xl items-center  "}>
        <div className=" flex justify-start items-center gap-5">
          <div className=" xl:text-[12.5pt]">
            <h3 className=" font-bold">{item.addon_title}</h3>
          </div>
        </div>
        <div>
          <p className=" text-sky-500">{item.addon_price}</p>
        </div>
      </label>
    );
    }
    return ''
  });
  return (
    <div>
      <div className=" px-10 py-10 sm:py-0 sm:px-0">
        <div className=" flex flex-col ">
          <h1 className="  text-3xl font-bold">Finishing Up</h1>
          <p className="pt-1 text-gray-400">
          Double-check everything and please confirm.
          </p>
          <div className=" mt-3 py-2 bg-sky-100 rounded-xl">

          <div className=" px-3 pb-3 border-b-2 border-blue-600   flex justify-between items-center">
            <div>
            <p className=" font-bold">{surfBoardDetails.surfboardType}
             <span>({surfBoardDetails.surfCatagory?'Sports PVC':'Wooden'})</span></p>
            <p onClick={() => props.changeStep(2)} className=" cursor-pointer underline">Change</p>
            </div>
            <div>
              <p className=" font-bold ">${surfBoardDetails.surfBoardAmt}/m</p>
            </div>
          </div>
          <div className=" px-3 flex  gap-3 flex-col py-5 md:h-[10pc] ">
            {addons_list}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
