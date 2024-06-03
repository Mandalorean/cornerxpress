import Link from "next/link";

export default function Header() {
  return (
    <header className="flex item-center justify-between">
      <Link href={""}>
        <span class="text-red-600 font-semibold text-3xl">
          Corner Express Mart
        </span>
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          href={""}
          className="bg-primary rounded-full text-white px-8 py-2"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
