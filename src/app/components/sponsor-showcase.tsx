import Image from 'next/image'

export default function SponsorShowcase() {
  const mainSponsors = [
    { name: 'Redbul Racing', src: '/redbull.png', width: 400 },
    { name: 'Ama Sport', src: '/ama.png', width: 600 },
    { name: 'Rock star', src: '/rockstar.png', width: 300 }
  ]

  const secondarySponsors = [
    { name: 'Fox', src: '/fox.png', width: 200 },
    { name: 'Fly Racing', src: '/fly.png', width: 200 },
    { name: 'Kawasaki Racing', src: '/kawasaki.png', width: 800 },
    { name: 'Pirelli', src: '/pirelli.png', width: 180 },
    { name: 'maxima', src: '/maxima.png', width: 160 },
    { name: 'fr Sports', src: '/fr.png', width: 160 }
  ]

  const supportingSponsors = [
    { name: 'HHN', src: '/hhn.png', width: 120 },
    { name: 'hjc Racing', src: '/hjc.png', width: 120 },
    { name: 'california', src: '/california.png', width: 120 },
    { name: 'fmf', src: '/fmf.png', width: 120 },
    { name: 'monster', src: '/monster.png', width: 120 },
    { name: 'motocard', src: '/motocard.png', width: 120 },
    { name: 'Motox', src: '/motox.png', width: 120 },
    { name: 'akrapofic', src: '/akrapovic.png', width: 120 },
    { name: 'icon', src: '/icon.png', width: 120 },
    { name: 'Protaper', src: '/protaper.png', width: 120 }
  ]

  const mediaPartners = [
    { name: 'MX Sports', src: '/gopro.png', width: 140 },
    { name: 'flying', src: '/flying.png', width: 140 },
    { name: 'Extrem', src: '/extrem.png', width: 140 },
    { name: 'kenda', src: '/kenda.png', width: 140 },
    { name: 'oakley', src: '/oakley.png', width: 140 }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Main Sponsors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
        {mainSponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="relative w-full max-w-[400px] h-[120px] transition-transform hover:scale-105"
          >
            <Image
              src={sponsor.src}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Secondary Sponsors */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {secondarySponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="relative w-full max-w-[200px] h-[80px] transition-transform hover:scale-105"
          >
            <Image
              src={sponsor.src}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
          </div>
        ))}
      </div>

      {/* Supporting Sponsors */}
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 items-center justify-items-center">
        {supportingSponsors.map((sponsor) => (
          <div
            key={sponsor.name}
            className="relative w-full max-w-[120px] h-[60px] transition-transform hover:scale-105"
          >
            <Image
              src={sponsor.src}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 33vw, (max-width: 1024px) 20vw, 10vw"
            />
          </div>
        ))}
      </div>

      {/* Media Partners */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
        {mediaPartners.map((sponsor) => (
          <div
            key={sponsor.name}
            className="relative w-full max-w-[140px] h-[70px] transition-transform hover:scale-105"
          >
            <Image
              src={sponsor.src}
              alt={`${sponsor.name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 50vw, 20vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

