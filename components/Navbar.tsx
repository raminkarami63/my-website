import React from "react";
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
} from "@nextui-org/react";

function Navbar() {
  return (
    <Nav className="bg-[#27272A] md:flex" shouldHideOnScroll>
      <div className="flex gap-4 items-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-14 h-14 text-large"
        />
      </div>
      <NavbarBrand>
        <p className="text-[#F4F4F5] text-sm font-bold">Ramin Karami</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-[#D4D4D8] text-xs " href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#D4D4D8] text-xs" href="#">
            Open Source
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#D4D4D8] text-xs" href="#">
            Github
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-xs" href="#">Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}

export default Navbar;
