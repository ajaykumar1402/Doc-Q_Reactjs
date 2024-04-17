import React from "react";
import neurology from "../assets/service_icons/neurology.svg";

import blood_pressure from "../assets/service_icons/blood_pressure.svg";
import surgical_sterilization from "../assets/service_icons/surgical_sterilization.svg";
import opthalmology from "../assets/service_icons/opthalmology.svg";
import tooth from "../assets/service_icons/tooth.svg";
import gastroenterology from "../assets/service_icons/gastroenterology.svg";
import pediatric_surgery from "../assets/service_icons/pediatric_surgery.svg";
import orthopaedics from "../assets/service_icons/orthopaedics.svg";
import "./services.css";
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
    <section id="doc-feature">
      <div className="doc-main-container">
        <h1 className="feature-title">Looking for Specialist</h1>
        <div className="doc-container">
          {specialties.map((spec) => (
            <div key={spec.id} className="doc-card">
              <div className="card-top">
                <div className="card-img">
                  <img src={spec.imgSrc} alt="svg" />
                </div>
                <div className="card-title">{spec.title}</div>
              </div>
              <div className="card-content">
                <p>{spec.description}</p>
                <br />
              </div>
              <div className="card-bottom">
                <a href="#">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
