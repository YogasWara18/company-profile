'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const technologies = [
  { name: 'Head Engine Tuning', description: 'Edward Collin', image: '/owner.png?height=200&width=200' },
  { name: ' CEO (Chief Executive Officer)', description: 'Thomas Lucas Steward.', image: '/owner2.png?height=200&width=200' },
  { name: 'Executive officer', description: 'Audrey Stephanie Maxwell.', image: '/owner3.png?height=200&width=200' },
]

export default function TechSlide() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % technologies.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full min-h-[500px] bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white py-16 px-4 sm:py-24 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-green-900 opacity-50 mix-blend-multiply"></div>
      <div className="container mx-auto relative z-10">
        <div className="relative h-auto flex items-center justify-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="card bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-4 pt-2 text-center h-full w-full max-w-sm mx-auto transform transition-all duration-300 hover:scale-105">
                <div className="relative w-48 h-48 mx-auto mb-4 mt-2 overflow-hidden rounded-full">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-300">{tech.name}</h3>
                <h4 className="text-lg font-semibold mb-3 text-green-100"></h4>
                <p className="text-green-200 leading-relaxed">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

