import React from "react";
import Image from "next/image";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import My from "../public/my.jpg";


function Navbar() {
  return (
    <Nav className="bg-zinc-800" shouldHideOnScroll>
        <div className="flex gap-4 items-center">
          <Image
            src={My}
            alt="my"
            className="w-14 h-14 rounded-full text-large"
          />
        </div>
        <NavbarBrand>
          <p className="text-zinc-100 text-sm font-bold">Ramin Karami</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link className="text-zinc-200 text-xs " href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-zinc-200 text-xs" href="/projects">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-zinc-200 text-xs" href="/github">
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
