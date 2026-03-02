import { useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './sections/Hero'
import Evolution from './sections/Evolution'
import Timeline from './sections/Timeline'
import Components from './sections/Components'
import Gallery from './sections/Gallery'
import Future from './sections/Future'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <main className="bg-background archival-grain min-h-screen">
      <Hero />
      <Evolution />
      <Timeline />
      <Components />
      <Gallery />
      <Future />
      <Footer />
    </main>
  )
}

export default App
