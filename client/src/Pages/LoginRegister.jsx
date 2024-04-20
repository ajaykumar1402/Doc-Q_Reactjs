import man from "../assets/images/doctor_imgs/login_image_1.svg";
import woman from "../assets/images/doctor_imgs/login_image_2.svg";

const LoginRegister = () => {
  return (
    <div className="bg-[#063360] flex flex-col m-auto items-center justify-center h-[800px]">
      <div className="shadow-chart bg-white rounded-lg h-250 w-3/4 sm:w-1/2 md:w-1/2 lg:w-1/2 flex justify-center flex-col py-4 z-10">
        <div className="w-[65%] sm:w-[60%] md:w-[50%] lg:w-[45%] m-auto">
          <h3 className="text-sm mb-4 items-center justify-center flex sm:text-lg md:text-xl lg:text-2xl">
            Welcome to Doc-Q
          </h3>
          <div className="text-left">
            <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl pb-10">
              Tell us about yourself
            </h3>
          </div>
        </div>
        <div className="form px-8 sm:px-10 md:px-16 lg:px-20">
          <div className="pb-4">
            <p className="">Name</p>
            <input
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none h-10"
              placeholder={"John Doe"}
            />
          </div>
          <div className="pb-4">
            <p>Company Name</p>
            <input
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none h-10"
              placeholder={"John Doe"}
            />
          </div>
          <div className="pb-4">
            <p className="">Industry</p>
            <input
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none h-10"
              placeholder={"John Doe"}
            />
          </div>
          <div className="pb-4">
            <p>Role</p>
            <select
              className="w-full border-b border-gray-400 focus:border-blue-500 outline-none h-10"
              defaultValue=""
            >
              <option value="" disabled hidden>
                --Select--
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </div>
          <div className="py-4">
            <button
              type="submit"
              className="bg-[#27AE60] text-[#FFFFFF] w-full h-14 rounded"
            >
              Finish
            </button>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 w-full">
        <div className="absolute left-0 -top-82 sm:-top-44">
          <img
            src={man}
            alt={"man"}
            className="w-[50px] sm:w-[100px] md:w-[200px] h-auto"
          />
        </div>
        <div className="absolute top-64 sm:top-40 right-0">
          <img
            src={woman}
            alt={"woman"}
            className="w-[200px] sm:w-[150px] md:w-[350px] md:right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;