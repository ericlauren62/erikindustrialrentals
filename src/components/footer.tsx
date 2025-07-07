import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#000a50] text-white">
      <div className="bg-custom-blue px-6 py-4">
        <div className="flex justify-between items-center container mx-auto">
          <div className="flex items-center space-x-2">
            <span className="text-white">Français</span>
            <span className="text-white">|</span>
            <span className="text-white">Español</span>
          </div>
          <div className="flex space-x-4">
            <FaFacebook className="w-6 h-6" />
            <FaLinkedin className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaYoutube className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 pb-12">
        <div className="my-8">
          <p className="text-sm">24/7 Customer Care</p>
          <p className="font-bold">515.215.5249</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          <div>
            <h3 className="font-bold mb-4">Mobile App</h3>
            <div className="space-y-5">
              <Image
                src="/google-play-badge.png"
                alt="google play store"
                height={200}
                width={200}
              />
              <Image src="/App-AppleButton.png" alt="google play store" height={200} width={200} />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg lg:text-base mb-4">Equipment</h3>
            <ul className="space-y-5 text-base lg:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Rent Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Buy Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Great Application
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Rental Protection Plan
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  United Guard™
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Download Equipment Catalog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  GSA Contract Holder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg lg:text-base">Solutions & Services</h3>
            <ul className="space-y-5 lg:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Fuel Control
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Specialty Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Industry Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Customer Equipment Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  United Academy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg lg:text-base">Support</h3>
            <ul className="space-y-5 lg:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Find a Location
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Rental Equipment Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg lg:text-base">About Us</h3>
            <ul className="space-y-5 lg:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Corporate Fact Sheet
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Corporate Responsibility
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Culture
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Project Uptime
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg lg:text-base">Careers</h3>
            <ul className="space-y-5 lg:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Why Career & Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Military
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Search Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg lg:text-base">Investor Relations</h3>
            <ul className="space-y-5 lg:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-custom-blue">
        <div className="container mx-auto px-6 lg:px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-6 mb-4 md:mb-0">
              <span className="text-base lg:text-sm">© 2025 Erik industrial & Construction Rentals, Inc.</span>
              <Link href="#" className="hover:underline text-base lg:text-sm">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:underline text-base lg:text-sm">
                Terms of Use
              </Link>

              <Link href="#" className="hover:underline text-base lg:text-sm">
                Legal Terms and Conditions
              </Link>

              <Link href="#" className="hover:underline text-base lg:text-sm">
                Equipment Checkout
              </Link>

              <Link href="#" className="hover:underline text-base lg:text-sm">
                Branch Directory
              </Link>

              <Link href="#" className="hover:underline text-base lg:text-sm">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
