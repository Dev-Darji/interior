import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'

// User Uploaded Luxury Images
import luxuryLounge from '../images/luxury_lounge.jpg'
import modernKitchen from '../images/modern_kitchen.jpg'
import executiveOffice from '../images/executive_office.jpg'
import cozyBedroom from '../images/cozy_bedroom.jpg'
import stylishFoyer from '../images/stylish_foyer.jpg'
import elegantDining from '../images/elegant_dining.jpg'
import spaBathroom from '../images/spa_bathroom.jpg'
import commercialLobby from '../images/commercial_lobby.jpg'
import gardenTerrace from '../images/garden_terrace.jpg'

const allImages = [
  img1, luxuryLounge,
  img2, modernKitchen,
  img3, executiveOffice,
  img4, elegantDining,
  img5, commercialLobby,
  img6, cozyBedroom,
  spaBathroom,
  gardenTerrace,
  stylishFoyer
]

export const projects = [
  {
    id: 1,
    title: 'Luxury Villa Redesign',
    category: 'Luxury Villa',
    description: 'Complete interior transformation of a modern villa with contemporary design elements',
    image: img1,
    location: 'Dubai, UAE',
    area: '5,500 sq ft',
    materials: ['Italian Marble', 'Premium Wood', 'Crystal Chandeliers'],
    beforeImage: img1,
    afterImage: luxuryLounge,
    gallery: allImages,
    relatedProjects: [2, 3],
  },
  {
    id: 2,
    title: 'Modern Kitchen Design',
    category: 'Modular Kitchen',
    description: 'State-of-the-art modular kitchen with smart storage solutions',
    image: modernKitchen,
    location: 'Mumbai, India',
    area: '400 sq ft',
    materials: ['Stainless Steel', 'German Appliances', 'Quartz Countertops'],
    beforeImage: img2,
    afterImage: modernKitchen,
    gallery: allImages,
    relatedProjects: [1, 4],
  },
  {
    id: 3,
    title: 'Corporate Office Space',
    category: 'Office',
    description: 'Professional workspace design with ergonomic and aesthetic balance',
    image: executiveOffice,
    location: 'Bangalore, India',
    area: '10,000 sq ft',
    materials: ['Polished Concrete', 'Wood Paneling', 'Smart Lighting'],
    beforeImage: img3,
    afterImage: executiveOffice,
    gallery: allImages,
    relatedProjects: [4, 5],
  },
  {
    id: 4,
    title: 'Residential Apartment Makeover',
    category: 'Residential',
    description: 'Elegant apartment redesign with sustainable and modern elements',
    image: elegantDining,
    location: 'Pune, India',
    area: '1,200 sq ft',
    materials: ['Eco-friendly Paint', 'Bamboo Flooring', 'Natural Lighting'],
    beforeImage: img4,
    afterImage: elegantDining,
    gallery: allImages,
    relatedProjects: [2, 3],
  },
  {
    id: 5,
    title: 'Luxury Retail Store',
    category: 'Commercial',
    description: 'High-end retail space with exclusive display and lighting design',
    image: commercialLobby,
    location: 'Delhi, India',
    area: '3,000 sq ft',
    materials: ['Premium Lighting', 'Custom Fixtures', 'Marble Finishes'],
    beforeImage: img5,
    afterImage: commercialLobby,
    gallery: allImages,
    relatedProjects: [1, 4],
  },
  {
    id: 6,
    title: 'Luxury Master Bedroom',
    category: 'Residential',
    description: 'Serene bedroom sanctuary with premium furnishings and ambiance',
    image: cozyBedroom,
    location: 'Hyderabad, India',
    area: '500 sq ft',
    materials: ['Egyptian Cotton Linens', 'Turkish Carpets', 'Crystal Lighting'],
    beforeImage: img6,
    afterImage: cozyBedroom,
    gallery: allImages,
    relatedProjects: [3, 5],
  },
  {
    id: 7,
    title: 'Elite Seaside Villa',
    category: 'Luxury Villa',
    description: 'A striking seaside residence showcasing expansive glass elevations, modern architectural lines, and private pools',
    image: img2,
    location: 'Dubai, UAE',
    area: '6,200 sq ft',
    materials: ['Premium Glass Facades', 'Structural Steel', 'Polished Concrete'],
    beforeImage: img2,
    afterImage: luxuryLounge,
    gallery: allImages,
    relatedProjects: [1, 12],
  },
  {
    id: 8,
    title: 'Bespoke Master Spa Suite',
    category: 'Residential',
    description: 'A sanctuary of tranquility featuring freestanding tub, Arabescato marble walls, and solid brass fixtures',
    image: spaBathroom,
    location: 'Mumbai, India',
    area: '350 sq ft',
    materials: ['Italian Arabescato Marble', 'Satin Brass', 'Curated Architectural Lighting'],
    beforeImage: img6,
    afterImage: spaBathroom,
    gallery: allImages,
    relatedProjects: [6, 13],
  },
  {
    id: 9,
    title: 'Minimalist Cinema Lounge',
    category: 'Residential',
    description: 'An acoustic sanctuary featuring custom-molded oak panels, ambient LED contours, and plush velvet seating',
    image: luxuryLounge,
    location: 'Bangalore, India',
    area: '600 sq ft',
    materials: ['Oak Acoustic Panels', 'Ambient LED Strips', 'Bespoke Velvet Seating'],
    beforeImage: img3,
    afterImage: luxuryLounge,
    gallery: allImages,
    relatedProjects: [3, 11],
  },
  {
    id: 10,
    title: 'Royal Walk-in Dressing Suite',
    category: 'Residential',
    description: 'A high-end wardrobe room featuring glass-faced LED display cabinets, central plush bench, and parquet floors',
    image: gardenTerrace,
    location: 'Delhi, India',
    area: '450 sq ft',
    materials: ['Tempered Glass', 'Integrated LED Shelving', 'Polished Parquet'],
    beforeImage: img4,
    afterImage: gardenTerrace,
    gallery: allImages,
    relatedProjects: [4, 6],
  },
  {
    id: 11,
    title: 'Bespoke Home Bar & Wine Cellar',
    category: 'Residential',
    description: 'Sophisticated hospitality space with backlit golden onyx stone, brass detailing, and dark oak cabinets',
    image: stylishFoyer,
    location: 'Pune, India',
    area: '300 sq ft',
    materials: ['Golden Onyx', 'Solid Brass Accentuation', 'Stained Charcoal Oak'],
    beforeImage: img2,
    afterImage: stylishFoyer,
    gallery: allImages,
    relatedProjects: [2, 9],
  },
  {
    id: 12,
    title: 'Grand Helical Foyer',
    category: 'Luxury Villa',
    description: 'A striking double-height entry lobby defined by a helical floating staircase and floor-to-ceiling glass',
    image: stylishFoyer,
    location: 'Dubai, UAE',
    area: '1,500 sq ft',
    materials: ['Structural Concrete', 'Helical Timber Balustrade', 'Architectural Steel'],
    beforeImage: img1,
    afterImage: stylishFoyer,
    gallery: allImages,
    relatedProjects: [1, 13],
  },
  {
    id: 13,
    title: 'Indoor Pool & Wellness Sanctuary',
    category: 'Residential',
    description: 'An immersive wellness experience featuring limestone decks, custom water features, and botanical integration',
    image: gardenTerrace,
    location: 'Hyderabad, India',
    area: '2,500 sq ft',
    materials: ['Premium Limestone', 'Prismatic Water Finish', 'Botanical Landscaping'],
    beforeImage: img5,
    afterImage: gardenTerrace,
    gallery: allImages,
    relatedProjects: [8, 12],
  },
]


export const testimonials = [
  {
    id: 1,
    name: 'Priya Singh',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=75',
    review: 'Elegant Design Studio transformed our house into our dream home. Every detail was absolute perfection!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=75',
    review: 'Professional, creative, and dedicated team. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Anjali Desai',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=75',
    review: 'Best decision we made for our office space. The design is both functional and beautiful.',
    rating: 5,
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1618221195710-dd905b0ec59a?w=300&h=300&fit=crop&q=75',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&q=75',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=300&fit=crop&q=75',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=300&fit=crop&q=75',
  'https://images.unsplash.com/photo-1600121848334-ca4246f2d4d7?w=300&h=300&fit=crop&q=75',
  'https://images.unsplash.com/photo-1631049307038-da0ec84d8b73?w=300&h=300&fit=crop&q=75',
]

export const stats = [
  { value: '60+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
]
