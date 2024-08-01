"use client";
interface BannerImageCompProps {
  id: string;
  title: string;
  Description: string;
  BackgroundTemplate: string;
  Image: string[];
  cta: string;
  clickHandler: (bannerId: string) => void;
}

const BannerImageComp = ({
  id,
  title,
  Description,
  BackgroundTemplate,
  Image,
  cta,
  clickHandler,
}: BannerImageCompProps) => {
  return (
    <div
      style={{
        backgroundImage: `url("${BackgroundTemplate}")`,
        height: 300,
        width: 400,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex justify-between "
    >
      <div>
        <p className="text-3xl text-white font-bold pt-10 pb-5 px-5">{title}</p>
        <p className="text-white px-5">{Description}</p>

        <button className="bg-black text-white p-3 rounded-lg font-semibold mx-5 mt-20">
          {cta}
        </button>
      </div>
      <p
        className="text-xl text-white font-bold p-2 cursor-pointer"
        onClick={() => clickHandler(id)}
      >
        Icon
      </p>
    </div>
  );
};

export default BannerImageComp;
