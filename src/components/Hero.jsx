import React from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 relative">
      {/* Background Image */}
       <div 
         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-30"
          style={{ backgroundImage: 'url("./los angeles.jpg")' }}
       ></div>
      {/* Content Overlay */}
      <div className="relative z-10 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Centered Content */}
          <div className="text-center max-w-4xl">
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
              <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                <span>Los Angeles, CA, United States</span>
              </div>
              <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary-600" />
                <span>(213) 232-4413</span>
              </div>
              <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary-600" />
                <span>jonkawa.pro@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-8">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero

