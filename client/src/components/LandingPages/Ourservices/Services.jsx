import logo from "../../../assets/logo.png"
import serviceimg from "../../../assets/service.png"
import consultation from "../../../assets/Consultation.png"
import diagnostic from "../../../assets/Diagnosis.png"
import operation from "../../../assets/Operation.png"
import React, { useState } from 'react';

const Services = () => {
    const [city, setCity] = useState('Bangalore');
    const [otherCity, setOtherCity] = useState('');
    const [showModal, setShowModal] = useState(false);
    const cities = ['Bangalore', 'Pune', 'Mumbai', 'Ahemadabad', 'Visakhapatnam', 'Goa', 'Chennai', 'Kolkata', 'Surat', 'Delhi', 'Others'];
    const handleCityChange = (event) => {
        setCity(event.target.value);
        setShowModal(false);
    };
    const handleOtherCityChange = (event) => {
        setOtherCity(event.target.value);
    };
    const handleOpenModal = () => {
        setShowModal(true);
    };
    return (
        <div className="container w-full h-full bg-[#F6FBFF] grid place-items-center ml-10 mr-10">
            <div className="small-container w-[80rem] h-[25rem] bg-[#063360] rounded-3xl mt-7">
                <div className="logo   ml-[40px]  mt-5 ">
                    <div className="w-full h-full">
                        <img src={logo} alt="logo" width="150px" height="60px" />
                    </div>
                </div>
                <div className="service-text flex flex-row justify-evenly  ">
                    <div className="w-[50rem] h-[20rem]">
                        <h2 className="text-4xl font-semibold mt-7 dark:text-white">
                            End to end care from Top Surgeons
                        </h2>
                        <h2 className="text-4xl font-semibold mt-2 dark:text-white">
                            through DOC-Q
                        </h2>
                        <p className="dark:text-white mt-4 text-2xl">
                            Talk to our team today to book your consultation.
                        </p>
                        <div className="border-2 border-white rounded-2xl mt-9 h-[4rem] w-[32rem] flex flex-row justify-evenly">
                            <div className=" p-4 pl-1 text-lg font-semibold dark:text-white">
                                <p>Reach out to us on</p>
                            </div>
                            <div className="h-[2rem] mt-3 bg-white w-[0.1rem]"></div>
                            <a
                                href="mailto:officialdocq@gmail.com"
                                className=" p-4 text-lg font-semibold dark:text-white hover:underline"
                            >
                                {" "}
                                officialdocq@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="service-image  relative  top-1   ">
                        <img
                            src={serviceimg}
                            alt="serviceimg"
                            width="303px"
                            height="303px"
                        />
                    </div>
                </div>
            </div>
            <div className="lower-text ml-[10] mt-10 w-full h-full ">
                <div className="w-[80rem]">
                    <h1 className="text-3xl font-semibold">
                        We have Experts solutions for 30+ ailments
                    </h1>
                </div>
            </div>
            <div className=" w-full h-full grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <div className=" border-2 border-[#5284B5] bg-white rounded-2xl w-[45rem] h-[10rem] ml-[15%] mb-[30px]">
                        <div className="">
                            <div className="flex items-center space-x-12 ml-5 mt-3 mb-3">
                                <img src={consultation} alt="Consultation Icon"></img>

                                <div className="w-[100%] h-[100%]">
                                    <h4 className="text-xl font-semibold">
                                        Consultation
                                    </h4>
                                    <p className="text-sm mt-5">
                                        Access expert medical advice and treatment plans from experienced doctors
                                        specializing in various fields, ensuring personalized care for your health concerns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=" border-2 border-[#5284B5] bg-white rounded-2xl w-[45rem] h-[10rem] ml-[15%] mb-[30px]">
                        <div className="">
                            <div className="flex items-center space-x-6 ml-5 mt-5 mb-3">
                                <img src={diagnostic} alt="Diagnostic Centre"></img>

                                <div className="w-[100%] h-[100%]">
                                    <h4 className="text-xl font-semibold">
                                        Diagnostic Centre
                                    </h4>
                                    <p className="text-sm mt-5">
                                        Utilize state-of-the-art technology for accurate and efficient diagnosis of various
                                        health conditions, including routine tests and advanced imaging studies, all in one convenient location.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=" border-2 border-[#5284B5] bg-white rounded-2xl w-[45rem] h-[10rem] ml-[15%] mb-[30px]">
                        <div className="">
                            <div className="flex items-center space-x-6 ml-5 mt-5 mb-3">
                                <img src={operation} alt="Operation theatre"></img>

                                <div className="w-[100%] h-[100%]">
                                    <h4 className="text-xl font-semibold">
                                        Operation theatre
                                    </h4>
                                    <p className="text-sm mt-5 ">
                                        Receive surgical interventions from skilled surgeons and medical staff in fully-equipped
                                        operation theaters, adhering to the highest standards of safety and quality for optimal patient outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-2 bg-white rounded-2xl w-[24rem] h-[35rem] pt-10 ml-[50%] mb-[30px] col-span-2 shadow-2xl">
                    <div className="flex flex-col items-start">
                        <h3 className="p-5 text-xl font-semibold">Book your Appointment today</h3>
                        <form>
                            <div className="border-2 border-[#000000] bg-white rounded-2xl w-[20rem] h-[3rem] mb-[25px] ml-[20px] mt-4">
                                <div className="m-3 font-semibold">
                                    <input type="text" placeholder="Name*" className=""></input>
                                </div>
                            </div>

                            <div className="border-2 border-[#000000] bg-white rounded-2xl w-[20rem] h-[3rem] mb-[25px] ml-[20px] mt-4">
                                <div className="m-3 font-semibold">
                                    <input type="tel" placeholder="Contact number*" className=""></input>
                                </div>
                            </div>

                            <div className="border-2 border-[#000000] bg-white rounded-2xl w-[20rem] h-[3rem] mb-[25px] ml-[20px] mt-4">
                                <div className="m-3 font-semibold">
                                    <input type="text" placeholder={city} onClick={handleOpenModal} readOnly />
                                </div>
                            </div>

                            {showModal && (
                                <div id="myModal" className="modal">
                                    <div className="modal-content">
                                        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                                <div className="fixed inset-0 bg-gray-400 bg-opacity-30 transition-opacity" aria-hidden="true"></div>
                                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
                                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                        <div className="sm:flex sm:items-start">
                                                            <button type="button" className="absolute text-4xl font-bold text-gray-400 left-5 top-2 hover:text-black hover:no-underline hover:cursor-pointer" onClick={() => setShowModal(false)}>
                                                                x
                                                            </button>
                                                            <div className="mt-10 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                                <h3 className="block text-xl ml-10 my-4 mx-0 font-bold unicode-bidi-isolate" id="modal-title">Select City</h3>
                                                                <div className="cities-cont max-h-[280px] overflow-x-hidden overflow-y-auto mb-5">
                                                                    {cities.map((cityName, index) => (
                                                                        <div key={index} className="location-name bg-transparent cursor-default box-border m-5 mr-20 flex items-center text-gray-800 space-x-2.5">
                                                                            <label className="city-label flex justify-between items-center w-full mr-15"> 
                                                                                <span className="name-icon mr-20">
                                                                                    {cityName}
                                                                                </span>
                                                                                <input className="mr-20" type="radio" name="city" value={cityName} onChange={handleCityChange} />
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {city === 'Others' && (
                                <div className="border-2 border-[#000000] bg-white rounded-2xl w-[20rem] h-[3rem] mb-[25px] ml-[20px] mt-4">
                                    <div className="m-3 font-semibold">
                                        <input type="text" placeholder="Enter city" className="" value={otherCity} onChange={handleOtherCityChange}></input>
                                    </div>
                                </div>
                            )}

                            <div className="border-2 border-[#000000] bg-white rounded-2xl w-[20rem] h-[3rem] mb-[25px] ml-[20px] mt-4">
                                <select className="m-2 font-semibold text-[#969696]" style={{ paddingRight: '169px' }}>
                                    <option>Select Ailment</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col align-middle">
                        <div className="border-2 bg-[#063360;] rounded-2xl w-[20rem] h-[3rem] ml-[22px] mb-[25px] flex justify-center items-center">
                            <button type="submit" className="text-xl font-semibold dark:text-white">Book Appointment</button>
                        </div>
                        <div className="w-full h-full flex justify-center items-center">
                            <h6 className="text-sm">By submitting the form, you agree to DOC-Q <span style={{ color: '#199fd9' }}>T&C</span></h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};
export default Services;