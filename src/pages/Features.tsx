import { motion } from 'framer-motion'
import '../styles/Features.css'

const Features = () => {
  const features = [
    {
      icon: 'film',
      title: 'HD Streaming',
      description: 'Watch your favorite content in crystal clear HD quality with smooth playback'
    },
    {
      icon: 'download',
      title: 'Offline Mode',
      description: 'Download movies and shows to watch without internet connection'
    },
    {
      icon: 'sync',
      title: 'Regular Updates',
      description: 'New content added weekly with the latest movies and TV shows'
    },
    {
      icon: 'shield-alt',
      title: 'Secure Access',
      description: 'Safe and private streaming experience'
    }
  ]

  return (
    <div className="features-page">
      <motion.div 
        className="features-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Features</h1>
        <p>Discover what makes ScreenScape special</p>
      </motion.div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div 
            key={feature.title}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="feature-icon">
              <i className={`fas fa-${feature.icon}`}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Features 