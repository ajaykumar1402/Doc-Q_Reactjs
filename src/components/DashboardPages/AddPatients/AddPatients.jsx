import React from "react";
import { MdOutlineClear } from "react-icons/md";
import { PiCalendarBlankBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const AddPatients = () => {
  
  const navigate = useNavigate()

  const handleAddPatients = ()=>{
     navigate("/patients-list")

  }


  return (
    <div className="w-full mt-[8vh] px-5 md:mt-[5vh] lg:mt-[12vh] bg-[#FAFAFA] h-auto lg:h-full max-w-[80%] md:max-w-[90%] lg:max-w-[85%]">
      <div className="h-10  mb-5 w-full p-2 px-4 py-4 text-xs mb:text-xl">
        Patient register &gt; Add patient
      </div>
      <div className="rounded h-16  w-11/12 flex justify-between items-center ml-4 sm:m-auto bg-white sm:p-2 sm:px-6 ">
        <p className="w-32 ml-1 mr-1 text-xs mb:text-xl">Add New Patient</p>
        <div className="buttons flex  gap-1 mr-1 sm:gap-8">
          <button className="border-[#0000AC] border-2 p-1 text-[10px] sm:text-sm sm:w-16  text-[#0000AC] rounded">
            Cancel
          </button>
          <button className="border-[#0000AC] border p-1  text-[10px] sm:text-sm sm:w-16 rounded bg-[#0000AC] text-[#ffffff] px-2" onClick={()=> handleAddPatients()}>
            Save
          </button>
        </div>
      </div>
      <div className="md:px-10 sm:px-5 px-3 w-[80%] md:w-[90%] lg:w-[60%] items-center m-auto  bg-white mt-10 pb-5">
        <div className="grid md:grid-cols-3 md:gap-4 pt-10">
          <div className="items-start py-2 md:py-0">
            <p className="whitespace nowrap max-w-full">Record Number</p>
          </div>
          <div className="col-span-2 items-start w-full md:w-[80%] lg:w-[90%]">
            <p>Record Number will be assigned automatically when you save.</p>
            <button className="bg-white p-2 border border-[#E0E0E0] rounded mt-2 font-bold">
              Assign Manually
            </button>
          </div>
          <div className="col-span-1 flex items-center pt-2 md:pt-0">
            <p>Forename</p>
          </div>
          <div className="col-span-2 items-start w-full md:w-[90%] lg:w-[70%] flex items-center border border-[#E0E0E0] rounded mr-10">
            <input className="rounded h-10 w-full" />
            <MdOutlineClear className="cursor-pointer mr-2 font-extrabold text-[#333333]" />
          </div>
          <div className="col-span-1 flex items-center pt-2 md:pt-0">
            <p>Surname</p>
          </div>
          <div className="col-span-2 items-start w-full md:w-[90%] lg:w-[70%] flex items-center border border-[#E0E0E0] rounded mr-10">
            <input className="rounded h-10 w-full" />
            <MdOutlineClear className="cursor-pointer mr-2 font-extrabold text-[#333333]" />
          </div>
          <div className="col-span-1 flex items-center pt-2 md:pt-0">
            <p>Date of birth</p>
          </div>
          <div className="col-span-2 flex justify-center gap-4 items-center w-full md:w-[90%] lg:w-[70%]">
            <div className="border border-[#E0E0E0] rounded px-2">
              <PiCalendarBlankBold className="h-9 w-5 text-gray-800" />
            </div>
            <input className="border border-[#E0E0E0] rounded h-10 w-full" />
          </div>
          <div className="col-span-1 flex items-center pt-2 md:pt-0">
            <p>Sex</p>
          </div>
          <div className="col-span-2 items-start w-full md:w-[90%] lg:w-[70%] flex gap-4">
            <button className="py-2 px-3 bg-[#E0E0E0] rounded mt-2">
              Male
            </button>
            <button className="py-2 px-3 bg-[#E0E0E0] rounded mt-2">
              Female
            </button>
          </div>
          <div className="col-span-1 flex items-center pt-2 md:pt-0">
            <p>Diagnosis</p>
          </div>
          <div className="col-span-2 items-start w-full md:w-[90%] lg:w-[70%]">
            <input className="border border-[#E0E0E0] rounded h-10 w-full" />
          </div>
          <div className="col-span-1 flex items-center pt-2 md:pt-0">
            <p>Notes</p>
          </div>
          <div className="col-span-2 items-start w-full md:w-[90%] lg:w-[70%]">
            <input className="border border-[#E0E0E0] rounded h-20 w-full" />
          </div>
          <div className="col-span-1 flex items-center pt-2 md:pt-0">
            <p>Phone number</p>
          </div>
          <div className="col-span-2 items-start w-full md:w-[90%] lg:w-[70%]">
            <input className="border border-[#E0E0E0] rounded h-10 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatients;
