import { FaLongArrowAltRight } from "react-icons/fa";

export default function Explore() {
  return (
    <section className="grid container mx-auto lg:grid-cols-2 shadow-lg border-2 border-gray-100 mb-16">
      <div className="px-8 pt-10 pb-30">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-gray-800">
          Explore emissions options with Erik industrial & Construction Rentals
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          As the world’s largest rental equipment company, Erik industrial & Construction Rentals is
          committed to providing customers with a range of equipment options to support their
          sustainability goals. With our online catalog, customers can search for and select
          equipment by emission level.
        </p>
        <div className="flex items-center gap-x-1">
          <span className="text-custom-blue font-bold cursor-pointer hover:underline">
            Learn More
          </span>
          <span>
            <FaLongArrowAltRight className="inline-block text-orange-500" />
          </span>
        </div>
      </div>
      <div className="h-auto border bg-[url('/22_FRD.jpg')] bg-center bg-cover"></div>
    </section>
  );
}
