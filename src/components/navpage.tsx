import PixelArrowRight from "./PixelArrowRight"

export default function NavPage() {
    const menuItems = {
        'La Plateforme': ['AI tooling',
                        'Frontier models',
                        'AI infrastructure',
                        'Pricing'],
        'Le Chat': ['Pricing'],
        'Use cases': ['By team',
                    'By industry',
                    'By capability'],
        'Services': ['Model customization',
                    'Value realization',
                    'Deployment'],
        '': ['Models', 'Latest research'],
        'Customer stories': [],
        'Developers':
        ['Documentation',
        'API reference',
        'Community',
        'Cookbooks'],
        'Partners': [],
      '': ['About us', 'Careers', 'News', 'Contact us']
    }
    return (
        <div className="z-50 h-[100vh] w-[100vw] bg-[#FFFAEA]">
            
            {/* Bottom nav */}
            <div className="sticky-bottom mx-3 mb-6 text-white">
                <button className="bg-black px-3">
                    Try the API
                    <PixelArrowRight color="white" size={12}/>
                </button>  
                <button className="bg-black px-3">
                    Talk to sales
                    <PixelArrowRight color="white" size={12}/>
                </button>  
            </div>
        </div>
    )
}