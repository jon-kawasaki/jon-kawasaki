import React from 'react'
import { GraduationCap, ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Education = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [educationRef, isEducationVisible] = useScrollAnimation(0.1, 200)
  const [activitiesRef, isActivitiesVisible] = useScrollAnimation(0.1, 400)

  const education = [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      duration: 'Aug 2009 - May 2013',
      location: 'Berkeley, California, United States',
      website: 'https://www.berkeley.edu',
      description: 'Completed undergraduate studies with a focus on software engineering, systems fundamentals, and applied computer science.',
      activities: [
        {
          name: 'ACM Programming Club',
          duration: '2009–2011',
          description: 'Practiced algorithms and data structures through peer sessions and internal coding challenges.',
          website: 'https://www.ocf.berkeley.edu/~acm/'
        },
        {
          name: 'Google Developer Student Clubs (GDSC)',
          duration: '2011–2013',
          description: 'Participated in student-led developer gatherings and workshops focused on web and app development.',
          website: 'https://developers.google.com/community/gdsc'
        }
      ]
    }
  ]

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-800">
      <div className="container">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Activities
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            Academic foundation and extracurricular involvement that shaped my technical journey
          </p>
        </div>

        <div 
          ref={educationRef}
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`card p-8 hover:shadow-xl transition-all duration-500 ${
                isEducationVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-primary-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.institution}</h3>
                      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">{edu.degree}</p>
                      <p className="text-gray-600 dark:text-white">{edu.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="text-gray-500 dark:text-gray-400 mb-2">
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      <div className="text-gray-500 dark:text-gray-400 mb-2">
                        <span>{edu.location}</span>
                      </div>
                      <a
                        href={edu.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div 
                    ref={activitiesRef}
                    className={`mt-8 transition-all duration-1000 ${
                      isActivitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Activities & Involvement</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {edu.activities.map((activity, actIndex) => (
                        <div 
                          key={actIndex} 
                          className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-500 ${
                            isActivitiesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                          }`}
                          style={{ transitionDelay: `${actIndex * 100}ms` }}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <h5 className="text-lg font-semibold text-gray-900 dark:text-white">{activity.name}</h5>
                            <a
                              href={activity.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                          <p className="text-gray-600 dark:text-white text-sm mb-2">{activity.description}</p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{activity.duration}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
