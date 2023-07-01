"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AiFillCar,
  AiOutlineArrowRight,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Navigation = () => {
  const pathname = usePathname();

  const [menuShown, setMenuShown] = useState(false);

  const isActiveLink = (linkHref: string) => pathname === linkHref;
  const liClasses = "hover:text-primary transition duration-300 p-3 md:p-0";

  const menuVisibilityHanlder = () => setMenuShown((prevState) => !prevState);

  return (
    <nav className="grid relative grid-cols-[minmax(140px,190px)_1fr] md:grid-cols-[minmax(180px,260px)_1fr_180px] h-20 shadow-md items-center">
      <div className="icon text-primary text-2xl font-bold p-3">
        <h2 className="flex items-center">
          <AiFillCar />
          <span className="ml-3">CarServ</span>
        </h2>
      </div>
      <div className="menu text-sm font-bold p-2">
        {!menuShown && (
          <AiOutlineMenu
            onClick={menuVisibilityHanlder}
            className="ml-auto block select-none md:hidden text-3xl shadow-md p-1 cursor-pointer"
          />
        )}
        {menuShown && (
          <AiOutlineClose
            onClick={menuVisibilityHanlder}
            className="ml-auto block select-none md:hidden text-3xl shadow-md p-1 cursor-pointer"
          />
        )}
        <ul
          className={`${
            menuShown
              ? "absolute p-3 shadow-md bg-white left-0 -bottom-[15rem] w-full"
              : "opacity-0 unvisible h-0"
          } md:flex justify-evenly transition duration-300 md:opacity-100 md:visible md:h-auto md:static md:bottom-0 md:shadow-none`}
        >
          <li
            className={`${liClasses} ${
              isActiveLink("/") ? "text-primary" : ""
            }`}
          >
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/about") ? "text-primary" : ""
            }`}
          >
            <Link href="/about">
              <span>About</span>
            </Link>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/services") ? "text-primary" : ""
            }`}
          >
            <Link href="/services">
              <span>Services</span>
            </Link>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/pages") ? "text-primary" : ""
            } cursor-pointer`}
          >
            <span>Pages</span>
          </li>
          <li
            className={`${liClasses} ${
              isActiveLink("/contact") ? "text-primary" : ""
            }`}
          >
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-primary text-white h-full p-5 py-7 hidden md:block">
        <Link href="/" className="flex items-center hover:scale-110 transition">
          <span className="uppercase mr-3 block">Get a quote</span>
          <AiOutlineArrowRight />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
