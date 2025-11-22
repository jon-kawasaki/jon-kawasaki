import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Contact = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [formRef, isFormVisible] = useScrollAnimation(0.1, 200)
  const [infoRef, isInfoVisible] = useScrollAnimation(0.1, 400)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:jonkawa.pro@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'jonkawa.pro@gmail.com',
      link: 'mailto:jonkawa.pro@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '(213) 232-4413',
      link: 'tel:+12132324413'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Torrance, CA, United States',
      link: 'https://maps.google.com/?q=Torrance,+CA'
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jon-kawasaki12',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/jon-kawasaki',
      color: 'bg-gray-900 hover:bg-gray-800'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-300 dark:bg-gray-800">
      <div className="container">
        <div 
          ref={sectionRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-700 dark:text-primary-300 font-medium mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 animate-pulse"></span>
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to discuss your next project? I'm always interested in new opportunities and exciting challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            ref={infoRef}
            className={`transition-all duration-1000 ${
              isInfoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className={`group flex items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900 hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                      isInfoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{info.title}</div>
                      <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 ${social.color} text-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Current Status */}
              <div 
                className={`mt-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl transition-all duration-500 ${
                  isInfoVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Current Status</h4>
                <p className="text-gray-600 dark:text-white mb-2">
                  Currently working as a Senior Full Stack Engineer at RedVentures
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Available for freelance projects and consulting opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ${
              isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-xl">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Note:</strong> This form will open your email client to send the message. 
                  You can also reach me directly at{' '}
                  <a href="mailto:jonkawa.pro@gmail.com" className="underline hover:text-blue-900 dark:hover:text-blue-100">
                    jonkawa.pro@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

