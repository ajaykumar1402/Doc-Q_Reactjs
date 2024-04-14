import "./Messages.css";
import backArrow from "./icons/backarrow.svg";
import ellipses from "./icons/ellipses.svg";
import callerpic from "./images/callerpic.svg";
import userpic from "./images/userpic.svg";
import profilepic from "./images/profilepic.svg";
import MessageSent from "./components/MessageSent";
import MessageReceived from "./components/MessageReceived";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import MessageInput from "./components/MessageInput";
import CallButtons from "./components/CallButtons";
import React from "react";

const data = [
  {
    name: "Damilola Oyin",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    time: "45 Mins Ago",
  },
];

const Messages = () => {
  return (
    <>
    <div className='w-full mt-[8vh] px-5 md:mt-[5vh] lg:mt-[12vh] bg-[#FAFAFA] h-auto lg:h-full max-w-[80%] md:max-w-[90%] lg:max-w-[85%]'>

      {data.map((info, index) => (
        <div key={index}>
          <div className="bg-gray-50 py-5">
            Messages &gt; <span>{info.name}</span>
          </div>
          <div className="messages flex flex-col lg:flex-row lg:gap-4 bg-gray-50">
            <div className="lg:w-1/3">
              <div className="bg-[#FFFFFF] mb-1 rounded-[4.27px] flex items-center">
                <div className="ml-5 mr-2 flex items-center justify-center">
                  <MdOutlineKeyboardArrowLeft className="text-[#828282]" />
                </div>
                <div className="flex items-center">
                  <img
                    src={profilepic}
                    alt="Profile Pic"
                    style={{ borderRadius: "50%", marginRight: "8px" }}
                  />
                  {info.name}
                </div>
                <div className="flex-grow flex justify-end items-center mr-8">
                  <img src={ellipses} alt="ellipses" />
                </div>
              </div>
              <div className="px-5 pb-5 bg-[#FFFFFF] rounded-[4.27px] pt-10">
                <MessageSent
                  message={"Hello, how are you doing?"}
                  time={"09:27am"}
                />
                <MessageReceived
                  message={"Great, when can we have the meeting?"}
                  status={"Seen"}
                />
                <MessageSent
                  message={"Maybe, now\nWill that be okay?"}
                  time={"09:28am"}
                />
                <MessageReceived
                  message={"Yeah\nLets have a video call"}
                  status={"Seen"}
                />
                <MessageSent message={"That would be great"} time={"09:28am"} />

                <div className="mt-28">
                  <MessageInput onSubmit={() => console.log("done")} />
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 md:w-full flex flex-col">
            <div className="h-[510px] xs:h-[50%] bg-[#FFFFFF] rounded-[4.27px] flex items-center justify-center relative overflow-hidden">
                <img
                  src={"https://s3-alpha-sig.figma.com/img/b278/bdbc/d1fce6962261395faa1cb4bd7ca79fc9?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bkTVb9FgAr9qr9bfpt7vEmSb7rR8K~J2n-NGfLujK5~iBRVjN6zaSHsezfmjq7ulK~0yAAdnWXTowWaym21R-5qZZcnarmWxtgn3rW8iAblowoYZymdihluEnkb-0GL2KNUMYocSgIhESfhIoJjXSHZjuwfAM6iag7yehEwDkoRo19iVDj~uf~GIOKoFMJR902AMRzBVPfI~wAHXt8wfAkqyRrczJJ~tRqu2dpjioIH3FykLidVhaKfP5fjnzcZRBVZSdBNMixv4KEr9Ethu3Pv-rF6fjBCgjZX0Nf52M9GW3TpePXgW~bDun~N9PL6XohSz4AX8dtLN2fBF6MSuRg__"}
                  alt="Userpic"
                  className="object-cover"
                  style={{
                    borderRadius: "4.27px",
                    width: "94%",
                    height: "94%",
                    // objectFit: "cover",
                    position: "relative",
                  }}
                />
                <img
                  src={callerpic}
                  alt="callerpic"
                  // className="absolute left-1/2 bottom-10 transform -translate-x-1/2 w-1/3 h-auto"

                  style={{
                    position: "absolute",
                    left: "70%",
                    bottom: "10%",
                    transform: "translate(-50%, 0)",
                    width: "30%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="callbutton bg-[#FFFFFF] mt-10 py-5 flex justify-center items-center gap-20 rounded-[4.27px]">
                <CallButtons />
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default Messages;

