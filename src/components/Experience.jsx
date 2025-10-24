import React from 'react'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [experiencesRef, isExperiencesVisible] = useScrollAnimation(0.1, 200)

  const experiences = [
    {
      company: 'RedVentures',
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
    <section id="experience" className="section-padding bg-gray-100 dark:bg-gray-900">
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

        {/* Timeline */}
        <div 
          ref={experiencesRef}
          className={`relative transition-all duration-1000 ${
            isExperiencesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="relative z-10 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1">
                  <div 
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-500 ${
                      isExperiencesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <div className="flex items-center text-lg font-semibold text-primary-600 dark:text-primary-400">
                          <span>{exp.company}</span>
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <div className="flex items-center text-gray-500 dark:text-gray-400 md:justify-end">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {exp.positions.map((position, posIndex) => (
                        <div key={posIndex} className="border-l-2 border-primary-200 dark:border-primary-600 pl-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{position.title}</h3>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 md:justify-end">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm font-medium">{position.duration}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-white text-sm">{position.description}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
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

