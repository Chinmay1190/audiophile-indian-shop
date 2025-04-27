
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "SonicPulse Pro",
    brand: "AudioWave",
    category: "headphones",
    price: 24999,
    salePrice: 19999,
    rating: 4.8,
    description: "Premium over-ear headphones with active noise cancellation, high-resolution audio, and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "High-Resolution Audio",
      "30-hour battery life",
      "Comfortable memory foam ear cushions",
      "Voice assistant integration",
      "Customizable EQ"
    ],
    colors: ["Black", "Silver", "Midnight Blue"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
    ],
    isWireless: true,
    isFeatured: true,
    isNew: true,
    stockCount: 25
  },
  {
    id: 2,
    name: "BassBoost X",
    brand: "AudioWave",
    category: "headphones",
    price: 18999,
    rating: 4.6,
    description: "Deep bass over-ear headphones with premium sound quality and comfort for extended listening sessions.",
    features: [
      "Enhanced bass technology",
      "24-hour battery life",
      "Foldable design",
      "Built-in microphone",
      "Voice assistant compatible",
      "Multi-device pairing"
    ],
    colors: ["Matte Black", "Deep Red", "Space Gray"],
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b",
      "https://images.unsplash.com/photo-1577174881658-0f30ed549adc"
    ],
    isWireless: true,
    stockCount: 40
  },
  {
    id: 3,
    name: "AudioFusion TWS",
    brand: "SoundMaster",
    category: "earbuds",
    price: 12999,
    salePrice: 9999,
    rating: 4.7,
    description: "True wireless earbuds with exceptional sound quality, perfect fit, and long battery life.",
    features: [
      "True wireless technology",
      "Active noise cancellation",
      "8-hour battery life",
      "Additional 24 hours with charging case",
      "Water-resistant (IPX5)",
      "Touch controls"
    ],
    colors: ["White", "Black", "Navy Blue"],
    images: [
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5d871",
      "https://images.unsplash.com/photo-1608156639585-b3a7a6e98d3b"
    ],
    isWireless: true,
    isFeatured: true,
    stockCount: 35
  },
  {
    id: 4,
    name: "Elite Studio Pro",
    brand: "SoundMaster",
    category: "headphones",
    price: 29999,
    rating: 4.9,
    description: "Professional-grade studio headphones for audio production, mixing, and mastering with unmatched clarity.",
    features: [
      "Studio-grade sound reproduction",
      "Wired for zero latency",
      "Comfortable for extended sessions",
      "Replaceable ear pads",
      "Detachable cable",
      "Includes carrying case"
    ],
    colors: ["Black", "White"],
    images: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
      "https://images.unsplash.com/photo-1520170350707-b2da59970118"
    ],
    isWireless: false,
    isFeatured: true,
    stockCount: 15
  },
  {
    id: 5,
    name: "EchoBeats Mini",
    brand: "PulseTech",
    category: "earbuds",
    price: 8999,
    rating: 4.5,
    description: "Compact wireless earbuds with excellent sound quality and comfortable fit for everyday use.",
    features: [
      "Lightweight design",
      "6-hour battery life",
      "18 additional hours with charging case",
      "Quick charge (15min = 2hrs)",
      "Sweat-resistant",
      "Built-in mic for calls"
    ],
    colors: ["White", "Black", "Mint Green"],
    images: [
      "https://images.unsplash.com/photo-1608156639585-b3a7a6e98d3b",
      "https://images.unsplash.com/photo-1646464442647-aaa75420c883"
    ],
    isWireless: true,
    stockCount: 50
  },
  {
    id: 6,
    name: "RhythmFlow Neckband",
    brand: "PulseTech",
    category: "earbuds",
    price: 4999,
    salePrice: 3999,
    rating: 4.3,
    description: "Neckband wireless earphones with magnetic earbuds and excellent battery life for daily commute.",
    features: [
      "Flexible neckband design",
      "Magnetic earbuds",
      "12-hour battery life",
      "Quick charge",
      "Water-resistant",
      "Vibration for calls"
    ],
    colors: ["Black", "Blue", "Orange"],
    images: [
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5d871",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
    ],
    isWireless: true,
    stockCount: 60
  },
  {
    id: 7,
    name: "UltraComfort Pro",
    brand: "AudioWave",
    category: "headphones",
    price: 22999,
    rating: 4.7,
    description: "Exceptionally comfortable over-ear headphones with balanced sound profile and noise isolation.",
    features: [
      "Ultra-plush ear cushions",
      "Lightweight design",
      "Passive noise isolation",
      "Balanced sound profile",
      "Foldable design",
      "Wired connection for best sound quality"
    ],
    colors: ["Black", "Tan", "Gray"],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
    ],
    isWireless: false,
    stockCount: 30
  },
  {
    id: 8,
    name: "BassLine Pro TWS",
    brand: "SoundMaster",
    category: "earbuds",
    price: 15999,
    rating: 4.6,
    description: "Bass-optimized true wireless earbuds with long battery life and secure fit for workouts.",
    features: [
      "Deep bass enhancement",
      "Secure-fit ear hooks",
      "10-hour battery life",
      "20 additional hours with case",
      "IPX7 waterproof",
      "Ambient sound mode"
    ],
    colors: ["Black", "Blue", "Red"],
    images: [
      "https://images.unsplash.com/photo-1627735747011-b8d19966430d",
      "https://images.unsplash.com/photo-1631177979847-3df735e4e8a5"
    ],
    isWireless: true,
    stockCount: 25
  },
  {
    id: 9,
    name: "ClearSound ANC",
    brand: "AudioWave",
    category: "headphones",
    price: 19999,
    rating: 4.5,
    description: "Active noise cancelling headphones with crystal clear sound and comfortable fit for travel.",
    features: [
      "Advanced ANC technology",
      "25-hour battery life",
      "Foldable travel design",
      "Carrying case included",
      "Fast charging (10min = 5hrs)",
      "Wired option available"
    ],
    colors: ["Black", "White", "Gold"],
    images: [
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3"
    ],
    isWireless: true,
    stockCount: 20
  },
  {
    id: 10,
    name: "SoundPod Mini",
    brand: "PulseTech",
    category: "earbuds",
    price: 5999,
    rating: 4.2,
    description: "Affordable true wireless earbuds with great sound quality and compact design for everyday use.",
    features: [
      "Compact design",
      "5-hour battery life",
      "15 additional hours with case",
      "IPX4 splash resistant",
      "Touch controls",
      "Voice assistant support"
    ],
    colors: ["Black", "White"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      "https://images.unsplash.com/photo-1608156639585-b3a7a6e98d3b"
    ],
    isWireless: true,
    isNew: true,
    stockCount: 45
  },
  {
    id: 11,
    name: "AcousticPro Wired",
    brand: "SoundMaster",
    category: "headphones",
    price: 7999,
    rating: 4.4,
    description: "Premium wired headphones with high-fidelity sound reproduction and comfortable design.",
    features: [
      "Hi-Fi sound quality",
      "No battery needed",
      "Extra long cable (2m)",
      "Foldable design",
      "Memory foam ear cushions",
      "Universal 3.5mm jack"
    ],
    colors: ["Black", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    ],
    isWireless: false,
    stockCount: 35
  },
  {
    id: 12,
    name: "BeatSync Sports",
    brand: "PulseTech",
    category: "earbuds",
    price: 6999,
    rating: 4.3,
    description: "Sports earbuds with secure fit, water resistance, and great sound for workouts and running.",
    features: [
      "Secure ear hook design",
      "IPX6 sweat and water resistant",
      "8-hour battery life",
      "Quick charge feature",
      "Reflective cable for night visibility",
      "In-line remote and mic"
    ],
    colors: ["Black", "Green", "Orange"],
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
      "https://images.unsplash.com/photo-1631177979847-3df735e4e8a5"
    ],
    isWireless: true,
    stockCount: 40
  },
  {
    id: 13,
    name: "AudioPhase Gaming",
    brand: "AudioWave",
    category: "headphones",
    price: 14999,
    rating: 4.7,
    description: "Gaming headphones with surround sound, noise-cancelling mic, and RGB lighting effects.",
    features: [
      "7.1 virtual surround sound",
      "Noise-cancelling boom mic",
      "Customizable RGB lighting",
      "Ultra-comfortable design",
      "Compatible with all gaming platforms",
      "Inline audio controls"
    ],
    colors: ["Black", "Black/Red", "Black/Blue"],
    images: [
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb"
    ],
    isWireless: false,
    stockCount: 30
  },
  {
    id: 14,
    name: "Crystal Clear Pro",
    brand: "SoundMaster",
    category: "earbuds",
    price: 16999,
    rating: 4.8,
    description: "High-end earbuds with crystal clear sound, active noise cancellation, and premium design.",
    features: [
      "Hi-Fi sound quality",
      "Active noise cancellation",
      "Premium aluminum construction",
      "9-hour battery life",
      "Additional 27 hours with case",
      "Fast wireless charging"
    ],
    colors: ["Silver", "Space Gray", "Rose Gold"],
    images: [
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c",
      "https://images.unsplash.com/photo-1631177979847-3df735e4e8a5"
    ],
    isWireless: true,
    isFeatured: true,
    stockCount: 20
  },
  {
    id: 15,
    name: "TechBass Classic",
    brand: "PulseTech",
    category: "headphones",
    price: 8999,
    salePrice: 6999,
    rating: 4.1,
    description: "Affordable headphones with enhanced bass response and comfortable fit for casual listening.",
    features: [
      "Enhanced bass technology",
      "Padded headband",
      "Soft ear cushions",
      "Foldable design",
      "In-line mic and remote",
      "Universal compatibility"
    ],
    colors: ["Black", "White", "Red"],
    images: [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a"
    ],
    isWireless: false,
    stockCount: 50
  },
  {
    id: 16,
    name: "EarBuds Air",
    brand: "AudioWave",
    category: "earbuds",
    price: 9999,
    rating: 4.4,
    description: "Lightweight earbuds with seamless connectivity and comfortable fit for all-day use.",
    features: [
      "Lightweight design",
      "One-touch pairing",
      "6-hour battery life",
      "18 hours with charging case",
      "Water-resistant",
      "Voice assistant support"
    ],
    colors: ["White", "Black", "Green"],
    images: [
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c",
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5d871"
    ],
    isWireless: true,
    stockCount: 40
  },
  {
    id: 17,
    name: "SoundScape Ultimate",
    brand: "SoundMaster",
    category: "headphones",
    price: 34999,
    rating: 4.9,
    description: "Flagship over-ear headphones with premium materials, adaptive EQ, and studio-quality sound.",
    features: [
      "Adaptive EQ technology",
      "Premium leather and aluminum build",
      "40-hour battery life",
      "Active noise cancellation",
      "Spatial audio support",
      "Custom sound profiles"
    ],
    colors: ["Midnight Black", "Ivory", "Deep Blue"],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    ],
    isWireless: true,
    isNew: true,
    stockCount: 15
  },
  {
    id: 18,
    name: "MicroBeat Nano",
    brand: "PulseTech",
    category: "earbuds",
    price: 11999,
    rating: 4.5,
    description: "Ultra-small earbuds with great sound quality and comfortable fit for all ear sizes.",
    features: [
      "Ultra-compact design",
      "7-hour battery life",
      "21 hours with charging case",
      "IPX5 water resistance",
      "Multiple ear tip sizes",
      "Touch controls"
    ],
    colors: ["Black", "White", "Purple"],
    images: [
      "https://images.unsplash.com/photo-1608156639585-b3a7a6e98d3b",
      "https://images.unsplash.com/photo-1627735747011-b8d19966430d"
    ],
    isWireless: true,
    stockCount: 35
  },
  {
    id: 19,
    name: "WorkFlow Pro",
    brand: "AudioWave",
    category: "headphones",
    price: 27999,
    rating: 4.7,
    description: "Professional headphones designed for remote work with exceptional call quality and comfort.",
    features: [
      "Advanced call noise cancellation",
      "Multi-point connection",
      "30-hour battery life",
      "Boom microphone",
      "Carrying case included",
      "Dedicated mute button"
    ],
    colors: ["Black", "Gray"],
    images: [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944"
    ],
    isWireless: true,
    stockCount: 25
  },
  {
    id: 20,
    name: "SportsFlex Pro",
    brand: "SoundMaster",
    category: "earbuds",
    price: 7999,
    rating: 4.6,
    description: "Sports earbuds with adjustable ear hooks, waterproofing, and high-energy sound profile.",
    features: [
      "Adjustable ear hooks",
      "IPX7 waterproof",
      "10-hour battery life",
      "Heart rate monitoring",
      "Quick charging",
      "Built-in workout coach"
    ],
    colors: ["Black/Red", "Blue/Black", "Green/Black"],
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
      "https://images.unsplash.com/photo-1564156280315-1d42b4651629"
    ],
    isWireless: true,
    stockCount: 30
  },
  {
    id: 21,
    name: "EchoPods TWS",
    brand: "PulseTech",
    category: "earbuds",
    price: 13999,
    rating: 4.5,
    description: "Premium true wireless earbuds with spatial audio and adaptive EQ for immersive listening.",
    features: [
      "Spatial audio technology",
      "Adaptive EQ",
      "8-hour battery life",
      "24 hours with charging case",
      "IPX5 water resistance",
      "Premium finish"
    ],
    colors: ["White", "Black", "Blue"],
    images: [
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c",
      "https://images.unsplash.com/photo-1627735747011-b8d19966430d"
    ],
    isWireless: true,
    stockCount: 25
  },
  {
    id: 22,
    name: "VinylClassic Wired",
    brand: "AudioWave",
    category: "headphones",
    price: 9999,
    rating: 4.3,
    description: "Retro-styled wired headphones with warm sound signature inspired by vinyl records.",
    features: [
      "Retro design",
      "Natural sound signature",
      "Premium materials",
      "Detachable cable",
      "Comfortable fit",
      "Carrying pouch included"
    ],
    colors: ["Brown", "Black", "Cream"],
    images: [
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a"
    ],
    isWireless: false,
    stockCount: 20
  },
  {
    id: 23,
    name: "AudioPro Studio Monitor",
    brand: "SoundMaster",
    category: "headphones",
    price: 19999,
    rating: 4.8,
    description: "Professional studio monitor headphones with flat frequency response for audio production.",
    features: [
      "Flat frequency response",
      "Closed-back design",
      "Swiveling ear cups",
      "Replaceable ear pads",
      "Detachable cable",
      "Carrying case"
    ],
    colors: ["Black", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a",
      "https://images.unsplash.com/photo-1520170350707-b2da59970118"
    ],
    isWireless: false,
    isFeatured: true,
    stockCount: 15
  },
  {
    id: 24,
    name: "BassLite Neckband",
    brand: "PulseTech",
    category: "earbuds",
    price: 3999,
    rating: 4.2,
    description: "Affordable neckband earphones with good bass response and all-day battery life.",
    features: [
      "Comfortable neckband",
      "15-hour battery life",
      "Quick charge",
      "IPX4 splash resistant",
      "Magnetic earbuds",
      "Voice assistant support"
    ],
    colors: ["Black", "Red", "Blue"],
    images: [
      "https://images.unsplash.com/photo-1606400082777-ef05f3c5d871",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df"
    ],
    isWireless: true,
    stockCount: 50
  },
  {
    id: 25,
    name: "SoundBarrier ANC",
    brand: "AudioWave",
    category: "headphones",
    price: 26999,
    salePrice: 21999,
    rating: 4.7,
    description: "Premium active noise cancelling headphones with adaptive sound control and premium materials.",
    features: [
      "Adaptive noise cancellation",
      "Ambient sound mode",
      "35-hour battery life",
      "Touch controls",
      "Premium leather and aluminum",
      "Carrying case included"
    ],
    colors: ["Black", "Silver", "Midnight Blue"],
    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    ],
    isWireless: true,
    isFeatured: true,
    stockCount: 20
  },
  {
    id: 26,
    name: "AirPods Ultra",
    brand: "SoundMaster",
    category: "earbuds",
    price: 18999,
    rating: 4.9,
    description: "Premium true wireless earbuds with transparency mode, active noise cancellation, and excellent sound quality.",
    features: [
      "Active noise cancellation",
      "Transparency mode",
      "10-hour battery life",
      "30 hours with case",
      "Wireless charging case",
      "Water and sweat resistant"
    ],
    colors: ["White", "Black"],
    images: [
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c",
      "https://images.unsplash.com/photo-1631177979847-3df735e4e8a5"
    ],
    isWireless: true,
    isNew: true,
    stockCount: 15
  },
  {
    id: 27,
    name: "BassThumper X1",
    brand: "PulseTech",
    category: "headphones",
    price: 12999,
    rating: 4.4,
    description: "Bass-heavy wireless headphones with vibration technology for immersive music and gaming.",
    features: [
      "Bass enhancement technology",
      "Haptic feedback",
      "20-hour battery life",
      "Gaming mode for low latency",
      "RGB lighting effects",
      "Comfortable fit for extended use"
    ],
    colors: ["Black/Red", "Black/Blue"],
    images: [
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90"
    ],
    isWireless: true,
    stockCount: 30
  },
  {
    id: 28,
    name: "PocketBuds Mini",
    brand: "SoundMaster",
    category: "earbuds",
    price: 7999,
    rating: 4.3,
    description: "Ultra-compact earbuds with excellent sound quality and pocketable charging case.",
    features: [
      "Ultra-compact design",
      "5-hour battery life",
      "15 hours with case",
      "IPX4 water resistance",
      "Touch controls",
      "USB-C charging"
    ],
    colors: ["Black", "White", "Pink"],
    images: [
      "https://images.unsplash.com/photo-1608156639585-b3a7a6e98d3b",
      "https://images.unsplash.com/photo-1600086827875-a63b01f1335c"
    ],
    isWireless: true,
    stockCount: 40
  },
  {
    id: 29,
    name: "KidsHeadphones",
    brand: "PulseTech",
    category: "headphones",
    price: 2999,
    rating: 4.5,
    description: "Volume-limited headphones designed for children with colorful designs and durable build.",
    features: [
      "85dB volume limit",
      "Durable design",
      "Comfortable fit for kids",
      "Sharing port for multiple listeners",
      "No battery required",
      "Foldable design"
    ],
    colors: ["Blue", "Pink", "Green", "Orange"],
    images: [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29"
    ],
    isWireless: false,
    stockCount: 50
  },
  {
    id: 30,
    name: "AudioMax Pro",
    brand: "AudioWave",
    category: "headphones",
    price: 32999,
    rating: 4.9,
    description: "Flagship wireless headphones with premium sound quality, materials, and features.",
    features: [
      "Hi-Fi audio certification",
      "Premium leather and aluminum",
      "40-hour battery life",
      "Advanced noise cancellation",
      "Custom EQ profiles",
      "Premium carrying case"
    ],
    colors: ["Black", "Tan", "Navy Blue"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
    ],
    isWireless: true,
    isFeatured: true,
    isNew: true,
    stockCount: 10
  },
  {
    id: 31,
    name: "Charging Stand Pro",
    brand: "AudioWave",
    category: "accessories",
    price: 2999,
    rating: 4.6,
    description: "Premium headphone stand with built-in wireless charging for compatible headphones.",
    features: [
      "Wireless charging",
      "Aluminum construction",
      "LED charging indicator",
      "Cable management",
      "Non-slip base",
      "Compatible with most headphones"
    ],
    colors: ["Black", "Silver"],
    images: [
      "https://images.unsplash.com/photo-1612015670817-0127d21628d4",
      "https://images.unsplash.com/photo-1644438285639-2f2d0f384639"
    ],
    isWireless: false,
    stockCount: 25
  },
  {
    id: 32,
    name: "Premium Ear Cushions",
    brand: "SoundMaster",
    category: "accessories",
    price: 1999,
    rating: 4.7,
    description: "Memory foam replacement ear cushions for enhanced comfort and sound isolation.",
    features: [
      "Memory foam padding",
      "Protein leather covering",
      "Improved sound isolation",
      "Easy installation",
      "Fits most over-ear headphones",
      "Enhances comfort for extended use"
    ],
    colors: ["Black", "Brown"],
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      "https://images.unsplash.com/photo-1564156280315-1d42b4651629"
    ],
    isWireless: false,
    stockCount: 40
  },
  {
    id: 33,
    name: "AudioCare Cleaning Kit",
    brand: "PulseTech",
    category: "accessories",
    price: 999,
    rating: 4.5,
    description: "Complete cleaning kit for headphones and earbuds to maintain hygiene and sound quality.",
    features: [
      "Microfiber cloth",
      "Cleaning solution",
      "Soft brushes",
      "Earwax removal tools",
      "Carrying pouch",
      "Safe for all audio devices"
    ],
    colors: ["Multi"],
    images: [
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7",
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3"
    ],
    isWireless: false,
    stockCount: 60
  },
  {
    id: 34,
    name: "Premium Audio Cable",
    brand: "SoundMaster",
    category: "accessories",
    price: 1499,
    rating: 4.8,
    description: "High-quality replacement audio cable with gold-plated connectors for superior sound quality.",
    features: [
      "Oxygen-free copper wires",
      "Gold-plated connectors",
      "Braided nylon covering",
      "1.5m length",
      "Compatible with most headphones",
      "In-line remote and mic option"
    ],
    colors: ["Black", "Red"],
    images: [
      "https://images.unsplash.com/photo-1612015670817-0127d21628d4",
      "https://images.unsplash.com/photo-1644438285639-2f2d0f384639"
    ],
    isWireless: false,
    stockCount: 45
  },
  {
    id: 35,
    name: "Travel Case Pro",
    brand: "AudioWave",
    category: "accessories",
    price: 2499,
    rating: 4.6,
    description: "Hardshell travel case for headphones with custom foam inserts and accessory storage.",
    features: [
      "Hard shell protection",
      "Custom foam inserts",
      "Accessory compartment",
      "Water-resistant exterior",
      "Carabiner attachment",
      "Compact design"
    ],
    colors: ["Black", "Gray"],
    images: [
      "https://images.unsplash.com/photo-1612444530582-fc66183b16f7",
      "https://images.unsplash.com/photo-1646464442647-aaa75420c883"
    ],
    isWireless: false,
    stockCount: 30
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);

export const newProducts = products.filter(product => product.isNew);

export const getProductById = (id: number) => products.find(product => product.id === id);

export const getAllBrands = () => {
  const brands = new Set<string>();
  products.forEach(product => brands.add(product.brand));
  return Array.from(brands);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

// Format price in Indian Rupees
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};
