import Image from "next/image"
import logo from "@/app/logo.png"

import Link from 'next/link';
import { useEffect, useState } from "react";

export default function Navbar({logged, logoutFunc}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="bg-white w-full flex items-center justify-between py-3 px-7">
      <Image src={logo} alt='' width={155} height={65} />

      {!isLoading ? (
        <ul className="flex gap-2
        text-black text-2xl font-bold">
          <Link href="/"><li>Início</li></Link>
          {(!logged) ? <Link href="/login"><li>Login</li></Link> : null}
          {(logged) ? <li className="cursor-pointer" onClick={logoutFunc}><span class="material-symbols-outlined">logout</span></li> : null}
        </ul>
      ) : 
      <p>Carregando...</p>
      }
    </nav>
  )
}