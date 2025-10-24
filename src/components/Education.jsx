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
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            isEducationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 ${
                isEducationVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary-100 to-secondary-200 dark:from-secondary-800 dark:to-secondary-900 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
              
              <div className="relative z-10 p-8 md:p-12">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">{edu.institution}</h3>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                          {edu.degree}
                        </span>
                        <span className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-4">
                    <div className="text-right">
                      <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">Location</div>
                      <div className="text-gray-900 dark:text-white font-semibold">{edu.location}</div>
                    </div>
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Visit University
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                {/* Activities Section */}
                <div 
                  ref={activitiesRef}
                  className={`border-t border-gray-200 dark:border-gray-700 pt-8 transition-all duration-1000 ${
                    isActivitiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Extracurricular Activities</h4>
                      <p className="text-gray-600 dark:text-gray-300">Leadership and technical involvement during university</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {edu.activities.map((activity, actIndex) => (
                      <div 
                        key={actIndex} 
                        className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-500 hover:shadow-lg ${
                          isActivitiesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                        }`}
                        style={{ transitionDelay: `${actIndex * 150}ms` }}
                      >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-full -translate-y-8 translate-x-8 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-4">
                            <h5 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                              {activity.name}
                            </h5>
                            <a
                              href={activity.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800 rounded-lg transition-all duration-300 hover:scale-110"
                            >
                              <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" />
                            </a>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                            {activity.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                              {activity.duration}
                            </span>
                            <div className="w-2 h-2 bg-primary-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          </div>
                        </div>
                      </div>
                    ))}
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
