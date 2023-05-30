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

  return (
    <>
      <Navbar logged={logged} setLogged={setLogged} />
      
      <main className="flex flex-col items-center">

      </main>

      <Footer />
    </>
  )
}