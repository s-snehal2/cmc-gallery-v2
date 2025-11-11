"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { Data } from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SmalllCard({
  card,
  onClose,
}: {
  card: Data;
  onClose: () => void;
}) {
  return (
    <Card className="relative bg-secondary p-2 mx-auto rounded-md  ">
      <Carousel>
        <CardHeader className="relative flex flex-col justify-center items-center gap-1 p-2 h-[38px] md:h-[50px]">
          <CardTitle className="text-center text-[12px] md:text-sm font-medium">
            {card.title}
          </CardTitle>

          <div
            onClick={onClose}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2"
          >
            <CircleX className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </div>

          <div className="text-[10px] md:text-xs text-center font-normal">
            {card.code} | {card.size} | {card.area}
          </div>

          <div className="text-[10px] md:text-xs text-center font-normal">
            Req: {card.req}
          </div>
        </CardHeader>
        <CarouselContent>
          {card.image.map((img, index) => (
            <CarouselItem key={index}>
              <CardContent className="relative aspect-video overflow-hidden  rounded-md">
                <Image
                  src={img}
                  alt="images"
                  fill
                  className="object-cover p-4 hover:scale-105 "
                />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute translate-x-10 bg-primary text-secondary size-6 md:size-8" />
        <CarouselNext className="absolute -translate-x-10 bg-primary text-secondary size-6 md:size-8" />
      </Carousel>
    </Card>
  );
}
