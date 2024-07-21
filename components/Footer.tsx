import React from "react";
import Image from "next/image";
import Email from "../public/Email.png";
import Github from "../public/Github.png";
import instagram from "../public/instagram.svg";
function Footer() {
  return (
    <div className="absolute flex justify-between items-center px-8 w-full h-12 bottom-0 bg-[#52525B]">
      <p className="text-xs text-[#D4D4D8] ">
        Copyright &copy; 2024. All Rights Reserved.
      </p>
      <div className="flex justify-between items-center gap-2">
      <Image src={instagram} alt={"instagram"} />
      <Image className="h-6 w-6" src={Github} alt={"Github"} />
      <Image className="h-8 w-8" src={Email} alt={"Email"} />
      </div>
    </div>
  );
}

export default Footer;
