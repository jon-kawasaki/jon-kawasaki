import React from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="gradient-text">Jonathan Kawasaki</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-6">
                Senior Full Stack Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Specialized in building scalable web platforms across SaaS products, booking/marketplace systems, 
                enterprise dashboards, and high-traffic consumer applications.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                <span>Los Angeles, CA, United States</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary-600" />
                <span>(213) 232-4413</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary-600" />
                <span>jonkawa.pro@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/jon-kawasaki"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jkwski"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:jonkawa.pro@gmail.com"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="btn-primary text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="btn-secondary text-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-center">
                    <div className="text-6xl font-bold gradient-text mb-2">JK</div>
                    <div className="text-sm text-gray-600 font-medium">Full Stack Engineer</div>
                    <div className="text-xs text-gray-500 mt-1">React • Next.js • Node.js</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-primary-600 font-bold text-sm">React</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                <span className="text-primary-600 font-bold text-xs">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

