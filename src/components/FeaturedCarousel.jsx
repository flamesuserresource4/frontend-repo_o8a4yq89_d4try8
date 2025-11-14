import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const dishes = [
  {
    title: 'Breakfast',
    desc: 'Chef-crafted breakfast creations blending tradition and innovation',
    img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Signature Sandwich',
    desc: 'Warm, cheesy happiness in every bite',
    img: 'https://images.unsplash.com/photo-1604908812141-9aaa2e373ee8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Fresh Salads',
    desc: 'Taste the difference in our crisp salads',
    img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Desserts',
    desc: 'Sweet endings with handcrafted indulgence',
    img: 'https://images.unsplash.com/photo-1541782814455-cdf7d1a39d83?q=80&w=1400&auto=format&fit=crop',
  },
]

export default function FeaturedCarousel() {
  const ref = useRef(null)

  const scrollBy = (offset) => {
    ref.current?.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id="featured" className="bg-[#fafaf8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h3 className="font-serif text-3xl text-[#2c3e50] font-bold">Featured Dishes</h3>
          <div className="hidden sm:flex gap-2">
            <button className="p-2 rounded-full border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white" onClick={() => scrollBy(-320)}>
              <ChevronLeft />
            </button>
            <button className="p-2 rounded-full border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white" onClick={() => scrollBy(320)}>
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="relative">
          <div ref={ref} className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-[#d4a574]/40">
            {dishes.map((d, i) => (
              <a key={i} href="#" className="min-w-[300px] sm:min-w-[360px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] overflow-hidden snap-start group">
                <div className="relative h-56 overflow-hidden">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span className="absolute inset-0 ring-1 ring-transparent group-hover:ring-[#d4a574] transition" />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-xl text-[#2c3e50]">{d.title}</h4>
                  <p className="mt-2 text-[#3a3a3a] text-sm">{d.desc}</p>
                  <span className="mt-4 inline-block text-[#d4a574] font-medium">Order Now →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
