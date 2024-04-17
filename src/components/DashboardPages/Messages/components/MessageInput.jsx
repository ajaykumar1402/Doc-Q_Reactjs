import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { IoMdArrowUp } from "react-icons/io";
import { MdOutlineMicNone } from "react-icons/md";
import "./MessageInput.css";



const MessageInput = ({ onSubmit }) => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = () => {
    if (message.trim() !== "") {
      onSubmit(message);
      setMessage("");
    }
  };

  return (
    <div className="messageInputdiv bg-[#fff] flex items-center gap-2 border border-gray-300 rounded-lg p-2 w-full">
      <div className="ml-5 flex items-left justify-left">
        <GoPencil className="text-[#BDBDBD] w-8 h-8" />
      </div>
      <input
        type="text"
        placeholder="Type here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        className="message-textinput bg-[#fff] rounded-lg p-2 flex-grow outline-none mr-2"
      />
      <div className="flex items-left justify-left gap-1">
        <BsEmojiSmile className="text-[#BDBDBD] w-5 h-5" />
        <MdOutlineMicNone className="text-[#BDBDBD] w-5 h-5" />
      </div>
      <button
        className="submit-arrow-button bg-[#0000AC] rounded-full w-5 h-5 flex items-center justify-center"
        onClick={handleSubmit}
      >
        <IoMdArrowUp className="text-[#FFFFFFFF] w-2 h-3" />
      </button>
    </div>
  );
};

export default MessageInput;
