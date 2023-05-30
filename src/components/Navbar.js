import Image from "next/image"
import logo from "@/app/logo.png"

import Link from 'next/link';
import { useEffect, useState } from "react";

import supabase from "@/lib/supabase";

export default function Navbar({logged, setLogged}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="bg-grey-100 w-full flex items-center justify-between py-3 px-7">
      <Image src={logo} alt='' width={155} height={65} />

      {!isLoading ? (
        <ul className="flex gap-2
        text-black text-[1.7rem] font-bold">
          <Link href="/"><li className={logged ? "text-[1.75rem]" : ''}>Início</li></Link>
          {(!logged) ? <Link href="/login"><li>Login</li></Link> : null}

          {(logged) ? (<div className="dropdown">
            <li>Atualizar <span className="symbol left-[-4px]">expand_more</span></li>
            <ul>
              <Link href="/pedidos"><li>Pedidos</li></Link>
              <Link href="/equipe"><li>Equipe</li></Link>
              <Link href="/faq"><li>FAQ</li></Link>
            </ul>
          </div>) : null}

          {(logged) ? <li className="cursor-pointer" onClick={() => {
            supabase.auth.signOut();
            setLogged(false);
          }}><span className="symbol">logout</span></li> : null}
        </ul>
      ) : 
      <p>Carregando...</p>
      }
    </nav>
  )
}