// import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export default function Solution() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-2">SOLUTIONS</p>
          <h2 className="text-3xl font-bold text-gray-900">Expert solutions to get the job done</h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="overflow-hidden p-0 shadow-none hover:border-black cursor-pointer hover:shadow-md">
              <div className="relative h-50 bg-center bg-cover bg-[url('/chemical-emergency.jpg')]"></div>
              <CardContent className="px-6 pb-10">
                <p className="text-base font-bold text-custom-blue mb-2">Solutions</p>
                <h3 className="text-2xl font-bold text-gray-900">Emergency Response</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0 shadow-none hover:border-black cursor-pointer hover:shadow-md">
              <div className="relative h-50 bg-center bg-cover bg-[url('/chemical.webp')]"></div>
              <CardContent className="px-6 pb-10">
                <p className="text-base font-bold text-custom-blue mb-2">Solutions</p>
                <h3 className="text-2xl font-bold text-gray-900">Chemical</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden p-0 shadow-none hover:border-black cursor-pointer hover:shadow-md">
              <div className="relative h-50 bg-center bg-cover bg-[url('/Downstream-Refinery.jpg')]"></div>
              <CardContent className="px-6 pb-10">
                <p className="text-base font-bold text-custom-blue mb-2">Solutions</p>
                <h3 className="text-2xl font-bold text-gray-900">Oil & Gas Refining</h3>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-20">
          <Button className="bg-custom-blue cursor-pointer hover:bg-blue-700 text-white px-10 font-bold text-base py-7">
            Browse Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
