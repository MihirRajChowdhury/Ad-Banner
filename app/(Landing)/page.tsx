"use client";
import AdBannerData from "@/bannerdata.json";
import BannerImageComp from "@/components/BannerImageComp";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import internal from "stream";

export default function Home() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [openedBannedId, setOpenedBannerId] = useState("");
  const [bannerdata, setBannerdata] = useState(AdBannerData);

  const handleBannerClick = (bannerId: string) => {
    console.log(bannerId);
    setOpenedBannerId(bannerId);
    setOpenBottomSheet(true);
  };

  const handleBannerClose = () => {
    setOpenBottomSheet(false);
    setOpenedBannerId("");
  };

  const handleBannerUpdate = (
    bannerId: string,
    title: string,
    description: string,
    buttonText: string,
    imagesrc: string
  ) => {
    const updatedBanners = bannerdata.banners.map((banner) => {
      if (banner.id === bannerId) {
        return {
          ...banner,
          title: title,
          Description: description,
          cta: buttonText,
          Image: imagesrc,
        };
      }
      return banner;
    });
    setBannerdata({ ...bannerdata, banners: updatedBanners });
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-5  w-full">
      <div className="flex flex-col gap-1">
        <p className="text-5xl text-gray-800 font-semibold ">Ad-Banners</p>
        <Link
          href={"https://github.com/deepanshu2711/Ad-Banner"}
          className="flex bg-gray-950 mt-4 p-2 rounded-lg items-center justify-around"
        >
          <FaGithub className="text-white h-8 w-8" />
          <p className="text-white text-lg font-semibold">Explore On Github</p>
        </Link>
      </div>
      <div className="max-w-7xl  mx-auto w-full h-screen pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5">
          {bannerdata.banners.map((banner) => (
            <BannerImageComp
              key={banner.id}
              {...banner}
              clickHandler={handleBannerClick}
              forEdit={true}
            />
          ))}
        </div>
      </div>
      <div>
        {openBottomSheet && (
          <div className="fixed bottom-0 top-0 right-0 left-0 z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="z-10 h-full  relative ">
              <div className="flex flex-col items-center justify-end h-full">
                <EditBannerTemplateBs
                  bannerdata={bannerdata.banners[parseInt(openedBannedId)]}
                  handleClose={handleBannerClose}
                  handleUpdate={handleBannerUpdate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
