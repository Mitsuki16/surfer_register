import React, { useEffect, useState } from "react";
import { useFormStore } from "./Store";

function Step1(props) {
  const basicDetails = useFormStore((state) => state.basicDetails);
  const setBasicDetails = useFormStore((state) => state.setBasicDetails);

  const [name, setName] = useState("");
  const [nameIsValid, setnameIsValid] = useState("");
  const [email, setEmail] = useState("");
  const [emailIsValid, setemailIsValid] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneIsValid, setphoneIsValid] = useState("");

  useEffect(()=>{
    setName(basicDetails.name)
    setEmail(basicDetails.email)
    setPhone(basicDetails.phone)
  },[])
  const validateFields = () => {
    let status = "pass"
    if (name.trim().toString() === "") {
      setnameIsValid("Required");
      status='fail'
    }
    else{
      setnameIsValid("");
    }
    if (email.trim().toString() === "") {
      setemailIsValid("Required");
      status='fail'
    }
    else if(!/[a-z0-9]\@[a-z\.0-9]+/.test(email)){
      setemailIsValid("Invalid Email ID");
      status='fail'
    }
    else{
      setemailIsValid("");
    }
    if (phone.trim().toString() === "") {
      setphoneIsValid("Required");
      status='fail'
    }
    else if(!/^\d{1,12}$/.test(phone.trim().toString())){
      setphoneIsValid("Only Number Allowed");
      status='fail'
    }
    else{
      setphoneIsValid("");
    }
    if(name.trim().toString() !== "" && email.trim().toString() !== "" 
    && phone.trim().toString() !== "" && 
    status==='pass' ){
      setBasicDetails({
        name: name,
        email: email,
        phone: phone
      })
      props.nextStep()
    }
  };

  return (
    <div className=" h-[90%] ">
      <div className=" p-8 sm:py-0 sm:px-0">
        <div className=" ">
          <h1 className="  text-4xl font-bold">Personal info</h1>
          <p className="pt-1 text-gray-400 ">
            Please provide your name, email and phone number.
          </p>
          <div className=" pt-3  flex gap-4 flex-col">
            <div>
              <div className=" flex justify-between">
                <h3>Name</h3>
                <p className="  text-red-500 font-semibold text-sm ">{nameIsValid}</p>
              </div>
              <div className="pt-1">
                
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" focus:outline-sky-600 outline-sky-400 w-full p-1 rounded-md outline-2 outline"
              />
            </div>
            </div>
            <div>
              <div className=" flex justify-between">
                <h3>Email Address</h3>
                <p className="  text-red-500 font-semibold text-sm ">{emailIsValid}</p>
              </div>
              <div className="pt-1">
                
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:outline-sky-700 outline-sky-400 w-full p-1 rounded-md outline-2 outline"
              />
              </div>
            </div>
            <div>
              <div className=" flex justify-between">
                <h3>Phone Number</h3>
                <p className="   text-red-500 font-semibold text-sm ">{phoneIsValid}</p>
              </div>
              <div className="pt-1">
                
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="focus:outline-sky-700 outline-sky-400 w-full p-1 rounded-md outline-2 outline"
              />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-between w-[90%] pt-12 ">
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

export default Step1;
