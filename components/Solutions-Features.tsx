"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Features {
  icon: string;
  feature: string;
}

interface SolutionFeaturesProps {
  title: string;
  description?: string;
  data: Features[];
}

export default function SolutionFeatures({
  title,
  description,
  data,
}: SolutionFeaturesProps) {
  return (
    <section className="py-16 px-6 md:px-14 text-center flex flex-col items-center">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1D1A4E]">
          {title}
        </h2>
        {description && (
          <p className="text-lg max-w-4xl mx-auto text-gray-700">
            {description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <Card className="bg-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-sm">
              <CardContent className="flex items-center justify-center h-25 gap-4 text-center py-6">
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3"
                >
                  <Image
                    src={item.icon}
                    alt={item.feature}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                  <h3 className="text-lg font-semibold text-[#1D1A4E]">
                    {item.feature}
                  </h3>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
