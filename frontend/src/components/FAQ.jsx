import Open from "../assets/openIcon.svg";
import Close from "../assets/closeIcon.svg";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  // Ubah data menjadi array
  const data = [
    {
      pertanyaan: "Apakah kursus ini benar-benar gratis?",
      jawaban:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      pertanyaan: "Untuk siapa kursus ini?",
      jawaban:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      pertanyaan: "Apakah kursus ini bersertifikat?",
      jawaban:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      pertanyaan: "Sampai kapan kursus ini berakhir?",
      jawaban:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      pertanyaan: "Apakah ada penyaluran kerja setelah lulus?",
      jawaban:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    // Tambahkan pertanyaan lainnya sesuai kebutuhan
  ];

  const toggleOpen = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex bg-white text-secondary px-[70px] pt-[157px] pb-[150px] gap-[136px]">
      <div className="w-[328px]">
        <h1 className="text-[28px] font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-base opacity-70">
          Masih bingung atau ragu? Hubungi kami di nomor +6288 999 222 333
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-[18px] w-[817px]">
          {data.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="flex gap-[59px]">
                <p className="text-[#2405F2] text-center text-2xl font-medium">
                  {`0${index + 1}`}
                </p>
                <div className="flex w-full justify-between">
                  <h1 className="text-2xl font-medium text-black pr-[239px]">
                    {item.pertanyaan}
                  </h1>
                  <button
                    className="active:animate-spin"
                    onClick={() => toggleOpen(index)}
                  >
                    {openIndex === index ? (
                      <img src={Close} alt="" />
                    ) : (
                      <img src={Open} alt="" />
                    )}
                  </button>
                </div>
              </div>
              <p
                className={`${
                  openIndex === index ? "static" : "hidden"
                } pl-[83px] text-[18px] w-[624px] pt-[18px]`}
              >
                {item.jawaban}
              </p>
              <p className="border-solid border-2 bg-[#ECECF1] mt-8"></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
