import Image, {StaticImageData} from "next/image";
import { title } from "process";
import React from "react";

type ProjectProps = {
  image: StaticImageData;
  title: string;
};

function Project({image, title}:ProjectProps) {
  return (
    <div className="w-36 h-48 rounded-md bg-zinc-300 overflow-hidden">
      <Image src={image} alt='image' className="object-cover" />
      <div className="flex justify-center">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Project;
