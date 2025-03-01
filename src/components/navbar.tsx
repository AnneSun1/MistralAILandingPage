'use client'
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import PixelArrowRight from "./PixelArrowRight"

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
    var currIdx = -1;
    return ( 
        <header className="fixed top-0 left-0 right-0 border-b z-50 py-6 w-full bg-transparent h-auto">
        


          <div className="container mx-auto flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center ">
                <Image src="/mistral_square_Logo.svg" alt="Logo" width={38} height={38} className="h-8 w-8" /> 
                {/* logo height is 1.42x the width  */}
            </Link>

            </div>
            {/* Side bar */}
            <div className="">
                <Image src="/menu_24.svg" alt="Logo" width={38} height={38} className="h-8 w-8"/>
            </div>
            </div>
{/*
            <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-6">
                {links.map((link, idx) => (
                    <Link href="#" key={idx}
                        className="text-white font-medium hover:text-orange-600" 
                        onMouseDown={() => {
                            currIdx = idx;
                            setMenuOpen(true);
                        }}>
                        {link}
                    </Link>
                ))}
            </nav>
            <button className="px-4 py-2 bg-white/30 text-white hover:text-orange-600 hover:bg-white flex items-center">
                Try the API
                <PixelArrowRight/>
            </button>
            <button className="px-4 py-2 bg-white/30 text-white hover:text-orange-600 hover:bg-white flex items-center">
                Talk to sales
                <PixelArrowRight/>
            </button>
            </div>
        </div> */} 
        {menuOpen && (
            <div className="flex flex-col w-[200px] h-[200px]" onMouseEnter={() => {setMenuOpen(true)}} 
                onMouseLeave={() => {setMenuOpen(false)}}>
                    {menuItems[currIdx].map((link, _) => (
                        <p key={_}>{link}</p>
                    ))}
            </div>)}
        </header>
    )
}

