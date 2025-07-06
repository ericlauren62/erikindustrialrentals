import Image from "next/image";
import { Card, CardContent } from "./ui/card";

export default function FleetCategories() {
  const equipmentCategories = [
    { name: "Aerial Work Platforms", icon: "/aerial.svg" },
    { name: "Air Compressors & Air Tools", icon: "/compressor.svg" },
    { name: "Compaction & Paving Equipment", icon: "/compaction.svg" },
    { name: "Concrete & Masonry", icon: "/concrete.svg" },
    { name: "Earthmoving Equipment", icon: "/earthmoving.svg" },
    { name: "Forklifts", icon: "/forklift.svg" },
    { name: "Ground Protection Mats", icon: "/ground-mat.svg" },
    { name: "HVAC Equipment", icon: "/hvac.svg" },
    { name: "Ladders", icon: "/ladder.svg" },
    { name: "Lawn & Landscape", icon: "/lawn.svg" },
    { name: "Lighting Equipment", icon: "/lightening.svg" },
    { name: "Material Handling", icon: "/material-handling.svg" },
    { name: "Mobile Offices", icon: "/mobile-office.svg" },
    { name: "Other Equipment", icon: "/other-equipment.svg" },
    { name: "Plumbing, Pipe & Conduit", icon: "/plumbing.svg" },
    { name: "Portable Restrooms & Sanitation Equipment", icon: "/restroom.svg" },
    { name: "Power Generation Equipment", icon: "/power-generator.svg" },
    { name: "Pumps, Tanks & Filtration", icon: "/pump.svg" },
    { name: "Storage Containers", icon: "/storage.svg" },
    { name: "Surface Preparation", icon: "/surface-preparation.svg" },
    { name: "Temporary Fence & Traffic Control", icon: "/traffic-control.svg" },
    { name: "Tools - Power, Hand & Surveying", icon: "/hand-tools.svg" },
    { name: "Trailers", icon: "/trailer.svg" },
    { name: "Trench Safety & Shoring", icon: "/trench-safety.svg" },
    { name: "Trucks & Passenger Vehicles", icon: "/truck-vehicles.svg" },
    { name: "Welding Supplies", icon: "/welding-supplies.svg" },
  ];
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="font-semibold text-gray-600 mb-2">EQUIPMENT</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Browse the largest fleet in the industry
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {equipmentCategories.map((category) => (
            <Card
              key={category.name}
              className="border-gray-300 shadow-none hover:border-black hover:shadow-md transition-shadow cursor-pointer p-0"
            >
              <CardContent className="text-center flex items-start justify-between p-2">
                <h3 className="font-bold text-gray-900 text-left w-[60%]">{category.name}</h3>
                <div className="pt-6">
                  <Image src={category.icon} alt="catlogs" className="mb-2" height={60} width={60}  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
