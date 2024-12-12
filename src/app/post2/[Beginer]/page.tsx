import Image from 'next/image';

const kidsRider = {
  id: 5,
  title: "Kids Rider",
  image: "/beginner1.png",
  price: "$1500",
  description: "This is a description for the Kids Rider class. It is designed for young riders who are just starting out and want to learn the basics of riding safely and confidently."
};

export default function BeginnerRiderPage() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 relative">
      <div className="absolute inset-0 -z-10" style={{
        content: '""',
        background: 'linear-gradient(45deg, #006400, #008000, #00FF00)',
        filter: 'blur(8px)',
        opacity: 0.7,
        transform: 'scale(1.05) translateY(4px)',
      }}></div>
      <div className="relative">
        <Image
          src={kidsRider.image}
          alt={kidsRider.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2 text-green-800">{kidsRider.title}</h3>
        <p className="text-green-700">{kidsRider.price}</p>
        <p className="text-gray-700">{kidsRider.description}</p>
      </div>
    </div>
  );
}
