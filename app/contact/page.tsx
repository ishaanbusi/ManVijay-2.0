import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Calendar, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
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
              <form className="space-y-6">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="John Doe"
                      required
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="your@email.com"
                      required
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="+91 99229 31264"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    required
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80">
                <div className="relative w-full h-full">
                  <Image
                    src="/map.jpeg"
                    alt="Office location map"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.7614482456183!2d73.870499975191!3d18.4944616825941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI5JzQwLjEiTiA3M8KwNTInMjMuMSJF!5e0!3m2!1sen!2sin!4v1748925503218!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <Link
                      href="https://maps.google.com/?q=B-11,+Chandranagari,+459+Salisbury+Post,+Iravati+Karve+Marg,+Pune+411037"
                      className="px-4 py-2 bg-white rounded-md shadow-md text-gray-700 font-medium hover:bg-gray-50"
                      target="_blank"
                      rel="noopener noreferrer"
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

              {/* Book Appointment */}
              {/* <div className="bg-pink-50 rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-pink-600 mr-2" />
                  <h3 className="text-xl font-semibold">Book an Appointment</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Ready to begin your wellness journey? Schedule a consultation
                  with our experts today.
                </p>
                <Link href="/appointments">
                  <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    Schedule Now
                  </Button>
                </Link>
              </div> */}
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
