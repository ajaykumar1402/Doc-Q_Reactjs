import React from "react";
import { useNavigate } from "react-router-dom"; 
import data from "./data.json";
import { FaPlus } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const PatientsList = () => {
    const navigate = useNavigate(); 

    const handleClick = ()  => {
        navigate("/add-patients");
    }

  const [active, setActive] = React.useState(1);
  console.log(active);
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    className: "rounded-full  bg-slate-200 w-8 ",
    onClick: () => setActive(index),
  });
  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  return (
    <div className="w-full mt-[8vh] px-5 md:mt-[5vh] lg:mt-[12vh] bg-[#FAFAFA] h-auto lg:h-full max-w-[80%] md:max-w-[90%] lg:max-w-[85%]">
      <div className="p-4">
        <span className="font-normal text-sm">Patient register</span>
      </div>

      <div className="w-[97.5%] mx-4 my-2 items-center flex justify-between bg-white rounded ">
        <div className="p-4 items-center">
          Total Patients<span className="text-[#828282]"> (487)</span>
        </div>
        <div className="p-4 items-center flex justify-between">
          <span className="p-2 border-2 border-[#E0E0E0] ">
            <FaPlus onClick={handleClick}/>
          </span>
          <span className="p-2  border-2 border-[#E0E0E0] ">
            <IoSearch />
          </span>
          <span className="p-2  border-2 border-[#E0E0E0] ">
            <FiFilter />
          </span>
          <span className="p-2  border-2 border-[#E0E0E0] ">
            <BsQuestionCircle />
          </span>
        </div>
      </div>
      <div className="w-full mx-4   max-md:hidden">
        <table className=" w-[97.5%]  bg-white">
          <thead
            className=" w-auto"
            style={{ height: "50px", borderBottom: "2px solid #E0E0E0" }}
          >
            <tr className=" flex w-auto mb-4  text-[#828282] ">
              <th className="p-4 w-1/6">Name</th>
              <th className="p-4 w-1/6">Diagnosis</th>
              <th className="p-4 w-1/6">Status</th>
              <th className="p-4 w-1/6">Last Appointment</th>
              <th className="p-4 w-1/6">Next Appointment</th>
              <th className="p-4 w-1/6">Option</th>
            </tr>
          </thead>

          <tbody
            className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full"
            style={{ height: "54vh" }}
          >
            {data.map((item) => {
              if (item.Status === "Recovered") {
                var background = "bg-emerald-200 p-[5px] w-4/5 rounded-full";
              } else if (item.Status === "Awaiting surgery") {
                background = "bg-blue-200 p-[5px]  w-4/5 rounded-full";
              } else {
                background = "bg-red-200 p-[5px] w-4/5 rounded-full";
              }
              return (
                <tr
                  className=" h-12 flex w-full mb-4 text-center "
                  key={item.Name}
                >
                  <td className="p-4 w-1/6">{item.Name}</td>
                  <td className="p-4 w-1/6">{item.Diagnosis}</td>
                  <td className="pt-4 w-1/6">
                    {" "}
                    <button type="button" className={background}>
                      {item.Status}{" "}
                    </button>{" "}
                  </td>
                  <td className="p-4 w-1/6">{item["Last Appointment"]}</td>
                  <td className="p-4 w-1/6">{item["Next Appointment"]}</td>
                  <td className="p-4 w-1/6 text-4xl flex items-center  justify-center">
                    {item.Option}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div
        className="w-full md:hidden overflow-x-scroll"
        style={{ height: "70vh" }}
      >
        {data.map((item) => {
          if (item.Status === "Recovered") {
            var background = "bg-emerald-200 p-[2px] w-4/5 rounded-full";
          } else if (item.Status === "Awaiting surgery") {
            background = "bg-blue-200 p-[2px]  w-4/5 rounded-full";
          } else {
            background = "bg-red-200 p-[2px] w-4/5 rounded-full";
          }
          return (
            <div class="grid grid-cols-2 p-2 gap-4 mx-4 my-2 bg-white">
              <div class="grid grid-flow-row auto-rows-max">
                <div className="whitespace nowrap">Name</div>
                <div className="whitespace nowrap max-w-full">Diagnosis</div>
                <div className="whitespace nowrap max-w-full">Status</div>
                <div className="whitespace nowrap max-w-full">
                  Last Appointment
                </div>
                <div className="whitespace nowrap max-w-full">
                  Next Appointment
                </div>
                <div className="whitespace nowrap max-w-full">Option</div>
              </div>
              <div class="grid grid-flow-row auto-rows-max">
                <div>{item.Name}</div>
                <div>{item.Diagnosis}</div>
                <div>
                  <button type="button" className={background}>
                    {item.Status}
                  </button>{" "}
                </div>
                <div>{item["Last Appointment"]}</div>
                <div>{item["Next Appointment"]}</div>
                <div>{item.Option}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-4 float-end mx-4 my-2">
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full  "
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Prev
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={next}
          disabled={active === 5}
        >
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PatientsList;
