import React from "react";
import { BsThreeDots } from "react-icons/bs";
function Threetabs() {
  return (
    <div className="flex  justify-around flex-wrap md:flex-nowrap ">
      <div className=" md:w-1/4 m-2 md:m-0  bg-[#FFFFFF] ">
        <div className="flex  mt-1 items-center justify-between px-1">
          <p className="text-sm font-medium">Offline Consultation</p>
          <BsThreeDots className="h-6 w-6 text-[#000000] mr-1 " />
        </div>
        <div className="flex mt-1  items-center justify-around">
          <div className="m-4 flex flex-col justify-between h-20 ">
            <h4 className="font-bold text-2xl ">101</h4>
            <div className="flex ">
              <img
                src="src\assets\Desktop14\greenarrow.png"
                alt="uparrow"
                className="text-[#27AE60]"
              />
              <p className="text-[#27AE60] text-xs">+3.11%</p>
            </div>
          </div>
          <div>
            <img src="src\assets\Desktop14\graph.png" className="graph" />
          </div>
        </div>
      </div>
      <div className=" md:w-1/4 m-2 md:m-0  bg-[#FFFFFF] ">
        <div className="flex  mt-1 items-center justify-between px-1">
          <p className="text-sm font-medium">Online Consultation</p>
          <BsThreeDots className="h-6 w-6 text-[#000000] mr-1 " />
        </div>
        <div className="flex mt-1  items-center justify-around">
          <div className="m-4 flex flex-col justify-between h-20 ">
            <div className="font-bold text-2xl ">96</div>
            <div className="flex ">
              <img
                src="src\assets\Desktop14\arrow10.png"
                alt="uparrow"
                className="uparrow"
              />
              <p className="text-xs font-normal text-[#EB5757]">-20.9%</p>
            </div>
          </div>
          <div>
            <img
              src="src\assets\Desktop14\graphonline.png"
              className="onlinegraph"
            />
          </div>
        </div>
      </div>
      <div className=" md:w-1/4 m-2 md:m-0  bg-[#FFFFFF]">
        <div className="flex  mt-1 items-center justify-between px-1">
          <p className="text-sm font-medium">Total Patients</p>
          <BsThreeDots className="h-6 w-6 text-[#000000] mr-1 " />
        </div>
        <div className="flex mt-2 w-full  items-center justify-around">
          <div className="font-bold m-4 text-2xl">197</div>
          <div className="flex relative">
            <img
              src="src\assets\Desktop14\wheel.png"
              className=""
              alt="PateientData"
            />
            <div className="absolute text-center top-8 right-6">
              <p className="text-xs ">
                101&nbsp;<span className="text-xs text-[#000000] mr-1">Female</span>
              </p>
              <p className="text-xs">
                86&nbsp;<span className="text-xs text-[#EB5757]">Male</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Threetabs;
