import React from "react";
import Link from "next/link";
import { logo } from "../assets";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
      <Link href="/">
        <Image
          height={100}
          width={100}
          src={logo}
          alt="logo"
          className="w-28 object-contain"
        />
      </Link>
      <Link
        href="screens/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
  );
};

export default Navbar;
