export default function PrivateDining() {
  return (
    <section id="private" className="relative py-28 bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1530133532239-eda6f53fcf0f?q=80&w=2000&auto=format&fit=crop" alt="Private dining" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#d4a574]/40 rounded-2xl p-8 sm:p-12 bg-black/30 backdrop-blur">
          <h3 className="font-serif text-3xl sm:text-4xl text-white font-bold">Private Dining - An Ode to Exclusivity</h3>
          <p className="mt-4 text-white/90 max-w-3xl">Personalized experiences in intimate settings where culinary art meets personalization.</p>
          <a href="#contact" className="mt-8 inline-flex items-center rounded-md bg-[#d4a574] hover:bg-[#c9a961] text-white px-6 py-3 font-medium shadow-lg">Inquire About Private Events</a>
        </div>
      </div>
    </section>
  )
}
