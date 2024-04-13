import sentIcon from "../icons/sentIcon.svg";


const MessageSent= ({ message, time }) => {
  return (
    <>
      <div>
        <div className="flex justify-end mb-4 pr-5">
        <p className="bg-[#C7DFFF] text-[#1D1D1D] rounded-[6.83px] px-4 py-2 max-w-3/4">
            {message.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="flex text-[#2F80ED] items-right justify-end mb-4 pr-5 gap-1">
          {time}
          <img src={sentIcon} alt="sent icon" />
        </div>
      </div>
    </>
  );
};

export default MessageSent;
