import NavBar from "./navbar";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { LuCircleUserRound } from "react-icons/lu";

export default function Header() {
  return (
    <header className=" bg-[#000a50] lg:px-4 text-white min-h-35 shadow-md pb-5 border-b border-[#000d6e]">
      <div className="hidden lg:flex items-center justify-end max-w-7xl gap-x-16 mx-auto">
        <div className="flex items-center gap-2 p-2 font-semibold">
          <BsTelephone />
          <p className="hover:underline">515.215.5249</p>
        </div>
        <div className="flex items-center gap-2 p-2 font-semibold">
          <TfiWorld />
          <p>English</p>
        </div>
        <button className="flex cursor-pointer items-center gap-2 p-3 text-sm font-semibold bg-[#0a14f5] rounded-b-md">
          <LuCircleUserRound className="font-bold text-lg" />
          <p className="hover:underline">Sign In / Register</p>
        </button>
      </div>
      <NavBar />
    </header>
  );
}
