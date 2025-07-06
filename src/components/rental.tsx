import { Card, CardContent } from "./ui/card";

export default function Rental() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-bold text-gray-500 mb-2 uppercase">
            Erik industrial & Construction Rentals DIGITAL TOOLS
          </p>
          <h2 className="text-3xl xl:text-[2.5rem] lg:max-w-[70%] text-[#21292f] mx-auto font-bold">
            Tools that understand the human side of hard work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-0 border-slate-300">
            <CardContent className="p-0 ">
              <div className="h-[200px] bg-[url('/mobile-app.png')] bg-cover bg-center rounded-t-[12px]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[1.35rem] text-gray-900 mb-2">
                  Erik industrial & Construction Rentals Mobile App
                </h3>
                <p className="text-sm text-gray-600">
                  Complete job site tasks quickly. We help manage the entire worksite with a tap.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-0 border-slate-300">
            <CardContent className="p-0">
              <div className="h-[200px] bg-[url('/digital.jpg')] bg-cover bg-center rounded-t-[12px]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[1.35rem] text-gray-900 mb-2">
                  Digital Payment Options
                </h3>
                <p className="text-sm text-gray-600">
                  Options to help streamline operations so you can focus on what matters.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-0 border-slate-300">
            <CardContent className="p-0">
              <div className="h-[200px] bg-[url('/control.png')] bg-cover bg-center rounded-t-[12px]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[1.35rem] text-gray-900 mb-2">Total Control®</h3>
                <p className="text-sm text-gray-600">
                  Fleet Total Control comes with a custom dashboard that puts all your work - all in
                  one place.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-0 border-slate-300">
            <CardContent className="p-0">
              <div className="h-[200px] bg-[url('/notification.jpg')] bg-cover bg-center rounded-t-[12px]"></div>
              <div className="p-4">
                <h3 className="font-bold text-[1.35rem] text-gray-900 mb-2">Notifications</h3>
                <p className="text-sm text-gray-600">
                  Stay in the know and in control with notifications from Erik industrial &
                  Construction Rentals.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
