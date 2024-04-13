import sentIcon from "../icons/sentIcon.svg";


const MessageReceived= ({
  message,
  status,
}) => {
  return (
    <>
      <div className="message-container ml-5">
        <div className="message">
          <p className="bg-[#E0E0E0] text-[#1D1D1D] rounded-[6.83px] px-4 py-2 max-w-3/4 break-words inline-block">
            {message.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="status">
          <div className="text-[#BDBDBD] text-[9.39px]">{status}</div>
        </div>
      </div>
    </>
  );
};

export default MessageReceived;
