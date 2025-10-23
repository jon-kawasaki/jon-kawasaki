import React from 'react'
import { ExternalLink, Github, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AllConnect Platform',
      company: 'RedVentures',
      description: 'High-traffic consumer platform for connecting users with utility services. Led frontend development and migration to Next.js with SSR/ISR.',
      features: [
        'Next.js migration with SSR/ISR for improved SEO',
        'Geo-personalized onboarding flows',
        'GraphQL-powered eligibility checks',
        'Reusable Storybook component library',
        'Tagular tracking integration',
        'Core Web Vitals optimization'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'AWS', 'Storybook'],
      image: '/allconnect.com.png',
      liveUrl: 'https://allconnect.com',
      githubUrl: null,
      status: 'Production'
    },
    {
      title: 'MyMove Platform',
      company: 'RedVentures',
      description: 'Consumer platform for relocation services. Built geo-personalized features and optimized for high-traffic performance.',
      features: [
        'High-traffic consumer platform',
        'Geo-personalized user experience',
        'Real-time service matching',
        'Mobile-optimized interface',
        'A/B testing implementation',
        'Performance monitoring'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'GraphQL', 'AWS', 'Redux'],
      image: '/mymove.com.png',
      liveUrl: 'https://mymove.com',
      githubUrl: null,
      status: 'Production'
    },
    {
      title: 'HousecallPro Mobile App',
      company: 'Sumeru Inc',
      description: 'React Native mobile application for field service operations. Implemented offline-first architecture and real-time coordination features.',
      features: [
        'React Native iOS/Android app',
        'Offline-first architecture',
        'Real-time job coordination',
        'Background synchronization',
        'Push notifications',
        'Field worker workflow optimization'
      ],
      technologies: ['React Native', 'TypeScript', 'GraphQL', 'Firebase', 'PostgreSQL', 'Redis'],
      image: null,
      liveUrl: 'https://housecallpro.com',
      githubUrl: null,
      status: 'Production'
    },
    {
      title: 'ClassTag Platform',
      company: 'Goji Labs',
      description: 'Parent-teacher communication platform with mobile and web applications. Built real-time messaging and classroom engagement features.',
      features: [
        'Cross-platform mobile/web app',
        'Real-time messaging system',
        'Classroom announcement features',
        'Event and schedule management',
        'Media sharing capabilities',
        'Push notification system'
      ],
      technologies: ['React Native', 'React', 'Node.js', 'WebSockets', 'Firebase', 'PostgreSQL'],
      image: null,
      liveUrl: 'https://classtag.com',
      githubUrl: null,
      status: 'Production'
    },
    {
      title: 'OpenTable Integration Platform',
      company: 'Dogtown Media',
      description: 'Web development initiatives for OpenTable platform, building production-grade user-facing features and integrations.',
      features: [
        'Production-grade web platform development',
        'User-facing feature implementation',
        'Integration system development',
        'UI implementation and layout structure',
        'Front-end refinements and optimization',
        'Client-focused solution delivery'
      ],
      technologies: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'REST APIs', 'Bootstrap', 'Node.js', 'MySQL'],
      image: null,
      liveUrl: 'https://opentable.com',
      githubUrl: null,
      status: 'Production'
    },
    {
      title: 'Square Payment Integration',
      company: 'Dogtown Media',
      description: 'Development initiatives for Square platform, focusing on payment processing and merchant solutions.',
      features: [
        'Payment processing integration',
        'Merchant solution development',
        'Web application enhancements',
        'UI/UX improvements',
        'Performance optimization',
        'Client integration support'
      ],
      technologies: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'REST APIs', 'Bootstrap', 'MySQL', 'AWS'],
      image: null,
      liveUrl: 'https://squareup.com',
      githubUrl: null,
      status: 'Production'
    }
  ]

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card p-8 hover:shadow-xl transition-shadow duration-300">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">{project.company}</span>
                    <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-white">{project.description}</p>
                </div>
              </div>

              {/* Company Logo */}
              <div className="mb-6">
                <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600 dark:text-white mb-1">{project.company}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-300">Company Logo</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 dark:text-white text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
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
                className="flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
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

