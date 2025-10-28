"use client";

import { Button } from "@/components/ui/button";
import { VoIP_SOLUTIONS_FEATURES } from "@/constants/index";
import { VOIP_SOLUTIONS_SERVICES } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";

export default function VoIPSolutionsPage() {
  return (
    <>
      <section className="bg-[#030039] text-white py-16 md:py-24 px-6 md:px-16 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-full mx-auto">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-5xl sm:text-6xl md:text-5xl font-bold leading-snug">
              Enterprise VoIP Solutions
            </h2>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
              Comprehensive telephony solutions built on industry-leading
              platforms. Transform your communication infrastructure with our
              expert VoIP services.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link href="/contact-us">
                <Button className="bg-white text-black text-base md:text-lg rounded-sm px-12 py-8 transform transition-transform duration-300 hover:bg-white hover:-translate-y-1">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/VoIP-solutions.webp"
              alt="Enterprise VoIP Solutions"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Why Choose Our VoIP Startup?
          </h2>
          <p className="text-md md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            We combine startup innovation with specialized VoIP expertise to
            deliver exceptional results.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VoIP_SOLUTIONS_FEATURES.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                className="flex"
              >
                <Card
                  className=" flex flex-col justify-between items-center text-center p-8 w-full rounded-2xl shadow-sm 
                  hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-white"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-center transition-all duration-300">
                      {item.icon}
                    </div>
                    <CardContent className="p-0 flex flex-col grow">
                      <h3 className="text-lg font-extrabold text-gray-900 mb-3 tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed grow">
                        {item.desc}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Our VoIP Services
          </h2>
          <p className="text-md md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Specialized expertise in leading VoIP platforms and technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
            {VOIP_SOLUTIONS_SERVICES.map((service, idx) => {
              const isLast = idx === VOIP_SOLUTIONS_SERVICES.length - 1;
              const fromLeft = idx % 2 === 0 && !isLast;

              const initialAnim = isLast
                ? { opacity: 0, y: 80 }
                : fromLeft
                ? { opacity: 0, x: -80 }
                : { opacity: 0, x: 80 };

              return (
                <motion.div
                  key={idx}
                  initial={initialAnim}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                  className={`w-full h-full ${
                    isLast ? "md:col-span-2 md:w-2/4" : "md:w-full"
                  }`}
                >
                  <Card className="flex flex-col justify-between h-full text-left p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div>
                      <div className="flex items-center gap-5 mb-6">
                        <div className="scale-125 text-blue-600">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {service.title}
                          </h3>
                          {service.desc && (
                            <p className="text-gray-600 text-sm mt-1">
                              {service.desc}
                            </p>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-0">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3">
                          Services Offered:
                        </h4>
                        <ul className="text-gray-700 mb-6 space-y-2">
                          {service.services.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="shrink-0 mt-0.5">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-100">
                                  <Check className="w-3 h-3 text-green-600" />
                                </div>
                              </div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {service.commonUseCases && (
                          <div>
                            <h4 className="text-sm font-semibold text-gray-800 mb-3">
                              Common Use Cases:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {service.commonUseCases.map((useCase, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm"
                                >
                                  {useCase}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {service.cta && service.cta.length > 0 && (
                          <div className="flex flex-wrap gap-3 pt-8">
                            {service.cta.map((link, i) => (
                              <Link key={i} href={link.href}>
                                <Button
                                  variant={i === 0 ? "default" : "outline"}
                                  className={`${
                                    i === 0
                                      ? "bg-blue-600 text-white hover:bg-blue-700"
                                      : "border-blue-600 text-blue-600 hover:bg-blue-50"
                                  }`}
                                >
                                  {link.label}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Key Features & Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md md:text-lg text-gray-500 mb-14 max-w-2xl mx-auto"
          >
            Advanced features that set our VoIP solutions apart from the competition.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-5 text-left">
            {[
              "High Availability & Redundancy",
              "Scalable Architecture",
              "Real-time Analytics & Reporting",
              "Advanced Call Routing",
              "Multi-protocol Support",
              "Web-based Management Interface",
              "Mobile Integration",
              "API Integration",
              "Fraud Detection & Prevention",
              "Quality of Service (QoS) Management",
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-800 text-base md:text-lg font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
          >
            Implementation Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md md:text-lg text-gray-500 mb-16 max-w-2xl mx-auto"
          >
            Our proven methodology ensures smooth deployment and optimal performance.
          </motion.p>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-20">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                desc: "Comprehensive assessment of your communication needs and infrastructure.",
              },
              {
                step: "02",
                title: "System Design",
                desc: "Tailored architecture optimized for your specific business goals.",
              },
              {
                step: "03",
                title: "Deployment & Testing",
                desc: "Reliable setup with performance testing and quality assurance.",
              },
              {
                step: "04",
                title: "Training & Support",
                desc: "End-user training and continuous technical support for smooth operation.",
              },
            ].map((item, idx, arr) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="w-16 h-16 rounded-full bg-linear-to-r from-blue-600 to-blue-400 text-white flex items-center justify-center text-lg font-bold mb-5 shadow-md"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm max-w-xs">{item.desc}</p>

                {idx !== arr.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="hidden md:block absolute right-[-30px] top-8"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="url(#arrowGradient)"
                      className="w-8 h-8"
                    >
                      <defs>
                        <linearGradient
                          id="arrowGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#2563EB" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h13m0 0l-4-4m4 4l-4 4"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 bg-gray-50 py-10 rounded-2xl shadow-inner">
            {[
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "60%", label: "Cost Reduction" },
              { value: "24/7", label: "Technical Support" },
              { value: "100+", label: "Concurrent Calls" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <p className="text-3xl font-extrabold text-blue-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Transform Your Communications?
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Contact our VoIP experts to discuss your requirements and get a customized solution proposal.
          </p>

          <Link href="/contact-us">
            <Button
              size="lg"
              className="
              bg-blue-600 text-white font-semibold rounded-full px-8 py-6
              hover:bg-blue-700 hover:scale-105 transition-all duration-300
              flex items-center gap-2 mx-auto shadow-md hover:shadow-lg
            "
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
