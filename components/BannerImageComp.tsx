"use client";

import Image from "next/image";
import { BiPencil } from "react-icons/bi";
import { PiPencil } from "react-icons/pi";

interface BannerImageCompProps {
  id: string;
  title: string;
  Description: string;
  BackgroundTemplate: string;
  Image: string;
  cta: string;
  clickHandler: (bannerId: string) => void;
  forEdit?: boolean;
}

const BannerImageComp = ({
  id,
  title,
  Description,
  BackgroundTemplate,
  Image: imgsrc,
  cta,
  clickHandler,
  forEdit,
}: BannerImageCompProps) => {
  return (
    <div className={forEdit ? "relative w-400 h-80" : "relative w-400 h-400"}>
      <Image
        src={BackgroundTemplate}
        width={400}
        height={400}
        alt="background-template"
        className="absolute rounded-lg border-4 border-gray-400 inset-0 h-[300px] w-[400px] object-cover"
        decoding="async"
        loading="lazy"
      />
      <Image
        src={imgsrc}
        width={200}
        height={200}
        alt="overlay-image"
        className="absolute border-8 h-[200px] rounded-full top-44 left-[300px] transform -translate-x-1/2 -translate-y-1/2"
        decoding="async"
        loading="lazy"
      />
      <div className="absolute flex w-full">
        <div>
          <p className="text-3xl text-white font-bold pt-8 pb-5 px-5">
            {title}
          </p>
          <p className="text-white px-5 max-w-[200px]">{Description}</p>

          <button className="bg-black text-white p-3 rounded-lg font-semibold mx-5 mt-10">
            {cta}
          </button>
        </div>
        {forEdit === true && (
          <div
            onClick={() => clickHandler(id)}
            className="absolute top-4 right-10 hover:bg-black rounded-full p-2 cursor-pointer bg-black/50 "
          >
            <PiPencil className="text-white h-8 w-8" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BannerImageComp;
