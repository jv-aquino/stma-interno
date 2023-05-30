"use client";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import supabase from "@/lib/supabase"

import { useState, useEffect } from "react";

export default function Home() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(res => {
      const { data: { user } } = res;
      (user) ? setLogged(true) : setLogged(false);
    })
  }, []);

  async function uploadFile(file) {
    const { data, error } = await supabase.storage.from(process.env.NEXT_PUBLIC_BUCKET).upload('pedidos.csv', file);

    if (error) {
      
    } else {}
  }

  return (
    <>
      <Navbar logged={logged} setLogged={setLogged} />
      
      <main className="flex flex-col items-center">
        <h1>Atualizar Pedidos</h1>
        <p>Para atualizar os pedidos que estão em compras e que aparecem para os outros funcionários da FEG, que desejam visualizar suas solicitações, é necessário:</p>
        <ol>
          <li>Acessar o sistema de compras</li>
          <li>Ir até o final da página e baixar o arquivo com os pedidos</li>
          <li>Fazer o upload do arquivo abaixo 👇</li>
        </ol>
        <div>
          <input type="file" />
          <button>Upload</button>
        </div>
      </main>

      <Footer />
    </>
  )
}