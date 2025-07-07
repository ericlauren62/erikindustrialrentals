"use client";

import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { LuCircleUserRound } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="h-[40px] lg:hidden">
      <nav className="flex items-center justify-between text-3xl py-5 px-4">
        <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu />
        </button>
        <div>
          <Image src="/logo.png" alt="logo" height={150} width={200} />
        </div>
        <button className="cursor-pointer">
          <MdShoppingCart />
        </button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="left" className="w-[300px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="px-5  flex items-center justify-center mt-8 bg-[#000a50]">
                <Image
                  src="/logo.png"
                  alt="logo"
                  height={180}
                  width={250}
                  className="object-cover object-center"
                />
              </SheetTitle>
              <SheetDescription className="py-5">
                <div className="flex items-center gap-2 p-3  text-base cursor-pointer hover:underline font-semibold">
                  <LuCircleUserRound className="font-bold text-lg" />
                  <p className="hover:underline">Sign In / Register</p>
                </div>
                <div className="flex items-center gap-2 p-3 text-base font-semibold">
                  <TfiWorld />
                  <p>English</p>
                </div>
                <div className="flex items-center gap-2 p-3 text-base font-semibold">
                  <BsTelephone />
                  <p className="hover:underline">515.215.5249</p>
                </div>
                <div>
                  <ul className="mt-8 px-6 space-y-6">
                    <li className="text-lg flex items-center gap-x-6 justify-between font-semibold cursor-pointer">
                      <Link href="/about">About</Link>
                      <span>
                        <FaLongArrowAltRight className="inline-block text-orange-500" />
                      </span>
                    </li>
                    <li className="text-lg flex items-center gap-x-6  justify-between font-semibold cursor-pointer">
                      <Link href="/contact">Contact</Link>
                      <span>
                        <FaLongArrowAltRight className="inline-block text-orange-500" />
                      </span>
                    </li>
                    <li className="text-lg flex items-center gap-x-6  justify-between font-semibold cursor-pointer">
                      <Link href="/">Rent</Link>
                      <span>
                        <FaLongArrowAltRight className="inline-block text-orange-500" />
                      </span>
                    </li>
                    <li className="text-lg flex items-center gap-x-6  justify-between font-semibold cursor-pointer">
                      <Link href="/">Buy</Link>
                      <span>
                        <FaLongArrowAltRight className="inline-block text-orange-500" />
                      </span>
                    </li>
                    <li className="text-lg flex items-center gap-x-6  justify-between font-semibold cursor-pointer">
                      <Link href="/">Safety</Link>
                      <span>
                        <FaLongArrowAltRight className="inline-block text-orange-500" />
                      </span>
                    </li>
                    <li className="text-lg flex items-center gap-x-6  justify-between font-semibold cursor-pointer">
                      <Link href="/">Solutions</Link>
                      <span>
                        <FaLongArrowAltRight className="inline-block text-orange-500" />
                      </span>
                    </li>
                  </ul>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
