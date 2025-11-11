"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className=" bg-[#F1E2D2] mx-auto rounded-md ">
      <Carousel>
        <CardHeader className="relative flex flex-col justify-center items-center pb-2 pt-0 md:min-h-[25px]">
          <CardTitle className="text-center text-sm md:text-lg font-medium">
            {card.title}
          </CardTitle>

          <div
            onClick={onClose}
            className="absolute -top-1 md:-top-2 -translate-y-3/4 md:-translate-y-1/2 right-1 "
          >
            <CircleX className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
          </div>
        </CardHeader>
        <CarouselContent>
          {card.image.map((img, index) => (
            <CarouselItem key={index}>
              <CardContent className="relative aspect-video overflow-hidden rounded-md">
                <Image
                  src={img}
                  alt="images"
                  fill
                  className="object-cover hover:scale-105 "
                />
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute translate-x-12 bg-muted text-primary size-6 md:size-8" />
        <CarouselNext className="absolute -translate-x-12 bg-muted text-primary  size-6 md:size-8" />
      </Carousel>
    </Card>
  );
}
