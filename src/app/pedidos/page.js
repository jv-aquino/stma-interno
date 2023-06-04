"use client";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import supabase from "@/lib/supabase"

import { useState, useEffect } from "react";

export default function Home() {
  const [logged, setLogged] = useState(false);
  const [file, setFile] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(res => {
      const { data: { user } } = res;
      (user) ? setLogged(true) : setLogged(false);
    })
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  async function uploadFile(e) {
    e.preventDefault();

    const { data, error } = await supabase.storage.from(process.env.NEXT_PUBLIC_BUCKET).update('pedidos.csv', file, {
      cacheControl: '3600',
      upsert: true
    });

    if (error) {
      console.log(error);
    } else {
      setSucesso(true);
    }
  }

  return (
    <>
      <Navbar logged={logged} setLogged={setLogged} />
      
      <main className="flex flex-col items-center">
        <h1>Atualizar Pedidos</h1>

        <div>
          <p>Para atualizar os pedidos que estão em compras e que aparecem para os outros funcionários da FEG, que desejam visualizar suas solicitações, é necessário:</p>
          <ol className="font-medium pl-6 list-decimal">
            <li>Acessar o sistema de compras</li>
            <li>Ir até o final da página e baixar o arquivo com os pedidos</li>
            <li>Fazer o upload do arquivo abaixo 👇</li>
          </ol>
        </div>

        <form onSubmit={(e) => uploadFile(e)}>
          <div className="pt-4 flex flex-col gap-3 items-center">
            <input type="file" onChange={handleFileChange} />
            <button className="bg-light-blue-500 font-medium w-fit rounded p-2">Upload</button>
          </div>
        </form>
        {(sucesso) ? <p className="p-2">Arquivo upado com sucesso</p> : ""}
      </main>

      <Footer />
    </>
  )
}