"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from 'next/navigation'

import supabase from "@/lib/supabase"
import { useState } from "react";

function Login() {
  const [user, setUser] = useState();
  const router = useRouter();

  const handleLogin = async e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, senha });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      setUser(data);
      router.push('/')
    }
  }

  if (user) {
    router.push('/')
    return null
  }

  return (
    <div>
      <h1 className="">Login Administrativo</h1>
      <form onSubmit={handleLogin} className="p-4 flex flex-col gap-3 
      rounded bg-dark-blue-500 text-black">
        <label>
          Email: <input type="email" id="email" />
        </label>
        <label>
          Senha: <input type="password" id="senha" />
        </label>
        <button type="submit" className="px-3 py-1 w-fit m-auto rounded   bg-light-blue-500">Login</button>
      </form>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="flex justify-center">
        <Login />
      </main>

      <Footer />
    </>
  )
}