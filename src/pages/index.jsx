import Link from "next/link";
import React from "react";
import { Package2Icon } from "@/assets/icons";
import {
  Share,
  Search,
  Notification,
  Profile,
  LeadsDropDown,
} from "@/features";
import { Sidebar, LeadsTable, SupportChat } from "@/widgets";
import "@/app/globals.css";

const MainPage = () => {
  return (
    <main>
      <div className="border border-gray-800/10 border-solid rounded-[6px] h-full max-h-screen">
        <div className="grid grid-cols-[280px_1fr_280px]">
          <div className="bg-gray-100/40 border-r-gray-800/10 w-full border-r h-full max-h-screen">
            <div className="flex justify-between items-center flex-2 h-[60px] border-b px-6">
              <Link href="#" className="flex gap-x-2 items-center">
                <Package2Icon />
                <p className="font-semibold text-xl">Ruslan School</p>
              </Link>
              <Notification />
            </div>
            <div className="px-6 py-4">
              <Sidebar />
            </div>
          </div>
          <div className="border-r max-h-screen h-full">
            <header className="flex bg-gray-100/40  px-6 justify-between items-center h-[60px] w-full border-b">
              <Search />
              <div className="flex items-center gap-x-4">
                <Share />
                <Profile />
              </div>
            </header>
            <main className="p-4 h-full">
              <div className="flex items-center gap-x-2 mb-4">
                <LeadsDropDown />
                <h1 className="font-semibold text-2xl">Leads</h1>
              </div>
              <div className="border rounded-[6px]">
                <LeadsTable />
              </div>
              <div className="border shadow-sm rounded-[6px] mt-4">
                <textarea
                  className="w-full h-32 p-2"
                  placeholder="Add notes here..."
                />
              </div>
            </main>
          </div>
          <div className="bg-gray-100/40 flex flex-col gap-y-2 max-h-screen h-full">
            <div className="h-[60px] px-6 flex items-center border-b">
              <h3 className="font-semibold text-xl">AI Chat</h3>
            </div>
            <SupportChat />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
