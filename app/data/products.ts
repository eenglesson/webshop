const availableColors = [
  'bg-green-600',
  'bg-slate-400',
  'bg-blue-500',
  'bg-red-600',
  'bg-slate-800',
  'bg-purple-500',
  'bg-orange-500',
];

function getRandomColors() {
  const colorCount = Math.floor(Math.random() * 3) + 3; // Between 3 and 5 colors
  const shuffledColors = [...availableColors].sort(() => 0.5 - Math.random());
  return shuffledColors.slice(0, colorCount);
}

export const products = [
  {
    id: 1,
    title: 'Beta AR Jacket',
    category: 'Jacket',
    price: 599.0,
    about:
      'A versatile, durable, and waterproof GORE-TEX Pro jacket designed for all-around mountain use.',
    image: '/BetaJacket.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 2,
    title: 'Atom LT Hoody',
    category: 'Jacket',
    price: 259.0,
    about:
      'Lightweight, breathable, and insulated hoody perfect for active use in cold conditions.',
    image: '/AtomJacket.avif',
    isAccessory: false,
    colors: getRandomColors(),
  },

  {
    id: 3,
    title: 'Sinsolo Hat',
    category: 'Hat',
    price: 39.0,
    about:
      'Lightweight, breathable sun hat with a compressible design for easy packing.',
    image: '/PinkCap.jpg',
    isAccessory: true,
    colors: getRandomColors(),
  },
  {
    id: 4,
    title: 'Rho LT Zip Neck',
    category: 'Long Sleeve',
    price: 119.0,
    about:
      'Lightweight, moisture-wicking base layer with a zip neck for temperature regulation.',
    image: '/RhoZip.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 5,
    title: 'Gamma MX Jacket',
    category: 'Jacket',
    price: 89.0,
    about:
      'Long-sleeve crew neck shirt designed for high-output activities in cooler weather.',
    image: '/GammaJacket.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 6,
    title: 'Norvan LD 3 Shoe',
    category: 'Shoe',
    price: 165.0,
    about:
      'Durable, comfortable trail running shoe designed for long-distance runs on varied terrain.',
    image: '/ShoeRune.jpg',
    isAccessory: true,
    colors: getRandomColors(),
  },
  {
    id: 7,
    title: 'Aerios FL Mid GTX',
    category: 'Shoe',
    price: 185.0,
    about:
      'Lightweight, mid-cut hiking shoe with GORE-TEX protection for fast and light adventures.',
    image: '/AeriosShoe.jpg',
    isAccessory: true,
    colors: getRandomColors(),
  },
  {
    id: 8,
    title: 'Gamma LT Pant',
    category: 'Pant',
    price: 199.0,
    about:
      'Lightweight, breathable, and durable softshell pants for a range of outdoor activities.',
    image: '/GammaPant.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 9,
    title: 'Palisade Pant',
    category: 'Pant',
    price: 179.0,
    about:
      'Technical hiking and trekking pants made from lightweight, quick-drying fabric.',
    image: '/SabrePant.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 10,
    title: 'Carrier 45 Gear Tote',
    category: 'Bag',
    price: 179.0,
    about:
      'Weather-resistant, versatile backpack designed for urban commuting and everyday use.',
    image: '/ToteBag.jpg',
    isAccessory: true,
    colors: getRandomColors(),
  },
  {
    id: 11,
    title: 'Mantis 26 Backpack',
    category: 'Bag',
    price: 139.0,
    about:
      'Durable, functional daypack with intuitive organization for daily use and travel.',
    image: '/Mantis16Bag.jpg',
    isAccessory: true,
    colors: getRandomColors(),
  },
  {
    id: 12,
    title: 'Alpha SV Jacket',
    category: 'Jacket',
    price: 799.0,
    about:
      'Exceptionally durable, waterproof, and breathable GORE-TEX Pro jacket for severe conditions.',
    image: '/SVJacket.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 13,
    title: 'Beta AR Pant',
    category: 'Pant',
    price: 149.0,
    about:
      'Versatile, lightweight hiking pants with stretch for comfort and mobility.',
    image: '/BetaARPant.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 14,
    title: 'Covert Cardigan',
    category: 'Knitwear',
    price: 179.0,
    about:
      'Casual, heathered fleece cardigan with a refined design and versatile performance.',
    image: '/Cardigan.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 15,
    title: 'Cerium LT Jacket',
    category: 'Jacket',
    price: 379.0,
    about:
      'Streamlined, lightweight down jacket filled with 850 fill goose down for exceptional warmth.',
    image: '/CeriumJacket.jpg',
    isAccessory: false,
    colors: getRandomColors(),
  },
  {
    id: 16,
    title: 'Bird Head Toque',
    category: 'Hat',
    price: 35.0,
    about: "Warm, comfortable beanie featuring the Arc'teryx bird logo.",
    image: '/BirdHat.jpg',
    isAccessory: true,
    colors: getRandomColors(),
  },
];
