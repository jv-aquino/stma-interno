"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useRouter } from 'next/navigation'

import supabase from "@/lib/supabase"
import { useState } from "react";

function Login() {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const router = useRouter()

  const handleLogin = async e => {
    e.preventDefault()

    setLoading(true);

    setEmail(document.querySelector('#email').value);
    setSenha(document.querySelector('#senha').value);

    const { data, error } = await supabase.auth.signInWithPassword({ email, senha })
    setUser(data);

    if (error) {
      // Handle error
    } else {
      router.push('/admin')
    }

    setLoading(false)
  }

  if (user) {
    router.push('/admin')
    return null
  }

  return (
    <div>
      <h1>Login Administrativo</h1>
      <form onSubmit={handleLogin} className="p-4 flex flex-col rounded bg-dark-blue-500 text-black">
        <label>
          Email: <input type="email" id="email" value={email} />
        </label>
        <label>
          Senha: <input type="password" id="senha" value={senha} />
        </label>
        <button type="submit">Sign In</button>
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