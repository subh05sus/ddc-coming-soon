import Link from "next/link"
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Logo and Header Section */}
      <header className="flex justify-between items-start p-8">
        <div className="border border-white p-4">
          <h1 className="text-2xl font-light tracking-wider">
            DEV
            <br />
            DOT
          </h1>
        </div>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors">
          Read Soul Paper
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-8">
        <p className="text-xl mb-4">Change is the only Constant..</p>
        <h2 className="text-6xl sm:text-8xl font-light tracking-wider">
          COMING
          <br />
          SOON
        </h2>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center p-8">
        <div className="flex gap-6">
          <Link 
            href="https://www.instagram.com/DevDotCommunity" 
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link 
            href="https://x.com/DevDotCommunity" 
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link 
            href="https://chat.whatsapp.com/ELloC2X2oPvIMWqTb1cvVo" 
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <span className="text-lg">WA</span>
            <span className="sr-only">WhatsApp</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/company/devdotcom" 
            target="_blank"
            className="hover:opacity-70 transition-opacity"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <div className="text-sm opacity-70">
          © 2024 DevDot Community
        </div>
      </footer>
    </div>
  )
}

