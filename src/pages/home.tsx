import Footer from "../component/footer"
import Hero from "../component/hero"
import Navbar from "../component/navbar"
import ImageGallery from "../component/sectionGalery"
import SectionContent from "../component/sectionContent"
import CardSection from "../component/cardsevtion"

export default function Home() {
  return (
    
    <div>

      <Navbar />
      <Hero />
      <CardSection />
      <SectionContent />
      <ImageGallery />
      
      <Footer />

    </div>
  )
}