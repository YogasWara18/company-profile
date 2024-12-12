'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

const handleLinkClick = (e: React.MouseEvent) => {
  e.preventDefault()
  const targetId = e.currentTarget.getAttribute('href')?.substring(1)
  const targetElement = targetId ? document.getElementById(targetId) : null
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
  setIsMenuOpen(false)
}

  return (
<header className="absolute top-0 left-0 w-full text-white z-50 border-b-0">
  <div className="container mx-auto px-4 py-2">
    <div className="flex justify-between items-center">
<Link href="/" className="flex items-center relative">
<Image
  className="mr-6 brightness-125 hover:brightness-150 transition-brightness duration-300 transition-transform duration-300 transform hover:scale-105"
  src="/logo.png"
  alt="Kawasaki Logo"
  width={150}
  height={50}
/>
</Link>
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-green-700 md:bg-transparent`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
          <li><Link href="/" onClick={handleLinkClick} className="hover:text-lime-300 transition-colors duration-300">Home</Link></li>
          <li><Link href="/models" onClick={handleLinkClick} className="hover:text-lime-300 transition-colors duration-300">Sponsor</Link></li>
          <li><Link href="/technology" onClick={handleLinkClick} className="hover:text-lime-300 transition-colors duration-300">Class</Link></li>
          <li><Link href="/racing" onClick={handleLinkClick} className="hover:text-lime-300 transition-colors duration-300">About</Link></li>
          <li><Link href="/contact" onClick={handleLinkClick} className="hover:text-lime-300 transition-colors duration-300">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </div>
</header>
  )
}
