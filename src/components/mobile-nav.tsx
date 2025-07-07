"use client";

import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { LuCircleUserRound } from "react-icons/lu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const rentSublinks = [
  "All Equipment",
  "Popular Rentals",
  "Scissor Lifts",
  "Boom Lifts",
  "Telehandlers",
  "Mini Excavators",
  "Skid Steers & Track Loaders",
  "Rental Resources",
  "Rental Protection Plan (RPP)",
];

const buySublinks = [
  "All Used Equipment",
  "Popular Used Equipment",
  "Buy Forklifts",
  "Buy Scissor Lifts",
  "Buy Boom Lifts",
  "Buy Mini Excavators",
  "Buy Compressors",
  "Buying Resources",
  "Financing",
  "United Guard™",
];

const totalControlSublinks = [
  "Account Dashboard",
  "Invoices & Payments",
  "Items On Rent",
  "UR Mobile App",
];

const invoicesSublinks = ["Invoices", "Lien releases", "Apply for credit"];

const locationsSublinks = ["Find a Location"];
const trainingSublinks = [
  "Course Catalog",
  "Training Credentials",
  "United Academy",
  "About United Academy",
  "Care & Support",
  "United Academy - Course Catalog",
];
const solutionsSublinks = [
  "Worksite Performance Solutions",
  "Specialty Solutions",
  "Power & HVAC",
  "Climate Solutions",
  "Fluid Solutions",
  "Trench Safety",
  "Reliable Onsite Services",
  "Tool Solutions",
  "Storage Container & Mobile Offices",
  "Commercial Trucks",
  "Flooring & Facility Solutions",
  "Ground Protection Matting Solutions",
  "Industry Solutions",
  "Power Gen. & Distribution",
  "Data Centers",
  "Renewable Energy",
  "Chemical",
  "Oil & Gas Refining",
  "Oilfield Services",
  "Restoration & Remediation",
  "Civi & Infrastructure",
  "Government Solution",
  "Emergency Solution",
  "Emergency Response",
];

const servicesSublinks = [
  "Digital Solutions",
  "Total Control",
  "Mobile App",
  "Notifications",
  "Benchmarking",
  "Wedge",
  "Downloadable Catalogs",
  "Repair & Maintenance Services",
  "Owned Equipment Service",
  "Rental Equipment Service",
  "Training Services",
  "United Academy",
];

const safetySublinks = ["Safety Training", "Safety Articles"];
const companySublinks = [
  "About Us",
  "Investor Relations",
  "Sustainability",
  "Careers",
  "Events",
  "In the News",
  "Press Releases",
  "Project Uptime Blog",
];

const navLinks = [
  { name: "Rent", sublinks: rentSublinks },
  { name: "Buy", sublinks: buySublinks },
  { name: "Total Control", sublinks: totalControlSublinks },
  { name: "Invoices & Payment", sublinks: invoicesSublinks },
  { name: "Locations", sublinks: locationsSublinks },
  { name: "Training", sublinks: trainingSublinks },
  { name: "Solutions", sublinks: solutionsSublinks },
  { name: "Services", sublinks: servicesSublinks },
  { name: "Safety", sublinks: safetySublinks },
  { name: "Company", sublinks: companySublinks, link: "/about" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="h-[50px] lg:hidden">
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
                  width={180}
                  className="object-cover object-center"
                />
              </SheetTitle>
              <SheetDescription>
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
                  {navLinks.map((link, id) => {
                    return (
                      <Collapsible key={id}>
                        <CollapsibleTrigger className="flex items-center w-full justify-between">
                          <span className="text-lg text-gray-800 font-bold py-4">{link.name}</span>
                          <ChevronDown />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <ul className="space-y-3">
                            {link.sublinks.map((sublinks, id) => {
                              return (
                                <li key={id} className="text-base cursor-pointer">
                                  {sublinks}
                                  <Link href={link?.link || "#"}></Link>
                                </li>
                              );
                            })}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  })}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
