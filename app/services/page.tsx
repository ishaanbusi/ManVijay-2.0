import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HeartPulse,
  HandMetal,
  Brain,
  BookOpenText,
  Pen,
  GraduationCap,
  Flower,
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <section className="relative h-64 sm:h-80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-banner.jpeg"
            alt="Services banner"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            Our Services
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            We offer a comprehensive range of therapeutic, educational, and
            wellness services designed to address the needs of individuals at
            various stages of life.
          </p>
          <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
        </div>
      </section>

      {/* Therapy Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Therapy & Counseling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <HeartPulse className="h-8 w-8 text-pink-600" />,
                title: "Psychotherapy & Counseling",
                description:
                  "Professional support for emotional well-being, stress management, anxiety, depression, relationship issues, and life transitions.",
                features: [
                  "Individual Therapy",
                  "Couples Counseling",
                  "Family Therapy",
                  "Grief Support",
                ],
              },
              {
                icon: <HandMetal className="h-8 w-8 text-pink-600" />,
                title: "Marma Therapy",
                description:
                  "Ancient healing technique focusing on vital energy points for physical and mental wellness, promoting balance and harmony.",
                features: [
                  "Self Marma Techniques",
                  "Group Sessions",
                  "One-on-One Therapy",
                  "Energy Balancing",
                ],
              },
              {
                icon: <Flower className="h-8 w-8 text-pink-600" />,
                title: "Bach Flower Remedies",
                description:
                  "Natural healing system using flower essences to treat emotional imbalances, stress, anxiety, and related conditions.",
                features: [
                  "Emotional Healing",
                  "Stress Reduction",
                  "Personalized Remedies",
                  "Holistic Approach",
                ],
              },
              {
                icon: <Pen className="h-8 w-8 text-pink-600" />,
                title: "Handwriting Analysis",
                description:
                  "Graphology assessment to understand personality traits, psychological patterns, and potential areas for personal development.",
                features: [
                  "Personality Assessment",
                  "Career Guidance",
                  "Compatibility Analysis",
                  "Child Development",
                ],
              },
              {
                icon: <Brain className="h-8 w-8 text-pink-600" />,
                title: "Advanced Remediation",
                description:
                  "Specialized techniques for children with learning difficulties, ADHD, dyslexia, and other educational challenges.",
                features: [
                  "Learning Assessments",
                  "Personalized Plans",
                  "Parent Guidance",
                  "School Coordination",
                ],
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-pink-600" />,
                title: "Career & Aptitude Testing",
                description:
                  "Comprehensive assessment to help students and professionals discover their strengths and best-fit career paths.",
                features: [
                  "Skill Assessment",
                  "Personality Matching",
                  "Career Mapping",
                  "Educational Guidance",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="p-3 bg-pink-50 rounded-full w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-800 mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></div>
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gradient-to-r from-pink-50 to-pink-100">
                  <Link
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-pink-600 font-medium flex items-center hover:text-pink-700"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Workshops */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Workshops & Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column */}
            <div>
              <div className="relative h-64 sm:h-72 rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src="/workshop-image.jpeg"
                  alt="Workshop session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 text-pink-600 mr-2" />
                  Parenting Workshops
                </h3>
                <p className="text-gray-600 mb-4">
                  Empowering parents with effective tools and strategies for
                  raising well-balanced, confident children. Our workshops cover
                  various aspects of parenting challenges and developmental
                  stages.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Tanushree Garbha Sanskar Kendra (Quarterly)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Jingle Bells Nursery School, Sahakarnagar
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">Vibgyor, Magarpatta</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  className="text-pink-600 border-pink-600 hover:bg-pink-50"
                  asChild
                >
                  <Link href="/workshops/parenting">
                    View Schedule <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <BookOpenText className="h-5 w-5 text-pink-600 mr-2" />
                  Study Skills & Academic Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Workshops designed to enhance learning abilities, study
                  techniques, focus, and academic performance for students of
                  all ages.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Kavach (Nurturing Minds Charitable Trust)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Darode Jog High School (PMC School)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      City International School, Pune-Satara Road
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Brain className="h-5 w-5 text-pink-600 mr-2" />
                  Sexuality Education & Awareness
                </h3>
                <p className="text-gray-600 mb-4">
                  Age-appropriate sexuality education programs for schools and
                  communities, focusing on healthy development, safety, and
                  personal hygiene.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Sexuality Awareness Programs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Distribution of Personal Hygiene Kits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Programs for economically weaker sections
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re seeking personal therapy, looking for
            educational support for your child, or interested in our specialized
            workshops, we&apos;re here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="default"
              className="bg-pink-600 hover:bg-pink-700 text-white"
              asChild
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-600 text-pink-600 hover:bg-pink-50"
              asChild
            >
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
