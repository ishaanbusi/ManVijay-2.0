"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Calendar, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = { type: "success" | "error"; message: string } | null;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  // Replace this with your actual Google Apps Script web app url
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwTKC7UdlofDRreodlLY6vvJgCnnqas7NMqIF6XBWpLoEa1IbN159G-8ScMs7JSNB62Vg/exec";

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative h-64 sm:h-80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img8.jpeg"
            alt="Contact banner"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-md ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="+91 99229 31264"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="">Select a service</option>
                    <option value="counseling">
                      Psychotherapy & Counseling
                    </option>
                    <option value="marma">Marma Therapy</option>
                    <option value="flower">Bach Flower Remedies</option>
                    <option value="remediation">Advanced Remediation</option>
                    <option value="career">Career & Aptitude Testing</option>
                    <option value="parenting">Parenting Workshop</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Tell us how we can help you..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Map */}
              <div className="relative rounded-lg overflow-hidden shadow-lg h-64 sm:h-80">
                {/* Background Image */}
                <Image
                  src="/map.jpeg"
                  alt="Office location"
                  fill
                  className="object-cover"
                />

                {/* Overlay for map iframe */}
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.7614482456183!2d73.870499975191!3d18.4944616825941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI5JzQwLjEiTiA3M8KwNTInMjMuMSJF!5e0!3m2!1sen!2sin!4v1748925503218!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  ></iframe>

                  {/* CTA Button */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <Link
                      href="https://maps.google.com/?q=B-11,+Chandranagari,+459+Salisbury+Post,+Iravati+Karve+Marg,+Pune+411037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white rounded-md shadow-md text-gray-800 font-medium hover:bg-gray-100 transition"
                    >
                      View on Google Maps
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="p-2 bg-pink-50 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Office Address
                      </h4>
                      <p className="text-gray-600 mt-1">
                        B-11, Chandranagari, 459 Salisbury Post
                        <br />
                        Opp Salisbury Post office, Iravati Karve Marg
                        <br />
                        Pune 411037, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-pink-50 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Phone Number
                      </h4>
                      <p className="text-gray-600 mt-1">
                        <Link
                          href="tel:+919922931264"
                          className="hover:text-pink-600"
                        >
                          +91 99229 31264
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-pink-50 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Email Address
                      </h4>
                      <p className="text-gray-600 mt-1">
                        <Link
                          href="mailto:pratima@manvijay.com"
                          className="hover:text-pink-600"
                        >
                          pratima@manvijay.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-2 bg-pink-50 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Working Hours
                      </h4>
                      <p className="text-gray-600 mt-1">
                        Monday - Sunday: 10:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">
                  What should I expect during my first appointment?
                </h3>
                <p className="text-gray-600">
                  Your first session will be an assessment where we discuss your
                  concerns, history, and goals. This helps us create a
                  personalized treatment plan tailored to your specific needs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">
                  How long are therapy sessions?
                </h3>
                <p className="text-gray-600">
                  Most therapy sessions last approximately 50 minutes, though
                  initial consultations may be longer. The frequency of sessions
                  depends on your individual needs and treatment plan.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Do you accept insurance?
                </h3>
                <p className="text-gray-600">
                  We work with several insurance providers. Please contact our
                  office with your insurance details, and we&apos;ll verify your
                  coverage before your appointment.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-2">
                  Can I switch therapists if needed?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We understand the importance of a good
                  client-therapist fit. If you feel you&apos;d work better with
                  another provider, please let us know and we&apos;ll facilitate
                  the transition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-white text-lg mb-8">
            Our team of experienced therapists is here to support you. Take the
            first step toward positive change today.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-pink-600 hover:bg-gray-100">
              Call Us Now
            </Button>
            <Link href="/services">
              <Button className="bg-transparent border border-white text-white hover:bg-pink-700">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
