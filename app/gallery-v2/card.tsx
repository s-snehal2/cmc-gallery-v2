"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CirclePlay } from "lucide-react";
import { carddata } from "./data";
import { useState } from "react";
import SmalllCard from "./smalll-card";

export type Data = {
  id: number;
  title: string;
  code?: string;
  size?: string;
  area?: string;
  req?: string;
  image: string[];
};

export default function MainCard1() {
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const imageSections = carddata.filter((d) => !d.code);
  const cardSections = carddata.filter((d) => d.code);

  const topImages = imageSections.slice(0, imageSections.length - 4);
  const bottomImages = imageSections.slice(-4);

  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 gap-2 p-2 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
        {/* --- TOP IMAGES --- */}
        {topImages.map((d) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative aspect-video overflow-hidden"
          >
            <Image
              src={d.image[0]}
              alt={d.title}
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        ))}

        {/* --- CARD SECTIONS --- */}
        {cardSections.map((d) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative"
          >
            <Card className=" bg-[#F1E2D2] rounded-md overflow-hidden ">
              {/* Small card render */}
              <AnimatePresence>
                {activeCardId === d.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0  flex justify-center items-center bg-black/40 backdrop-blur-xl z-10"
                    onClick={() => setActiveCardId(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full  p-2"
                    >
                      <SmalllCard
                        card={d}
                        onClose={() => setActiveCardId(null)}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              <CardHeader className="relative flex flex-col justify-center items-center gap-1 p-2 h-[30px] md:h-[35px] lg:h-[45px]">
                <CardTitle className="text-center text-md md:text-lg font-semibold">
                  {d.title}
                </CardTitle>

                <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 ">
                  <CirclePlay
                    className="w-5 h-5 md:w-7 md:h-7 transition-transform duration-200 hover:scale-110"
                    onClick={() =>
                      setActiveCardId((prev) => (prev === d.id ? null : d.id))
                    }
                  />
                </div>

                <div className="text-sm md:text-md text-center font-normal uppercase">
                  {d.code} | {d.size} | {d.area}
                </div>
                <div className="text-sm md:text-md text-center font-normal">
                  Req: {d.req}
                </div>
              </CardHeader>

              <CardContent className="relative aspect-video overflow-hidden">
                <Image
                  src={d.image[0]}
                  alt={d.title}
                  fill
                  className="object-contain"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/*Bottom IMAGES */}
        {bottomImages.map((d) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
            className="relative aspect-video overflow-hidden"
          >
            <Image
              src={d.image[0]}
              alt={d.title}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
