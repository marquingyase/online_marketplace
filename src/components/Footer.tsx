import Link from "next/link";
import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";

export default function Footer() {
    return (
        <header className="bg-blue-950 text-white">
            <Container>
                <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between py-12">
                    {/* logo */}
                    <div className="flex items-center justify-center gap-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <FaShoppingCart className="text-5xl text-blue-500" />
                            <div>
                                <h1 className="text-xl font-bold">Online Marketplace</h1>
                                <p className="text-xs">Your one-stop shop for everything</p>
                            </div>
                        </Link>
                    </div>

                    {/* follow us */}
                    <div>
                        <h1 className="text-lg font-bold uppercase">Follow Us</h1>
                        <ul className="flex items-center gap-1 mt-2">
                            <li className="px-4 py-4 bg-gray-400 rounded-xl" />
                            <li className="px-4 py-4 bg-gray-400 rounded-xl" />
                            <li className="px-4 py-4 bg-gray-400 rounded-xl" />
                            <li className="px-4 py-4 bg-gray-400 rounded-xl" />
                        </ul>
                    </div>

                    {/* payments */}
                    <div>
                        <h1 className="text-lg font-bold uppercase">Payments</h1>
                        <ul className="flex items-center gap-1 mt-2">
                            <li className="px-6 py-4 bg-gray-400" />
                            <li className="px-6 py-4 bg-gray-400" />
                            <li className="px-6 py-4 bg-gray-400" />
                            <li className="px-6 py-4 bg-gray-400" />
                            <li className="px-6 py-4 bg-gray-400" />
                        </ul>
                    </div>
                </div>

                {/* horizontal line */}
                <hr className="border-t border-white/10" />

                {/* footer links */}
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-16 py-16">
                    {/* coompany location */}
                    <div className="flex flex-col items-start gap-4 lg:col-span-2">
                        <h2 className="uppercase font-semibold">Company Location</h2>
                        <p className="text-slate-400 flex flex-col">
                            <span>123 Main Street, Lomnava,</span>
                            <span>Ofankor, Ghana</span>
                        </p>
                        <a href="mailto:contact@onlinemarketplace.com" className="underline underline-offset-8 hover:text-slate-400">
                            contact@onlinemarketplace.com
                        </a>
                    </div>

                    {/* information */}
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="uppercase font-semibold">Information</h2>
                        <ul className="text-slate-400 space-y-2">
                            <li><Link href="#" className="hover:text-white hover:underline">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* account */}
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="uppercase font-semibold">Account</h2>
                        <ul className="text- text-slate-400 space-y-2">
                            <li><Link href="/signin" className="hover:text-white hover:underline">Sign In</Link></li>
                            <li><Link href="/signup" className="hover:text-white hover:underline">Sign Up</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline">Shopping Cart</Link></li>
                            <li><Link href="#" className="hover:text-white hover:underline">Profile</Link></li>
                        </ul>
                    </div>

                    {/* subscribe */}
                    <div className="flex flex-col items-start gap-4 lg:col-span-2">
                        <h2 className="uppercase font-semibold">Subscribe</h2>
                        <p className="text-slate-400">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex p-1 border border-gray-400 focus-within:border-blue-500">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                required
                                className="px-4 py-2 focus:outline-none group-focus-within:border-blue-500 w-full bg-white text-slate-600 placeholder:text-slate-400"
                            />
                            <button className="px-4 py-2 cursor-pointer font-medium bg-blue-500 text-white hover:bg-blue-600 focus:outline-none">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* horizontal line */}
                <hr className="border-t border-white/10" />

                {/* all right reserved */}

                <div className="text-center text-sm text-slate-400 py-8">
                    <p>&copy; {new Date().getFullYear()} Online Marketplace. All rights reserved.</p>
                </div>
            </Container>
        </header>
    );
}