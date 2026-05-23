import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'

// Import premium generated interior images for high-contrast offline blend
import interiorImg1 from '../images/interior_img1.jpeg'
import interiorImg2 from '../images/interior_img2.jpeg'
import interiorImg3 from '../images/interior_img3.jpeg'
import interiorImg4 from '../images/interior_img4.jpeg'
import interiorImg5 from '../images/interior_img5.jpeg'
import interiorImg6 from '../images/interior_img6.jpeg'
import interiorImg7 from '../images/interior_img7.jpeg'
import interiorImg8 from '../images/interior_img8.jpeg'
import interiorImg9 from '../images/interior_img9.jpeg'
import interiorImg10 from '../images/interior_img10.jpeg'
import interiorImg11 from '../images/interior_img11.jpeg'
import interiorImg12 from '../images/interior_img12.jpeg'

const allImages = [
  img1, interiorImg1,
  img2, interiorImg2,
  img3, interiorImg3,
  img4, interiorImg4,
  img5, interiorImg5,
  img6, interiorImg6,
  interiorImg7,
  interiorImg8,
  interiorImg9,
  interiorImg10,
  interiorImg11,
  interiorImg12
]

export const projects = [
  {
    id: 1,
    title: 'Luxury Villa Redesign',
    category: 'Luxury Villa',
    description: 'Complete interior transformation of a modern villa with contemporary design elements',
    image: img1, // Your original gorgeous villa exterior
    location: 'Dubai, UAE',
    area: '5,500 sq ft',
    materials: ['Italian Marble', 'Premium Wood', 'Crystal Chandeliers'],
    beforeImage: img1,
    afterImage: interiorImg1, // Our custom living room interior
    gallery: allImages,
    relatedProjects: [2, 3],
  },
  {
    id: 2,
    title: 'Modern Kitchen Design',
    category: 'Modular Kitchen',
    description: 'State-of-the-art modular kitchen with smart storage solutions',
    image: interiorImg2, // Our custom modern kitchen interior
    location: 'Mumbai, India',
    area: '400 sq ft',
    materials: ['Stainless Steel', 'German Appliances', 'Quartz Countertops'],
    beforeImage: img2, // Your original kitchen/exterior context
    afterImage: interiorImg2,
    gallery: allImages,
    relatedProjects: [1, 4],
  },
  {
    id: 3,
    title: 'Corporate Office Space',
    category: 'Office',
    description: 'Professional workspace design with ergonomic and aesthetic balance',
    image: interiorImg3, // Our custom office interior
    location: 'Bangalore, India',
    area: '10,000 sq ft',
    materials: ['Polished Concrete', 'Wood Paneling', 'Smart Lighting'],
    beforeImage: img3, // Your original building exterior
    afterImage: interiorImg3,
    gallery: allImages,
    relatedProjects: [4, 5],
  },
  {
    id: 4,
    title: 'Residential Apartment Makeover',
    category: 'Residential',
    description: 'Elegant apartment redesign with sustainable and modern elements',
    image: interiorImg4, // Our custom dining lounge interior
    location: 'Pune, India',
    area: '1,200 sq ft',
    materials: ['Eco-friendly Paint', 'Bamboo Flooring', 'Natural Lighting'],
    beforeImage: img4, // Your original apartment structure
    afterImage: interiorImg4,
    gallery: allImages,
    relatedProjects: [2, 3],
  },
  {
    id: 5,
    title: 'Luxury Retail Store',
    category: 'Commercial',
    description: 'High-end retail space with exclusive display and lighting design',
    image: interiorImg5, // Our custom boutique store interior
    location: 'Delhi, India',
    area: '3,000 sq ft',
    materials: ['Premium Lighting', 'Custom Fixtures', 'Marble Finishes'],
    beforeImage: img5, // Your original boutique facade
    afterImage: interiorImg5,
    gallery: allImages,
    relatedProjects: [1, 4],
  },
  {
    id: 6,
    title: 'Luxury Master Bedroom',
    category: 'Residential',
    description: 'Serene bedroom sanctuary with premium furnishings and ambiance',
    image: interiorImg6, // Our custom master bedroom interior
    location: 'Hyderabad, India',
    area: '500 sq ft',
    materials: ['Egyptian Cotton Linens', 'Turkish Carpets', 'Crystal Lighting'],
    beforeImage: img6, // Your original house exterior
    afterImage: interiorImg6,
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
    afterImage: interiorImg1,
    gallery: allImages,
    relatedProjects: [1, 12],
  },
  {
    id: 8,
    title: 'Bespoke Master Spa Suite',
    category: 'Residential',
    description: 'A sanctuary of tranquility featuring freestanding tub, Arabescato marble walls, and solid brass fixtures',
    image: interiorImg7,
    location: 'Mumbai, India',
    area: '350 sq ft',
    materials: ['Italian Arabescato Marble', 'Satin Brass', 'Curated Architectural Lighting'],
    beforeImage: img6,
    afterImage: interiorImg7,
    gallery: allImages,
    relatedProjects: [6, 13],
  },
  {
    id: 9,
    title: 'Minimalist Cinema Lounge',
    category: 'Residential',
    description: 'An acoustic sanctuary featuring custom-molded oak panels, ambient LED contours, and plush velvet seating',
    image: interiorImg8,
    location: 'Bangalore, India',
    area: '600 sq ft',
    materials: ['Oak Acoustic Panels', 'Ambient LED Strips', 'Bespoke Velvet Seating'],
    beforeImage: img3,
    afterImage: interiorImg8,
    gallery: allImages,
    relatedProjects: [3, 11],
  },
  {
    id: 10,
    title: 'Royal Walk-in Dressing Suite',
    category: 'Residential',
    description: 'A high-end wardrobe room featuring glass-faced LED display cabinets, central plush bench, and parquet floors',
    image: interiorImg9,
    location: 'Delhi, India',
    area: '450 sq ft',
    materials: ['Tempered Glass', 'Integrated LED Shelving', 'Polished Parquet'],
    beforeImage: img4,
    afterImage: interiorImg9,
    gallery: allImages,
    relatedProjects: [4, 6],
  },
  {
    id: 11,
    title: 'Bespoke Home Bar & Wine Cellar',
    category: 'Residential',
    description: 'Sophisticated hospitality space with backlit golden onyx stone, brass detailing, and dark oak cabinets',
    image: interiorImg10,
    location: 'Pune, India',
    area: '300 sq ft',
    materials: ['Golden Onyx', 'Solid Brass Accentuation', 'Stained Charcoal Oak'],
    beforeImage: img2,
    afterImage: interiorImg10,
    gallery: allImages,
    relatedProjects: [2, 9],
  },
  {
    id: 12,
    title: 'Grand Helical Foyer',
    category: 'Luxury Villa',
    description: 'A striking double-height entry lobby defined by a helical floating staircase and floor-to-ceiling glass',
    image: interiorImg11,
    location: 'Dubai, UAE',
    area: '1,500 sq ft',
    materials: ['Structural Concrete', 'Helical Timber Balustrade', 'Architectural Steel'],
    beforeImage: img1,
    afterImage: interiorImg11,
    gallery: allImages,
    relatedProjects: [1, 13],
  },
  {
    id: 13,
    title: 'Indoor Pool & Wellness Sanctuary',
    category: 'Residential',
    description: 'An immersive wellness experience featuring limestone decks, custom water features, and botanical integration',
    image: interiorImg12,
    location: 'Hyderabad, India',
    area: '2,500 sq ft',
    materials: ['Premium Limestone', 'Prismatic Water Finish', 'Botanical Landscaping'],
    beforeImage: img5,
    afterImage: interiorImg12,
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
  { value: '120+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
]
