import React from "react";
import "./signup.css";
// import "./responsive.css";

function SignUp() {
  return (
    <>
      <div className="main-container h-lvh w-lvw bg-[#063360] flex flex-row relative">
        <div className="flex flex-row">
          <div id="lady-img" className="absolute bottom-0">
            <img
              className="h-96 "
              src="/src/assets/images/doctor_imgs/lady-image.png"
              alt=""
            />
          </div>
          <div
            id="signup-container"
            className="signup-container bg-[white] ml-40 mt-24 px-20 py-10"
          >
            <div className="top-3">
              <div>
                <h2 id="h2-text1" className="text-3xl text-center mr-28">
                  Welcome to Doc-Q
                </h2>
              </div>
              <div>
                <h2 id="h2-text2" className="text-3xl text-center mr-36 mt-2">
                  Tell us about yourself
                </h2>
              </div>
              <form action="">
                <div className="signup-input flex flex-col">
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="signup-input flex flex-col">
                  <label htmlFor="">Company Name</label>
                  <input type="text" placeholder="Manilla" />
                </div>
                <div className="signup-input flex flex-col">
                  <label htmlFor="">Industry</label>
                  <input type="text" placeholder="Healthcare" />
                </div>
                <div className="signup-input flex flex-col">
                  <label htmlFor="">Email ID</label>
                  <input type="email" placeholder="John@gmail.com" />
                </div>
                <div>
                  <button className="signup-button bg-[#27AE60]" type="submit">
                    Finish
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            id="sign-up-right-img"
            className=" absolute top-32 w-1/1 right-8"
          >
            <img src="/src/assets/images/doctor_imgs/side-image.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
