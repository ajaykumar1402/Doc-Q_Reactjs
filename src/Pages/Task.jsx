import React from "react";
import { GoTag } from "react-icons/go";
import { FaStar, FaRegEdit, FaRegQuestionCircle } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import { TfiTimer } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { TbReload } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

function Task() {
  return (
    <div className="w-full mt-[8vh] md:mt-[5vh] lg:mt-[12vh] bg-[#f9f8f8] h-full lg:h-[88vh] max-w-[80%] md:max-w-[90%] lg:max-w-[85%] p-2 lg:p-5 lg:overflow-hidden">
      <div className="tasks    bg-[#f9f9f9] p-4 font-mukta">
        {/* breadcrumb */}

        <div className="font-medium py-3"> Tasks {">"}task</div>

        <div className="task-container mx-auto flex flex-col gap-5  sm:flex-row">
          <div className="sm:flex-1 bg-[#f9f9f9] flex flex-col gap-3 ">
            <div className="bg-white  flex justify-between items-center px-3 py-3 rounded-md">
              <h2 className="text-xl font-medium capitalize md:text-2xl">
                To be completed
              </h2>
              <div className="flex space-x-2">
                <i className="p-2 border border-solid border-[#b1b1b1] hover:cursor-pointer">
                  <FaPlus
                    size={20}
                    className="font-medium text-lg hover:cursor-pointer"
                  />
                </i>
                <i className="p-2 border border-solid border-[#b1b1b1] hover:cursor-pointer">
                  <CiFilter
                    size={20}
                    className="font-medium text-lg hover:cursor-pointer"
                  />
                </i>
                <i className="p-2 border border-solid border-[#b1b1b1] hover:cursor-pointer">
                  <FaRegQuestionCircle
                    className="font-medium text-lg hover:cursor-pointer"
                    size={20}
                  />
                </i>
              </div>
            </div>
            <div className=" bg-white flex flex-col justify-between px-3 py-3 rounded-md">
              <div className="flex justify-start  gap-3 items-center mb-5">
                <FaStar size={20} color="yellow" />

                <span className="text-sm md:text-xl font-bold">New</span>
              </div>

              <hr />
              <div className="flex justify-between  mt-5">
                <div>
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 outline-none border-[#b1b1b1] border-solid  m-3"
                  />
                  <span className="capitalize text-md font-bold md:text-2xl">
                    set up afternoon meeting <br />{" "}
                    <p className="text-[#b1b1b1] text-sm ml-11">23-oct-2020</p>
                  </span>
                </div>
                <HiDotsHorizontal
                  className="mt-2 hover:cursor-pointer"
                  size={25}
                />
              </div>
            </div>
          </div>

          <div className=" sm:flex-1 flex flex-col gap-3  ">
            <div className="bg-white  flex justify-between items-center px-4 py-4 rounded-md">
              <h2 className="text-xl font-medium capitalize md:text-2xl">
                Task #1
              </h2>
              <div className="flex space-x-2">
                <i className="p-2 border border-solid border-[#b1b1b1] hover:cursor-pointer">
                  <TiTick
                    className="font-medium text-lg hover:cursor-pointer"
                    size={20}
                    color="green"
                  />
                </i>
                <i className="p-2 border border-solid border-[#b1b1b1] hover:cursor-pointer">
                  <TbReload
                    className="font-medium text-lg hover:cursor-pointer"
                    size={20}
                    color="#B1B1B1"
                  />
                </i>
                <i className=" hover:cursor-pointer p-2 border border-solid border-[#b1b1b1]">
                  <FaRegEdit
                    className="font-medium text-lg"
                    size={20}
                    color="#B1B1B1"
                  />
                </i>
                <i className="p-2 border border-solid border-[#b1b1b1] hover:cursor-pointer">
                  <MdDelete
                    className="font-medium text-lg hover:cursor-pointer"
                    size={20}
                    color="red"
                  />
                </i>
              </div>
            </div>
            <div className=" bg-white flex flex-col justify-between px-3 py-3 rounded-md">
              <div className="flex justify-start  gap-3 items-center mb-5">
                <span className="capitalize text-md font-bold md:text-2xl">
                  set up afternoon meeting
                </span>
              </div>

              <hr />
              <div className="flex justify-between  mt-5">
                <div>
                  <p className="py-3 max-w-96 md:text-xl">
                    Set up a virtual meeting for all consultants by afternoon.
                    Link must be communicated to everyone before 1pm.
                  </p>
                  <div className="flex gap-2 items-center mt-3">
                    <TfiTimer color="green" size={20} />
                    <span>Today</span>
                  </div>
                </div>
                <HiDotsHorizontal
                  className="mt-2 hover:cursor-pointer"
                  size={25}
                />
              </div>
              <hr className="mt-5" />
              <div className="flex gap-2 items-center my-3">
                <GoTag color="red" />
                <span>Urgent</span>
              </div>
              <p>John Doe created a task.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
