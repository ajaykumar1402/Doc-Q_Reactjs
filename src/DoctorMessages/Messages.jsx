import "./Messages.scss";
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
      {data.map((info, index) => (
        <div key={index}>
          <div className="mb-5">
            Messages &gt; <span>{info.name}</span>
          </div>
          <div className="messages grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4">
            <div className="lg:col-span-1">
              <div className="bg-[#FFFFFF] mb-1 rounded-[4.27px] grid grid-cols-2">
                <div className="flex flex-row ">
                  <div className="ml-5 mr-2 flex items-center justify-center">
                    {/* <img src={backArrow} alt="Back Arrow" /> */}
                    <MdOutlineKeyboardArrowLeft className="text-[#828282]" />
                  </div>
                  <div className="flex items-center justify-center mr-3">
                    <img
                      src={profilepic}
                      alt="Profile Pic"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    {info.name}
                  </div>
                </div>
                <div className="flex items-center justify-end mr-8">
                  <img src={ellipses} alt="ellipses" />
                </div>
              </div>
              <div className="px-5 pb-5 bg-[#FFFFFF] h-[auto] rounded-[4.27px] pt-10">
                <MessageSent
                  message={"Hello, how are you doing?"}
                  time={"09:27am"}
                />
                <MessageReceived
                  message={"Great,when can we have the meeting?"}
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
            <div className="lg:col-span-2 md:col-span-1">
              <div
                className="h-[60%] bg-[#FFFFFF] flex justify-center items-center rounded-[4.27px] relative"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={userpic}
                  alt="Userpic"
                  style={{
                    borderRadius: "4.27px",
                    width: "94%",
                    height: "94%",
                    objectFit: "cover",
                    position: "relative",
                  }}
                />
                <img
                  src={callerpic}
                  alt="callerpic"
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
    </>
  );
};

export default Messages;
