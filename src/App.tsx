import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import appScreen1 from './assets/app-screen1.png'
import appScreen2 from './assets/app-screen2.png'
import appScreen3 from './assets/app-screen3.png'

// Custom hook for typewriter effect
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i))
        i++
      } else {
        // Reset to start the animation again
        setTimeout(() => {
          setDisplayText('')
          i = 0
        }, 1000) // Wait 1 second before restarting
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return displayText
}

const screenshots = [
  appScreen1,
  appScreen2,
  appScreen3
]

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 }
}

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentScreen, setCurrentScreen] = useState(0)
  const typedText = useTypewriter(' Ultimate Movie Experience', 100)

  useEffect(() => {
    setIsVisible(true)
    // Auto rotate screenshots
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screenshots.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
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
          ScreenScape
        </motion.h3>
        <div className="nav-links">
          <motion.button 
            className="download-btn primary"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Download Now
          </motion.button>
          {['features', 'about'].map((item) => (
            <motion.a 
              key={item} 
              href={`#${item}`}
              whileHover={{ scale: 1.1, color: '#E0A5E6' }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      <section className="hero-section">
        <motion.div 
          className={`hero-content ${isVisible ? 'fade-in' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{typedText}<span className="cursor">|</span></h1>
          <motion.h2
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.2, ...fadeInUp.transition }}
          >
            Stream Anywhere, Anytime
          </motion.h2>
          <motion.p
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.4, ...fadeInUp.transition }}
          >
            Download our app and enjoy unlimited access to thousands of movies and TV shows in stunning HD quality
          </motion.p>
          
          <motion.div 
            className="app-preview"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="preview-image">
              <div className="app-screenshot">
                <div className="screenshot-slider" style={{ transform: `translateX(-${currentScreen * 100}%)` }}>
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
                    <button
                      key={index}
                      className={`dot ${currentScreen === index ? 'active' : ''}`}
                      onClick={() => setCurrentScreen(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <motion.section 
        id="features" 
        className="features-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience the Best in Mobile Entertainment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We've packed our app with powerful features to give you the ultimate streaming experience
        </motion.p>
        
        <div className="features-grid">
          {['HD Streaming', 'Offline Mode', 'Regular Updates', 'Cross-Platform'].map((feature, index) => (
            <motion.div 
              key={feature}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <i className="fas fa-film"></i>
              <h3>{feature}</h3>
              <p>{feature === 'HD Streaming' ? 'Watch your favorite content in crystal clear HD quality with smooth playback' : feature === 'Offline Mode' ? 'Download movies and shows to watch without internet connection' : feature === 'Regular Updates' ? 'New content added weekly with the latest movies and TV shows' : 'Seamlessly switch between devices while streaming your content'}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About ScreenScape
          </motion.h2>
          <motion.div 
            className="disclaimer-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="disclaimer-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <p>
              ScreenScape does not store any media files on our servers and is not directly linked to the media. Third-party services host all media, and ScreenScape merely provides a search and web scraping tool that indexes publicly available data. We are not responsible for the content or availability of the media, as we do not host or control any of it.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p>©2024 ScreenScape. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
