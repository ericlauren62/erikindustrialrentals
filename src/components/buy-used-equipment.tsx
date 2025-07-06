import { Button } from "./ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function BuyUsedEquipment() {
  return (
    <section className="pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative flex items-center h-[350px] w-full bg-center bg-cover bg-[url('/parking-lot-equipment.webp')]">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className=" rounded-lg relative z-20 flex flex-col justify-end gap-y-5 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Buy Used Equipment</h3>
              <p className="text-white mb-6 w-[90%]">
                Get quality used equipment from top-tier manufacturers like Skyjack, Genie, JLG, and
                more!
              </p>
              <div className="flex flex-col gap-y-4 lg:flex-row space-x-4">
                <Button className="bg-custom-blue py-6 w-[220px] cursor-pointer text-base font-semibold hover:text-white hover:bg-blue-700 text-white">
                  View Used Equipment
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-none font-semibold cursor-pointer text-base bg-custom-blue py-6 w-[200px] hover:text-white hover:bg-blue-700"
                >
                  Request Info
                </Button>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-sm p-4 h-full flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{"Let's get started."}</h3>
            <p className="mb-3 text-xl">Sign In to:</p>
            <ul className="space-y-1 list-disc list-inside pl-8 text-gray-700 mb-3">
              <li> Rent and manage equipment</li>
              <li>View accurate rates</li>
              <li>Quickly access your favorite and recently rented equipment</li>
            </ul>
            <p className="text-gray-700 mb-2">
              Federal, State or Local government customers must sign in to avoid paying tax and
              extra fees.
            </p>
            <div className="flex items-center gap-x-1">
              <span className="text-custom-blue font-bold cursor-pointer hover:underline">Sign In</span>
              <span>
                <FaLongArrowAltRight className="inline-block text-orange-500" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
