'use client'

import { useState } from 'react'

export default function Newsletter({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-orange-100 via-red-100 to-yellow-100 rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-4">Stay up to date with the latest motocross news and events!</p>
        <button onClick={onClose} className="mt-4 text-gray-700 hover:text-gray-900">
          Close
        </button>
      </div>
    </div>
  )
}

