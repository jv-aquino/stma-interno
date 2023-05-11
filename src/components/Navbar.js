import Image from "next/image"
import logo from "@/app/logo.png"

import Link from 'next/link';

export default function Navbar({logged}) {
  return (
    <nav className="bg-white w-full flex items-center justify-between py-3 px-7">
      <Image src={logo} alt='' width={155} height={65} />

      <ul className="flex gap-4
      text-black text-xl font-normalText font-bold">
        <li><Link href="/">Início</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>
    </nav>
  )
}