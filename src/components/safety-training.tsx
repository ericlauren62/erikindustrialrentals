import { FaLongArrowAltRight } from "react-icons/fa";
import { Button } from "./ui/button";

export default function SafetyTraining() {
  return (
    <section className="relative min-h-[232px] rounded-md mb-10 bg-[url('/safety.jpg')] bg-center bg-cover container mx-auto bg-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 h-full w-full bg-black opacity-50"></div>
      <div className="relative container mx-auto px-5 lg:px-30 py-12 ">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-2">
            Safety & Training at Erik industrial & Construction Rentals
          </h2>
          <p className="text-lg mb-6">
            Get certified with United Academy and ensure work gets done the safe way.
          </p>
          <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row space-x-4">
            <Button
              variant="outline"
              className="bg-white cursor-pointer rounded-sm font-bold text-base px-8 py-6 text-gray-900 hover:bg-gray-100"
            >
              Confined Space, Trench & Excavation
            </Button>
            <Button className="bg-custom-blue cursor-pointer py-6 px-8 flex items-center gap-x-3 font-bold text-base rounded-sm hover:bg-blue-700">
              View Courses
              <FaLongArrowAltRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
