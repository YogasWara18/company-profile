'use client'

import { useState } from 'react' // Mengimpor hook useState dari React
import Header from './components/Header' // Mengimpor komponen Header
import Introduction from './components/Introduction' // Mengimpor komponen Introduction
import SponsorShowcase from './components/sponsor-showcase' // Mengimpor komponen SponsorShowcase
import RecentPosts from './components/RecentPosts' // Mengimpor komponen RecentPosts
import Footer from './components/Footer' // Mengimpor komponen Footer
import Newsletter from './components/Newsletter' // Mengimpor komponen Newsletter
import ScrollToTop from './components/ScrollToTop' // Mengimpor komponen ScrollToTop
import TechSlide from './components/TechSlide' // Mengimpor komponen TechSlide

export default function Home() {
  const [showNewsletter, setShowNewsletter] = useState(false) // Menginisialisasi state showNewsletter dengan nilai awal false

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-lime-100 to-green-200">
      <Header /> {/* Menampilkan komponen Header */}
      <Introduction /> {/* Menampilkan komponen Introduction */}
      <main className="container mx-auto px-4 py-8">
<SponsorShowcase /> {/* Menampilkan komponen SponsorShowcase */}
        <RecentPosts /> {/* Menampilkan komponen RecentPosts */}
        <button
          onClick={() => setShowNewsletter(true)} // Mengatur showNewsletter menjadi true saat tombol diklik
          className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
        >
          Subscribe {/* Tombol untuk menampilkan komponen Newsletter */}
        </button>
      </main>
      <TechSlide /> {/* Menampilkan komponen TechSlide */}
      <div className="mt-8"> {/* Menambahkan margin atas untuk footer */}
        <Footer /> {/* Menampilkan komponen Footer */}
      </div>
      {showNewsletter && <Newsletter onClose={() => setShowNewsletter(false)} />} {/* Menampilkan komponen Newsletter jika showNewsletter true */}
      <ScrollToTop /> {/* Menampilkan komponen ScrollToTop */}
    </div>
  )
}
