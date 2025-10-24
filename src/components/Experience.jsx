import React from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [experiencesRef, isExperiencesVisible] = useScrollAnimation(0.1, 200)

  const experiences = [
    {
      company: 'RedVentures',
      website: 'https://www.redventures.com',
      logo: 'https://logo.clearbit.com/redventures.com',
      positions: [
        {
          title: 'Frontend Team Lead',
          duration: 'Jun 2024 — Present',
          description: 'Currently leading frontend direction for a relocation and home-services guidance platform, focusing on smoother delivery, clearer user experience, and product growth.'
        },
        {
          title: 'Senior Full-Stack Engineer',
          duration: 'Apr 2023 - May 2024',
          description: 'Contributed to a consumer platform for comparing and enrolling in home and internet services, helping improve usability and overall product performance.'
        }
      ],
      location: 'Fort Mill, South Carolina, United States - Remote',
      technologies: ['React', 'Next.js (SSR/ISR)', 'TypeScript', 'Storybook', 'Redux/RTK', 'GraphQL (Apollo)', 'AWS', 'Node.js', 'Terraform', 'Docker', 'Kubernetes']
    },
    {
      company: 'Sumeru Inc',
      website: 'https://www.sumeru.com',
      logo: 'https://logo.clearbit.com/sumeru.com',
      positions: [
        {
          title: 'Senior Full-Stack & Mobile Engineer',
          duration: 'Sep 2021 - Mar 2023',
          description: 'Took on a leadership capacity by guiding project direction, improving delivery discipline, and shaping execution quality for engineering teams working on high-impact client launches.'
        },
        {
          title: 'Full-Stack & Mobile Engineer',
          duration: 'Mar 2019 - Aug 2021',
          description: 'Played a key role in scaling client applications from prototype to production adoption, helping teams move faster and deliver more stable releases in remote delivery environments.'
        }
      ],
      location: 'Los Angeles, California, United States - Remote',
      technologies: ['React Native (iOS/Android)', 'React.js', 'TypeScript', 'Next.js', 'Node.js', 'Express.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS', 'Firebase']
    },
    {
      company: 'Goji Labs',
      website: 'https://www.gojilabs.com',
      logo: 'https://logo.clearbit.com/gojilabs.com',
      positions: [
        {
          title: 'Full-Stack & Mobile Developer',
          duration: 'Jul 2016 - Feb 2019',
          description: 'Contributed to client MVP launches and product iterations that helped startups secure funding and early traction, working closely with design and product teams to improve usability and delivery reliability.'
        }
      ],
      location: 'Los Angeles, California, United States - Hybrid',
      technologies: ['React Native (iOS/Android)', 'React.js', 'TypeScript', 'Next.js', 'Node.js', 'Express.js', 'GraphQL', 'Firebase', 'PostgreSQL', 'MongoDB', 'AWS']
    },
    {
      company: 'Dogtown Media',
      website: 'https://www.dogtownmedia.com',
      logo: 'https://logo.clearbit.com/dogtownmedia.com',
      positions: [
        {
          title: 'Software Developer',
          duration: 'Jul 2013 - Jun 2016',
          description: 'Supported client product development and helped small businesses transition from simple websites into more polished digital experiences, improving delivery consistency and client satisfaction.'
        }
      ],
      location: 'Los Angeles, California, United States - On-site',
      technologies: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'REST APIs', 'Bootstrap', 'Node.js', 'MySQL', 'AWS EC2/S3', 'Git']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-100 dark:bg-gray-800">
      <div className="container">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            Building scalable web platforms and leading engineering teams across various industries
          </p>
        </div>

        {/* Professional Timeline */}
        <div 
          ref={experiencesRef}
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            isExperiencesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 dark:from-primary-700 dark:via-primary-600 dark:to-primary-700 transform md:-translate-x-0.5"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center transition-all duration-1000 ${
                  isExperiencesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 bg-primary-200 dark:bg-primary-700 rounded-full animate-ping opacity-20"></div>
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-12 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                  <div className="relative group">
                    {/* Card */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 dark:border-gray-700 overflow-hidden">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-full -translate-y-12 translate-x-12 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10 p-8">
                        {/* Company Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                          <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center border border-gray-200 dark:border-gray-600 shadow-sm">
                              <img 
                                src={exp.logo} 
                                alt={`${exp.company} logo`}
                                className="w-8 h-8 object-contain"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.nextSibling.style.display = 'block';
                                }}
                              />
                              <span className="text-primary-600 dark:text-primary-400 font-bold text-sm hidden">
                                {exp.company.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                                {exp.company}
                              </h3>
                              <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium">{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-lg transition-all duration-300 hover:scale-110"
                            title={`Visit ${exp.company} website`}
                          >
                            <ExternalLink className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                          </a>
                        </div>
                        
                        {/* Positions */}
                        <div className="space-y-6 mb-8">
                          {exp.positions.map((position, posIndex) => (
                            <div 
                              key={posIndex} 
                              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300"
                            >
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                                  {position.title}
                                </h4>
                                <div className="flex items-center text-gray-500 dark:text-gray-400">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  <span className="text-sm font-semibold">{position.duration}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {position.description}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-white font-bold text-sm">⚡</span>
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technologies</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

