import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'
import img6 from '../images/img6.jpeg'

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
    afterImage: img1,
    relatedProjects: [2, 3],
  },
  {
    id: 2,
    title: 'Modern Kitchen Design',
    category: 'Modular Kitchen',
    description: 'State-of-the-art modular kitchen with smart storage solutions',
    image: img2,
    location: 'Mumbai, India',
    area: '400 sq ft',
    materials: ['Stainless Steel', 'German Appliances', 'Quartz Countertops'],
    beforeImage: img2,
    afterImage: img2,
    relatedProjects: [1, 4],
  },
  {
    id: 3,
    title: 'Corporate Office Space',
    category: 'Office',
    description: 'Professional workspace design with ergonomic and aesthetic balance',
    image: img3,
    location: 'Bangalore, India',
    area: '10,000 sq ft',
    materials: ['Polished Concrete', 'Wood Paneling', 'Smart Lighting'],
    beforeImage: img3,
    afterImage: img3,
    relatedProjects: [4, 5],
  },
  {
    id: 4,
    title: 'Residential Apartment Makeover',
    category: 'Residential',
    description: 'Elegant apartment redesign with sustainable and modern elements',
    image: img4,
    location: 'Pune, India',
    area: '1,200 sq ft',
    materials: ['Eco-friendly Paint', 'Bamboo Flooring', 'Natural Lighting'],
    beforeImage: img4,
    afterImage: img4,
    relatedProjects: [2, 3],
  },
  {
    id: 5,
    title: 'Luxury Retail Store',
    category: 'Commercial',
    description: 'High-end retail space with exclusive display and lighting design',
    image: img5,
    location: 'Delhi, India',
    area: '3,000 sq ft',
    materials: ['Premium Lighting', 'Custom Fixtures', 'Marble Finishes'],
    beforeImage: img5,
    afterImage: img5,
    relatedProjects: [1, 4],
  },
  {
    id: 6,
    title: 'Luxury Master Bedroom',
    category: 'Residential',
    description: 'Serene bedroom sanctuary with premium furnishings and ambiance',
    image: img6,
    location: 'Hyderabad, India',
    area: '500 sq ft',
    materials: ['Egyptian Cotton Linens', 'Turkish Carpets', 'Crystal Lighting'],
    beforeImage: img6,
    afterImage: img6,
    relatedProjects: [3, 5],
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
  { value: '8', label: 'Years Experience' },
]
