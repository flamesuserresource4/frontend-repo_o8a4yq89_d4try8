import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Featured', href: '#featured' },
  { label: 'Ambiance', href: '#ambiance' },
  { label: 'Private Dining', href: '#private' },
  { label: 'Freshness', href: '#freshness' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'backdrop-blur bg-[#f5f1ed]/80 shadow-sm' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-xl font-serif font-bold tracking-wide text-[#2c3e50]">Dinezo</a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-[#3a3a3a] hover:text-[#d4a574] transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#featured" className="inline-flex items-center rounded-md bg-[#d4a574] hover:bg-[#c9a961] text-white px-4 py-2 font-medium shadow-md transition-transform hover:-translate-y-0.5">Order Now</a>
          </div>
          <button className="md:hidden p-2" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block text-[#3a3a3a] hover:text-[#d4a574]" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#featured" className="inline-flex items-center rounded-md bg-[#d4a574] hover:bg-[#c9a961] text-white px-4 py-2 font-medium shadow-md">Order Now</a>
          </div>
        )}
      </nav>
    </header>
  )
}
