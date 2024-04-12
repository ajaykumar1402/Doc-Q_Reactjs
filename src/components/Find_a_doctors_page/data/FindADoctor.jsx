import React from 'react'
import Doctordata from '../data/doctor_data'
import { useState } from "react";
import Navbar from '../../../samepages/navbar/Navbar';

const FindADoctor = () => {
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <div >

    {/* <FindADoctor setSearchTerm={setSearchTerm} /> */}
    {/* <Navbar setSearchTerm={setSearchTerm}/> */}
    <Doctordata searchTerm={searchTerm} />  
    </div>
    )
}

export default FindADoctor