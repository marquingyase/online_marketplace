"use client"
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Container from "./Container";
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Header() {
    return (
        <header className="py-4 border-b border-gray-200 bg-white">
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
                    <Link href="/cart" className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-500">
                        <BsCart3 className="text-2xl" />
                        <span className="text-sm">Cart</span>
                    </Link>

                    {/* account - dropdown */}
                    <div className="hidden md:block relative  text-gray-700">
                        <Menu>
                            {/* button */}
                            <MenuButton className="flex items-center cursor-pointer focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white">
                                <GoPerson className="text-2xl" />
                                <span className="text-sm">Account</span>
                            </MenuButton>

                            {/* items */}
                            <MenuItems
                                transition
                                anchor="bottom end"
                                className="w-40 mt-4 ml-16 origin-top-left border border-gray-300 bg-white p-1 text-sm transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
                            >
                                <MenuItem>
                                    <Link
                                        href="/signin"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Sign In
                                    </Link>
                                </MenuItem>
                                <hr className="border-t border-gray-300"/>
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
                    <button className="lg:hidden cursor-pointer text-gray-700 hover:text-blue-500 focus:outline-none">
                        <CgMenuRight className="text-3xl" />
                    </button>
                </nav>

            </Container>
        </header>
    );
}
