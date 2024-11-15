export const products = [
  {
    id: 1,
    title: 'Beta AR Jacket',
    category: 'Jacket',
    price: 599.0,
    about:
      'The Beta AR Jacket is designed for versatility, durability, and peak performance in extreme mountain conditions. Featuring GORE-TEX Pro fabric, it ensures unmatched waterproof and windproof protection while remaining highly breathable. Engineered with an ergonomic fit for unrestricted movement, this jacket is ideal for hiking, climbing, or skiing. Its lightweight construction and durable build make it a reliable companion for all-around mountain use.',
    image: '/BetaJacket.jpg',
    isAccessory: false,
    colors: ['bg-blue-500', 'bg-slate-400', 'bg-slate-800', 'bg-red-600'], // Grey, black, blue
    badges: ['New', 'GORE-TEX', 'Waterproof'],
    features: [
      'GORE-TEX Pro fabric',
      'Highly durable and lightweight',
      'Ergonomic fit for movement',
      'Ideal for mountain activities',
    ],
    care: 'Machine wash warm, rinse twice. Tumble dry medium. Do not iron.',
  },
  {
    id: 2,
    title: 'Atom LT Hoody',
    category: 'Jacket',
    price: 259.0,
    about:
      'The Atom LT Hoody is a lightweight and breathable insulated layer designed for high-performance activities in cold conditions. It features Coreloft Compact insulation that provides warmth without bulk and resists moisture for reliability during dynamic activities. The stretch side panels enhance breathability and range of motion, while the compact design makes it easy to pack for travel or outdoor adventures.',
    image: '/AtomJacket.avif',
    isAccessory: false,
    colors: ['bg-orange-500', 'bg-slate-400', 'bg-slate-800', 'bg-purple-500'], // Grey, black, purple
    badges: ['Lightweight', 'Breathable'],
    features: [
      'Coreloft™ insulation for warmth',
      'Durable weather-resistant outer fabric',
      'Articulated design for mobility',
    ],
    care: 'Machine wash cold, gentle cycle. Hang to dry. Do not iron.',
  },
  {
    id: 3,
    title: 'Sinsolo Hat',
    category: 'Hat',
    price: 39.0,
    about:
      'The Sinsolo Hat is the ultimate companion for sunny adventures, offering exceptional comfort and protection in hot climates. Its lightweight construction ensures all-day comfort, while the breathable fabric keeps your head cool and dry. The compressible design allows it to fit easily into your backpack, making it ideal for hiking, travel, or casual outings under the sun.',
    image: '/PinkCap.jpg',
    isAccessory: true,
    colors: ['bg-pink-300', 'bg-green-600', 'bg-slate-800'], // Grey, orange, black
    badges: ['Lightweight', 'Breathable'],
    features: [
      'Lightweight, breathable construction',
      'Sun protection',
      'Compressible design for travel',
    ],
    care: 'Hand wash and air dry. Avoid using bleach.',
  },
  {
    id: 4,
    title: 'Rho LT Zip Neck',
    category: 'Long Sleeve',
    price: 119.0,
    about:
      'The Rho LT Zip Neck is a high-performance base layer designed for optimal temperature regulation during cold-weather activities. Its lightweight fabric wicks moisture away from the skin, ensuring you stay dry and comfortable. The zip neck allows for easy venting, while the soft, stretchy material provides unrestricted movement. Perfect for skiing, hiking, or casual wear.',
    image: '/RhoZip.jpg',
    isAccessory: false,
    colors: ['bg-slate-800', 'bg-slate-400', 'bg-red-600'], // Grey, red, black
    badges: ['Lightweight', 'Moisture-Wicking'],
    features: [
      'Lightweight and stretchy fabric',
      'Moisture-wicking technology',
      'Zip neck for ventilation',
      'Soft and comfortable material',
    ],
    care: 'Machine wash cold. Tumble dry low. Do not iron or use fabric softeners.',
  },
  {
    id: 5,
    title: 'Gamma MX Jacket',
    category: 'Jacket',
    price: 89.0,
    about:
      'The Gamma MX Jacket is crafted for high-output activities in dynamic environments, offering unparalleled durability and flexibility. Its softshell design is wind and water-resistant, making it ideal for outdoor pursuits like climbing and skiing. With exceptional breathability and freedom of movement, it ensures you stay comfortable and protected in challenging conditions.',
    image: '/GammaJacket.jpg',
    isAccessory: false,
    colors: ['bg-slate-300', 'bg-slate-800', 'bg-blue-500'], // Grey, black, blue
    badges: ['High-Output', 'Durable'],
    features: [
      'Softshell wind-resistant material',
      'Flexible and durable construction',
      'Ideal for climbing and skiing',
      'Highly breathable design',
    ],
    care: 'Machine wash warm. Hang to dry. Do not dry clean or bleach.',
  },
  {
    id: 6,
    title: 'Norvan LD 3 Shoe',
    category: 'Shoe',
    price: 165.0,
    about:
      'The Norvan LD 3 Shoe is built for trail running enthusiasts who demand performance and durability on long-distance routes. Featuring a comfortable fit and advanced cushioning, these shoes provide stability on uneven terrain. The rugged outsole ensures excellent grip on both wet and dry surfaces, while the lightweight construction reduces fatigue over extended runs.',
    image: '/ShoeRune.jpg',
    isAccessory: true,
    colors: ['bg-yellow-600', 'bg-slate-400', 'bg-slate-800', 'bg-green-600'], // Yellow, black, green
    badges: ['Trail', 'Durable'],
    features: [
      'Durable and lightweight',
      'Advanced cushioning for comfort',
      'Rugged outsole for superior grip',
      'Ideal for long-distance trail running',
    ],
    care: 'Wipe clean with a damp cloth. Air dry away from direct sunlight.',
  },
  {
    id: 7,
    title: 'Aerios FL Mid GTX',
    category: 'Shoe',
    price: 185.0,
    about:
      'The Aerios FL Mid GTX combines the agility of a trail runner with the protection of a hiking boot. Featuring GORE-TEX for waterproof performance, it keeps your feet dry in wet conditions. The lightweight design is perfect for fast-paced adventures, while the mid-cut provides ankle support for rough terrain.',
    image: '/AeriosShoe.jpg',
    isAccessory: true,
    colors: ['bg-slate-800', 'bg-slate-400', 'bg-blue-300'], // Grey, blue, black
    badges: ['Lightweight', 'GORE-TEX', 'Hiking'],
    features: [
      'GORE-TEX waterproof membrane',
      'Lightweight for fast hiking',
      'Mid-cut for ankle support',
      'Durable outsole for varied terrain',
    ],
    care: 'Clean with mild soap and water. Air dry thoroughly. Avoid submerging in water.',
  },
  {
    id: 8,
    title: 'Gamma LT Pant',
    category: 'Pant',
    price: 199.0,
    about:
      'The Gamma LT Pant is designed for outdoor versatility, offering lightweight durability and freedom of movement. Its softshell fabric is wind-resistant and breathable, making it ideal for hiking, climbing, and other activities. The articulated design ensures unrestricted mobility, while its quick-drying material enhances comfort during extended use.',
    image: '/GammaPant.jpg',
    isAccessory: false,
    colors: ['bg-stone-400', 'bg-orange-500', 'bg-slate-800'], // Grey, orange, black
    badges: ['Lightweight', 'Breathable', 'Durable'],
    features: [
      'Breathable softshell fabric',
      'Quick-drying material',
      'Articulated design for mobility',
      'Durable construction for outdoor use',
    ],
    care: 'Machine wash cold. Tumble dry low. Do not bleach or iron.',
  },
  {
    id: 9,
    title: 'Palisade Pant',
    category: 'Pant',
    price: 179.0,
    about:
      'The Palisade Pant is crafted for trekking and hiking, offering exceptional comfort and functionality. Made from lightweight, quick-drying fabric, it keeps you cool and dry during strenuous activities. The technical design includes multiple pockets for storage, while the stretch material ensures unrestricted movement on the trail.',
    image: '/SabrePant.jpg',
    isAccessory: false,
    colors: ['bg-emerald-800', 'bg-slate-800', 'bg-red-600'], // Grey, black, green
    badges: ['Quick-Drying', 'Technical', 'Lightweight'],
    features: [
      'Lightweight and quick-drying fabric',
      'Multiple pockets for storage',
      'Stretch material for mobility',
      'Designed for trekking and hiking',
    ],
    care: 'Machine wash warm. Hang to dry. Do not use fabric softeners.',
  },
  {
    id: 10,
    title: 'Carrier 45 Gear Tote',
    category: 'Bag',
    price: 179.0,
    about:
      'The Carrier 45 Gear Tote is a versatile and weather-resistant bag, perfect for urban commuting or weekend getaways. With a spacious design and durable materials, it offers ample storage for your gear. The adjustable straps and padded handles ensure comfortable carrying, making it a reliable choice for daily use or travel.',
    image: '/ToteBag.jpg',
    isAccessory: true,
    colors: ['bg-slate-900', 'bg-slate-300', 'bg-pink-400'], // Grey, black, blue
    badges: ['Weather-Resistant', 'Versatile'],
    features: [
      'Weather-resistant construction',
      'Spacious interior for gear',
      'Adjustable straps for comfort',
      'Durable material for longevity',
    ],
    care: 'Spot clean with a damp cloth. Avoid exposure to extreme heat.',
  },
  {
    id: 11,
    title: 'Mantis 26 Backpack',
    category: 'Bag',
    price: 139.0,
    about:
      'The Mantis 26 Backpack is a durable and functional daypack designed for intuitive organization and versatility. With multiple compartments and padded straps, it is ideal for daily use, travel, or hiking. The weather-resistant materials ensure your belongings stay safe, while the ergonomic design provides lasting comfort on the go.',
    image: '/Mantis16Bag.jpg',
    isAccessory: true,
    colors: ['bg-yellow-700', 'bg-purple-500', 'bg-slate-800'], // Grey, purple, black
    badges: ['Durable', 'Organized'],
    features: [
      'Durable weather-resistant materials',
      'Multiple compartments for organization',
      'Padded straps for comfort',
      'Ergonomic design for all-day use',
    ],
    care: 'Spot clean with mild soap and water. Air dry thoroughly.',
  },
  {
    id: 12,
    title: 'Alpha SV Jacket',
    category: 'Jacket',
    price: 799.0,
    about:
      'The Alpha SV Jacket is built for severe conditions, offering exceptional durability and performance. Crafted with GORE-TEX Pro fabric, it is waterproof, windproof, and breathable, ensuring maximum protection in extreme weather. Its articulated design provides freedom of movement, making it ideal for climbing and mountaineering in harsh environments.',
    image: '/SVJacket.jpg',
    isAccessory: false,
    colors: ['bg-blue-600', 'bg-slate-800', 'bg-red-600'], // Grey, black, red
    badges: ['GORE-TEX', 'Waterproof', 'Durable'],
    features: [
      'GORE-TEX Pro fabric for severe weather',
      'Highly durable construction',
      'Articulated design for mobility',
      'Ideal for climbing and mountaineering',
    ],
    care: 'Machine wash warm. Tumble dry low. Do not iron or bleach.',
  },
  {
    id: 13,
    title: 'Beta AR Pant',
    category: 'Pant',
    price: 149.0,
    about:
      'The Beta AR Pant combines lightweight design with excellent weather resistance, making it a versatile choice for hiking and outdoor adventures. Its stretchable fabric offers comfort and mobility, while the durable construction ensures long-lasting performance in varied conditions.',
    image: '/BetaARPant.jpg',
    isAccessory: false,
    colors: ['bg-emerald-800', 'bg-slate-800', 'bg-orange-500'], // Grey, black, orange
    badges: ['Versatile', 'Lightweight', 'Stretch'],
    features: [
      'Stretchable fabric for comfort',
      'Lightweight and durable design',
      'Weather-resistant for outdoor use',
      'Ideal for hiking and adventures',
    ],
    care: 'Machine wash cold. Hang to dry. Avoid using bleach or fabric softeners.',
  },
  {
    id: 14,
    title: 'Covert Cardigan',
    category: 'Knitwear',
    price: 179.0,
    about:
      'The Covert Cardigan offers a refined design and versatile performance for casual or active use. Made from heathered fleece, it provides warmth and comfort with a polished look. The lightweight and breathable material make it suitable for layering or standalone wear in cooler weather.',
    image: '/Cardigan.jpg',
    isAccessory: false,
    colors: ['bg-stone-300', 'bg-slate-800', 'bg-purple-500'], // Grey, black, purple
    badges: ['Casual', 'Versatile'],
    features: [
      'Heathered fleece for warmth',
      'Refined and casual design',
      'Lightweight and breathable',
      'Versatile for layering or solo wear',
    ],
    care: 'Machine wash warm. Hang to dry. Do not bleach or iron.',
  },
  {
    id: 15,
    title: 'Cerium LT Jacket',
    category: 'Jacket',
    price: 379.0,
    about:
      'The Cerium LT Jacket is a streamlined and lightweight down-filled jacket designed for exceptional warmth in cold climates. Featuring 850-fill goose down, it provides unmatched insulation while remaining highly compressible for easy packing. The outer material is durable and water-resistant, making it suitable for a variety of activities.',
    image: '/CeriumJacket.jpg',
    isAccessory: false,
    colors: ['bg-stone-400', 'bg-slate-800', 'bg-blue-500'], // Grey, black, blue
    badges: ['Lightweight', 'Warm', 'Down-Filled'],
    features: [
      '850-fill goose down insulation',
      'Streamlined and lightweight design',
      'Water-resistant outer fabric',
      'Highly compressible for packing',
    ],
    care: 'Machine wash cold with down detergent. Tumble dry on low with tennis balls.',
  },
  {
    id: 16,
    title: 'Bird Head Toque',
    category: 'Hat',
    price: 35.0,
    about:
      "The Bird Head Toque is a warm and stylish beanie, perfect for cold-weather wear. Featuring the iconic Arc'teryx bird logo, it is crafted with a comfortable and snug fit. Its knitted construction offers exceptional warmth and durability, making it an essential accessory for winter adventures or casual outings.",
    image: '/BirdHat.jpg',
    isAccessory: true,
    colors: ['bg-emerald-700', 'bg-slate-800', 'bg-red-600'], // Grey, black, red
    badges: ['Warm', 'Comfortable'],
    features: [
      'Knitted construction for warmth',
      'Snug and comfortable fit',
      'Stylish design with logo',
      'Durable and long-lasting',
    ],
    care: 'Hand wash cold. Lay flat to dry. Avoid wringing or twisting.',
  },
];
