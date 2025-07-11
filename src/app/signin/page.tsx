"use client"
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function SignUp() {
    return (
        <main className="flex bg-slate-100 min-h-screen flex-col items-center justify-center py-24">
            <div className="flex bg-white flex-col items-center justify-center px-12 py-16 w-full max-w-md">

                {/* logo and heading */}
                <div className="flex gap-4 items-center justify-center mb-8">
                    {/* logo */}
                    <FaShoppingCart className="text-5xl text-blue-500" />

                    {/* heading */}
                    <div className="flex flex-col items-start">
                        <h2 className="text-2xl font-bold">Welcome Back</h2>
                        <p className="text-gray-500 text-sm">Continue from where you left</p>
                    </div>
                </div>

                {/* form */}
                <form className="flex flex-col w-full gap-4">

                    {/* email */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium mb-1">Email
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="sethgyan587@gmail.com"
                            id="email"
                            name="email"
                            required
                            className="px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                        />
                    </div>

                    {/* password */}
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium mb-1">Password
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="**********"
                            id="password"
                            name="password"
                            required
                            className="px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                        />
                    </div>

                    {/* submit */}
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 font-medium text-white py-2 px-4 cursor-pointer">Sign In</button>

                    {/* signin */}
                    <p className="text-sm text-gray-500 mt-2">
                        Don&apos;t have an account? <Link href="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                    </p>

                    {/* horizontal line */}
                    <hr className="text-gray-300" />

                    {/* google */}
                    < button type="button" className="bg-gray-200 hover:bg-gray-300 font-medium text-gray-700 py-2 px-4 cursor-pointer mt-2">
                        <Link href="#">Continue with Google</Link>
                    </button>
                </form>
            </div>
        </main>
    )
}