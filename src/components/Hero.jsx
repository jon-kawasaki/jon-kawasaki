import React, { useEffect, useRef, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone, Code, Rocket, Users } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 pb-8 md:pb-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 dark:opacity-20"
        style={{ backgroundImage: 'url("./los angeles.jpg")' }}
      ></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Main Content */}
            <div 
              ref={heroRef}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Greeting */}
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-full text-primary-700 dark:text-primary-300 font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-primary-200 dark:border-primary-700">
                  <span className="relative mr-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full relative block"></span>
                  </span>
                  <span className="animate-pulse">Available for new opportunities</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Hi, I'm{' '}
                  <span className="gradient-text">Jonathan</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-6">
                  Senior Full Stack Engineer
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
                  I build scalable web platforms that impact millions of users. Specialized in React, React Native, 
                  microservices, and SEO optimization for high-traffic consumer applications.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">12+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="btn-primary text-center py-4 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="btn-secondary text-center py-4 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  View My Work
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jon-kawasaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 border border-gray-200 dark:border-gray-700"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/jkwski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 border border-gray-200 dark:border-gray-700"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:jonkawa.pro@gmail.com"
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 border border-gray-200 dark:border-gray-700"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className={`hidden lg:block transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="relative">
                {/* Floating Cards */}
                <div className="relative h-96">
                  {/* Main Card */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80 h-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Frontend Expertise</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">React, Next.js, TypeScript</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">12+ years experience</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Team leadership</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Performance optimization</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Card 1 */}
                  <div className="absolute top-8 right-0 w-48 h-32 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 hover:scale-105 transition-transform duration-500 delay-200">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                        <Rocket className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">React Native</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Cross-platform mobile development</p>
                  </div>

                  {/* Floating Card 2 */}
                  <div className="absolute bottom-8 left-0 w-48 h-32 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 hover:scale-105 transition-transform duration-500 delay-400">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">Microservices</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Scalable architecture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-wrap justify-center gap-8 text-gray-700 dark:text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                <span className="font-medium">Los Angeles, CA</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                <span className="font-medium">(213) 232-4413</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                <span className="font-medium">jonkawa.pro@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

