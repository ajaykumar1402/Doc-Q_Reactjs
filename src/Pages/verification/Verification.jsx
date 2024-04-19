import React from "react";
import{ useState } from "react";
import logo1 from "../../assets/verification_images/verification image.png";
import logo2 from "../../assets/verification_images/verification image (1).png";

function Verification() {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const input = e.target.value;
    if (/^[0-9]{0,6}$/.test(input)) {
      setOtp(input);
    }
  };
  return (
    <div className=" h-screen w-full">
      <div className=" h-4/6 flex flex-col items-center pt-24 sm:justify-center">
        <h1 className="text-2xl text-[#000000] font-medium  mb-6">
          Email Verification
        </h1>
        <div className="flex gap-0 sm:gap-1  mb-6">
          <p className="text-[#4F4F4F] text-xs sm:text-xl text-center font-medium">
            A 6 - digit code has been sent to your email at
            <span>jo*****2004@gmail.com</span>
          </p>
          <button className="text-[#0000AC] text-xs sm:text-xl mb-3 mr-1 sm:m-0 font-bold">
            Change
          </button>
        </div>
        <input
  className="border-b-2 border-[#000000] focus:outline-none h-12 w-20 pl-1 text-xl text-[#000000] font-medium my-6"
  type="text"
  name="otp"
  value={otp}
  onChange={handleChange}
/>


        <p className="text-[#000000] text-md font-medium mb-6">
          <span>0 : 32</span> secs remaining
        </p>
        <button className="bg-[#27AE60] h-12 w-72 rounded-lg text-[#FFFFFF] mb-6">
          Verify account
        </button>
        <div className="flex gap-1  ">
          <p>Didn't receive code,</p>
          <button className="text-[#0000AC] font-bold">Resend</button>
        </div>
      </div>
      <div className="bg-[#063360] h-2/6 relative">
        <div className="logo1  h-48 w-80 m-auto  sm:w-80  lg:m-0 lg:absolute lg:right-28 lg:top-2 xl:right-38 xl:top-8 xl:h-48 xl:w-80">
          <img className="h-full w-full" src={logo1} alt="message image" />
        </div>
        <div className="logo2 hidden lg:block h-80 w-80 absolute left-10 bottom-20 xl:bottom-28 xl:h-96 xl:w-96">
          <img className="h-full w-full" src={logo2} alt="message image" />
        </div>
      </div>
    </div>
  );
}

export default Verification;
