import React from "react";
import logo from "../assets/hyg-logo.png";
export default function Header() {
  return (
    <header className="text-center py-[27px] mb:sticky mb:top-0 w-full z-40 bg-white">
      <div className=" mx-auto max-w-[1040px] w-full flex items-center justify-between tb:px-[5%]">
        <img src={logo} alt="" />
        <ul className=" list-none flex mb:flex-col items-center justify-center gap-[40px] mb:gap-[0] mb:justify-start mb:fixed mb:left-0 mb:w-full mb:h-full mb:bg-[#edebeb] z-30 mb:top-[90px]">
          <li className="text-[18px] mb:w-full mb:hover:bg-[#dddcdc] cursor-pointer mb:py-[18px] text-[#3A3740] font-normal font-[inter]">
            Home
          </li>
          <li className="text-[18px] mb:w-full mb:hover:bg-[#dddcdc] cursor-pointer mb:py-[18px] text-[#3A3740] font-normal font-[inter]">
            Flashcard
          </li>
          <li className="text-[18px] mb:w-full mb:hover:bg-[#dddcdc] cursor-pointer mb:py-[18px] text-[#3A3740] font-normal font-[inter]">
            Contact
          </li>
          <li className="text-[18px] mb:w-full mb:hover:bg-[#dddcdc] cursor-pointer mb:py-[18px] text-[#3A3740] font-normal font-[inter]">
            FAQ
          </li>
          <li className="">
          <button class="px-10 py-3 cursor-pointer bg-gradient-to-r from-[#06286E] to-[#164EC0] rounded-full text-white text-lg font-semibold">
        Login
    </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
