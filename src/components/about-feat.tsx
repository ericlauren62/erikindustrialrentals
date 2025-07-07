"use client";

import { Users, Globe, Award, TrendingUp } from "lucide-react";
import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export default function AboutFeature() {
  const executives = [
    {
      name: "Donald Erik",
      role: "Chief Executive Officer & President",
      image: "/ceo.jpg",
      bio: "Donald has over decades of experience in the equipment rental industry and has been leading Erik industrial & Construction Rentals since 2008.",
    },
    {
      name: "Jessica Graziano",
      role: "Chief Financial Officer",
      image: "/ceo-lady.jpg",
      bio: "Jessica brings extensive financial expertise and strategic leadership to drive Erik industrial & Construction Rentals' continued growth.",
    },
    {
      name: "Dean S. Erik",
      role: "Chairman of the Board",
      image: "/ceo3.jpg",
      bio: "Dean provides strategic oversight and governance leadership with decades of industry experience.",
    },
  ];

  const stats = [
    { icon: Users, value: "21,000+", label: "Team Members" },
    { icon: Globe, value: "1,400+", label: "Locations" },
    { icon: Award, value: "75+", label: "Years of Excellence" },
    { icon: TrendingUp, value: "$10B+", label: "Annual Revenue" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        <section className="relative bg-[#0f1432] text-white overflow-hidden">
          <Image src="/about.jpg" fill alt="" className="object-cover opacity-20" />
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                About Erik industrial & Construction Rentals
              </h1>
              <p className="lg:text-xl mb-8 leading-relaxed">
                North America&apos;s largest equipment rental company, serving construction,
                industrial, and specialty markets with unmatched expertise and innovation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                The industry’s largest rental partner
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Erik industrial & Construction Rentals, Inc. is the largest equipment rental
                    company in the world. The company has an integrated network of 1,520 rental
                    locations in North America, 38 in Europe, 23 in Australia and 19 in New Zealand.
                    In North America, the company operates in 49 states and every Canadian province.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    The company’s approximately 26,650 employees serve construction and industrial
                    customers, utilities, municipalities, homeowners and others. The company offers
                    approximately 4,800 classes of equipment for rent with a total original cost of
                    $20.59 billion.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Erik industrial & Construction Rentals is a member of the Standard & Poor’s 500
                    Index, the Barron’s 400 Index and the Russell 3000 Index® and is headquartered
                    in Stamford, Conn. Additional information about Erik industrial & Construction
                    Rentals is available at unitedrentals.com.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="/Hero-Construction-Equipment.jpeg"
                    alt="Erik industrial & Construction Rentals company history and growth timeline"
                    className="rounded-lg shadow-lg"
                    height={550}
                    width={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Our Leadership Team
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Meet the experienced leaders who guide Erik industrial & Construction Rentals&apos;
                strategic vision and operational excellence across North America.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {executives.map((executive, index) => (
                  <Card
                    key={index}
                    className="p-0 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-90 w-full">
                      <Image
                        src={executive.image || "/placeholder.svg"}
                        alt={`${executive.name}, ${executive.role} at Erik industrial & Construction Rentals`}
                        className="object-cover object-center absolute inset-0"
                        fill
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{executive.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{executive.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{executive.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Safety First</h3>
                  <p className="text-gray-600">
                    Safety is our top priority. We maintain the highest standards to protect our
                    team members and customers.
                  </p>
                </Card>

                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
                  <p className="text-gray-600">
                    We&apos;re committed to understanding and exceeding our customers&apos;
                    expectations in everything we do.
                  </p>
                </Card>

                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously innovate to provide better solutions and drive industry
                    advancement.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
