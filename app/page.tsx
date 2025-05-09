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
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("academic");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img1.jpeg"
            alt="Hero background"
            fill
            className="object-cover brightness-[0.6]"
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
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button
              size="lg"
              variant="default"
              className="bg-pink-600 text-white hover:bg-pink-700"
              asChild
            >
              <Link href="/marma-therapy">Marma Therapy</Link>
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
                icon: <BookOpenText className="h-8 w-8 text-pink-600" />,
                title: "Specialized Certificate Courses",
                description:
                  "Courses in Marma Therapy, Flower Therapy, Remediation & more.",
                image:
                  "https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg",
                link: "/courses",
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

      {/* Academic Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Academic Excellence
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our comprehensive range of academic programs caters to various
            educational and professional needs
          </p>

          <div className="mb-10 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab("academic")}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  activeTab === "academic"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Degrees & Diplomas
              </button>
              <button
                onClick={() => setActiveTab("certificate")}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === "certificate"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Certificate Courses
              </button>
              <button
                onClick={() => setActiveTab("special")}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  activeTab === "special"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                Specialized Training
              </button>
            </div>
          </div>

          {activeTab === "academic" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-pink-600" />,
                  title: "Master of Science",
                  subtitle: "Counseling & Psychotherapy",
                  description:
                    "Advanced degree focusing on professional counseling techniques and psychotherapeutic approaches.",
                },
                {
                  icon: <Scroll className="h-8 w-8 text-pink-600" />,
                  title: "Post Graduate Diploma",
                  subtitle: "Psychological Counseling (PGDPC)",
                  description:
                    "Specialized diploma from Institute for Psychotherapy & Management Sciences, Mumbai.",
                },
                {
                  icon: <GraduationCap className="h-8 w-8 text-pink-600" />,
                  title: "Bachelor of Home Science",
                  subtitle: "Nutrition & Dietetics",
                  description:
                    "SNDT Pune, 1990 Batch - Understanding the fundamental connection between nutrition and wellbeing.",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-3 bg-pink-50 rounded-full w-fit mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
                  <p className="text-pink-600 font-medium mb-3">
                    {course.subtitle}
                  </p>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "certificate" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Bach Flower Remedies",
                  description:
                    "Natural healing system using flower essences to treat emotional imbalances.",
                },
                {
                  title: "Advanced Remediation Techniques",
                  description:
                    "For children with learning difficulties, focusing on personalized intervention strategies.",
                },
                {
                  title: "Teaching of Primary School Mathematics",
                  description:
                    "Methodologies for effective math education in primary schools.",
                },
                {
                  title: "English Teaching",
                  description:
                    "Modern approaches to language education and literacy development.",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-5 hover:shadow-md transition-all duration-300 border-l-4 border-pink-500"
                >
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm">{course.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "special" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <HandMetal className="h-6 w-6 text-pink-600" />,
                  title: "Marma Therapy",
                  description:
                    "International Marma Therapy Treatment Programme by Maha Mrityunjay Mission, Haridwar",
                },
                {
                  icon: <BookOpenText className="h-6 w-6 text-pink-600" />,
                  title: "Handwriting Analysis",
                  description:
                    "Graphology techniques to understand personality traits and psychological patterns",
                },
                {
                  icon: <Brain className="h-6 w-6 text-pink-600" />,
                  title: "Montessori Teachers Training",
                  description:
                    "Child-centered educational approach focusing on independence and natural development",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 flex"
                >
                  <div className="p-2 bg-pink-50 rounded-full h-fit mr-4">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {course.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Button
              variant="default"
              className="bg-pink-600 hover:bg-pink-700 text-white"
              asChild
            >
              <Link href="/courses">
                View All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Professional Experience
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our expertise spans across various institutions and organizations,
            providing specialized counseling and therapy services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    "Facing Corona Situation - Velhe village residents & government officials (through Raintree Foundation & Sigmund Freud Mental Health Institute, Pune)",
                    "LeadNow - Restart program for HSBC women staff returning to the workforce",
                    "Tata Motors - Women's Day Special Program on Stress Management",
                    "Avinash Cargo Pvt. Ltd. Managers (Women Staff at HQ, Satara)",
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
                    "Self Marma Therapy Session (Monthly Session)",
                    "Space Foundation (Weekly Session with Special Needs Persons)",
                    "CID Mumbai Police Staff Welfare Society, Dadar, Mumbai",
                    "WIMA, Pune",
                    "Rotary Club (Downtown), Pune",
                    "Avinash Cargo Pvt. Ltd. (All India Managerial Staff)",
                  ].map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-pink-600 font-bold mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
                    "Tanushree Garbha Sanskar Kendra, Sanghvi, Pune (Every quarter)",
                    "Jingle Bells Nursery School, Sahakarnagar, Pune",
                    "Vibgyor, Magarpatta, Pune",
                    "Fun & Learn School, Dhankawadi, Pune",
                  ],
                },
                {
                  title: "Study Skills Workshop",
                  locations: [
                    "Kavach (Nurturing Minds Charitable Trust, Mumbai)",
                    "Darode Jog High School (PMC School)",
                    "City International School, Pune-Satara Road",
                    "Rajiv Gandhi eLearning School",
                  ],
                },
                {
                  title: "Sex Education",
                  locations: [
                    "Conducting Sexuality Awareness Program",
                    "Distribution of Personal Hygiene Kits",
                    "Programs for girls from economically weaker sections",
                    "Teacher training workshops",
                  ],
                },
                {
                  title: "Career Guidance",
                  locations: [
                    "Aptitude testing for high school students",
                    "Career counseling sessions",
                    "Personality development workshops",
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The sessions with Mrs. Khandekar helped me overcome deep emotional stress. Her flower therapy is miraculous!",
                author: "Neha P.",
                role: "Working Professional",
                image:
                  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
              },
              {
                quote:
                  "My child's handwriting and focus have improved drastically. Truly grateful for their teaching techniques!",
                author: "Ravi T.",
                role: "Parent",
                image:
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
              },
              {
                quote:
                  "The Marma Therapy sessions completely transformed my approach to stress management. I feel more centered and balanced.",
                author: "Priya M.",
                role: "IT Professional",
                image:
                  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
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
