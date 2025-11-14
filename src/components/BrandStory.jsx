export default function BrandStory() {
  return (
    <section id="story" className="bg-[#f5f1ed] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2c3e50] font-bold">Crafting Memorable Dining Experiences</h2>
          <p className="mt-4 text-[#3a3a3a] leading-relaxed">From the first sizzle to the final garnish, our kitchen is rooted in authenticity. We source locally, season thoughtfully, and plate with purpose—so every bite tells our story of warmth, dedication, and craft.</p>
          <p className="mt-3 text-[#3a3a3a]/90">Join us for a lingering dinner, a celebratory brunch, or a spontaneous craving. Were here to make moments memorable.</p>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop"
            alt="Chef preparing food"
            className="w-full rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
