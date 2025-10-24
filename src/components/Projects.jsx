import React, { useState, useEffect } from 'react'
import { ExternalLink, Github, Globe, ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [imageRotations, setImageRotations] = useState({})
  const [imageOpacity, setImageOpacity] = useState({})

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
    // Center the active project by moving the container
    const translateX = -((currentSlide + offset) * 33.333) + 33.333
    return {
      transform: `translateX(${translateX}%)`,
      transition: 'transform 500ms ease-in-out'
    }
  }

  return (
    <section id="projects" className="section-padding bg-gray-100 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            High-impact projects showcasing expertise in scalable web platforms and mobile applications
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="flex" style={getTransformStyle()}>
              {extendedProjects.map((project, index) => {
                const isActive = index === currentSlide + offset
                const isPrev = index === currentSlide + offset - 1
                const isNext = index === currentSlide + offset + 1
                const isHovered = hoveredIndex === index
                
                return (
                  <div key={index} className="w-1/3 flex-shrink-0 px-4">
                    <div 
                      className={`card p-6 transition-all duration-500 ease-in-out cursor-pointer ${
                        isHovered
                          ? 'scale-110 shadow-2xl z-10 opacity-100' 
                          : (isPrev || isNext || isActive)
                          ? 'scale-100 opacity-100'
                          : 'scale-75 opacity-20'
                      }`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                    {/* Project Thumbnail */}
                    <div className="mb-4">
                      <img 
                        src={project.images[imageRotations[index % projects.length] || 0]} 
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-lg transition-opacity duration-500"
                        style={{ 
                          opacity: imageOpacity[index % projects.length] !== undefined 
                            ? imageOpacity[index % projects.length] 
                            : 1 
                        }}
                      />
                    </div>

                    {/* Project Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-white text-sm mb-4">{project.description}</p>
                      
                      {/* Click to visit indicator */}
                      <div className="flex items-center justify-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                        <Globe className="w-4 h-4 mr-2" />
                        Click to visit live site
                      </div>
                    </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === (currentSlide % projects.length)
                    ? 'bg-primary-600 dark:bg-primary-400'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects & Contributions
            </h3>
            <p className="text-gray-600 dark:text-white mb-6">
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
                className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub Profile
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center px-6 py-3 border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
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

