import React, { useState } from "react";

let ADDON_LIST = [
  {
    id: "1",
    addon_title: "Food1",
    addon_desc: "Get Restuaranct Food",
    addon_price: "+$120",
    addon_checked: true,
  },
  {
    id: "2",
    addon_title: "MoterBike Rent",
    addon_desc: "Rent a MotorBike",
    addon_price: "+30/hr",
    addon_checked: false,
  },
  {
    id: "3",
    addon_title: "Hotel Stay",
    addon_desc: "Get Luxurizios Hotel",
    addon_price: "+$300/day",
    addon_checked: false,
  },
];
function Step3(props) {
  const [addons, setAddons] = useState(ADDON_LIST);
  const addonAddRemove = (id)=>{
    let addon_check_changed = addons.find((item)=>{
      return item.id===id
    })
    let addons_removed = addons.filter((item)=>{
      return item.id!==id
    })
    let addon_list = [...addons_removed,{...addon_check_changed,addon_checked:!addon_check_changed.addon_checked}].sort((a, b) => a.id.toLowerCase() > b.id.toLowerCase() ? 1 : -1)
    setAddons(addon_list)
  }
  let b = addons.map((item) => {
    return (
      <label key={item.id} 
        htmlFor={"Addon" + item.id}
        className={"  cursor-pointer hover:border-sky-500 flex justify-between rounded-xl items-center border-2 px-3 py-2 "+
        (item.addon_checked&&" border-blue-400 ")}>
        <div className=" flex justify-start items-center gap-5">
          <div>
            <input checked={item.addon_checked} onChange={() => addonAddRemove(item.id)}
              id={"Addon" + item.id}
              className=" w-6 h-6"
              type="checkbox"
            />
          </div>
          <div className=" xl:text-[12.5pt]">
            <h3 className=" font-bold">{item.addon_title}</h3>
            <p className=" text-gray-400">{item.addon_desc}</p>
          </div>
        </div>
        <div>
          <p className=" text-sky-500">{item.addon_price}</p>
        </div>
      </label>
    );
  });
  return (
    <div>
      <div className=" px-10 py-10 sm:py-0 sm:px-0">
        <div className=" flex flex-col ">
          <h1 className="  text-3xl font-bold">Pick add-ons</h1>
          <p className="pt-1 text-gray-400">
            Add-ons help enhance your surfing experience.
          </p>
          <div className=" flex justify-center  gap-3 flex-col py-5 md:h-[16pc]  ">
            {b}
          </div>
        </div>
        <div className=" flex justify-between pt-10 pr-10">
          <button className=" bg-sky-400 py-3 px-5 rounded-xl">Go Back</button>
          <button className=" bg-sky-400 py-3 px-5 rounded-xl">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step3;
