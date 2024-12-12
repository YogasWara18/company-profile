import React from 'react';

const Introduction = () => {
  return (
    <section className="relative h-screen">
      {/* Latar belakang video */}
      <video
        autoPlay // Memutar video secara otomatis
        loop // Mengulang video
        muted // Mute video
        playsInline // Memutar video inline di perangkat mobile
        className="w-full h-full object-cover" // Full-screen dan menutupi bagian
        src="/12941383-uhd_3840_2160_30fps.mp4" // Path ke file video
      />
      {/* Overlay dengan teks yang terpusat */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-6xl font-bold text-shadow motion-text transparent-text">Kawasaki Racing Academy</h1>
      </div>
    </section>
  );
};

export default Introduction;
