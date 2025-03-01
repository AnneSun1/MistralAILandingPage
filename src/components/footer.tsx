import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  "Why Mistral": ["About us", "Our customers", "Careers", "Contact us"],
  Explore: ["AI solutions", "Partners", "Research", "Documentation"],
  Build: ["La Plateforme", "Le Chat", "Try the API"],
  Legal: ["Terms of service", "Privacy policy", "Data processing agreement", "Legal notice"],
}

export default function Footer() {
  return (
    <footer className="bg-[#FFF0C2] border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-orange-600 font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm hover:text-orange-600">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Image src="/placeholder.svg" alt="Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-sm">Mistral AI © 2025</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-orange-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

