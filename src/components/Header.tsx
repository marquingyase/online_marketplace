"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Container from "./Container";
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState, useEffect } from "react"; // Added useEffect
import { RiArrowDownSFill, RiCloseFill } from "react-icons/ri";
import { categories } from "./categories";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Header() {
    const [toggled, setToggle] = useState(false);

    // Add this useEffect to handle body overflow
    useEffect(() => {
        if (toggled) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [toggled]);

    return (
        <header className="bg-white sticky top-0 z-50">
            {/* Header */}
            <div className="py-4 border-b border-gray-200">
                <Container cn="flex justify-between items-center lg:gap-10 xl:gap-20">
                    {/* logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <FaShoppingCart className="text-5xl text-blue-500" />
                        <div>
                            <h1 className="text-xl font-bold">Online Marketplace</h1>
                            <p className="text-xs">Your one-stop shop for everything</p>
                        </div>
                    </Link>

                    {/* search */}
                    <div className="hidden lg:flex flex-1 items-center border border-gray-300 p-1 focus-within:border-blue-500 ">
                        <input
                            type="search"
                            placeholder="Search"
                            name="search"
                            className="px-4 py-2 focus:outline-none w-full group-focus-within:border-blue-500"
                        />
                        <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
                            Search
                        </button>
                    </div>

                    {/* navigation */}
                    <nav className="flex items-center space-x-4 font-medium">
                        {/* cart */}
                        <Link
                            href="/cart"
                            className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-500"
                        >
                            <BsCart3 className="text-2xl" />
                            <span className="text-sm">Cart</span>
                        </Link>

                        {/* account - dropdown */}
                        <div className="hidden md:block relative  text-gray-700">
                            <Menu>
                                {/* button */}
                                <MenuButton className="flex items-center hover:text-blue-500 cursor-pointer focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white">
                                    <GoPerson className="text-2xl" />
                                    <span className="text-sm">Account</span>
                                    <RiArrowDownSFill />
                                </MenuButton>

                                {/* items */}
                                <MenuItems
                                    transition
                                    anchor="bottom end"
                                    className="w-40 mt-4 ml-16 origin-top-left z-50 border border-gray-300 bg-white p-1 text-sm transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                                >
                                    <MenuItem>
                                        <Link
                                            href="/signin"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Sign In
                                        </Link>
                                    </MenuItem>
                                    <hr className="border-t border-gray-300" />
                                    <MenuItem>
                                        <Link
                                            href="/signup"
                                            className="block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Sign Up
                                        </Link>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>

                        {/* hamburger */}
                        <button
                            onClick={() => setToggle(!toggled)}
                            className="cursor-pointer text-gray-700 hover:text-blue-500 focus:outline-none"
                        >
                            {toggled ? (
                                <RiCloseFill className="text-3xl" />
                            ) : (
                                <CgMenuRight className="text-3xl" />
                            )}
                        </button>
                    </nav>
                </Container>
            </div>

            {/* Navbar links */}
            <div className={`${toggled ? "block" : "hidden"
                } overflow-y-auto absolute bg-slate-50 border-b border-b-gray-300 py-8 w-full h-[calc(100vh-80px)]`}
            >
                <Container>
                    {/* account */}
                    <div className="uppercase md:hidden font-semibold text-white text-sm bg-gray-500 p-2 mb-4">
                        Account
                    </div>
                    <div className="flex justify-between md:hidden text-gray-700 mb-4">
                        {/* cart */}
                        <Link
                            href="/cart"
                            className="flex items-center space-x-1 text-gray-700 hover:text-blue-500"
                        >
                            <BsCart3 className="text-2xl" />
                            <span className="text-sm">Cart</span>
                        </Link>

                        {/* auth */}
                        <div className="flex text-sm space-x-2">
                            <Link
                                href="/signin"
                                className="border border-blue-500 hover:bg-gray-200 px-4 py-2 "
                            >
                                Sign In
                            </Link>

                            <Link
                                href="/signin"
                                className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-700"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>

                    {/* search */}
                    <div className="flex lg:hidden flex-1 items-center mb-6 border border-blue-300 p-1 focus-within:border-blue-500">
                        <input
                            type="search"
                            placeholder="Search"
                            name="search"
                            className="px-4 py-2 focus:outline-none w-full group-focus-within:border-blue-500"
                        />
                        <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
                            Search
                        </button>
                    </div>

                    {/* categories */}
                    <div className="uppercase font-semibold text-white text-sm bg-gray-500 p-2 mb-4">
                        Categories
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm gap-6">
                        {categories.map((category) => (
                            <div key={category.name}>
                                <Link href={category.link}>
                                <h3 className="font-bold mb-1">{category.name}</h3>
                                </Link>
                                <ul>
                                    {category.items.map((item) => (
                                        <li
                                            key={item.name}
                                            className="flex w-fit items-center hover:text-blue-500"
                                        >
                                            <MdOutlineKeyboardArrowRight />
                                            <Link href={`${category.link}${item.link}`}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </header>
    );
}
