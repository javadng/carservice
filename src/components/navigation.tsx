"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AiFillCar,
  AiOutlineArrowRight,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDown,
} from "react-icons/ai";

const Navigation = () => {
  const pathname = usePathname();

  const [menuShown, setMenuShown] = useState(false);

  const isActiveLink = (linkHref: string) => pathname === linkHref;
  const liClasses = "hover:text-primary transition duration-300 p-3 md:p-0";

  const menuVisibilityHanlder = () => setMenuShown((prevState) => !prevState);

  return (
    <nav className="grid  bg-white z-50 sticky top-0 grid-cols-[minmax(140px,190px)_1fr] md:grid-cols-[minmax(180px,260px)_1fr_180px] h-20 shadow-md items-center">
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
          <Link href="/">
            <li
              className={`${liClasses} ${
                isActiveLink("/") ? "text-primary" : ""
              }`}
            >
              <span>Home</span>
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`${liClasses} ${
                isActiveLink("/about") ? "text-primary" : ""
              }`}
            >
              <span>About</span>
            </li>
          </Link>
          <Link href="/services">
            <li
              className={`${liClasses} ${
                isActiveLink("/services") ? "text-primary" : ""
              }`}
            >
              <span>Services</span>
            </li>
          </Link>
          <li
            className={`${liClasses} ${
              isActiveLink("/pages") ? "text-primary" : ""
            } cursor-pointer flex items-center page-menu relative`}
          >
            <span>Pages</span>
            <AiOutlineDown className="ml-1 font-bold text-xl" />
            <ul className="submenu py-6 bg-white opacity-0 unvisible transition duration-300 translate-y-10 absolute top-5 left-0 text-secondary shadow-md">
              <li className="hover:bg-light-gray hover:text-primary transition py-2 px-6">
                <Link href="/booking">Booking</Link>
              </li>
              <li className="hover:bg-light-gray hover:text-primary transition py-2 px-6">
                <Link href="/technicians">Technicians</Link>
              </li>
              <li className="hover:bg-light-gray hover:text-primary transition py-2 px-6">
                <Link href="/testimonial">Testimonial</Link>
              </li>
            </ul>
          </li>
          <Link href="/contact">
            <li
              className={`${liClasses} ${
                isActiveLink("/contact") ? "text-primary" : ""
              }`}
            >
              <span>Contact</span>
            </li>
          </Link>
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
