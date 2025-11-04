import Header from './components/Header'
import About from './components/About'
import Sapoetronic from './components/Sapoetronic'
import Design from './components/Design'
import Photos from './components/Photos'
import Video from './components/Video'
import Footer from './components/Footer'
import { LazyMotion, domAnimation } from 'framer-motion'

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-light-green">
        <Header />
        <main>
          <About />
          <Sapoetronic />
          <Design />
          <Photos />
          <Video />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App
