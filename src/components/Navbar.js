import Image from "next/image"
import logo from "@/app/logo.png"

import Link from 'next/link';

export default function Navbar({logged}) {
  return (
    <nav className="bg-white w-full flex items-center justify-between py-3 px-7">
      <Image src={logo} alt='' width={155} height={65} />

      <ul className="flex gap-2
      text-black text-2xl font-bold">
        <Link href="/"><li>Início</li></Link>
        {(!logged) ? <Link href="/login"><li>Login</li></Link> : null}
        {(logged) ? <li className="cursor-pointer">Logout</li> : null}
      </ul>
    </nav>
  )
}