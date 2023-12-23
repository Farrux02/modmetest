import React from "react";

const ChatMessage = ({ msgFrom, msgText }) => {
  const msgColor = {
    support: "bg-green-100",
    user: "bg-blue-100",
  };

  return (
    <div className={`p-2 ${msgColor[msgFrom.toLowerCase()]} rounded-[6px] text-sm`}>
      <p className="font-semibold">{msgFrom}</p>
      <p>{msgText}</p>
    </div>
  );
};

export default ChatMessage;
