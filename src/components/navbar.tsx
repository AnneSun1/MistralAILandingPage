'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import PixelArrowRight from "./PixelArrowRight"
import { inherits } from "util"
import PixelArrowRightBar from "./PixelArrowRightBar"
import NavPage from "./navpage"
import { motion } from "framer-motion";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const links = ["Products", "Solutions", "Research", "Resources", "Company"];
    const links2 = [[{'La Plateforme': ['AI tooling',
        'Frontier models',
        'AI infrastructure',
        'Pricing']}, {'Le Chat': 'Pricing'}], 
        [{'Use cases':['By team',
            'By industry',
            'By capability']}, {'Services': ['Model customization',
                'Value realization',
                'Deployment']}], 
        [{'': ['Models', 'Latest research']}], 
        [{'Customer stories': []}, {'Developers':
            ['Documentation',
            'API reference',
            'Community',
            'Cookbooks']}, {'Partners': []}], [{'': ['About us', 'Careers', 'News', 'Contact us']}]]

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
      const checkWidth = () => {
        if (window.innerWidth <= 1024) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
  
      checkWidth();
  
      window.addEventListener('resize', checkWidth);
        return () => {
        window.removeEventListener('resize', checkWidth);
      };
    }, []);
    const [currIdx, setCurrIdx] = useState(0);

    const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const section = document.getElementById("app-bar")

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
        console.log("hi")
      },
      {
        rootMargin: "0px 0px  100% 0px",
        threshold: 1,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [])
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3, 
        ease: "easeOut", 
        staggerChildren: 0.1 // Delays each child animation slightly
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };
    return ( 
        <div>
        <header className={`fixed font-thin top-0 left-0 right-0 z-50 py-8 px-8  w-[100vw] h-max-[300px] 
        ${menuOpen? ' bg-white/50 backdrop-blur-lg': ''} ${scrolled? 'bg-[#FFFAEA]': 'bg-transparent' }`}>
        


          <div className="mx-auto flex items-center justify-between"
          onMouseLeave={() => {
            setMenuOpen(false);
        }}>
            <div className="absolute top-8 left-8 items-center gap-8">
            <Link href="/" className="flex items-center ">
            {scrolled? 
            <Image src="/Mistral_Logo.png" alt="Logo" width={38} height={38} className="h-8 w-8" /> :
            <Image src="/Mistral_square_Logo.svg" alt="Logo" width={38} height={38} className="h-8 w-8" /> 
            // logo height is 1.42x the width
            }
                
            </Link>

            </div>

            
            { isMobile ? (
                // sidebar
            <div className="">
                {scrolled ? <Image src="/menu_24black.svg" alt="Logo" width={38} height={38} className="h-8 w-8" onClick= {()=> setOpenNav(true)}/> 
                : ( <Image src="/menu_24.svg" alt="Logo" width={38} height={38} className="h-8 w-8" onClick= {()=> setOpenNav(true)}/>)}
                {openNav ? <NavPage navOpen={openNav} setNavOpen={setOpenNav}/> : null}
            </div>
            ) : (
            <div >
            <div className={`flex items-center justify-end w-screen items-end pr-[50px] gap-8  ${scrolled? 'text-black': 'text-white'}`} >
            <nav className="hidden md:flex gap-6" >
                {links.map((link, idx) => (
                    <Link href="#" key={idx}
                        className="font-medium hover:text-orange-600 " 
                        onMouseEnter={() => {
                            setCurrIdx(idx)
                            setMenuOpen(true);
                            console.log(currIdx)
                        }}>
                        {link}
                    </Link>
                ))}
            </nav>
            <button className={`px-4 py-2 hover:text-orange-600 hover:bg-white flex items-center ${scrolled ? "bg-[#fef1c3]": "bg-white/30"}`}>
                Try the API
                <PixelArrowRight color={scrolled ? '#FA5111' : 'inherit'} size={12}/>
            </button>
            <button className={`px-4 py-2 hover:text-orange-600 hover:bg-white flex items-center ${scrolled ? "bg-[#fef1c3]": "bg-white/30"}`}>
                Talk to sales
                <PixelArrowRight color="inherit" size={12}/>
            </button>
            </div>

        {menuOpen && (
             <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             className="flex items-center w-screen h-[200px] pr-[50px] pl-[250px] mt-5"
             onMouseEnter={() => setMenuOpen(true)}
             onMouseLeave={() => setMenuOpen(false)}
           >

<motion.div className="flex flex-row gap-16 mb-3" variants={containerVariants}>
      {links2[currIdx].map((menuItem, menuIdx) => {
        return Object.entries(menuItem).map(([key, subItems]) => (
          <motion.div key={menuIdx} className="pl-5" variants={itemVariants}>
            <motion.h3 className="mb-[20px]" variants={itemVariants}>
              {key}
            </motion.h3>
            <div>
              {Array.isArray(subItems) && subItems.length > 0 ? (
                subItems.map((subItem, subIdx) => (
                  <motion.div 
                    key={subIdx} 
                    className="mb-[20px] text-sm text-gray-600"
                    variants={itemVariants}
                  >
                    {subItem}
                  </motion.div>
                ))
              ) : null}
            </div>
          </motion.div>
        ));
      })}
    </motion.div>
            
                </motion.div>
        )}
            </div>
        )}
        </div>
        
        </header>
        {scrolled && (
            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 sm:w-80 md:w-96 lg:w-[500px]">
                 <div className="relative">
                     <input
                         type="text"
                         placeholder="Talk to le Chat"
                         className="focus:outline-none text-sm w-full h-12 px-6 text-black rounded-md bg-white"
                     />
                     <button className="absolute right-2 top-2 bottom-2 pr-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md">
                         <PixelArrowRightBar />
                     </button>
                 </div>
              </div>
           )}
           </div>
    )
}

