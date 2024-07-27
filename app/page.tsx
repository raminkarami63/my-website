"use client";
import React from "react";
import Image from "next/image";
import Javascript from "../public/JavaScript-logo.png";
import Node from "../public/Node.js_logo.svg";
import Typescript from "../public/Typescript_logo_2020.svg";
import react from "../public/React-icon.svg";
import nextjs from "../public/Nextjs-logo.svg";
import Tailwind from "../public/Tailwind_CSS_Logo.svg";
import { Typewriter } from "react-simple-typewriter";

function page() {
  return (
    <div className="flex bg-zinc-700">
      <div className="relative z-20 flex flex-1 flex-col pt-16 pl-24 text-zinc-200">
        <h4 className="text-xl">Hello,</h4>
        <h1 className="text-4xl relative">I'm Ramin Karami</h1>
        <h2>
          A{" "}
          <span>
            <Typewriter
              words={["Front-end Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
      </div>
      <div className="w-[450px] mt-12 mr-14 ">
        <p className=" text-slate-200 text-justify text-xs">
        As a software engineer, I bring over 2 years of experience working with
        a wide range of technologies, including JavaScript, NodeJs, Typescript, React,
        Nextjs and Tailwind services. I have a strong dedication to developing
        high-quality code that adheres to clean-code standards. I am passionate
        about delivering innovative and effective solutions that meet the needs
        of my clients.
        </p>
        <div className="flex justify-center gap-4 mt-3">
        <Image className="h-6 w-6" src={Javascript} alt={"Javascript"} />
        <Image className="h-6 w-6" src={Node} alt={"Node"} />
        <Image className="h-6 w-6" src={Typescript} alt={"Typescript"} />
        <Image className="h-6 w-6" src={react} alt={"react"} />
        <Image className="h-6 w-6" src={nextjs} alt={"nextjs"} />
        <Image className="h-6 w-6" src={Tailwind} alt={"Tailwind"} />
        </div>
      </div>
    </div>
  );
}

export default page;
