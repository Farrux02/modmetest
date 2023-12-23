import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "@/assets/icons";

const Search = () => {
  const [inputData, setInputData] = useState("");

  return (
    <form>
      <div className="flex items-center gap-x-2 border rounded-[6px] py-2 h-10  bg-white relative w-56">
        <SearchIcon className="w-4 h-4 text-gray-500 absolute left-4" />
        <Input
          placeholder="Search collaborations..."
          className="border-0 pl-10 placeholder:text-gray-500 absolute w-full focus:ring"
          type="search"
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
