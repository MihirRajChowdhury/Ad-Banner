"use client";
import AdBannerData from "@/bannerdata.json";
import BannerImageComp from "@/components/BannerImageComp";
import EditBannerTemplateBs from "@/components/EditBannerTemplateBs";
import { useState } from "react";
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
    <div className="h-screen  w-full">
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
