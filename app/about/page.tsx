import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative h-64 sm:h-80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img3.jpeg"
            alt="About banner"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Our Mission & Vision
              </h2>
              <p className="text-gray-600 mb-4">
                We are dedicated to transforming lives through a blend of
                traditional wisdom and modern therapeutic approaches. Our
                mission is to provide holistic solutions that address the
                complete well-being of individuals - mental, emotional, and
                educational.
              </p>
              <p className="text-gray-600 mb-4">
                With over three decades of experience in counseling, alternative
                therapies, and educational methodologies, we strive to create
                personalized paths to wellness and growth for each individual we
                serve.
              </p>
              <p className="text-gray-700 font-medium">
                Our vision is a world where everyone has access to the tools,
                knowledge, and support needed to achieve their full potential
                and live balanced, fulfilled lives.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/img5.jpeg"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the Founder
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-1">
              <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden shadow-xl mx-auto max-w-sm">
                <Image
                  src="/img4.jpeg"
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Mrs. Khandekar
              </h3>
              <p className="text-gray-600 mb-6">
                With a Master of Science in Counseling & Psychotherapy and
                specialized training in various therapeutic modalities, Mrs.
                Khandekar brings a wealth of knowledge and experience to her
                practice. Her journey began with a Bachelor of Home Science in
                Nutrition & Dietetics from SNDT Pune (1990 Batch), and has since
                expanded to encompass a wide range of healing and educational
                methodologies.
              </p>
              <p className="text-gray-600 mb-6">
                Her expertise in Marma Therapy, Bach Flower Remedies, and
                Graphology has helped countless individuals overcome personal
                challenges and find balance in their lives. As a certified
                Montessori teacher and expert in remediation techniques for
                children with learning difficulties, she has also made
                significant contributions to the field of education.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-pink-100 rounded-full">
                    <Clock className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">30+ Years</h4>
                    <p className="text-sm text-gray-600">
                      Of professional experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-pink-100 rounded-full">
                    <Users className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">5000+</h4>
                    <p className="text-sm text-gray-600">Clients served</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-pink-100 rounded-full">
                    <Award className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Multiple Certifications
                    </h4>
                    <p className="text-sm text-gray-600">
                      In specialized therapies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 p-2 bg-pink-100 rounded-full">
                    <Globe className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      International Training
                    </h4>
                    <p className="text-sm text-gray-600">
                      In advanced methodologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Educational Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-pink-700 border-b pb-2">
                Degrees & Post Graduation
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>Master of Science – Counseling & Psychotherapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>
                    Post Graduate Diploma in Psychological Counseling (PGDPC) –
                    Institute for Psychotherapy & Management Sciences, Mumbai
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>
                    Bachelor of Home Science – Nutrition & Dietetics (SNDT Pune,
                    1990 Batch)
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-pink-700 border-b pb-2">
                Specialized Certifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>Bach Flower Remedies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>
                    Marma Therapy – International Marma Therapy Treatment
                    Programme by Maha Mrityunjay Mission, Haridwar
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>Handwriting Analysis (Graphology)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>
                    Advance Remediation Techniques For Children With Learning
                    Difficulties
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>Montessori Teachers Training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 font-bold mr-2">•</span>
                  <span>Teaching of Primary School Mathematics & English</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="default"
              className="bg-pink-600 hover:bg-pink-700 text-white"
              asChild
            >
              <Link href="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
