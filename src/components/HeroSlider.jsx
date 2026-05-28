import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// Import both original exterior images and new premium interior images for offline use
import img1 from '../images/img1.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import luxuryLounge from '../images/luxury_lounge.jpg'
import modernKitchen from '../images/modern_kitchen.jpg'
import executiveOffice from '../images/executive_office.jpg'

const luxuryImages = [
  {
    url: img1,
    alt: 'Luxury Architectural Exterior',
  },
  {
    url: luxuryLounge,
    alt: 'Luxury Penthouse Living Room',
  },
  {
    url: img4,
    alt: 'Contemporary Villa Exterior',
  },
  {
    url: modernKitchen,
    alt: 'High-End Modern Kitchen',
  },
  {
    url: img3,
    alt: 'Minimalist Architectural Geometry',
  },
  {
    url: executiveOffice,
    alt: 'Corporate Executive Sanctuary',
  },
]

export default function HeroSlider() {
  const swiperRef = useRef(null)

  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        el: '.hero-pagination',
        bulletClass: 'hero-bullet',
        bulletActiveClass: 'hero-bullet-active',
      }}
      navigation={{
        prevEl: '.hero-prev',
        nextEl: '.hero-next',
      }}
      loop={true}
      speed={1000}
      className="w-full h-full"
    >
      {luxuryImages.map((image, idx) => (
        <SwiperSlide key={idx} className="relative h-screen">
          {/* Base Image */}
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />

          {/* Professional Overlay - Enhances readability without overshadowing image */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Gradient Overlay - Professional premium look */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
        </SwiperSlide>
      ))}

      {/* Navigation Arrows */}
      <div className="hero-prev absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 cursor-pointer group">
        <button className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-lux-accent-gold hover:border-lux-accent-gold transition-all duration-300 group">
          <svg
            className="w-6 h-6 text-white group-hover:text-[#121212] transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="hero-next absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 cursor-pointer group">
        <button className="p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-lux-accent-gold hover:border-lux-accent-gold transition-all duration-300 group">
          <svg
            className="w-6 h-6 text-white group-hover:text-[#121212] transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="hero-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2" />
    </Swiper>
  )
}

// Add to global styles
export const heroSliderStyles = `
  .hero-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .hero-bullet-active {
    background-color: #0F1821;
    border-color: #0F1821;
    width: 30px;
    border-radius: 5px;
  }

  .swiper-fade .swiper-slide {
    opacity: 0;
    transition-property: opacity;
  }

  .swiper-fade .swiper-slide-active {
    opacity: 1;
  }
`
