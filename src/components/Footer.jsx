import React from 'react'
import { Heart, Github, Linkedin, Mail, MapPin, Phone, Code } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Jonathan Kawasaki</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Senior Full Stack Engineer specializing in scalable web platforms, 
              React, Next.js, and modern web technologies. Building exceptional 
              user experiences through innovative technology solutions.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
              Available for new opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300">
                <Mail className="w-5 h-5 mr-3 text-primary-500" />
                <a href="mailto:jonkawa.pro@gmail.com" className="text-sm">
                  jonkawa.pro@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300">
                <Phone className="w-5 h-5 mr-3 text-primary-500" />
                <a href="tel:+12132324413" className="text-sm">
                  (213) 232-4413
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-500" />
                <span className="text-sm">Torrance, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jon-kawasaki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/jon-kawasaki12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:jonkawa.pro@gmail.com"
                  className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Back to Top */}
            <div className="text-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Jonathan Kawasaki. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              {' '}using React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

