import { motion } from 'framer-motion'
import '../styles/About.css'

const About = () => {
  return (
    <div className="about-page">
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>About ScreenScape</h1>
        <p>Your Ultimate Movie Companion</p>
      </motion.div>

      <div className="about-content">
        <motion.div 
          className="about-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Our Mission</h2>
          <p>To provide seamless access to entertainment content while respecting content rights and user privacy.</p>
        </motion.div>

        <motion.div 
          className="disclaimer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="disclaimer-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Legal Disclaimer</h3>
            <p>
              ScreenScape does not store any media files on our servers and is not directly linked to the media. 
              Third-party services host all media, and ScreenScape merely provides a search and web scraping tool 
              that indexes publicly available data.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="contact-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Contact Us</h2>
          <p>Have questions? We're here to help!</p>
          <a href="mailto:contact@screenscape.com" className="contact-button">
            <i className="fas fa-envelope"></i>
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default About 