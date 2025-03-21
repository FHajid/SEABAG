import Hero from "../component/hero"
import Navbar from "../component/navbar"

export default function Home() {
  return (
    
    <div>
        <Navbar />
        <Hero />
      <h1>Home</h1>
      <a href="/about">To about</a>
    </div>

  )
}