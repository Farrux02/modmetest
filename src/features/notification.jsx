import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BellIcon } from "@/assets/icons";
import { BellOffIcon } from "lucide-react";

const Notification = () => {
  const [volemuOn, setVolumeOn] = useState(true);

  const handleClick = () => setVolumeOn(!volemuOn);

  return (
    <Button
      onClick={handleClick}
      className="bg-white h-8 w-8 p-0 rounded-[6px] border border-gray-800/10 border-solid"
    >
      {volemuOn ? (
        <BellIcon className="h-4 w-4" />
      ) : (
        <BellOffIcon className="h-4 w-4" />
      )}
    </Button>
  );
};

export default Notification;
