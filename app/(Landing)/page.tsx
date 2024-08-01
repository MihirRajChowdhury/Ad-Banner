"use client";
import AdBannerData from "@/bannerdata.json";
import BannerImageComp from "@/components/BannerImageComp";

export default function Home() {
  const handleBannerClick = (bannerId: string) => {
    console.log(bannerId);
    alert(`Banner ${bannerId} clicked`);
  };
  return (
    <div className="h-screen  w-full">
      <div className="max-w-7xl  mx-auto w-full h-screen mt-10">
        <div className="grid grid-cols-3 gap-y-5">
          {AdBannerData.banners.map((banner) => (
            <BannerImageComp
              key={banner.id}
              {...banner}
              clickHandler={handleBannerClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
