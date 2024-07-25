"use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function page() {
  return (
    <div className="bg-zinc-700">
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
    </div>
  );
}

export default page;
