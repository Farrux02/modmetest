import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SendIcon } from "@/assets/icons";

const AddMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    onSendMessage({
      messageFrom: "User",
      messageText: message,
    });
    setMessage("");
  };

  return (
    <div className="border shadow-sm rounded-[6px] mt-4 sticky bottom-0 bg-gray-100/40 dark:bg-gray-800/40 flex items-center space-x-4 p-2">
      <textarea
        class="w-full h-20 p-2 text-sm"
        placeholder="Type your message here..."
        data-id="135"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <Button
        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-500 h-8"
        onClick={sendMessage}
      >
        <SendIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default AddMessage;
