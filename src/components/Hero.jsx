import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.6])

  return (
    <section id="top" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-[#fafaf8]">
      <motion.img
        src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
        alt="Cozy restaurant interior"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y, opacity }}
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Experience Warm Hospitality in a Cozy Atmosphere</h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90">Where every guest is treated like family</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#featured" className="inline-flex items-center rounded-md bg-[#d4a574] hover:bg-[#c9a961] text-white px-6 py-3 font-medium shadow-lg transition-transform hover:-translate-y-0.5">Order Now</a>
            <a href="#story" className="inline-flex items-center rounded-md border border-[#d4a574] text-[#d4a574] hover:bg-[#d4a574] hover:text-white px-6 py-3 font-medium transition-colors">View Menu</a>
          </div>
        </div>
      </div>
    </section>
  )
}
