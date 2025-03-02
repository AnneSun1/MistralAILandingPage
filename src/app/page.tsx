'use client'
import Image from "next/image"
import PixelArrowRight from "@/components/PixelArrowRight"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import '@/styles/globals.css'
import PixelArrowRightBar from "@/components/PixelArrowRightBar"
import { useRef, useState } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import OrangeBarArrow from "@/components/OrangeBarArrow"

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
  const logos1Ref = useRef<HTMLDivElement>(null);
  // Sliding animation
  useGSAP(() => {
    const logoWidth = logosRef.current?.scrollWidth || 0
    gsap.to(logosRef.current, {
      x: `-=${logoWidth / 2}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => Number.parseFloat(x) % (logoWidth / 2)),
      },
    })
    const logo1Width = logos1Ref.current?.scrollWidth || 0
    gsap.to(logos1Ref.current, {
      x: `-=${logo1Width / 2}`,
      duration: 30,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => Number.parseFloat(x) % (logo1Width / 2)),
      },
    })
  }, [])

  const stillRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // ScrollTrigger for the pinned words scrolling
  useGSAP(() => {
    gsap.to(stillRef.current, {
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top center",
        end: "bottom 75%",
        pin: stillRef.current,
        scrub: true,
        pinSpacing: false
      }
    })
  }, [])

  const imagesRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  
  // ScrollTimeline for the leChat stuff
  useGSAP(() => {
    gsap.to(image1Ref.current, {
      scrollTrigger: {
        trigger: image1Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      opacity: 1,
      scale: 1.1
    })
    gsap.to(image2Ref.current, {
      scrollTrigger: {
        trigger: image2Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      opacity: 1,
      scale: 1.1
    })
    gsap.to(image3Ref.current, {
      scrollTrigger: {
        trigger: image3Ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      opacity: 1,
      scale: 1.1
    })
  })
  
  
  return (

    <div className="min-h-screen flex flex-col bg-[#FFF8E7]">

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
           <div className="absolute inset-0" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-7xl break-words font-thin">Frontier AI. In Your Hands.</h1>
            <p className="text-xl md:text-2xl">Configurable AI for all builders.</p>

            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Talk to le Chat"
                  className="focus:outline-none text-sm w-full h-12 px-6 text-black rounded-md bg-[#FFFAEA]"
                />
                <button className="absolute right-1 top-1 bottom-1 pl-2 pr-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                  <PixelArrowRight color={"white"} size={15}/>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="px-4 py-2 border-b border-white text-white  rounded-md flex items-center group">
                Enterprise deployments
                <div className="group-hover:text-[#FA5111]">
                  <PixelArrowRight color="#FA5111" size={12}/>
                </div>
                
              </button>
              <button className="px-4 py-2 border-b border-white text-white rounded-md flex group items-center">
                APIs on la Plateforme
                <div className="group-hover:text-[#FA5111]">
                <PixelArrowRight color="#FA5111" size={12}/>
                </div>
              </button>
            </div>
          </div>
        </div>

         {/* App store bar */}
         <div id="app-bar" className="justify-center md:justify-normal flex flex-wrap md:m-8 md:grid md:grid-cols-[130px_auto] bg-[#FFF0C2] m-5">
            <div className="md:col-start-1 x-30 md:row-start-1">
              <div className="h-3 md:h-6 w-full bg-[#FF9900]" />
              <div className="h-3 md:h-6 w-full bg-[#FF8533]" />
              <div className="h-3 md:h-6 w-full bg-[#FF7033]" />
              <div className="h-3 md:h-6 w-full bg-[#FF5C33]" />
              <div className="h-3 md:h-6 w-full bg-[#FF4733]" />
            </div>
            <div className="md:col-start-1 md:row-start-1 pt-4 z-10 flex md:transparent justify-center items-center">
              <Image className="hidden md:block"  src="/Mistral_square_logo.svg" alt="logo" width={70} height={70}/>
              <Image className="md:hidden block" src="/Mistral_Logo.png" alt="logo" width={70} height={70}/>
            </div>
            
            <div className="flex px-5 m-5 justify-between items-center flex-wrap ">
              <p>Le Chat: Your AI assistant for life and work.</p>
              <div className="flex flex-row items-center">
              <Image src='/applestore.svg' alt="apple" width={120} height={40} className="h-8 w-auto" />
              <Image src='/androidstore.svg' alt="android" width={120} height={40} className="h-8 w-auto" />
              <div className="absolute bottom-0 right-0">
              {/* <Image src='/Mistral_ani.gif' alt="gif" width={120} height={40} className="h-8 w-auto" /> */}
            </div>
              </div>
              
            </div>
          </div>

        {/* Partner Logos */}
        
        <div className="overflow-hidden">
          <div className="py-12 relative">
            <div className="flex" ref={logos1Ref}>
              {[...logos, ...logos].map((name, idx) => (
                <div key={idx} className="flex-shrink-0 mx-8">
                  <Image src={`/${name}.webp`} alt={name} width={120} height={40} className="h-8 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Cool Scroll Section */}
        <div className="grid grid-cols-2 w-full bg-[#FFF8E7]" ref={scrollRef}>
            {/* Scrolling Title */}
            {/* Hold still while we scroll until bottom or top scroll limit is met */}
              <div className="p-12" ref={stillRef}>
                <h2 className="text-2xl md:text-5xl md:w-[300px] flex items-end">Your AI future belongs in your hands.
                <Image src="flag.svg" alt="flag" height={30} width={30}/>
                </h2>
              </div>

            {/* Right side */}
            <div>
            <div className="pt-6 border-b-2 border-t-2 border-[#fef1c3] space-y-8 pb-6 mr-8">
                <h3 className="text-2xl md:text-3xl mr-10">Customizable, from pre-training to the real world.</h3>
                <div className="relative">
                <div className="absolute left-[-25px] top-1/2 transform -translate-y-1/2">
                    <OrangeBarArrow color={"#FA5111"} size={40} />
                </div>
                <p className="text-md ml-[40px]">World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.</p>
              </div>
              </div>
            {Object.entries(scrollMap).slice(1).map(([key, val]) => (
              <div key={key} className="pt-6 border-b-2 border-[#fef1c3] space-y-8 pb-6 mr-8">
                <h3 className="text-2xl md:text-3xl mr-[50px]">{key}</h3>
                <div className="relative">
                <div className="absolute left-[-25px] top-1/2 transform -translate-y-1/2">
                    <OrangeBarArrow color={"#FA5111"} size={40} />
                </div>
                <p className="text-md ml-[40px]">{val}</p>
            </div>
              </div>
            ))}
            </div>
              
            </div>

          {/* Scroll animation 2 */}
          {/* Text Banner */}
        <div className="overflow-hidden mt-5">
          <div className="py-12 relative">
            <div className="flex items-center" ref={logosRef}>
              {[1, 2].map((_, idx) => (
                <div key={idx} className="flex items-center flex-shrink-0">
                  <h1 className="text-6xl whitespace-nowrap mr-8">One platform. Many uses. For all humans.</h1>
                  <Image src="/Mistral_Logo.png" alt="logo" height={100} width={100} className="mx-8" />
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Card section */}
          <div className="relative bg-cover bg-center inset-0 bg-[#FFFAEA]"  
            style={{
              backgroundImage: `
              linear-gradient(to right, #fef1c3 1px, transparent 1px),
              linear-gradient(to bottom, #fef1c3 1px, transparent 1px)`,
              backgroundSize: "3rem 3rem",}}
              ref={imagesRef}
              >

            <div className="mx-12 flex flex-col items-center justify-center space-y-8 py-8">

              {/* Words belong in col flex, Image + word together in row flex */}
              <div className="relative grid my-8 md:grid-cols-2 gap-4 items-center flex fex-wrap opacity-30" ref={image1Ref}>
                <div className="space-y-8 md:w-[350px] pl-10">
                  <h2 className="text-4xl md:text-5xl">Get work done.</h2>
                  <p className="text-lg md:text-xl">
                    Your personalized multilingual AI assistant, with web search, uploads, and data connectors.
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Discover le Chat
                    <PixelArrowRight color="white" size={12}/>
                  </button>
                </div>
                <Image 
                className="mr-4 my-4 w-5/6 sm:w-5/6"
                    src="/mistral_card_img1.webp"
                    alt="Mistral Card Image 1"
                    width={500}
                    height={500}
                  />
              </div>
              <div className="relative grid my-8 md:grid-cols-2 gap-4 items-center flex fex-wrap opacity-30" ref={image2Ref}>
                <div className="space-y-8 md:w-[350px] p-5">
                  <h2 className="text-4xl md:text-5xl">Code faster.</h2>
                  <p className="text-lg md:text-xl">
                    Build faster with coding assistance across 80+ languages.
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Code with le Chat
                    <PixelArrowRight color="white" size={12}/>
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

              <div className="relative grid my-8 md:grid-cols-2 gap-4 items-center flex fex-wrap opacity-30" ref={image3Ref}>
                <div className="space-y-8 md:w-[350px] p-5">
                <h2 className="text-4xl md:text-5xl">Build AI-powered apps.</h2>
                  <p className="text-lg md:text-xl">
                    Build and deploy custom AI solutions with frontier models.
                  </p>
                  <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Discover la Plateforme
                    <PixelArrowRight color="white" size={12}/>
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
          </div>

          {/* Announcement */}
          <section className="m-8 height-[300px] bg-[#FFF0C2] py-6 px-[30px] md:px-[50px]">
            <h1>Announcements</h1>

            <div className="mt-[50px] mb-[30px]">
              <h2 className="text-2xl md:w-[450px] md:text-3xl">Announcing the all new le Chate: Your AI Assistant for life and work.
              <button className="bg-orange-600 text-white ml-[10px] py-[5px] pr-[6px]">
                <PixelArrowRightBar/>
              </button>
              </h2>
            </div>
            <p className="md:text-right">Feb 6, 2025</p>
          </section>

          {/* Careers */}
          <section className=" m-8 h-[475px] my-[75px] text-white flex flex-col justify-end"
            style={{
            backgroundImage: "url('mistral_career.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
            <div className="mx-[50px] mb-[40px]">
              <h1 className="mt-[50px] mb-[30px] text-5xl md:w-[400px]">Build the future of secure, private AI.</h1>
           
            <div className="flex justify-between flex-wrap">
              <h2 className="md:w-[400px]">Now seeking: Insatiably curious AI enthusiasts with an entrepreneurial spirit.</h2>
              <button className="pr-4 py-2 border-b border-white group text-white rounded-md flex items-center">
                View open roles
                <div className="group-hover:text-[#FA5111]">
                <PixelArrowRight color="white" size={12}/>
                </div>
              </button>
            </div>
            </div>
          </section>

          {/* Next chapter */}
          <section >
          <div className="relative z-10 bg-[#FFF8E7] text-center">
          <div className="container mx-auto mb-[100px] px-4">
            <h2 className="text-4xl md:text-6xl mb-12 max-w-4xl mx-auto">The next chapter of AI is yours.</h2>
            <div className="flex flex-row flex-wrap gap-6 justify-center">
              <button className="group pb-1 inline-flex group border-b border-black items-center text-lg font-medium hover:opacity-80">
                Start building with Mistral AI
                <div className="group-hover:text-[#FA5111]">
                <PixelArrowRight color="#FA5111" size={12}/>
                </div>
              </button>
              <button className="group pb-1  inline-flex group border-b border-black items-center text-lg font-medium hover:opacity-80">
                Talk to an expert
                <div className="group-hover:text-[#FA5111]">
                <PixelArrowRight color="white" size={12}/>
                </div>
              </button>
            </div>

          </div>
          <div className="relative bottom-0 left-0 right-0">
              {/* Pixelated Logo */}
              
              <div className="h-12 bg-[#FFAD1A] flex justify-center z-50">
                <div className="relative bottom-0 flex items-center ">
                <Image src="/large_mistral_ani.gif" alt="gif" width={200} height={200} className="object-contain " />
              </div>
              </div>
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

