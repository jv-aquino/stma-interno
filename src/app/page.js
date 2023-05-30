"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"

export default function Home() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(res => {
      const { data: { user } } = res;
      (user) ? setLogged(true) : setLogged(false);
    })
  }, []);

  return (
    <>
      <Navbar logged={logged} setLogged={setLogged} />

      <main className="flex flex-col items-center">
        <h1>Início</h1>
        
        <div className="">
          <p>Site administrativo da seção técnica de materiais da FEG.</p>

          <p>Aqui é possível acessar os sistemas internos da seção e atualizar informações necessárias de forma mais simples.</p>
        </div>
      </main>

      <Footer />
    </>
  )
}
