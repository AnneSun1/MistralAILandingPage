'use client'
import Image from "next/image"
import PixelArrowRight from "@/components/PixelArrowRight"
import '@/styles/hero-bg.css'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PixelArrowRightBar from "@/components/PixelArrowRightBar"
import { useRef } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const logos = ['axa', 'belfius', 'bnpparibus', 'brave', 'cloudflare', 'cmacgm', 'francetravail', 'harvey','huggingface', 'ibm', 'mars', 'mongodb', 'octoai','orange', 'quora', 'sap', 'snowflake']
  const scrollMap = {
    'Customizable, from pre-training to the real world.': 'World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.',
    'Private and portable.': 'A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud, edge, devices, data centers, and more.',
    'Transparent and trustworthy.': 'Strongest global contributor to open source AI and AI policy. Mistral AI is the world’s greenest and leading independent AI lab.',
    'Deeply engaged solutioning and value delivery.': 'Hands-on assistance from the world’s best AI engineers and scientists across deployment, solutioning, safety, and beyond.',
    'Delightful interfaces.': 'Bringing frontier intelligence to life with intuitive user experiences across life and work.'
  }

  const logosRef = useRef<HTMLDivElement>(null);
  const stillRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(logosRef.current, {
      keyframes: [
        { x: 0, duration: 1 },
        { x: '-20%', duration: 1 },
        { x: '-40%', duration: 1 },
        { x: '-60%', duration: 1 },
        { x: '-80%', duration: 1 },
        { x: '-100%', duration: 1 },
      ],
      repeat: -1
    })
  })


  useGSAP(() => {
    gsap.to(stillRef.current, {
      scrollTrigger: {
        trigger: scrollRef.current,
        markers: true,
        start: "top top",
        end: "bottom 200",
        pin: stillRef.current,
        scrub: true,
        pinSpacing: false
      }

    })
  }, [])

  return (

    <div className="min-h-screen flex flex-col font-sans">

      <Navbar/>

      <main className="flex-1">
        <div
          className="relative min-h-[90vh] flex flex-col items-center justify-center text-white px-4 py-20"
          style={{
            backgroundImage: "url('mistral_bg.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Remove or reduce the opacity of the gradient overlay since the image has natural gradation */}
          <div className="absolute inset-0" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-7xl">Frontier AI. In Your Hands.</h1>
            <p className="text-xl md:text-2xl">Configurable AI for all builders.</p>

            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Talk to le Chat"
                  className="w-full h-12 pl-4 pr-12 text-black rounded-md"
                />
                <button className="absolute right-1 top-1 bottom-1 px-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                  <PixelArrowRight/>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="px-4 py-2 border-b border-white text-white rounded-md flex items-center">
                Enterprise deployments
                <PixelArrowRight/>
              </button>
              <button className="px-4 py-2 border-b border-white text-white rounded-md flex items-center">
                APIs on la Plateforme
                <PixelArrowRight/>
              </button>
            </div>
          </div>
        </div>

         {/* App store bar */}
         <div className="m-20 grid grid-cols-[130px_auto] bg-[#FFF0C2]">
            <div className="col-start-1 row-start-1">
              <div className="h-6 bg-[#FF9900]" />
              <div className="h-6 bg-[#FF8533]" />
              <div className="h-6 bg-[#FF7033]" />
              <div className="h-6 bg-[#FF5C33]" />
              <div className="h-6 bg-[#FF4733]" />
            </div>
            <div className="col-start-1 row-start-1 z-10 flex justify-center items-center">
              <Image src="/Mistral_square_logo.svg" alt="logo" width={70} height={70}/>
            </div>
            
            <div className="flex px-5 justify-between items-center ">
              <p>Le Chat: Your AI assistant for life and work.</p>
              <div className="flex flex-row">
              <Image src='/applestore.svg' alt="apple" width={120} height={40} className="h-8 w-auto" />
              <Image src='/androidstore.svg' alt="android" width={120} height={40} className="h-8 w-auto" />
              </div>
              <Image src='/Mistral_ani.gif' alt="gif" width={120} height={40} className="h-8 w-auto" />
            </div>
          </div>

        {/* Partner Logos */}
        
        <div className="m-20 flex justify-center items-center w-full overflow-x-auto" ref={logosRef}>
            <div className="flex gap-12">
              {logos.map((name, idx) => (
                <Image src={`/${name}.webp`} alt={name} width={120} height={40} className="h-8 w-auto" />
              ))}
              {logos.map((name, idx) => (
                <Image src={`/${name}.webp`} alt={name} width={120} height={40} className="h-8 w-auto" />
              ))}
            </div>
        </div>


        {/* Cool Scroll Section */}
        <div className="grid grid-cols-2 w-full bg-[#FFF8E7]" ref={scrollRef}>
            {/* Scrolling Title */}
            {/* Hold still while we scroll until bottom or top scroll limit is met */}
              <div className="p-5" ref={stillRef}>
                <h2 className="text-2xl md:text-5xl md:w-[300px]">Your AI future belongs in your hands.
                <Image src="flag.svg" alt="flag" height={30} width={30}/>
                </h2>
              </div>

            {/* Right side */}
            <div>
            {Object.entries(scrollMap).map(([key, val]) => (
              <div className="border-t border-b space-y-8">
                <h3 className="text-2xl md:text-3xl font-semibold">{key}</h3>
                <div className="flex gap-3">
                  <PixelArrowRight/>
                  <p className="text-lg">{val}</p>
                </div>
              </div>
            ))}
            </div>
              
            </div>

          {/* Scroll animation 2 */}
          <div className="m-20 justify-center items-center w-full overflow-x-auto" ref={logosRef}>
            <div className="text-6xl flex flex-row whitespace-nowrap"> 
              <h1 className="overflow-x-scroll">One platform. Many uses. For all humans. </h1>
              <Image src="/Mistral_square_logo.svg" alt="logo" height={100} width={100}/>
              <h1>One platform. Many uses. For all humans. </h1>
              <Image src="/Mistral_square_logo.svg" alt="logo" height={100} width={100}/>
            </div>
            
        </div>

          {/* Card section */}
          <section className="relative bg-cover bg-center inset-0 bg-[#FFFAEA]"  
            style={{
              backgroundImage: `
              linear-gradient(to right, #FFF0C2 1px, transparent 1px),
              linear-gradient(to bottom, #FFF0C2 1px, transparent 1px)`,
              backgroundSize: "3rem 3rem",}}>

            <div className="flex flex-col space-y-8 py-8">

              {/* Words belong in col flex, Image + word together in row flex */}
              <div className="relative grid my-8 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto flex fex-wrap">
                <div className="space-y-8 md:w-[350px] p-5">
                  <h2 className="text-4xl md:text-5xl">Get work done.</h2>
                  <p className="text-lg md:text-xl">
                    Your personalized multilingual AI assistant, with web search, uploads, and data connectors.
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Discover le Chat
                    <PixelArrowRight/>
                  </button>
                </div>
                <Image 
                className="m-4 w-5/6 sm:w-5/6"
                    src="/mistral_card_img1.webp"
                    alt="Mistral Card Image 1"
                    width={500}
                    height={500}
                  />
              </div>
              <div className="relative grid my-8 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto flex fex-wrap">
                <div className="space-y-8 md:w-[350px] p-5">
                  <h2 className="text-4xl md:text-5xl">Code faster.</h2>
                  <p className="text-lg md:text-xl">
                    Build faster with coding assistance across 80+ languages.
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Code with le Chat
                    <PixelArrowRight/>
                  </button>
                </div>
                <Image 
                className="m-4 w-5/6 sm:w-5/6"
                      src="/mistral_card_img2.webp"
                      alt="Mistral Card Image 2"
                      width={500}
                      height={500}
                    />
              </div>

              <div className="relative grid my-8 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto flex fex-wrap">
                <div className="space-y-8 md:w-[350px] p-5">
                <h2 className="text-4xl md:text-5xl">Build AI-powered apps.</h2>
                  <p className="text-lg md:text-xl">
                    Build and deploy custom AI solutions with frontier models.
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Discover la Plateforme
                    <PixelArrowRight/>
                  </button>
              </div>
              <Image 
              className="m-4 w-5/6 sm:w-5/6"
                    src="/mistral_card_img3.webp"
                    alt="Mistral Card Image 3"
                    width={500}
                    height={500}
                  />
              </div>
            </div>
          </section>

          {/* Announcement */}
          <section className="height-[300px] bg-[#FFF0C2] py-6 px-[30px] md:px-[50px]">
            <h1>Announcements</h1>

            <div className="mt-[50px] mb-[30px]">
              <h2 className="text-2xl md:w-[450px] md:text-3xl">Announcing the all new le Chate: Your AI Assistant for life and work.
              <button className="bg-orange-600 text-white">
                <PixelArrowRightBar/>
              </button>
              </h2>
            </div>
            <p className="md:text-right">Feb 6, 2025</p>
          </section>

          {/* Careers */}
          <section className="h-[475px] my-[75px] text-white flex flex-col justify-end"
            style={{
            backgroundImage: "url('mistral_career.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="mx-[50px] mb-[40px]">
              <h1 className="mt-[50px] mb-[30px] text-5xl md:w-[400px]">Build the future of secure, private AI.</h1>
           
            <div className="flex justify-between">
              <h2 className="md:w-[400px]">Now seeking: Insatiably curious AI enthusiasts with an entrepreneurial spirit.</h2>
              <button className="px-4 py-2 border-b border-white text-white rounded-md flex items-center">
                View open roles
                <PixelArrowRight/>
              </button>
            </div>
            </div>
          </section>

          {/* Next chapter */}
          <section >
          <div className="relative z-10 bg-[#FFF8E7] pt-24 pb-32 text-center">
          <div className="container mx-auto mb-[50px] px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 max-w-4xl mx-auto">The next chapter of AI is yours.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group inline-flex items-center text-lg font-medium hover:opacity-80">
                Start building with Mistral AI
                <PixelArrowRight/>
              </button>
              <button className="group inline-flex items-center text-lg font-medium hover:opacity-80">
                Talk to an expert
                <PixelArrowRight/>
              </button>
            </div>

            {/* Pixelated Logo */}
            <div className="mt-16 z-5 relative">
              <Image src="/large_mistral_ani.gif" alt="gif" width={100} height={200} className="mx-auto" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
              <div className="h-12 bg-[#FFAD1A]" />
              <div className="h-12 bg-[#FF9900]" />
              <div className="h-12 bg-[#FF8533]" />
              <div className="h-12 bg-[#FF7033]" />
              <div className="h-12 bg-[#FF5C33]" />
              <div className="h-12 bg-[#FF4733]" />
            </div>
        
        </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

