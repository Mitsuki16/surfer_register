import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function App() {

  return (
    <div className="">
      <div className=' flex justify-center items-center
      h-[100vh] bg-[#8f6ef2]
      '>
        <div className='  flex sm:flex-row 
        flex-col items-center
         justify-around w-full sm:w-[90%] 
        md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] min-h-[40%]
         rounded-lg  gap-1 xl:gap-5 border-2 px-3
          md:py-10  bg-white shadow-2xl'>
            <div className=' min-w-[19pc] w-[20pc]  lg:w-[26pc]'  >
              <img src="/imgs/7687.jpg" className=' rounded-md'  />
            </div>
         <Step3 />
        </div>
      </div>
    </div>
  );
}

export default App;
