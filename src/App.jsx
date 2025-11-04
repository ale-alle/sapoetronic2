import Header from './components/Header'
import About from './components/About'
import Sapoetronic from './components/Sapoetronic'
import Photos from './components/Photos'
import Video from './components/Video'
import Footer from './components/Footer'
import ParallaxBand from './components/ParallaxBand'
import { LazyMotion, domAnimation } from 'framer-motion'

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-light-green">
        <Header />
        <main>
          <About />
          <ParallaxBand src="/lima-1.jpg" alt="Lima scene 1" height="60vh" speed={1} />

          <Sapoetronic />
          <ParallaxBand src="/lima-2.jpg" alt="Lima scene 2" height="60vh" speed={1} />

          <Photos />
          <ParallaxBand src="/lima-3.jpg" alt="Lima scene 4" height="80vh" speed={1} />

          <Video />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
