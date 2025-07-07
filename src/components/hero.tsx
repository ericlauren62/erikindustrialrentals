"use client";

import Image from "next/image";
import Search from "./search";

export default function Hero() {
  return (
    <section className=" relative text-white bg-[#000a50]">
      <div className="max-w-8xl relative bg-[url('/pattern.svg')] bg-left bg-size-[50%] bg-no-repeat mx-auto px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center pb-16">
        <div className="absolute pl-8 inset-0 bg-[#000a50] opacity-80 h-full"></div>
        <div className="lg:w-[45%] h-auto relative z-10">
          <h1 className="text-3xl mb-3 lg:text-[3.2rem] font-bold lg:mb-6">Connect the Worksite</h1>
          <p className="text-2xl mb-6 lg:text-4xl font-semibold lg:mb-10">
            Drive Safety, Productivity & Sustainability with
          </p>
          <p className="text-2xl mb-8 lg:text-3xl font-semibold text-gray-400 lg:mb-16">
            Worksite Performance Solutions™
          </p>
          <button className="bg-[#0023FF] text-white font-medium px-10 cursor-pointer py-3 rounded-md hover:bg-[#001FCC] transition">
            Learn More
          </button>
        </div>
        <div className="lg:w-[50%] relative mt-10 md:mt-0">
          <Image
            src="/hero.webp"
            alt="Construction site aerial view"
            className="rounded-lg w-full mt-10"
            height={200}
            width={400}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#000A4A] text-3xl">
              ▶
            </button>
          </div>
        </div>
      </div>
      <Search/>
    </section>
  );
}
