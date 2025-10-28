import Header from './components/Header'
import About from './components/About'
import Sapo from './components/Sapo'
import Design from './components/Design'
import Photos from './components/Photos'
import Video from './components/Video'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-light-green">
      <Header />
      <main>
        <About />
        <Sapo />
        <Design />
        <Photos />
        <Video />
      </main>
      <Footer />
    </div>
  )
}

export default App
