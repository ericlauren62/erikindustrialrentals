"use client"

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Equipment() {
  const [activeTab, setActiveTab] = React.useState("Popular Equipment");

  const equipmentTabs = [
    "Popular Equipment",
    "Earthmoving Equipment",
    "Aerial Work Platforms",
    "Forklifts",
    "Material Handling",
  ];

  const popularEquipment = [
    { subTitle: "Aerial Work Platforms", title: "Scissor Lifts", img: "/Scissor-Lifts.jpg" },
    { subTitle: "Aerial Work Platforms", title: "Boom Lifts", img: "/Boom-Lifts.jpg" },
    { subTitle: "Forklifts", title: "Warehouse Forklifts", img: "/Warehouse-Forklift.jpg" },
  ];

  const earthMovingEquipment = [
    {
      subTitle: "Earth Moving Equipment",
      title: "Skid Steers & Compact Track Loaders ",
      img: "/Skid-Steer.jpg",
    },
    { subTitle: "Earth Moving Equipment", title: "Mini Excavators", img: "/Mini-Excavator.jpg" },
    {
      subTitle: "Earth Moving Equipment",
      title: "Excavators",
      img: "/Excavator-PLP.jpg",
    },
  ];

  const aerialWorkEquipment = [
    { subTitle: "Aerial Work Platforms", title: "Scissor Lifts", img: "/Scissor-Lifts.jpg" },
    { subTitle: "Aerial Work Platforms", title: "Boom Lifts", img: "/Boom-Lifts.jpg" },
    {
      subTitle: "Aerial Work Platforms",
      title: "One-Person Lifts",
      img: "/One-Person-Lift.jpg",
    },
  ];

  const forkLiftEquipment = [
    { subTitle: "Forklifts", title: "Warehouse Forklifts", img: "/Warehouse-Forklift.jpg" },
    {
      subTitle: "Forklifts",
      title: "Straight Mast Rough Terrain Forklifts",
      img: "/SMRT-Forklift.jpg",
    },
    { subTitle: "Forklifts", title: "Forklift Attachments", img: "/Forklift-Attachments.jpg" },
  ];

  const materialHandlingEquipment = [
    { subTitle: "Material Handling", title: "Cranes", img: "/Cranes-Material.jpg" },
    {
      subTitle: "Material Handling",
      title: "Hoists",
      img: "/Hoist-Material.jpg",
    },
    { subTitle: "Material Handling", title: "Material Lifts", img: "/Material-Lift-Material.jpg" },
  ];

  return (
    <section className="pt-36 pb-16 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 lg:mb-8">
          <p className="font-semibold text-lg text-gray-600 mb-2">EQUIPMENT</p>
          <h2 className="text-3xl lg:text-[2.5rem] font-bold text-gray-900">Quality equipment, ready to go</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:flex space-x-8 mb-16">
          {equipmentTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 px-1 border-b-5 lg:text-lg font-bold cursor-pointer ${
                activeTab === tab
                  ? "border-custom-blue hover:text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "Popular Equipment" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {popularEquipment.map((equipment, id) => {
              return <EquipmentCard key={id} {...equipment} />;
            })}
          </div>
        )}
        {activeTab === "Earthmoving Equipment" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {earthMovingEquipment.map((equipment, id) => {
              return <EquipmentCard key={id} {...equipment} />;
            })}
          </div>
        )}
        {activeTab === "Aerial Work Platforms" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {aerialWorkEquipment.map((equipment, id) => {
              return <EquipmentCard key={id} {...equipment} />;
            })}
          </div>
        )}
        {activeTab === "Forklifts" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {forkLiftEquipment.map((equipment, id) => {
              return <EquipmentCard key={id} {...equipment} />;
            })}
          </div>
        )}
        {activeTab === "Material Handling" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {materialHandlingEquipment.map((equipment, id) => {
              return <EquipmentCard key={id} {...equipment} />;
            })}
          </div>
        )}
        <div className="text-center py-18">
          <Button className="bg-custom-blue hover:bg-blue-700 text-white px-8 py-7 font-bold text-base">
            Browse Equipment
          </Button>
        </div>
      </div>
    </section>
  );
}

interface EquipmentCard {
  subTitle: string;
  title: string;
  img: string;
}

const EquipmentCard = ({ subTitle, title, img }: EquipmentCard) => {
  return (
    <Card className="py-4 px-6 shadow-none hover:border hover:shadow-sm transition-all delay-100 hover:border-black cursor-pointer">
      <CardContent className="px-0">
        <p className="font-bold text-base text-blue-600 mb-1 ">{subTitle}</p>
        <h3 className="text-3xl font-bold mb-8">{title}</h3>
        <div className="flex justify-center items-center">
          <Image
            src={img}
            alt=""
            className="mx-auto max-w-[265px] object-cover object-center rounded-lg mb-4"
            height={150}
            width={265}
          />
        </div>
      </CardContent>
    </Card>
  );
};
