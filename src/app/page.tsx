import Link from "next/link";


export default function Home() {
  return (
    <div className="grid">
      <Link href="/signin">Sign In</Link>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}
