import Header from "../components/Header";
import Ilustration from "../assets/illustration.svg";
import Benefit from "../components/Benefit";
import About from "../assets/about.svg";
import CoursesRecomendation from "../components/CoursesRecomendation";
import FAQ from "../components/FAQ";
import Registration from "../components/Registration";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div>
      <div className="h-[579px]  bg-base-100">
        <Header />
        <div className="flex pl-[70px] pt-[52px] pr-[106.26px] pb-[137px] gap-20 h-full">
          <div className="flex flex-col w-[597px]">
            <div className="flex flex-col gap-8">
              <h1 className="text-[48px] font-semibold">
                Bangun dan Wujudkan Cita Bersama EDUFREE
              </h1>
              <p className="text-base">
                EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
                online yang bertujuan untuk membantu kamu meraih cita di bidang
                teknologi.
              </p>
            </div>
            <div className="flex gap-5 pt-[60px]">
              <button className="btn btn-primary py-[15px] px-[45px]">
                Lihat Kursus
              </button>
              <button className=""> Lihat Alur Belajar →</button>
            </div>
          </div>
          <div>
            <img src={Ilustration} alt="Image" />
          </div>
        </div>
      </div>
      <div className="bg-[#EEF4FA] px-[70px] py-[60px] flex flex-row">
        <div className="flex gap-10">
          <div className="text-black">
            <h1 className="font-semibold text-4xl ">21.000+</h1>
            <p className="font-normal text-base opacity-75">Siswa terdaftar</p>
          </div>
          <div className="text-black">
            <h1 className="font-semibold text-4xl ">100+</h1>
            <p className="font-normal text-base opacity-75">Instruktur Ahli</p>
          </div>
          <div className="text-black">
            <h1 className="font-semibold text-4xl ">150+</h1>
            <p className="font-normal text-base opacity-75">Kursus Gratis</p>
          </div>
        </div>
        <div className="font-bold text-black uppercase text-2xl flex gap-8 items-end pl-[50px]">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M11.8 22C11.8 22.7956 11.5471 23.5587 11.0971 24.1213C10.647 24.6839 10.0365 25 9.4 25C8.76348 25 8.15303 24.6839 7.70294 24.1213C7.25286 23.5587 7 22.7956 7 22C7 21.2044 7.25286 20.4413 7.70294 19.8787C8.15303 19.3161 8.76348 19 9.4 19C10.0365 19 10.647 19.3161 11.0971 19.8787C11.5471 20.4413 11.8 21.2044 11.8 22ZM23 22C23 22.7956 22.7471 23.5587 22.2971 24.1213C21.847 24.6839 21.2365 25 20.6 25C19.9635 25 19.353 24.6839 18.9029 24.1213C18.4529 23.5587 18.2 22.7956 18.2 22C18.2 21.2044 18.4529 20.4413 18.9029 19.8787C19.353 19.3161 19.9635 19 20.6 19C21.2365 19 21.847 19.3161 22.2971 19.8787C22.7471 20.4413 23 21.2044 23 22Z"
                fill="black"
              />
              <path
                d="M4.39921 6C4.0279 6 3.67181 6.1475 3.40926 6.41005C3.14671 6.6726 2.99921 7.0287 2.99921 7.4V21.4C2.99921 21.7713 3.14671 22.1274 3.40926 22.3899C3.67181 22.6525 4.0279 22.8 4.39921 22.8H5.86921C6.02987 22.0088 6.45912 21.2975 7.08423 20.7865C7.70933 20.2756 8.49186 19.9965 9.29921 19.9965C10.1066 19.9965 10.8891 20.2756 11.5142 20.7865C12.1393 21.2975 12.5685 22.0088 12.7292 22.8H14.1992C14.5705 22.8 14.9266 22.6525 15.1892 22.3899C15.4517 22.1274 15.5992 21.7713 15.5992 21.4V7.4C15.5992 7.0287 15.4517 6.6726 15.1892 6.41005C14.9266 6.1475 14.5705 6 14.1992 6H4.39921ZM19.7992 10.2C19.4279 10.2 19.0718 10.3475 18.8093 10.6101C18.5467 10.8726 18.3992 11.2287 18.3992 11.6V20.07C18.8496 19.978 19.3138 19.9756 19.7652 20.063C20.2165 20.1504 20.6462 20.3259 21.0298 20.5794C21.4133 20.8329 21.7431 21.1595 22.0004 21.5405C22.2577 21.9216 22.4374 22.3495 22.5292 22.8H23.9992C24.3705 22.8 24.7266 22.6525 24.9892 22.3899C25.2517 22.1274 25.3992 21.7713 25.3992 21.4L25.1984 14.4C25.1983 14.0288 25.1984 10.4 25.1984 10.4H22.1984C22.1984 10.4 21.5705 10.2001 21.1992 10.2H19.7992Z"
                fill="black"
              />
            </svg>
            <h1>lorem</h1>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.59999 2.80005C4.85738 2.80005 4.14519 3.09505 3.62009 3.62015C3.09499 4.14525 2.79999 4.85744 2.79999 5.60005V21C2.79999 22.114 3.24249 23.1822 4.03014 23.9699C4.81779 24.7576 5.88608 25.2 6.99999 25.2C8.1139 25.2 9.18218 24.7576 9.96984 23.9699C10.7575 23.1822 11.2 22.114 11.2 21V5.60005C11.2 4.85744 10.905 4.14525 10.3799 3.62015C9.85478 3.09505 9.14259 2.80005 8.39999 2.80005H5.59999ZM6.99999 22.4C7.37129 22.4 7.72739 22.2525 7.98994 21.99C8.25249 21.7274 8.39999 21.3714 8.39999 21C8.39999 20.6287 8.25249 20.2726 7.98994 20.0101C7.72739 19.7475 7.37129 19.6 6.99999 19.6C6.62868 19.6 6.27259 19.7475 6.01004 20.0101C5.74749 20.2726 5.59999 20.6287 5.59999 21C5.59999 21.3714 5.74749 21.7274 6.01004 21.99C6.27259 22.2525 6.62868 22.4 6.99999 22.4ZM14 19.9402L20.86 13.0802C21.3849 12.5552 21.6798 11.8431 21.6798 11.1006C21.6798 10.3582 21.3849 9.64613 20.86 9.12105L18.879 7.14005C18.3539 6.61513 17.6418 6.32025 16.8994 6.32025C16.1569 6.32025 15.4449 6.61513 14.9198 7.14005L14 8.05985V19.9402ZM22.4 25.2H12.6994L21.0994 16.8H22.4C23.1426 16.8 23.8548 17.095 24.3799 17.6202C24.905 18.1453 25.2 18.8574 25.2 19.6V22.4C25.2 23.1427 24.905 23.8548 24.3799 24.3799C23.8548 24.905 23.1426 25.2 22.4 25.2Z"
                fill="#282938"
              />
            </svg>
            <h1>DITLANCE</h1>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M15.4 23.8C15.4001 24.0386 15.4612 24.2731 15.5775 24.4815C15.6937 24.6898 15.8612 24.8649 16.0642 24.9903C16.2671 25.1157 16.4987 25.1871 16.737 25.1979C16.9753 25.2086 17.2124 25.1583 17.4258 25.0516L23.0258 22.2516C23.2583 22.1354 23.4539 21.9568 23.5906 21.7358C23.7274 21.5147 23.7999 21.26 23.8 21V12.9304C23.7999 12.6919 23.7388 12.4573 23.6226 12.249C23.5063 12.0407 23.3388 11.8655 23.1359 11.7402C22.9329 11.6148 22.7013 11.5433 22.463 11.5326C22.2247 11.5219 21.9876 11.5722 21.7742 11.6788L16.1742 14.4788C15.9417 14.595 15.7461 14.7736 15.6094 14.9947C15.4726 15.2158 15.4002 15.4705 15.4 15.7304V23.8ZM21.2954 8.78643C21.5276 8.67004 21.7229 8.49133 21.8594 8.27029C21.9958 8.04925 22.0681 7.7946 22.0681 7.53483C22.0681 7.27506 21.9958 7.02042 21.8594 6.79938C21.7229 6.57834 21.5276 6.39963 21.2954 6.28323L14.6258 2.94843C14.4315 2.85133 14.2172 2.80078 14 2.80078C13.7828 2.80078 13.5685 2.85133 13.3742 2.94843L6.70461 6.28323C6.47238 6.39963 6.27711 6.57834 6.14064 6.79938C6.00418 7.02042 5.93191 7.27506 5.93191 7.53483C5.93191 7.7946 6.00418 8.04925 6.14064 8.27029C6.27711 8.49133 6.47238 8.67004 6.70461 8.78643L13.3742 12.1212C13.5685 12.2183 13.7828 12.2689 14 12.2689C14.2172 12.2689 14.4315 12.2183 14.6258 12.1212L21.2954 8.78643ZM6.22581 11.6788C6.01242 11.5722 5.77533 11.5219 5.53702 11.5326C5.29871 11.5433 5.0671 11.6148 4.86416 11.7402C4.66122 11.8655 4.49369 12.0407 4.37745 12.249C4.26122 12.4573 4.20014 12.6919 4.20001 12.9304V21C4.20015 21.26 4.27265 21.5147 4.40939 21.7358C4.54612 21.9568 4.7417 22.1354 4.97421 22.2516L10.5742 25.0516C10.7876 25.1583 11.0247 25.2086 11.263 25.1979C11.5013 25.1871 11.7329 25.1157 11.9359 24.9903C12.1388 24.8649 12.3063 24.6898 12.4226 24.4815C12.5388 24.2731 12.5999 24.0386 12.6 23.8V15.7304C12.5999 15.4705 12.5274 15.2158 12.3906 14.9947C12.2539 14.7736 12.0583 14.595 11.8258 14.4788L6.22581 11.6788Z"
                fill="black"
              />
            </svg>
            <h1>OWTHEST</h1>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 25.2C16.9704 25.2 19.8192 24.0201 21.9196 21.9196C24.02 19.8192 25.2 16.9705 25.2 14C25.2 11.0296 24.02 8.18086 21.9196 6.08045C19.8192 3.98005 16.9704 2.80005 14 2.80005C11.0296 2.80005 8.1808 3.98005 6.08039 6.08045C3.97998 8.18086 2.79999 11.0296 2.79999 14C2.79999 16.9705 3.97998 19.8192 6.08039 21.9196C8.1808 24.0201 11.0296 25.2 14 25.2ZM6.06479 11.2378C6.58459 9.74925 7.51209 8.43659 8.74159 7.44945C9.11679 8.02205 9.76359 8.40005 10.5 8.40005C11.0569 8.40005 11.5911 8.6213 11.9849 9.01512C12.3787 9.40895 12.6 9.94309 12.6 10.5V11.2C12.6 11.9427 12.895 12.6548 13.4201 13.1799C13.9452 13.705 14.6574 14 15.4 14C16.1426 14 16.8548 13.705 17.3799 13.1799C17.905 12.6548 18.2 11.9427 18.2 11.2C18.1998 10.5734 18.4097 9.96487 18.7963 9.4717C19.1829 8.97854 19.7237 8.62929 20.3322 8.47985C21.6682 10.0082 22.4031 11.9701 22.4 14C22.4 14.476 22.3608 14.945 22.2838 15.4H21C20.2574 15.4 19.5452 15.695 19.0201 16.2201C18.495 16.7453 18.2 17.4574 18.2 18.2V21.2758C16.9236 22.0144 15.4746 22.4022 14 22.4V19.6C14 18.8574 13.705 18.1453 13.1799 17.6202C12.6548 17.095 11.9426 16.8 11.2 16.8C10.4574 16.8 9.74519 16.505 9.22009 15.9799C8.69499 15.4548 8.39999 14.7427 8.39999 14C8.40024 13.3378 8.16578 12.697 7.73825 12.1913C7.31072 11.6856 6.7178 11.3478 6.06479 11.2378Z"
                fill="black"
              />
            </svg>
            <h1>NEOVASI</h1>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.82 1.46436C16.1042 1.55374 16.3525 1.73146 16.5287 1.97166C16.705 2.21186 16.8 2.50203 16.8 2.79996V9.79996H22.4C22.6561 9.79985 22.9073 9.86998 23.1263 10.0027C23.3453 10.1355 23.5237 10.3257 23.6421 10.5528C23.7604 10.7799 23.8143 11.0351 23.7977 11.2906C23.7811 11.5462 23.6947 11.7923 23.548 12.0022L13.748 26.0022C13.5774 26.2465 13.3334 26.4301 13.0513 26.5261C12.7692 26.6222 12.4638 26.6257 12.1796 26.5362C11.8953 26.4467 11.6471 26.2689 11.4709 26.0286C11.2947 25.7882 11.1998 25.498 11.2 25.2V18.2H5.59999C5.34391 18.2001 5.0927 18.1299 4.8737 17.9972C4.6547 17.8645 4.47631 17.6742 4.35793 17.4471C4.23955 17.22 4.18573 16.9648 4.20231 16.7093C4.2189 16.4537 4.30526 16.2076 4.45199 15.9978L14.252 1.99776C14.4228 1.75386 14.6669 1.57078 14.9489 1.47511C15.2309 1.37944 15.536 1.37616 15.82 1.46576V1.46436Z"
                fill="black"
              />
            </svg>
            <h1>onago</h1>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <Benefit />
        <div className="pt-[148px] flex w-full gap-32 px-[70px]">
          <div className="text-black">
            <p className="opacity-75 pb-4 pt-12">Tentang Kami</p>
            <h1 className="font-semibold text-[38px] pb-4">
              EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh
            </h1>
            <p className="opacity-75">
              Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi
              kedepanya dalam bidang pendidikan
            </p>
          </div>
          <img src={About} alt="" className="w-[575px]" />
        </div>
        <CoursesRecomendation />
      </div>
      <div className="bg-base-200 text-secondary flex px-[77px] py-[83px] gap-[104px] ">
        <div className="flex flex-col w-[346px]">
          <div className="text-[28px] font-semibold w-full">
            <h1>Kata Mereka Tentang</h1>
            <h1>Kursus EDUFREE</h1>
          </div>
          <p className="text-base font-normal opacity-70">
            EDUFREE telah dipercaya lebih dari 10.000 siswa{" "}
          </p>
        </div>
        <div className="w-[843px]">
          <h1 className="pb-[46px] w-full text-[26px]">
            &ldquo;Materi yang disampaikan mudah dimengerti, kualitas instruktur
            sangat baik serta responnya yang cepat. So, kursus disini sangat
            sangat saya rekomendasikan!!&rdquo;
          </h1>
          <div className="flex gap-1">
            <div className="avatar">
              <div className="w-11 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg">Jernry Wilson</h1>
              <p className="text-xs">Vice President</p>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Registration />
      <Blogs />
      <Footer />
    </div>
  );
}
