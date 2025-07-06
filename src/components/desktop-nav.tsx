import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
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

  return (
    <nav className="max-w-7xl px-4 mx-auto hidden lg:block">
      <Link href="/" className="block mb-2">
        <Image src="/logo.png" alt="logo" height={150} width={250} />
      </Link>
      <ul className="flex items-center">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="inline-block relative group px-3  cursor-pointer py-3 text-[1rem] font-semibold hover:bg-white hover:text-[#21292f]"
          >
            <div className="h-1 w-[90%] absolute hidden group-hover:block inset-0 z-50 top-12 bg-gray-300 mx-auto"></div>
            <span className="px-1">{item.name}</span>

            <ul className="bg-white absolute top-10 z-50 left-0 py-2 hidden group-hover:block shadow-lg mt-2 w-[240px]">
              {item.sublinks.map((sublink, subIndex) => (
                <li
                  key={subIndex}
                  className="font-semibold  text-gray-900 hover:bg-gray-100 px-4 py-2"
                >
                  <Link href={item.link ? item.link : "#"} className="block">
                    {sublink}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
