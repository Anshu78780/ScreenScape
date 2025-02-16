import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Features from './pages/Features'
import About from './pages/About'
import './App.css'
import appScreen1 from './assets/app-screen1.png'
import appScreen2 from './assets/app-screen2.png'
import appScreen3 from './assets/app-screen3.png'

// Constants
const APP_VERSION = '0.0.5'
const APP_DOWNLOAD_URL = `/downloads/screenscape-v${APP_VERSION}.apk`

// Custom hook for typewriter effect (Fixed)
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index))
        setIndex(index + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else {
      setTimeout(() => {
        setDisplayText('')
        setIndex(0)
      }, 2000) // Pause before restarting
    }
  }, [index, text, speed])

  return displayText
}

const screenshots = [appScreen1, appScreen2, appScreen3]

function App() {
  return (
    <Router>
      <div className="app-container">
        <motion.nav 
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3 
            className="logo"
            whileHover={{ scale: 1.1 }}
          >
            <Link to="/">ScreenScape</Link>
          </motion.h3>
          <div className="nav-links">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/features">Features</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/about">About</Link>
            </motion.div>
            <motion.button 
              className="download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
            >
              Download Now
            </motion.button>
          </div>
        </motion.nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <footer>
          <p>© 2025 ScreenScape. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

// Home component
const Home = () => {
  const [currentScreen, setCurrentScreen] = useState(0)
  const typedText = useTypewriter('Your Ultimate Movie Experience', 100)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="gradient-bg">
      <section className="hero-section">
        <div className="hero-content">
          <motion.div 
            className="text-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              {typedText}<span className="cursor">|</span>
            </h1>
            <p>Stream and download your favorite movies and TV shows in stunning quality</p>
            <motion.button 
              className="download-btn primary-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
            >
              <i className="fas fa-download"></i>
              Download Now
            </motion.button>
          </motion.div>

          <motion.div 
            className="app-preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="device-wrapper">
              <div className="device-notch"></div>
              <div className="screenshot-container">
                <div 
                  className="screenshot-slider" 
                  style={{ transform: `translateX(-${currentScreen * 100}%)` }}
                >
                  {screenshots.map((screen, index) => (
                    <img 
                      key={index}
                      src={screen} 
                      alt={`App Screenshot ${index + 1}`}
                      className="screenshot"
                    />
                  ))}
                </div>
                <div className="screenshot-dots">
                  {screenshots.map((_, index) => (
                    <div 
                      key={index} 
                      className={`dot ${currentScreen === index ? 'active' : ''}`}
                      onClick={() => setCurrentScreen(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const handleDownload = () => {
  const link = document.createElement('a')
  link.href = 'https://github.com/Anshu78780/App-Release/releases/download/v0.0.5/ScreenScape-v0.0.5.apk'
  link.download =`https://github.com/Anshu78780/App-Release/releases/download/v0.0.5/ScreenScape-v0.0.5.apk`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default App
