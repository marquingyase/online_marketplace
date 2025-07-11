"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { usePathname } from 'next/navigation';

const authRoutes = ['/signin', '/signup', '/forgot-password'];

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const pathname = usePathname();
    const showLayout = !authRoutes.includes(pathname);

    return (
        <>
            {showLayout && <Header />}
            {children}
            {showLayout && <Footer />}
        </>
    );
}