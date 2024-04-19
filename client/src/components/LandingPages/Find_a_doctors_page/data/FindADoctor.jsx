import React from "react";
import Doctordata from "../data/doctor_data";
import { useState } from "react";

const FindADoctor = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Doctordata searchTerm={searchTerm} />
    </div>
  );
};

export default FindADoctor;
