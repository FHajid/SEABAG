import Hero from "../component/hero"
import Navbar from "../component/navbar"
import ImageGallery from "../component/sectionGalery"

export default function Home() {
  return (
    
    <div>
        <Navbar />
        <Hero />
      <h1>Home</h1>
      <a href="/about">To about</a>
      <ImageGallery />
    </div>

  )
}