export default function Ambiance() {
  return (
    <section id="ambiance" className="relative py-32">
      <img
        src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop"
        alt="Warm interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1a1a1a]/60" />
      <div className="relative max-w-5xl mx-auto px-4 text-center text-white">
        <h3 className="font-serif text-3xl sm:text-4xl font-bold">An Intimate Setting to Enjoy Your Time Together</h3>
        <p className="mt-4 text-white/90">Sip from our curated wine list and settle into the glow of good company.</p>
        <a href="#private" className="mt-8 inline-flex items-center rounded-md bg-[#d4a574] hover:bg-[#c9a961] text-white px-6 py-3 font-medium shadow-lg">Reserve a Table</a>
      </div>
    </section>
  )
}
