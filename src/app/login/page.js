"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from 'next/navigation'

import supabase from "@/lib/supabase"
import { useEffect } from "react";

let loading = true;

function Login() {
  const router = useRouter();

  const handleLogin = async e => {
    e.preventDefault();
    if (loading) { return }

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

        <div>
          <label className="text-xl font-medium pr-2" htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="exemplo@unesp.br" />
        </div>

        <div>
          <label className="text-xl font-medium pr-2" htmlFor="senha">Senha:</label>
          <input type="password" id="senha" placeholder="Senha123" />
        </div>

        <button type="submit" className="px-3 py-1 w-fit m-auto rounded   bg-light-blue-500 font-bold font-header text-2xl">Login</button>
      </form>
    </>
  )
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(res => {
      const { data: { user } } = res;
      (user) ? router.push('/') : null;
      loading = false;
    })
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