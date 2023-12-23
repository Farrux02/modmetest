import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  UsersIcon,
  LineChartIcon,
  GlobeIcon,
  PlusIcon,
} from "@/assets/icons";

const Sidebar = () => {
  return (
    <nav>
      <Link
        href="#"
        className="flex items-center text-gray-500 px-3 py-2 rounded-[6px] hover:text-black gap-x-3"
      >
        <HomeIcon className="w-4 h-4" />
        Home
      </Link>
      <Link
        href="#"
        className="flex items-center text-gray-500 px-3 py-2 rounded-[6px] hover:text-black gap-x-3"
      >
        <UsersIcon className="w-4 h-4" />
        Users
      </Link>
      <Link
        href="#"
        className="flex items-center text-black px-3 py-2 rounded-[6px] hover:text-black gap-x-3 bg-gray-100"
      >
        <LineChartIcon className="w-4 h-4" />
        Analytics
      </Link>
      <Link
        href="#"
        className="flex items-center text-gray-500 px-3 py-2 rounded-[6px] hover:text-black gap-x-3"
      >
        <GlobeIcon className="w-4 h-4" />
        Collaborate
      </Link>
      <div className="-mx-1 my-1 h-px bg-gray-100 h-[1px]"></div>
      <Link
        href="#"
        className="flex items-center text-gray-500 px-3 py-2 rounded-[6px] hover:text-black gap-x-3"
      >
        <PlusIcon className="w-4 h-4" />
        Add new page
      </Link>
    </nav>
  );
};

export default Sidebar;
