"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from 'next/navigation'

import supabase from "@/lib/supabase"
import { useEffect } from "react";

function Login() {
  const router = useRouter();

  const handleLogin = async e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: senha });

    if (error) {
      console.log(error);
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <h1 className="">Login Administrativo</h1>
      <form onSubmit={handleLogin} className="p-4 flex flex-col gap-3 
      rounded-md bg-dark-blue-500 shadow-lg text-black text-lg">
        <label>
          Email: <input type="email" id="email" placeholder="exemplo@unesp.br" />
        </label>
        <label>
          Senha: <input type="password" id="senha" />
        </label>
        <button type="submit" className="px-3 py-1 w-fit m-auto rounded   bg-light-blue-500 font-bold font-header text-2xl">Login</button>
      </form>
    </>
  )
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { data, error } = supabase.auth.getSession();
    if (data) {
      console.log("ebaaa");
    }
  }, [router]);

  return (
    <>
      <Navbar />
      
      <main className="flex flex-col items-center">
        <Login />
      </main>

      <Footer />
    </>
  )
}