import React from "react";
import Image from "next/image";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  image,
} from "@nextui-org/react";
import My from "../public/my.jpg";


function Navbar() {
  return (
    <Nav className="bg-[#27272A]" shouldHideOnScroll>
        <div className="flex gap-4 items-center">
          <Image
            src={My}
            alt="my"
            className="w-14 h-14 rounded-full text-large"
          />
        </div>
        <NavbarBrand>
          <p className="text-[#F4F4F5] text-sm font-bold">Ramin Karami</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-[#D4D4D8] text-xs " href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-[#D4D4D8] text-xs" href="/projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-[#D4D4D8] text-xs" href="/github">
              Github
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-xs" href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
    </Nav>
  );
}

export default Navbar;
