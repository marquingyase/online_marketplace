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
                        <h2 className="text-2xl font-bold">Create Account</h2>
                        <p className="text-gray-500 text-sm">Sign up to get started with us</p>
                    </div>
                </div>

                {/* form */}
                <form className="flex flex-col w-full gap-4">
                    {/* username */}
                    <div className="flex flex-col">
                        <label htmlFor="username" className="text-sm font-medium mb-1">Username
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Seth Gyan"
                            id="username"
                            name="username"
                            required
                            className="px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                        />
                    </div>

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

                    {/* confirm password */}
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="text-sm font-medium mb-1">Confirm Password
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="**********"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            className="px-4 py-2 border border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                        />
                    </div>

                    {/* submit */}
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 font-medium text-white py-2 px-4 cursor-pointer">Sign Up</button>

                    {/* signin */}
                    <p className="text-sm text-gray-500 mt-2">
                        Already have an account? <Link href="/signin" className="text-blue-500 hover:underline">Sign In</Link>
                    </p>
                </form>

                {/* horizontal line */}
                <hr className="text-gray-300 w-full my-4" />

                {/* google */}
                < button type="button" className="mb-4 bg-gray-200 w-full hover:bg-gray-300 font-medium text-gray-700 py-2 px-4 cursor-pointer mt-2">
                    <Link href="#">Continue with Google</Link>
                </button>

                {/* terms and privacy */}
                <p className="text-sm text-gray-500 mt-2">
                    By signing up, you agree to our <Link href="/terms" className="text-blue-500 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-500 hover:underline">Privacy Policy</Link>.
                </p>

                {/* home */}
                <p className="text-sm text-gray-500 mt-8">
                    <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
                </p>
            </div>
        </main>
    )
}