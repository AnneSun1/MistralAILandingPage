import { useState } from "react"
import PixelArrowRight from "./PixelArrowRight"
import Image from "next/image"

interface NavPageProps {
    navOpen: boolean;
    setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavPage: React.FC<NavPageProps> = ({ navOpen, setNavOpen }) => {
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
    const [menuOpen, setMenuOpen] = useState(false)
    const [currIdx, setCurrIdx] = useState<number>(-1)
    return (
        <div className="z-50 h-full fixed overflow-hidden inset-0 top-0 left-0 border border-black h-full bg-[#FFFAEA]">
            
            <div className="justify-end flex p-10" onClick={() => (setNavOpen(!navOpen))}>
                <Image src='close.svg' height={24} width={24} alt="close"/>
            </div>

            {/* Menu options */}
            {links.map((link, idx) => (
                <div>
                <div key={idx} className="py-5 mx-8 border-b border-[#fef1c3] flex flex-row justify-between"
                onClick={() => {
                    if (menuOpen && (idx == currIdx)) {
                        setMenuOpen(false);
                    } else {
                        setCurrIdx(idx);
                        setMenuOpen(true); 
                    }
                
                }}>
                    {link}
                    { currIdx == idx && menuOpen ?
                    <PixelArrowRight color="black" size={12} /> : 
                    <PixelArrowRight color="white" size={12} /> 
                    }
                </div>
                {/* Render submenu if current index matches and menu is open */}
                {currIdx === idx && menuOpen && (
                <div className="space-y-4 my-4">
                    {links2[idx].map((menuItem, menuIdx) => {
                    return Object.entries(menuItem).map(([key, subItems]) => (
                        <div key={menuIdx} className="pl-5 space-y-4">
                        <h3 className="px-4">{key}</h3>
                        {Array.isArray(subItems) && subItems.length > 0 ? (
                            subItems.map((subItem, subIdx) => (
                            <div key={subIdx} className="pl-10 text-sm text-gray-600">
                                {subItem}
                            </div>
                            ))
                        ) : (
                        null
                        )}
                        </div>
                    ));
                    })}
                </div>
                )}
                </div>
            ))}

            {/* Bottom nav */}
            <div className="fixed left-1/2 transform -translate-x-1/2 bottom-4 p-5 flex space-y-4 w-screen flex-col text-white">
                <button className="bg-black pl-3 p-2 flex flex-row justify-between items-center">
                    Try the API
                    <div>
                    <PixelArrowRight color="white" size={12}/>
                    </div>
                </button>  
                <button className="bg-black pl-3 p-2 flex flex-row justify-between items-center">
                    Talk to sales
                    <PixelArrowRight color="white" size={12}/>
                </button>  
            </div>
        </div>
    )
}

export default NavPage;