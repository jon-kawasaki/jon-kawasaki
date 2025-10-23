import React from 'react'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jonathan Kawasaki</h3>
            <p className="text-gray-300 mb-4">
              Senior Full Stack Engineer specializing in scalable web platforms, 
              React, Next.js, and modern web technologies.
            </p>
            <p className="text-gray-400 text-sm">
              Building exceptional user experiences through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-emble">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="space-y-3 mb-6">
              <div className="text-gray-300 text-sm">
                <strong>Email:</strong>{' '}
                <a href="mailto:jonkawa.pro@gmail.com" className="hover:text-white transition-colors duration-200">
                  jonkawa.pro@gmail.com
                </a>
              </div>
              <div className="text-gray-300 text-sm">
                <strong>Phone:</strong>{' '}
                <a href="tel:+12132324413" className="hover:text-white transition-colors duration-200">
                  (213) 232-4413
                </a>
              </div>
              <div className="text-gray-300 text-sm">
                <strong>Location:</strong> Los Angeles, CA
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/jon-kawasaki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/jkwski"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:jonkawa.pro@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Jonathan Kawasaki. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with{' '}
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              {' '}using React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

