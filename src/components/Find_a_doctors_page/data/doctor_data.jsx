import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { data } from './data';
import './doctor_data.css';

const FindADoctor = ({ searchTerm }) => {
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const filtered = data.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [searchTerm]);

  const renderStars = (rating) => {
    const yellowStars = rating;
    const greyStars = 5 - rating;
    const stars = [];

    for (let i = 0; i < yellowStars; i++) {
      stars.push(<img key={i} src="src/assets/images/doctor_imgs/yellow_star.png" alt="Yellow Star" />);
    }

    for (let j = 0; j < greyStars; j++) {
      stars.push(<img key={j + yellowStars} src="src/assets/images/doctor_imgs/grey_star.png" alt="Grey Star" />);
    }

    return stars;
  };


  const navigate = useNavigate()

  const handleRoute = ()=>{
    navigate("/doctors-profile")
  }





  return (
    <>
      <div className="doctors-main-container text-base px-24 py-12 pr-0 max-[880px]:pl-[40px]">
        <div className="doctor-heading text-[#FFFFFF] bg-[#5284B5] flex items-center content-center p-8 text-nowrap rounded-lg mb-10 h-7">
          <p className=' text-xl font-semibold'>Top Specialist In Neurology</p>
        </div>
        <div className="scroll-x flex flex-col overflow-x-scroll">
          <div className="titles-container">
            <div className="doctors-headings">
              <p className='mle-20'>Doctors Name</p>
              <p className='mre-5'>Ratings</p>
              <p className='mre-3'>Service</p>
            </div>
            <div className="doctor-list flex flex-col gap-5">
              {filteredDoctors.map((doctor, index) => (
                <div  onClick={handleRoute}  key={index} className='single-doctor flex items-center content-between bg-[#CFE5FE] text-[#00305F] px-5 py-6'>
                  <div className="doctor-img-container">
                    <img className=' rounded-full w-full h-full object-contain' src={doctor.img} alt="" />
                  </div>
                  <div className="doctor-details">
                    <p className='doctors-name text-nowrap text-[#00305F] font-semibold'>{doctor.name}</p>
                  </div>
                  <div className="doctor-stars flex w-full items-center ml-auto justify-center">
                    {renderStars(doctor.ratings)}
                  </div>
                  <div className="doctor-exp text-[#00305F] font-semibold text-nowrap">
                    <p>Experience: <span>{doctor.experience}</span> years</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindADoctor;
