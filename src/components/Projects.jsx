import React, { useState, useEffect } from 'react'
import { ExternalLink, Github, Globe, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [carouselRef, isCarouselVisible] = useScrollAnimation(0.1, 200)
  const [infoRef, isInfoVisible] = useScrollAnimation(0.1, 400)
  
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [imageRotations, setImageRotations] = useState({})
  const [imageOpacity, setImageOpacity] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  const projects = [
    {
      title: 'AllConnect Platform',
      description: 'High-traffic consumer platform for connecting users with utility services.',
      images: ['/projects/allconnect/1.png', '/projects/allconnect/2.png', '/projects/allconnect/3.png'],
      liveUrl: 'https://allconnect.com'
    },
    {
      title: 'MyMove Platform',
      description: 'Consumer platform for relocation services with geo-personalized features.',
      images: ['/projects/mymove/1.png'],
      liveUrl: 'https://mymove.com'
    },
    {
      title: 'HousecallPro Mobile App',
      description: 'React Native mobile application for field service operations.',
      images: ['/projects/housecallpro/1.png', '/projects/housecallpro/2.png'],
      liveUrl: 'https://housecallpro.com'
    },
    {
      title: 'ClassTag Platform',
      description: 'Parent-teacher communication platform with mobile and web applications.',
      images: ['/projects/classtag/1.png'],
      liveUrl: 'https://classtag.com'
    },
    {
      title: 'OpenTable Integration',
      description: 'Web development initiatives for OpenTable platform with production-grade features.',
      images: ['/projects/opentable/1.png'],
      liveUrl: 'https://opentable.com'
    },
    {
      title: 'Square Payment Integration',
      description: 'Development initiatives for Square platform focusing on payment processing.',
      images: ['/projects/square/1.png'],
      liveUrl: 'https://squareup.com'
    }
  ]

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying || hoveredIndex !== null) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, projects.length, hoveredIndex])

  // Image rotation for projects with multiple images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageRotations(prev => {
        const newRotations = { ...prev }
        const newOpacity = { ...imageOpacity }
        
        projects.forEach((project, projectIndex) => {
          if (project.images.length > 1) {
            // Start fade out
            newOpacity[projectIndex] = 0
            
            // After fade out completes, change image and fade in
            setTimeout(() => {
              newRotations[projectIndex] = ((newRotations[projectIndex] || 0) + 1) % project.images.length
              setImageRotations({ ...newRotations })
              
              // Fade in after image change
              setTimeout(() => {
                setImageOpacity(prev => ({ ...prev, [projectIndex]: 1 }))
              }, 50)
            }, 500) // Wait for fade out to complete
          }
        })
        
        setImageOpacity(newOpacity)
        return newRotations
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [projects, imageOpacity])

  const nextSlide = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide((prev) => prev + 1)
      setIsAutoPlaying(false) // Stop auto-play when user interacts
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
      setIsAutoPlaying(false) // Stop auto-play when user interacts
    }
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Stop auto-play when user interacts
  }

  // Create extended array for smooth infinite rotation
  const extendedProjects = [...projects, ...projects, ...projects]
  const totalSlides = extendedProjects.length
  const offset = projects.length

  // Calculate transform for smooth sliding animation
  const getTransformStyle = () => {
    // On mobile, show 1 project at a time, on desktop show 3
    const projectWidth = isMobile ? 100 : 33.333
    const translateX = -((currentSlide + offset) * projectWidth) + (isMobile ? 0 : projectWidth)
    return {
      transform: `translateX(${translateX}%)`,
      transition: 'transform 500ms ease-in-out'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <div 
          ref={sectionRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-700 dark:text-primary-300 font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></span>
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            High-impact projects showcasing expertise in scalable web platforms and mobile applications
          </p>
        </div>

        {/* Projects Grid */}
        <div 
          ref={carouselRef}
          className={`max-w-7xl mx-auto transition-all duration-1000 ${
            isCarouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer ${
                  isCarouselVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                      <ExternalLink className="w-4 h-4 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Visit Link */}
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300">
                    <Globe className="w-4 h-4 mr-2" />
                    <span className="text-sm">Visit Live Site</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div 
          ref={infoRef}
          className={`mt-16 text-center transition-all duration-1000 ${
            isInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">More Projects & Contributions</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
              I've contributed to numerous other projects including OpenTable and Square integrations, 
              various startup MVPs, and open-source contributions. Many of my recent projects are 
              proprietary to the companies I've worked with, but I'm always excited to discuss 
              the technical challenges and solutions I've implemented.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/jon-kawasaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5 mr-3" />
                View GitHub Profile
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-5 h-5 mr-3" />
                Discuss Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

