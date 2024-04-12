import { MdOutlineMicNone } from "react-icons/md";
import sentIcon from "../icons/sentIcon.svg";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import hangUp from "../icons/hangUp.svg";
import { PiPhoneDisconnect } from "react-icons/pi";

const CallButtons = () => {
  return (
    <>
      <div className="border border-[#BDBDBD] rounded-full">
        <button
          className="bg-[#FFFFFF] border border-gray-400 rounded-full w-16 h-16 flex items-center justify-center"
          onClick={() => {
            console.log("mic");
          }}
        >
          <MdOutlineMicNone className="text-[#BDBDBD] w-8 h-8" />
        </button>
      </div>
      <button
        className="bg-[#EB5757] border-[#BDBDBD] rounded-full w-28 h-28 flex items-center justify-center"
        onClick={() => {
          console.log("hangup");
        }}
      >
        <PiPhoneDisconnect className="text-[#FFFFFF] w-10 h-10"/>
        {/* <img src={hangUp} alt="Hang up" /> */}
      </button>
      <div className="border border-[#BDBDBD] rounded-full">
        <button
          className="bg-[#FFFFFF] rounded-full w-16 h-16 flex items-center justify-center"
          onClick={() => {
            console.log("chat");
          }}
        >
          <IoChatboxEllipsesOutline className="text-[#BDBDBD] w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default CallButtons;
