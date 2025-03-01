'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import PixelArrowRight from "./PixelArrowRight"
import { inherits } from "util"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = ["Products", "Solutions", "Research", "Resources", "Company"];
    const menuItems = [[
        'La Plateforme',
        'AI tooling',
        'Frontier models',
        'AI infrastructure',
        'Pricing',
        'Le Chat',
        'Pricing'
      ],[
        'Use cases',
        'By team',
        'By industry',
        'By capability',
        'Services',
        'Model customization',
        'Value realization',
        'Deployment'
      ], ['Models', 'Latest research'],
      [
        'Customer stories',
        'Developers',
        'Documentation',
        'API reference',
        'Community',
        'Cookbooks',
        'Partners'
      ],
      ['About us', 'Careers', 'News', 'Contact us']
    ]
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
      // Function to check window size
      const checkWidth = () => {
        if (window.innerWidth <= 1024) {
          setIsMobile(true);  // Set to true for mobile view
        } else {
          setIsMobile(false); // Set to false for desktop view
        }
      };
  
      // Initial check when the component mounts
      checkWidth();
  
      // Event listener to detect window resizing
      window.addEventListener('resize', checkWidth);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', checkWidth);
      };
    }, []);
    const [currIdx, setCurrIdx] = useState(0);
    return ( 
        <header className={`fixed top-0 left-0 right-0 z-50 py-6 w-full bg-transparent h-max-[300px] ${menuOpen? ' bg-white/50 backdrop-blur-lg': ''}`}>
        


          <div className=" mx-auto flex items-center justify-between">
            <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center ">
                <Image src="/mistral_square_Logo.svg" alt="Logo" width={38} height={38} className="h-8 w-8" /> 
                {/* logo height is 1.42x the width  */}
            </Link>

            </div>

            
            { isMobile ? (
                // sidebar
            <div className="">
                <Image src="/menu_24.svg" alt="Logo" width={38} height={38} className="h-8 w-8"/>
            </div>
            ) : (
            <div>
            <div className={`flex items-center gap-8  ${menuOpen? 'text-black': 'text-white'}`}>
            <nav className="hidden md:flex gap-6">
                {links.map((link, idx) => (
                    <Link href="#" key={idx}
                        className="font-medium hover:text-orange-600 " 
                        onMouseEnter={() => {
                            setCurrIdx(idx)
                            setMenuOpen(true);
                            console.log(currIdx)
                        }}
                        onMouseLeave={() => {
                            setMenuOpen(false);
                        }}>
                        {link}
                    </Link>
                ))}
            </nav>
            <button className="px-4 py-2 bg-white/30 hover:text-orange-600 hover:bg-white flex items-center">
                Try the API
                <PixelArrowRight color="inherit" size={12}/>
            </button>
            <button className="px-4 py-2 bg-white/30 hover:text-orange-600 hover:bg-white flex items-center">
                Talk to sales
                <PixelArrowRight color="inherit" size={12}/>
            </button>
            </div>

        {menuOpen && (
            <div className="flex flex-col w-full h-[250px] items-center justify-center" onMouseEnter={() => {setMenuOpen(true)}} 
                onMouseLeave={() => {setMenuOpen(false)}}>
                    {menuItems[currIdx].map((link, _) => (
                        <p key={_}>{link}</p>
                    ))}
            </div>
        )}
            </div>
        )}
        </div>
        </header>
    )
}

