import Image from "../assets/img1.svg";
import Hours from "../assets/hoursIcon.svg";
import Video from "../assets/videosIcon.svg";
import Student from "../assets/UsersIcon.svg";

export default function CoursesRecomendation() {
  return (
    <div className="pt-[150px] px-[70px]">
      <div className="flex justify-between items-center pb-[81px]">
        <div className="text-[38px] text-secondary  font-semibold">
          <h1>Rekomendasi Kursus</h1>
          <h1>Untuk Kamu</h1>
        </div>
        <div className="flex gap-5">
          <button className="btn text-secondary ">Kategori</button>
          <button className="btn btn-primary">Lihat Semua</button>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-[71px] pb-[159px]">
        <div className="flex flex-col text-secondary ">
          <img src={Image} alt="" />
          <div className="px-4">
            <h1 className="text-2xl font-medium pt-6">Dasar Pemrograman WEB</h1>
            <p className="opacity-60 pt-1">
              Materi pembelajarn mengenai pembuatan website tingkat pemula
            </p>
            <div className="flex gap-[17px]">
              <div className="flex gap-2">
                <img src={Hours} alt="" />
                <p>4,5 Jam</p>
              </div>
              <div className="flex gap-2">
                <img src={Video} alt="" />
                <p>20 Video</p>
              </div>
              <div className="flex gap-2">
                <img src={Student} alt="" />
                <p>1.900 Siswa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-secondary ">
          <img src={Image} alt="" />
          <div className="px-4">
            <h1 className="text-2xl font-medium pt-6">Dasar Pemrograman WEB</h1>
            <p className="opacity-60 pt-1">
              Materi pembelajarn mengenai pembuatan website tingkat pemula
            </p>
            <div className="flex gap-[17px]">
              <div className="flex gap-2">
                <img src={Hours} alt="" />
                <p>4,5 Jam</p> 
              </div>
              <div className="flex gap-2">
                <img src={Video} alt="" />
                <p>20 Video</p>
              </div>
              <div className="flex gap-2">
                <img src={Student} alt="" />
                <p>1.900 Siswa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-secondary ">
          <img src={Image} alt="" />
          <div className="px-4">
            <h1 className="text-2xl font-medium pt-6">Dasar Pemrograman WEB</h1>
            <p className="opacity-60 pt-1">
              Materi pembelajarn mengenai pembuatan website tingkat pemula
            </p>
            <div className="flex gap-[17px]">
              <div className="flex gap-2">
                <img src={Hours} alt="" />
                <p>4,5 Jam</p>
              </div>
              <div className="flex gap-2">
                <img src={Video} alt="" />
                <p>20 Video</p>
              </div>
              <div className="flex gap-2">
                <img src={Student} alt="" />
                <p>1.900 Siswa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
