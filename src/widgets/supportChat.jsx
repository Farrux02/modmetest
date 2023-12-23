import React, { useState } from "react";
import ChatMessage from "@/entities/chatMessage";
import { AddMessage } from "@/features";

const SupportChat = () => {
  const [messagesList, setMessagesList] = useState([
    {
      id: 1,
      messageFrom: "User",
      messageText: "Hello, I have a question about the product.",
    },
    {
      id: 2,
      messageFrom: "Support",
      messageText: "Sure, I'd be happy to help!",
    },
    {
      id: 3,
      messageFrom: "User",
      messageText: "What are the shipping options?",
    },
    {
      id: 4,
      messageFrom: "Support",
      messageText: "We offer standard and express shipping.",
    },
  ]);

  const getUserMessage = (data) => {
    setMessagesList([...messagesList, data]);
  };

  return (
    <>
      <div className="p-2 flex flex-col gap-y-2 overflow-auto flex-1">
        {messagesList.map((msg) => (
          <ChatMessage
            key={msg?.id}
            msgFrom={msg?.messageFrom}
            msgText={msg?.messageText}
          />
        ))}
      </div>
      <AddMessage onSendMessage={getUserMessage} />
    </>
  );
};

export default SupportChat;
