import Footer from "../component/footer"
import Hero from "../component/hero"
import Navbar from "../component/navbar"
import ImageGallery from "../component/sectionGalery"
import SectionContent from "../component/sectionContent"

export default function Home() {
  return (
    
    <div>
        <Navbar />
        <Hero />
      <h1>Home</h1>
      <a href="/about">To about</a>
      <SectionContent />
      <ImageGallery />
      <Footer />
    </div>

  )
}