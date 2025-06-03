"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HeartPulse,
  BookOpenText,
  GraduationCap,
  Award,
  Users,
  Briefcase,
  Scroll,
  Brain,
  HandMetal,
  PenTool,
  Music,
  Heart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img1.jpeg"
            alt="Hero background"
            fill
            className="object-cover object-top brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transforming Lives Through Holistic Therapy & Education
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Empowering individuals through counseling, alternative therapies,
            and specialized education to achieve mental, emotional, and academic
            well-being.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-gray-900 hover:bg-gray-100"
              asChild
            >
              <Link href="/contact">Book a Session</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-gray-900 hover:bg-gray-100"
              asChild
            >
              <Link href="/blog">Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <HeartPulse className="h-8 w-8 text-pink-600" />,
                title: "Psychotherapy & Counseling",
                description:
                  "Professional support for emotional well-being, stress management, and life challenges.",
                image:
                  "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
                link: "/counseling",
              },
              {
                icon: <Users className="h-8 w-8 text-pink-600" />,
                title: "Group Sessions",
                description:
                  "Collaborative healing experiences in supportive group environments for shared growth.",
                image:
                  "https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg",
                link: "/group-sessions",
              },
              {
                icon: <Music className="h-8 w-8 text-pink-600" />,
                title: "Sound Healing",
                description:
                  "Therapeutic use of sound frequencies and vibrations to promote deep relaxation and healing.",
                image:
                  "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
                link: "/sound-healing",
              },
              {
                icon: <HandMetal className="h-8 w-8 text-pink-600" />,
                title: "Marma Therapy",
                description:
                  "Ancient healing technique focusing on vital energy points for physical and mental wellness.",
                image:
                  "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
                link: "/marma-therapy",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                </div>
                <div className="relative p-6 h-full flex flex-col justify-end text-white">
                  <div className="mb-4 p-3 bg-white/10 rounded-full w-fit backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="text-white font-medium flex items-center hover:underline mt-auto"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our expertise spans across various institutions and organizations,
            providing specialized counseling and therapy services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Counseling Experience */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-pink-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Users className="mr-2 h-5 w-5" /> Counseling Experience
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "Facing Corona Situation - Velhe village residents & government officials",
                    "LeadNow - Restart program for HSBC women staff",
                    "Tata Motors - Women's Day Special Program",
                    "Avinash Cargo Pvt. Ltd. Managers",
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-pink-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Marma Therapy Experience */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pink-700 to-pink-500 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <HandMetal className="mr-2 h-5 w-5" /> Marma Therapy Sessions
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "Self Marma Therapy Session (Monthly)",
                    "Space Foundation (Weekly Sessions)",
                    "CID Mumbai Police Staff Welfare Society",
                    "WIMA, Pune",
                    "Rotary Club (Downtown), Pune",
                    "Avinash Cargo Pvt. Ltd.",
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-pink-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Handwriting Analysis */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <PenTool className="mr-2 h-5 w-5" /> Handwriting Analysis
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "Personality Assessment Sessions",
                    "Career Guidance Programs",
                    "Child Development Analysis",
                    "Corporate Team Building",
                    "Educational Institutions",
                    "Private Consultations",
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sound Healing Therapy */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-purple-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Music className="mr-2 h-5 w-5" /> Sound Healing Therapy
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "Tibetan Singing Bowl Sessions",
                    "Crystal Bowl Healing",
                    "Meditation Centers",
                    "Wellness Retreats",
                    "Stress Relief Workshops",
                    "Corporate Wellness Programs",
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-purple-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Angel Healing Therapy */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Heart className="mr-2 h-5 w-5" /> Angel Healing Therapy
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    "Spiritual Healing Sessions",
                    "Chakra Balancing",
                    "Energy Cleansing",
                    "Emotional Release Work",
                    "Guidance & Protection",
                    "Distance Healing",
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Address & Contact */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-700 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <MapPin className="mr-2 h-5 w-5" /> Address & Contact
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-orange-600 mr-2 mt-1" />
                    <div>
                      <p className="font-semibold">Clinic Address</p>
                      <p className="text-gray-700">Thane, Maharashtra, India</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-orange-600 mr-2 mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-700">Available on request</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-orange-600 mr-2 mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-700">Contact through website</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    asChild
                  >
                    <Link href="/contact">Get Directions</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">
              Parenting & Educational Workshops
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Parenting Workshops",
                  locations: [
                    "Tanushree Garbha Sanskar Kendra, Pune",
                    "Jingle Bells Nursery School, Pune",
                    "Vibgyor, Magarpatta, Pune",
                    "Fun & Learn School, Dhankawadi, Pune",
                  ],
                },
                {
                  title: "Study Skills Workshop",
                  locations: [
                    "Kavach (Nurturing Minds Trust, Mumbai)",
                    "Darode Jog High School (PMC School)",
                    "City International School, Pune",
                    "Rajiv Gandhi eLearning School",
                  ],
                },
                {
                  title: "Sex Education",
                  locations: [
                    "Sexuality Awareness Programs",
                    "Personal Hygiene Kit Distribution",
                    "Programs for underprivileged girls",
                    "Teacher training workshops",
                  ],
                },
                {
                  title: "Career Guidance",
                  locations: [
                    "Aptitude testing for students",
                    "Career counseling sessions",
                    "Personality development",
                    "Professional growth seminars",
                  ],
                },
              ].map((workshop, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-duration-300"
                >
                  <h4 className="font-semibold text-lg mb-3 text-pink-700">
                    {workshop.title}
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    {workshop.locations.map((location, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-pink-500 mr-2">→</span>
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The sessions with Mrs. Khandekar helped me overcome deep emotional stress. Her flower therapy is miraculous!",
                author: "Priya Sharma",
                role: "Working Professional",
                image:
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
              },
              {
                quote:
                  "My child's handwriting and focus have improved drastically. Truly grateful for their teaching techniques!",
                author: "Rajesh Patel",
                role: "Parent",
                image:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
              },
              {
                quote:
                  "The Marma Therapy sessions completely transformed my approach to stress management. I feel more centered and balanced.",
                author: "Anjali Mehta",
                role: "IT Professional",
                image:
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
              },
              {
                quote:
                  "Sound healing therapy helped me find inner peace after years of anxiety. The experience was truly transformative.",
                author: "Vikram Singh",
                role: "Business Owner",
                image:
                  "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
              },
              {
                quote:
                  "The handwriting analysis session gave me incredible insights into my personality. It was eye-opening!",
                author: "Kavita Desai",
                role: "Teacher",
                image:
                  "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg",
              },
              {
                quote:
                  "Angel healing therapy brought such positive energy into my life. I feel blessed and protected.",
                author: "Arjun Gupta",
                role: "Artist",
                image:
                  "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img2.jpeg"
            alt="CTA background"
            fill
            className="object-cover brightness-[0.5]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Begin Your Healing Journey
          </h2>
          <p className="text-xl mb-8">
            Reach out today to schedule a session, enroll in a course, or learn
            more about our specialized therapies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
              asChild
            >
              <Link href="/contact">
                Contact Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-pink-600 text-white hover:bg-pink-700"
              asChild
            >
              <Link href="/courses">
                Explore All Courses <GraduationCap className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
