import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

function Frame62() {
  return (
    <section className="border bg-[#FFFFFF] max-w-full rounded xl:w-6/12   h-auto">
      <div className="flex h-10  items-center mx-2 justify-between ">
        <h4 className="font-bold">Tasks</h4>
        <div className="flex items-center gap-2">
          <h4 className="text-xs font-bold text-[#0000AC]">New Tasks</h4>
          <div className=" border rounded py-1">
          <FaPlus className="h-2 w-4 text-[#0000AC]" />
          </div>
        </div>
      </div>
      <div className="flex border h-20 mb-2  items-center justify-between mx-1 px-1 bg-[#FAFAFA]">
        <div className="flex gap-2 items-center">
          <input className="h-7 w-7" type="checkbox" />
          <div className="tasks">
            <h4 className="font-medium w-auto text-xs md:text-lg">Task Completed successfully</h4>
            <p className="text-xs font-normal">
              Sign up for Covid - 19 training course for medicians
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-xs hidden sm:block">24 Oct 2022</div>
          <div className="border rounded p-1">
            <BsThreeDots className="h-6 w-6 text-[#2F80ED] " />
          </div>
        </div>
      </div>
      <div className="flex border h-20 mb-2  items-center justify-between mx-1 px-1 bg-[#FAFAFA]">
        <div className="flex gap-2 items-center">
          <input className="h-7 w-7" type="checkbox" />
          <div className="tasks">
            <h4 className="font-medium w-auto text-xs md:text-lg">Task Completed successfully</h4>
            <p className="text-xs font-normal">
              Fill up the previous ERP Report
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-xs hidden sm:block">24 Oct 2022</div>
          <div className="border rounded p-1">
            <BsThreeDots className="h-6 w-6 text-[#2F80ED] " />
          </div>
        </div>
      </div>
      <div className="flex border h-20 mb-2  items-center justify-between mx-1 px-1 bg-[#FAFAFA]">
        <div className="flex gap-2 items-center">
          <input className="h-7 w-7" type="checkbox" />
          <div className="tasks">
            <h4 className="font-medium w-auto text-xs md:text-lg">Task Completed successfully</h4>
            <p className="text-xs font-normal">
              Send prescription files to Night duty nurse
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-xs hidden sm:block">24 Oct 2022</div>
          <div className="border rounded p-1">
            <BsThreeDots className="h-6 w-6 text-[#2F80ED] " />
          </div>
        </div>
      </div>
      <div className="flex border h-20 mb-2  items-center justify-between mx-1 px-1 bg-[#FAFAFA]">
        <div className="flex gap-2 items-center">
          <input className="h-7 w-7" type="checkbox" />
          <div className="tasks">
            <h4 className="font-medium w-auto text-xs md:text-lg">Task Completed successfully</h4>
            <p className="text-xs font-normal">Set up afternoon meeting</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-xs hidden sm:block">24 Oct 2022</div>
          <div className="border rounded p-1">
            <BsThreeDots className="h-6 w-6 text-[#2F80ED] " />
          </div>
        </div>
      </div>
      <div className=" flex justify-end h-8 items-center">
        <h4 className="text-[#0000Aw-auto C] text-xs font-medium">View all</h4>
        <div className="mx-2">
        <FaAngleRight className="h-2 w-2 text-[#0000AC] " />
        </div>
      </div>
    </section>
  );
}

export default Frame62;
