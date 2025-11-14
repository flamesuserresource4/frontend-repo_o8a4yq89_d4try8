import { Leaf, Heart, Utensils } from 'lucide-react'

const pillars = [
  { icon: Utensils, title: 'Taste', desc: 'Superior flavor from fresh ingredients' },
  { icon: Heart, title: 'Nutrition', desc: 'Health-conscious preparation' },
  { icon: Leaf, title: 'Feel-Good', desc: 'How you feel after the meal matters' },
]

export default function Freshness() {
  return (
    <section id="freshness" className="bg-[#fafaf8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-serif text-3xl text-[#2c3e50] font-bold">Freshness You Can Taste</h3>
        <p className="mt-2 text-[#3a3a3a] max-w-2xl">We believe in honest food: seasonal produce, responsible sourcing, and craftsmanship in every step.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <Icon className="text-[#6b7a54]" />
              <h4 className="mt-3 font-serif text-xl text-[#2c3e50]">{title}</h4>
              <p className="mt-2 text-[#3a3a3a]">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <img src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGcmVzaCUyMGluZ3JlZGllbnRzfGVufDB8MHx8fDE3NjMwOTI2NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Fresh ingredients" className="w-full rounded-xl object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
