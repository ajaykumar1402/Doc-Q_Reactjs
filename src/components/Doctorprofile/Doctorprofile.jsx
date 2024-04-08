import doctor from "../../assets/images/doctor_imgs/pngwing 4.png";
import { FaCheckSquare, FaThumbsUp, FaStar, FaAngleDown } from "react-icons/fa";

const DoctorProfile = () => {
  const timeStamps = [
    { time: "10 - 11 AM" },
    { time: "11 - 12 PM" },
    { time: "12 - 01 PM" },
    { time: "01 - 02 PM" },
    { time: "02 - 03 PM" },
    { time: "03 - 04 PM" },
    { time: "04 - 05 PM" },
    { time: "05 - 06 PM" },
  ];

  return (
    <div className=" flex justify-center items-center bg-[#F7FAFF] overflow-hidden">
      <div className="flex justify-center items-center w-11/12 flex-wrap gap-8 lg:flex-nowrap pt-16 mb-10">
      
      {/* parent container */}


        <div className="relative flex flex-col items-start justify-center gap-14 md:mt-10 lg:mt-1">
          {/* doctors container  */}
          <div className=" w-[80rem] h-[85rem] bg-[#8abbf66c] rounded-full absolute right-[5rem]  z-[10]   md:right-[25rem] md:top-[-5rem]  lg:right-[47rem] lg:top-[-7rem]"></div>
          <div className="flex justify-center items-center gap-32 relative z-[20] flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold">Dr. Shawn Mandles</h1>
              <p className="text-xl">
                <span className="font-bold">BDS, MDS</span> - Prosthodontist And
                Crown Bridge
              </p>
              <p className="text-xl">Implantologist,</p>
              <p className="text-xl">Cosmetic/Aesthetic Dentist,</p>
              <p className="text-xl">Dental Surgeon,</p>
              <p className="text-xl">Dentist</p>
              <p className="text-xl">
                {" "}
                <span className="font-bold">19 Years </span>Experience Overall
              </p>
            </div>
            <div className="">
              <div className="bg-gradient-to-r from-[#7CB9FF] to-[#105CB2]  rounded-3xl z-50 w-[240px] h-[240px] relative">
                <img src={doctor} className="absolute bottom-0 left-2" />
              </div>
            </div>
          </div>
          <div className="w-[70%] flex flex-col gap-2  z-[20]">
            <p className="text-xl flex items-center gap-1 ">
              <FaCheckSquare className="text-green-600" />
              Registration Verified
            </p>
            <p className="text-xl flex items-center gap-1">
              <FaThumbsUp className="bg-green-600 rounded-sm p-1 text-white" />
              98% (1665 patients)
            </p>
            <p className="text-xl">
              Consult Dentist Implantologist Dr. Sourabh Nagpal, one of the
              Dentist in Delhi. Dr. Sourabh is running one of the implantology
              centers in south Delhi, along with more..
            </p>
            <div className="border-b-2 border-gray-500 pt-5"></div>
          </div>
          <div className="flex flex-col gap-2 z-[20]">
            <h2 className="text-4xl font-bold text-[#00305F]">Information</h2>
            <p className="text-xl font-bold">Vasant Vihar, Delhi</p>
            <p className="text-xl">Matrix Dental & Skin Lounge</p>
            <p className="text-xl flex items-center gap-1">
              4.1 <FaStar className="text-[#FFC224] text-3xl" />
              <FaStar className="text-[#FFC224] text-3xl" />
              <FaStar className="text-[#FFC224] text-3xl" />
              <FaStar className="text-[#FFC224] text-3xl" />
              <FaStar className="text-[#8B8B8B] text-3xl" />
            </p>
            <p className="text-xl">14, Ground floor, Poorvi Marg, Delhi</p>
            <p className="text-xl text-[#00305F]">Get Directions</p>
          </div>
        </div>

        {/* end of doctors container */}
        {/* right side time stapms cotainer  */}
        <div className="  flex justify-center items-center lg:min-h-[90svh] lg:w-1/2 lg:border-l-2 lg:border-gray-400 ">


          <div className="w-[400px] min-h-[500px] rounded-lg flex flex-col items-center gap-4  shadow-[0px_0px_5px_1px_#00000024] relative z-[20] md:w-[80%] mb-5 lg:w-[450px] ">
            <div>
              <h3 className="text-xl font-medium p-2 ">Pick a time slot</h3>
            </div>
            <div className="flex justify-between gap-10 py-2 px-4 rounded-xl bg-gradient-to-r from-[#5284B5] to-[#8ABBF6] text-[#fefefe]">
              <div className="text-md">Clinic Appointment</div>
              <div className="text-md font-bold">$100 fee</div>
            </div>

            <div className="flex gap-5 items-start mt-5">
              <div>
                <p>Clinic Hair & Skin</p>
                <p className="flex items-center gap-1">
                  {" "}
                  <span className="text-md">5</span>{" "}
                  <FaStar className="text-[#FFC224] text-md" />
                  <FaStar className="text-[#FFC224] text-md" />
                  <FaStar className="text-[#FFC224] text-md" />
                  <FaStar className="text-[#FFC224] text-md" />
                  <FaStar className="text-[#FFC224] text-md" />
                </p>
                <p className="text-sm text-[#47474c94]">Banglore, 290010</p>
              </div>
              <div className="flex items-center justify-start gap-2 text-[#2F80ED]">
                <select className="border-none outline-none bg-transparent ">
                  <option>Change Clinic </option>
                </select>
                <FaAngleDown />
              </div>
            </div>

            <div className="flex justify-center items-center text-center gap-2 shadow-[0px_0px_5px_1px_#00000024] w-full py-1 mt-10">
              <div className="">
                <p>TODAY</p>
                <p className="text-sm text-[#01A400]">12 slots available</p>
              </div>
              <div>
                <p>TOMORROW</p>
                <p className="text-sm text-[#47474c94]">No slots available</p>
              </div>
              <div>
                <p>MONDAY</p>
                <p className="text-sm text-[#01A400]">25 slots available</p>
              </div>
            </div>
            <div className="flex justify-center items-center  w-full">
            <div className="flex flex-wrap gap-2 items-center justify-start p-8">
              {timeStamps.map((time, i) => (
                <div
                  className="border-2 rounded-sm border-[#2F80ED] text-[#2F80ED]"
                  key={i}
                >
                  <p className="py-2 px-3  ">{time.time}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
        {/* end of right sides container  */}
      </div>
    </div>
  );
};

export default DoctorProfile;
