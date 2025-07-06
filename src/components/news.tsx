export default function News() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <p className="font-bold text-gray-600 mb-2">COMPANY</p>
          <h2 className="text-4xl font-bold text-gray-900">Stay up on the latest news</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-58 border overflow-hidden relative flex flex-col justify-end pb-8 px-8 text-white bg-center bg-cover rounded-lg bg-[url('/UR-Construction-Site-01.jpg')]">
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>
            <div className="z-10">
              <h3 className="text-lg font-bold"> PROJECT UPTIME BLOG</h3>
              <h4 className="font-bold mb-2 text-lg">
                11 Processes and Protocols that Boost Construction Safety
              </h4>
              <p className="text-sm">Jun 30, 2025</p>
            </div>
          </div>
          <div className="h-58 border overflow-hidden relative flex flex-col justify-end pb-8 px-8 text-white bg-center bg-cover rounded-lg bg-[url('/Temporary-Fence-Project-Uptime.jpg')]">
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>
            <div className="z-10">
              <h3 className="text-lg font-bold"> PROJECT UPTIME BLOG</h3>
              <h4 className="font-bold mb-2 text-lg">
                How to Choose Temporary Event Fencing for Crowd Control
              </h4>
              <p className="text-sm">Jun 25, 2025</p>
            </div>
          </div>
          <div className="h-58 border overflow-hidden relative flex flex-col justify-end pb-8 px-8 text-white bg-center bg-cover rounded-lg bg-[url('/Industrial-Tent-HVAC.JPG')]">
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>
            <div className="z-10">
              <h3 className="text-lg font-bold"> PROJECT UPTIME BLOG</h3>
              <h4 className="font-bold mb-2 text-lg">
                How to Keep Construction Workers Cool in Summer Heat
              </h4>
              <p className="text-sm">Jun 25, 2025</p>
            </div>
          </div>
          <div className="h-58 border overflow-hidden relative flex flex-col justify-end pb-8 px-8 text-white bg-center bg-cover rounded-lg bg-[url('/Mobile-Office-Hero.jpg')]">
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full"></div>
            <div className="z-10">
              <h3 className="text-lg font-bold"> PROJECT UPTIME BLOG</h3>
              <h4 className="font-bold mb-2 text-lg">
                Mobile Office Accessories: Introducing Workplace Ready Solutions
              </h4>
              <p className="text-sm">May 29, 2025</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="lg:flex justify-center space-y-3 space-x-8 text-sm">
            <button className="font-semibold text-base">More:</button>
            <button className="text-custom-blue font-semibold cursor-pointer hover:text-black hover:underline">
              Press Releases
            </button>
            <button className="text-custom-blue font-semibold cursor-pointer hover:text-black hover:underline">
              Investor Press Releases
            </button>
            <button className="text-custom-blue font-semibold cursor-pointer hover:text-black hover:underline">
              In the News
            </button>
            <button className="text-custom-blue font-semibold cursor-pointer hover:text-black hover:underline">
              Project Uptime
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
