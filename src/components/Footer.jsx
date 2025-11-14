import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-2xl">Dinezo</h4>
          <p className="mt-3 text-white/80">Warm hospitality, crafted flavors, and memorable moments.</p>
          <div className="mt-4 flex gap-3 text-[#d4a574]">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>
        <div>
          <h5 className="text-[#d4a574] font-semibold">Menu</h5>
          <ul className="mt-3 space-y-2 text-white/80">
            <li><a href="#featured" className="hover:text-[#d4a574]">Featured</a></li>
            <li><a href="#story" className="hover:text-[#d4a574]">Our Story</a></li>
            <li><a href="#ambiance" className="hover:text-[#d4a574]">Ambiance</a></li>
            <li><a href="#private" className="hover:text-[#d4a574]">Private Dining</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#d4a574] font-semibold">Contact</h5>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>123 Warm Street, Cozy City</li>
            <li>(123) 456-7890</li>
            <li>hello@dinezo.com</li>
          </ul>
        </div>
        <div>
          <h5 className="text-[#d4a574] font-semibold">Hours</h5>
          <ul className="mt-3 space-y-2 text-white/80">
            <li>Mon–Thu: 11am – 10pm</li>
            <li>Fri–Sat: 11am – 11pm</li>
            <li>Sun: 10am – 9pm</li>
          </ul>
          <form className="mt-4 flex">
            <input type="email" placeholder="Your email" className="flex-1 rounded-l-md px-3 py-2 text-[#1a1a1a]" />
            <button className="rounded-r-md bg-[#d4a574] px-4 py-2 text-[#1a1a1a] font-semibold">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="text-center text-white/60 mt-8 text-sm">© {new Date().getFullYear()} Dinezo. All rights reserved.</p>
    </footer>
  )
}
