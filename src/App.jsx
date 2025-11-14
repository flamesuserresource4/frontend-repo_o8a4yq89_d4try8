import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BrandStory from './components/BrandStory'
import FeaturedCarousel from './components/FeaturedCarousel'
import Ambiance from './components/Ambiance'
import Stats from './components/Stats'
import PrivateDining from './components/PrivateDining'
import Freshness from './components/Freshness'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans bg-[#fafaf8]">
      <Navbar />
      <main>
        <Hero />
        <BrandStory />
        <FeaturedCarousel />
        <Ambiance />
        <Stats />
        <PrivateDining />
        <Freshness />
      </main>
      <Footer />
    </div>
  )
}

export default App
