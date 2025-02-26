import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/mistral_square_Logo.svg" alt="Logo" width={38} height={38} className="h-8 w-8" /> 
            {/* logo height is 1.42x the width */}
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-orange-600">
              Products
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600">
              Solutions
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600">
              Research
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600">
              Resources
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-orange-600">
              Company
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-orange-600 flex items-center">
            Try the API
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 flex items-center">
            Talk to sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}

