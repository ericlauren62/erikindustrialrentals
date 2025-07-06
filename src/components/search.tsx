import { Button } from "./ui/button";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <div className="absolute rounded-md -bottom-20 lg:-bottom-8 left-1/2 -translate-x-1/2   bg-white w-[90%] lg:w-[55%] shadow-md mx-auto flex flex-col lg:flex-row items-center justify-between">
      <div className="flex gap-x-3 items-center w-full px-4">
        <div className="text-custom-blue text-2xl">
          <IoSearchSharp />
        </div>
        <input type="text" className="w-full py-3 focus-within:outline-0 focus-visible:outline-0 text-black" />
      </div>
      <Button className="bg-custom-blue px-8 font-bold rounded-none rounded-b-md lg:rounded-bl-none lg:rounded-r-md text-lg cursor-pointer w-full lg:w-fit hover:text-white hover:bg-blue-600  py-8">
        Search
      </Button>
    </div>
  );
}
