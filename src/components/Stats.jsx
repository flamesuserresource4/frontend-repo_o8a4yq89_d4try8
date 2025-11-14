import { Calendar, Users, Truck, Star } from 'lucide-react'
import { useEffect, useRef } from 'react'

function useCountUp(target, duration = 1200) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = null
    const from = 0
    const to = target
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const val = Math.floor(from + (to - from) * p)
      el.textContent = val.toLocaleString()
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration])
  return ref
}

export default function Stats() {
  const s1 = useCountUp(2012)
  const s2 = useCountUp(500000)
  const s3 = useCountUp(2000000)

  return (
    <section className="relative py-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/wood_1.png')]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Calendar className="mx-auto text-[#6b7a54]" />
            <div ref={s1} className="mt-3 font-serif text-3xl text-[#2c3e50]" />
            <p className="text-[#3a3a3a]">Since launching our first kitchen</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto text-[#6b7a54]" />
            <div ref={s2} className="mt-3 font-serif text-3xl text-[#2c3e50]" />
            <p className="text-[#3a3a3a]">Satisfied food lovers served</p>
          </div>
          <div className="text-center">
            <Truck className="mx-auto text-[#6b7a54]" />
            <div ref={s3} className="mt-3 font-serif text-3xl text-[#2c3e50]" />
            <p className="text-[#3a3a3a]">Meals delivered to doorsteps</p>
          </div>
          <div className="text-center">
            <Star className="mx-auto text-[#6b7a54]" />
            <div className="mt-3 font-serif text-3xl text-[#2c3e50]">High Rating</div>
            <p className="text-[#3a3a3a]">Average rating - fresh, locally sourced ingredients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
