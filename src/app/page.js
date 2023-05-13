import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center">
        <h1>Início</h1>
        <div className="">
          <p>Site administrativo da seção técnica de materiais da FEG</p>
        </div>
      </main>

      <Footer />
    </>
  )
}
