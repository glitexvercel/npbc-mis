import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={"relative h-[35vh]"}>
      <Image
        src={"/images/home/carousel-1.webp"}
        alt={"hero"}
        className={"h-full w-full object-cover object-center"}
        width={1700}
        height={950}
      />

      <div
        className={
          "absolute inset-0 bg-[#000000A0] flex px-6 md:px-10 lg:px-14 items-center"
        }
      >
        <h3 className={"font-bold text-white text-2xl md:text-3xl lg:text-4xl"}>
          Access all portals
        </h3>
      </div>
    </div>
  );
};

export default Hero;
