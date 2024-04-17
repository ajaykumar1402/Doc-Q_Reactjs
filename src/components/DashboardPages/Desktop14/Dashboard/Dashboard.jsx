import React from 'react'
import Frame49 from "./Frame49";
import Threetabs from "./Threetabs";
import Frame62 from "./Frame62";
import Frame53 from "./Frame53";

function Dashboard() {
  return (
    <div className='w-full mt-[8vh] md:mt-[5vh] lg:mt-[12vh] bg-[#FAFAFA] h-auto lg:h-full max-w-[80%] md:max-w-[90%] lg:max-w-[85%]'>
      <div>
    <Frame49 />
      </div>
    <div className="max-w-full h-auto  m-2">
      <Threetabs />
    </div>
    <div className=" m-auto xl:flex justify-around ">
      <Frame62 />
      <Frame53 />
    </div>
  </div>
  )
}

export default Dashboard;