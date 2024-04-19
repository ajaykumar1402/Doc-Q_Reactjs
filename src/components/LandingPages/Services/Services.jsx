import React from "react";
import { Link } from "react-router-dom";
import neurology from "../../../assets/service_icons/neurology.svg";

import blood_pressure from "../../../assets/service_icons/blood_pressure.svg";
import surgical_sterilization from "../../../assets/service_icons/surgical_sterilization.svg";
import opthalmology from "../../../assets/service_icons/opthalmology.svg";
import tooth from "../../../assets/service_icons/tooth.svg";
import gastroenterology from "../../../assets/service_icons/gastroenterology.svg";
import pediatric_surgery from "../../../assets/service_icons/pediatric_surgery.svg";
import orthopaedics from "../../../assets/service_icons/orthopaedics.svg";
// import "./services.css";
const Services = () => {
  const specialties = [
    {
      id: 1,
      imgSrc: neurology,
      title: "Neurology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 2,
      imgSrc: blood_pressure,
      title: "Cardiology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 3,
      imgSrc: surgical_sterilization,
      title: "Surgery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 4,
      imgSrc: gastroenterology,
      title: "Gastrology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 5,
      imgSrc: tooth,
      title: "Dentist",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 6,
      imgSrc: opthalmology,
      title: "Opthalmology",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 7,
      imgSrc: pediatric_surgery,
      title: "Pediatrics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
    {
      id: 8,
      imgSrc: orthopaedics,
      title: "Orthopedics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing commodo nunc mi ut consequat pretium........",
    },
  ];

  return (
    <>
      <section className="bg-[#5284b5]  text-teal-100 w-full">
        <div className="px-6 py-12">
          <h1 className=" text-4xl font-semibold leading-snug w-4/5 mx-auto">
            Looking for Specialist
          </h1>
          <div className="flex justify-center flex-wrap gap-8 mt-10 mx-5 px-8">
            {specialties.map((spec) => (
              <div
                key={spec.id}
                className="max-w-[367px] h-[360px] p-4 border border-[#e9f7f880] border-opacity-20 rounded shadow hover:shadow-md hover:scale-105 transition-transform duration-200 ease-in-out">
                <div className="pb-5 flex justify-start">
                  <div className="w-18 h-18">
                    <img
                      src={spec.imgSrc}
                      alt="specialty"
                      className="w-18 h-18"
                    />
                  </div>
                  <div className="pl-2 font-semibold text-2xl capitalize leading-tight mt-2">
                    {spec.title}
                  </div>
                </div>
                <div className="max-w-[280px] h-35 overflow-hidden">
                  <p className="text-teal-100 text-lg font-normal leading-tight mb-10 px-1">
                    {spec.description}
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    to="/our-services"
                    className="text-white uppercase font-bold text-md">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
