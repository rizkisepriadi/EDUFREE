export default function Header() {
  return (
    <div className="navbar bg-base-100 text-white py-7 px-[70px] w-[1440px] h-[90px] flex gap-44">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">[EDUFREE]</a>
      </div>
      <div>
        <ul className="flex uppercase gap-[34px] ">
          <li>Home</li>
          <li>tentang kami</li>
          <li>kursus</li>
          <li>faq</li>
          <li className="flex items-center gap-1">
            blog{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33334 4.99992H5.00001C4.55798 4.99992 4.13406 5.17551 3.8215 5.48807C3.50894 5.80063 3.33334 6.22456 3.33334 6.66658V14.9999C3.33334 15.4419 3.50894 15.8659 3.8215 16.1784C4.13406 16.491 4.55798 16.6666 5.00001 16.6666H13.3333C13.7754 16.6666 14.1993 16.491 14.5119 16.1784C14.8244 15.8659 15 15.4419 15 14.9999V11.6666M11.6667 3.33325H16.6667M16.6667 3.33325V8.33325M16.6667 3.33325L8.33334 11.6666"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex items-center">
          <li className="flex flex-row items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex flex-col gap-0 items-start p-0">
              <h1>Hi, Dimas</h1>
              <p>Frontend Developer</p>
            </div>
          </li>
          <li>
            <details>
              <summary></summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
