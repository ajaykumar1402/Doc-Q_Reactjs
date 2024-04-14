import React from "react";
import { LuTrash } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { PiNotePencilBold } from "react-icons/pi";
import { FaAngleUp } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Frame53() {
  return (
    <section className="border bg-[#FFFFFF]  rounded max-w-full  xl:w-2/5 h-auto">
      <div className="flex h-10   items-center mx-1 sm:mx-2 justify-between">
        <h4 className="font-bold text-xs  sm:text-lg">Upcoming schedule</h4>
        <div className="flex items-center   sm:gap-2">
          <h4 className="text-xs font-bold sm:w-28  text-[#0000AC]">
            New appointment
          </h4>
          <div className=" border rounded py-1">
          <FaPlus className="h-2 w-4 text-[#0000AC]" />
          </div>
        </div>
      </div>
      <div className="relative w-3/4 min-[400]:m-auto sm:m-auto xl:m-0  ">
        <ul className="flex  h-auto mx-4 sm:mx-4 ">
          <div className="flex flex-col md:flex-row ">
            <li className="text-xs text[#828282] sm:border-r-2   mr-4 ml-1 w-28">
              08:00
            </li>
            <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
            <div>
              <div className="mt-1 w-40 mr-2 h-8">
                <div className="flex  items-center justify-between ">
                  <div className="w-1 h-1 bg-[#BDBDBD] rounded"></div>
                  <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                    08:00
                  </span>
                  <p className="text-xs font-normalal w-28   text-[#1D1D1D] line-through">
                    Rice Kotlin
                  </p>
                </div>
                <div className="flex items-center justify-between my-1 ">
                  <div className="w-1 h-1 bg-[#BDBDBD] rounded"></div>
                  <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                    08:20
                  </span>
                  <p className="text-xs font-normalal w-28   text-[#1D1D1D] line-through">
                    Maya Adamu
                  </p>
                </div>
              </div>
              <div className="my-1  sm:w-80 flex flex-col">
                <div className="border mt-1 p-1 rounded  relative flex items-center sm:gap-1 ">
                  <div className="sm:w-1 sm:h-[4px] w-2 h-[6px] bg-[#27AE60] rounded"></div>
                  <span className="text-xs font-bold sm:w-10 mx-2 text-[#1D1D1D]">
                    08:30
                  </span>
                  <p className="text-xs font-bold sm:w-32   text-[#1D1D1D]">
                    Bolaji Abdulraheem
                  </p>
                  <p className="text-xs font-normalal sm:w-28  ml-6  text-[#828282] ">
                    Upcoming
                  </p>
                  <div className="border rounded p-1">
                  <FaAngleUp className="w-2 h-2"/>
                  </div>
                </div>
                <div className=" border  ">
                  <div className="flex items-center  my-1 gap-12">
                    <h4 className="w-12 font-semibold text-xs">Patient</h4>
                    <span className="font-normal text-xs">
                      Bolaji Abdulraheem
                    </span>
                  </div>
                  <div className="flex items-center  my-1 gap-12">
                    <h4 className="w-12 font-semibold text-xs">Time</h4>
                    <span className="font-normal text-xs">8:30 - 9:00</span>
                  </div>
                  <div className="flex items-center my-1 gap-12">
                    <h4 className="w-12 font-semibold text-xs">Purpose</h4>
                    <span className="font-normal text-xs">General Checkup</span>
                  </div>
                  <div className="w-full h-1 rounded bg-[#E0E0E0]"></div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center mx-1 gap-2">
                      <div className="">
                        <LuTrash className="w-3 h-3 text-[#EB5757]" />
                      </div>
                      <div className="icon">
                        <FaRegUser className="w-3 h-3 text-[#2F80ED]" />
                      </div>
                      <div className="icon">
                        <PiNotePencilBold className=" text-[#2F80ED]" />
                      </div>
                    </div>
                    <button className="cursor-pointer">Begin appointment</button> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
        <ul className="flex h-auto  mx-4">
          <li className="text-xs text[#828282] sm:border-r-2  mr-4 ml-1 w-28">
            09:00
          </li>
          <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
          <div className="mt-1">
            <div className="flex items-center justify-between my-2">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                09:00
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Abayomi Johnson
              </p>
            </div>
            <div className="flex items-center justify-between my-1 ">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                09:30
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Rebecca Gifts
              </p>
            </div>
          </div>
        </ul>
        <ul className="flex h-auto   mx-4">
          <li className="text-xs text[#828282] sm:border-r-2  mr-4 ml-1 w-28">
            10:00
          </li>
          <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
          <div className="mt-1">
            <div className="flex items-center justify-between my-2">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                10:00
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                ERC Report
              </p>
            </div>
            <div className="flex items-center justify-between my-1 ">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                10:30
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                RConsulation meeting
              </p>
            </div>
          </div>
        </ul>
        <ul className="flex h-auto  mx-4">
          <li className="text-xs text[#828282] sm:border-r-2  mr-4 ml-1 w-28">
            11:00
          </li>
          <div className="h-2 w-2 hidden sm:block bg-[#1D1D1D] absolute rounded  left-32 "></div>
          <div className="mt-1">
            <div className="flex items-center justify-between my-2">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                11:00
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Victory Jones
              </p>
            </div>
            <div className="flex items-center justify-between my-1 ">
              <div className="w-1 h-1 bg-[#2F80ED] rounded"></div>
              <span className="text-xs font-bold w-10 mx-2 text-[#828282]">
                11:30
              </span>
              <p className="text-xs font-normal w-28  text-[#1D1D1D]">
                Board meeting
              </p>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default Frame53;
