import Image from "next/image"
import { ArrowRight } from "lucide-react"
import '@/styles/hero-bg.css'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {

  return (

    <div className="min-h-screen flex flex-col">

      <Navbar/>

      <main className="flex-1">
        <div
          className="relative min-h-[80vh] flex flex-col items-center justify-center text-white px-4 py-20"
          style={{
            backgroundImage: "url('mistral_bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Remove or reduce the opacity of the gradient overlay since the image has natural gradation */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/20 to-orange-800/30 mix-blend-multiply" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">Frontier AI. In Your Hands.</h1>
            <p className="text-xl md:text-2xl">Configurable AI for all builders.</p>

            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Talk to le Chat"
                  className="w-full h-12 pl-4 pr-12 text-black rounded-md"
                />
                <button className="absolute right-1 top-1 bottom-1 px-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="px-4 py-2 border border-white text-white hover:bg-white/10 rounded-md flex items-center">
                Enterprise deployments
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="px-4 py-2 border border-white text-white hover:bg-white/10 rounded-md flex items-center">
                APIs on la Plateforme
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-20 px-4 bg-[#FFF8E7]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">Your AI future belongs in your hands.</h2>
                <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md flex items-center">
                  Talk to Le Chat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Customizable, from pre-training to the real world.
                </h3>
                <div className="flex gap-3">
                  <ArrowRight className="h-6 w-6 text-orange-600 flex-shrink-0" />
                  <p className="text-lg">
                    World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.
                  </p>
                </div>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="mt-20">
              <div className="flex flex-wrap justify-center gap-12 items-center opacity-80">
                <Image src="/placeholder.svg" alt="MongoDB" width={120} height={40} className="h-8 w-auto" />
                <Image src="/placeholder.svg" alt="Quora" width={120} height={40} className="h-8 w-auto" />
                <Image src="/placeholder.svg" alt="SAP" width={120} height={40} className="h-8 w-auto" />
                <Image src="/placeholder.svg" alt="Snowflake" width={120} height={40} className="h-8 w-auto" />
              </div>
            </div>
          </div>

          {/* Card section */}
          <section className="relative bg-cover bg-center h-screen hero-bg" >
          <div className="flex flex-col justify-between space-y-4">
            {/* Words belongin col flex, Image + word together in vertical flex */}
            <div className="flex flex-wrap">
              <div className="flex flex-col">
                <h1>Get Work done</h1>
                <p>
                  You personalized multilingual AI assistant with web search, uploads, and data connectors
                </p>
                <button></button>
            </div>
            <Image 
                  src="/mistral_card_img1.webp"
                  alt="Mistral Card Image 1"
                  width={300}
                  height={300}
                />
            </div>

            <div className="flex flex-wrap flex-row">
              <div className="flex flex-col">
                <h1>Get Work done</h1>
                <p>
                  You personalized multilingual AI assistant with web search, uploads, and data connectors
                </p>
                <button></button>
            </div>
            <Image 
                  src="/mistral_card_img2.webp"
                  alt="Mistral Card Image 2"
                  width={300}
                  height={300}
                />
            </div>

            <div className="flex flex-wrap flex-row">
              <div className="flex flex-col">
                <h1>Get Work done</h1>
                <p>
                  You personalized multilingual AI assistant with web search, uploads, and data connectors
                </p>
                <button></button>
            </div>
            <Image 
                  src="/mistral_card_img3.webp"
                  alt="Mistral Card Image 3"
                  width={300}
                  height={300}
                />
            </div>
          </div>
          </section>

          {/* Announcement */}
          <div>
            <h1>Announcements</h1>
            <div>
              <p>Announcing the all new le Chate: Your AI Assistant for life and work.</p>
              <button>
                {/* arrow button */}
              </button>
            </div>
            <p>Feb 6, 2025</p>
          </div>

          {/* Careers */}
          <div style={{
            backgroundImage: "url('mistral_career.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            {/* relative positioning */}
          </div>

          {/* Next chapter */}
        </section>
      </main>

      <Footer />
    </div>
  )
}

