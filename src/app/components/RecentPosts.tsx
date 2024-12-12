// 'use client' - Mendefinisikan komponen sebagai komponen klien
'use client'

// Mengimpor hook useState dari React
import { useState } from 'react'
// Mengimpor komponen Image dari Next.js
import Image from 'next/image'
import Link from 'next/link'


// Definisi array posts yang berisi objek post dengan id, judul, gambar, dan harga
const posts = [
  { id: 1, title: "Kids Riders", image: "/kids.png", price: "$1000" },
  { id: 2, title: "Beginner Rider", image: "/beginer.png", price: "$2000" },
  { id: 3, title: "Intermediate Rider", image: "/intermediate.png", price: "$3000" },
  { id: 4, title: "Professional Rider", image: "/professional.png", price: "$10000" },
  
]

// Definisi komponen RecentPosts
export default function RecentPosts() {
  // Menggunakan hook useState untuk mengelola state hoveredId
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  // Mengembalikan JSX untuk komponen RecentPosts
  return (
    <div>
      {/* Judul utama untuk komponen RecentPosts */}
      <h2 className="text-2xl font-bold mb-6 text-green-800 text-center border-2 border-green-800 p-4 rounded-lg">
        Kawasaki Riders Academy Class
      </h2>
      {/* Grid untuk menampilkan daftar post */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {/* Membuat elemen untuk setiap post dalam array posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative"
            style={{
              boxShadow: '0 4px 6px -1px rgba(0, 100, 0, 0.1), 0 2px 4px -1px rgba(0, 100, 0, 0.06)',
            }}
            onMouseEnter={() => setHoveredId(post.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Latar belakang dengan efek blur */}
            <div className="absolute inset-0 -z-10"
              style={{
                content: '""',
                background: 'linear-gradient(45deg, #006400, #008000, #00FF00)',
                filter: 'blur(8px)',
                opacity: 0.7,
                transform: 'scale(1.05) translateY(4px)',
              }}
            ></div>
            {/* Konten post */}
            <div className="relative">
              {/* Gambar post */}
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              {/* Tombol "Read More" yang muncul saat dihover */}
              {hoveredId === post.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-transparent opacity-70 flex items-center justify-center">
                  <Link href={`/post/${post.id}`} className="text-white bg-gradient-to-r from-green-600 to-green-800 px-4 py-2 rounded hover:from-green-700 hover:to-green-900 transition-all duration-300">
                    Read More
                  </Link>
                </div>
              )}
            </div>
            {/* Informasi post */}
            <div className="p-4">
              <h3 className="font-bold mb-2 text-green-800">{post.title}</h3>
              <p className="text-green-700">{post.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
