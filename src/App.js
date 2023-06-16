import { useState } from "react";
import "./App.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import FinalPage from "./FinalPage";

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step !== 5 ? step + 1 : 5);
  };
  const previousStep = () => {
    setStep(step !== 1 ? step - 1 : 1);
  };
  const FormStep = () => {
    if (step === 1) {
      return <Step1 nextStep={nextStep} />;
    } else if (step === 2) {
      return <Step2 nextStep={nextStep} previousStep={previousStep} />;
    } else if (step === 3) {
      return <Step3 nextStep={nextStep} previousStep={previousStep} />;
    } else if (step === 4) {
      return (
        <Step4
          changeStep={setStep}
          nextStep={nextStep}
          previousStep={previousStep}
        />
      );
    } else if (step === 5) {
      return <FinalPage />;
    }
  };
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('/imgs/bg.jpg')`,
        }}
        className=" bg-right-bottom bg-cover flex justify-center items-center
      h-[100vh] bg-[#6ed1f2]
      "
      >
        <div
          className="
        md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%] min-h-[50%] 
         rounded-lg  border-2 mx-5 px-3 py-5
          md:py-10  bg-white shadow-2xl"
        >
          {step !== 5 ? (
            <div
              className=" flex sm:flex-row 
        flex-col items-center gap-5
         justify-around w-full "
            >
              <div className=" min-w-[19pc] w-[20pc] py-5  lg:w-[26pc]">
                <img alt="" src={"/imgs/si" + step + ".jpg"} className=" rounded-md" />
              </div>
              <div className=" flex flex-col sm:w-[45%]">
                {FormStep()}
                <div
                  className={
                    " flex justify-between w-[90%] pt-12 " +
                    ((step === 1 || step === 2) && "hidden")
                  }
                >
                  <button
                    onClick={previousStep}
                    className=
                      " font-semibold bg-sky-400 text-white \
           px-5 rounded-xl "
                  >
                    Go Back
                  </button>
                  <div></div>
                  <button
                    onClick={nextStep}
                    className=" font-semibold text-white bg-sky-400 py-3 px-5 rounded-xl"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <FinalPage />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
