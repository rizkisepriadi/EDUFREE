export default function Footer() {
  return (
    <div>
      <div className=" flex bg-base-100 px-[70px] pt-[70px] gap-[248px]">
        <div className="flex flex-col">
          <div className="flex flex-col  pb-[109px] text-white">
            <h1 className="text-2xl font-bold ">[EDUFREE]</h1>
            <p className="text-base font-normal opacity-90 ">
              Bangun dan wujudkan cita bersama
              <br />
              edufree
            </p>
          </div>
          <div className="flex bg-primary text-secondary py-4 px-[30px] w-[420px]  gap-[29px]">
            <div className="flex flex-col">
              <h1>Email</h1>
              <p>contact@website.com</p>
            </div>
            <div className="flex flex-col">
              <h1>Telephone</h1>
              <p>+6288 999 222 333</p>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-[99px]">
          <div>
            <h1 className="text-xl font-medium pb-[21px]">Social Media</h1>
            <ul className="text-lg font-normal">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Linkedin</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-medium pb-[21px]">Program</h1>
            <ul className="text-lg font-normal">
              <li>Merdeka Belajar</li>
              <li>Finterpreneur</li>
            </ul>
          </div>
          <div>
            <h1 className="text-xl font-medium pb-[21px]">Dukungan</h1>
            <ul className="text-lg font-normal">
              <li>Tentang Kami</li>
              <li>Ketentuan</li>
              <li>Kebijakan Privasi</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-[70px] py-[27px] text-secondary flex justify-between">
        <h1>© Copyright EDUFREE 2021 - 2022</h1>
          <ul className="flex gap-[35px] uppercase text-base font-medium">
            <li>Home</li>
            <li>Tentang Kami</li>
            <li>Kursus</li>
            <li>faq</li>
            <li>blog</li>
          </ul>
      </div>
    </div>
  );
}
