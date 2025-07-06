"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/header";
import Footer from "@/components/footer";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    stateProvince: "",
    postalCode: "",
    companyName: "",
    phoneNumber: "",
    ext: "",
    rentalAccount: "",
    replyMethod: [] as string[],
    subject: "",
    comment: "",
  });

  const handleReplyMethodChange = (method: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        replyMethod: [...prev.replyMethod, method],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        replyMethod: prev.replyMethod.filter((m) => m !== method),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.preventDefault();

    const fakePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Success");
      }, 5000);
    });

    toast.promise(fakePromise, {
      loading: "Submitting...",
      success: "Form submitted successfully!",
      error: "Something went wrong.",
    });
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Send us a Message</h2>
                  <p className="text-gray-600 italic">
                    A customer care representative will respond to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-semibold text-black">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, firstName: e.target.value }))
                        }
                        className="mt-1 border-gray-400"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-sm font-semibold text-black">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                        }
                        className="mt-1 border-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-black">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="mt-1 border-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="city" className="text-sm font-semibold text-black">
                      City
                    </Label>
                    <Input
                      id="city"
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                      className="mt-1 border-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="stateProvince" className="text-sm font-semibold text-black">
                        State/Province
                      </Label>
                      <Select
                        onValueChange={(value: string) =>
                          setFormData((prev) => ({ ...prev, stateProvince: value }))
                        }
                      >
                        <SelectTrigger className="mt-1 w-full border-gray-400">
                          <SelectValue placeholder="- Select a State/Province -" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AL">Alabama</SelectItem>
                          <SelectItem value="AK">Alaska</SelectItem>
                          <SelectItem value="AZ">Arizona</SelectItem>
                          <SelectItem value="AR">Arkansas</SelectItem>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="CO">Colorado</SelectItem>
                          <SelectItem value="CT">Connecticut</SelectItem>
                          <SelectItem value="DE">Delaware</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                          <SelectItem value="GA">Georgia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="postalCode" className="text-sm font-semibold text-black">
                        Postal/Zip Code <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="postalCode"
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, postalCode: e.target.value }))
                        }
                        className="mt-1 border-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="companyName" className="text-sm font-semibold text-black">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, companyName: e.target.value }))
                      }
                      className="mt-1 border-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phoneNumber" className="text-sm font-semibold text-black">
                        Phone Number
                      </Label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="eg. 555-555-5555"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                        }
                        className="mt-1 border-gray-400"
                      />
                    </div>

                    <div>
                      <Label htmlFor="ext" className="text-sm font-semibold text-black">
                        Ext.
                      </Label>
                      <Input
                        id="ext"
                        type="text"
                        value={formData.ext}
                        onChange={(e) => setFormData((prev) => ({ ...prev, ext: e.target.value }))}
                        className="mt-1 border-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="rentalAccount" className="text-sm font-semibold text-black">
                      Rental Account #
                    </Label>
                    <p className="text-sm text-gray-600 mb-2">
                      Have an existing rental account with Erik industrial & Construction Rentals?
                      Tell us your account number and we can better assist you.
                    </p>
                    <Input
                      id="rentalAccount"
                      type="text"
                      value={formData.rentalAccount}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, rentalAccount: e.target.value }))
                      }
                      className="mt-1 border-gray-400"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-semibold text-black">
                      How Can We Reply <span className="text-red-500">*</span>
                    </Label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="email-reply"
                          checked={formData.replyMethod.includes("email")}
                          onCheckedChange={(checked: boolean) =>
                            handleReplyMethodChange("email", checked as boolean)
                          }
                        />
                        <Label htmlFor="email-reply" className="text-sm text-black">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="phone-reply"
                          checked={formData.replyMethod.includes("phone")}
                          onCheckedChange={(checked: boolean) =>
                            handleReplyMethodChange("phone", checked as boolean)
                          }
                        />
                        <Label htmlFor="phone-reply" className="text-sm text-black">
                          Phone
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="no-reply"
                          checked={formData.replyMethod.includes("no-reply")}
                          onCheckedChange={(checked: boolean) =>
                            handleReplyMethodChange("no-reply", checked as boolean)
                          }
                        />
                        <Label htmlFor="no-reply" className="text-sm text-black">
                          No Reply Required
                        </Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-black">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        setFormData((prev) => ({ ...prev, subject: value }))
                      }
                    >
                      <SelectTrigger className="mt-1 w-full border-gray-400">
                        <SelectValue placeholder="-Select-" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="rental">Equipment Rental</SelectItem>
                        <SelectItem value="purchase">Equipment Purchase</SelectItem>
                        <SelectItem value="service">Service Request</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="comment" className="text-sm font-semibold text-black">
                      Your Comment or Question <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, comment: e.target.value }))
                      }
                      className="mt-1 min-h-32"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="bg-custom-blue hover:bg-blue-700 text-white px-12 py-6 text-base font-semibold cursor-pointer"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1 lg:flex lg:justify-end">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Info</h3>
                  <div className="space-y-2 text-black">
                    <p>100 First Stamford Place</p>
                    <p>Ste 700</p>
                    <p>Stamford, CT 06902</p>
                    <p>United States</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <p className="text-custom-blue hover:underline cursor-pointer">203.622.3131</p>
                    <p className="text-custom-blue hover:underline cursor-pointer">Contact Us</p>
                    <p className="text-custom-blue hover:underline cursor-pointer">
                      Corporate Fact Sheet
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Additional Support Options
                  </h3>
                  <div className="space-y-2">
                    <p className="text-custom-blue hover:underline cursor-pointer">
                      Credit Application
                    </p>
                    <p className="text-custom-blue hover:underline cursor-pointer">
                      Downloadable Catalogs
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage Your Account</h3>
                  <div className="space-y-2">
                    <p className="text-custom-blue hover:underline cursor-pointer">
                      Total Control Sign In
                    </p>
                    <p className="text-custom-blue hover:underline cursor-pointer">
                      UR Control Sign In
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
