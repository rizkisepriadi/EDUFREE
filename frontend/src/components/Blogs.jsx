import Image from "../assets/img1.svg";
import Arrow from "../assets/arrow.svg";

export default function Blogs() {
  return (
    <div className="w-[1301px] pt-[159px] pl-[75px] text-secondary pb-[200px]">
      <div className="flex justify-between w-full items-center  pb-16">
        <h1 className="font-semibold text-[38px]  text-secondary">
          Blog, Berita dan Event
        </h1>
        <div className="flex gap-2 text-base font-normal">
          <a href="">Lihat Semua </a>
          <img src={Arrow} alt="" />
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-[43px]">
        <div className="flex flex-col w-[405px]">
          <img src={Image} alt="" className=" pb-10" />
          <div className="flex flex-col gap-4">
            <p className="text-base opacity-70 font-medium">19 Jan 2022</p>
            <h1 className="text-xl font-medium">
              Cara Mudah Untuk Memulai Belajar Programming - EDUFREE
            </h1>
            <p className="text-base opacity-70 font-normal">
              Menjadi seorang programmer saat ini sudah sangat mudah untuk
              dipelajari oleh siapapun ...
            </p>
          </div>
          <div className="flex gap-2  pt-9">
            <a href="" className="text-base font-medium ">
              Selengkapnya
            </a>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col w-[405px]">
          <img src={Image} alt="" className=" pb-10" />
          <div className="flex flex-col gap-4">
            <p className="text-base opacity-70 font-medium">19 Jan 2022</p>
            <h1 className="text-xl font-medium">
              Cara Mudah Untuk Memulai Belajar Programming - EDUFREE
            </h1>
            <p className="text-base opacity-70 font-normal">
              Menjadi seorang programmer saat ini sudah sangat mudah untuk
              dipelajari oleh siapapun ...
            </p>
          </div>
          <div className="flex gap-2  pt-9">
            <a href="" className="text-base font-medium ">
              Selengkapnya
            </a>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col w-[405px]">
          <img src={Image} alt="" className=" pb-10" />
          <div className="flex flex-col gap-4">
            <p className="text-base opacity-70 font-medium">19 Jan 2022</p>
            <h1 className="text-xl font-medium">
              Cara Mudah Untuk Memulai Belajar Programming - EDUFREE
            </h1>
            <p className="text-base opacity-70 font-normal">
              Menjadi seorang programmer saat ini sudah sangat mudah untuk
              dipelajari oleh siapapun ...
            </p>
          </div>
          <div className="flex gap-2  pt-9">
            <a href="" className="text-base font-medium ">
              Selengkapnya
            </a>
            <img src={Arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
