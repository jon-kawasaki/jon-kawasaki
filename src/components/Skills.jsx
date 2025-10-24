import React from 'react'
import { Code, Server, Cloud, TestTube, GitBranch, Smartphone } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [skillsRef, isSkillsVisible] = useScrollAnimation(0.1, 200)
  const [expertiseRef, isExpertiseVisible] = useScrollAnimation(0.1, 400)

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C++', 'C', 'HTML5', 'CSS3', 'ECMAScript 6+']
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Angular', 'Node.js', 'Express', 'NestJS', 'Spring Boot', '.NET', 'FastAPI', 'Django']
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Lambda', 'S3', 'SQS', 'SNS', 'EC2', 'RDS', 'CloudWatch', 'GCP', 'CloudRun', 'Firebase', 'BigQuery', 'CloudMonitoring', 'AI Platform', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD']
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      title: 'Testing & QA',
      skills: ['Mocha', 'Chai', 'Jest', 'Jasmine', 'Cypress', 'Postman', 'Swagger', 'Unit & Integration Testing']
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'GitLab', 'Jira', 'Confluence', 'Trello', 'Asana', 'Azure DevOps', 'Agile Scrum', 'Kanban']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Development',
      skills: ['React Native', 'iOS Development', 'Android Development', 'Expo', 'Firebase', 'Push Notifications', 'Offline-first Architecture']
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="container">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            Comprehensive expertise across modern web technologies, cloud platforms, and development tools
          </p>
        </div>

        <div 
          ref={skillsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`card p-6 hover:shadow-xl transition-all duration-500 ${
                isSkillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="text-primary-600">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Expertise Section */}
        <div 
          ref={expertiseRef}
          className={`mt-20 transition-all duration-1000 ${
            isExpertiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Core Expertise</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized in modern web technologies and scalable architecture solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* React */}
            <div 
              className={`group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isExpertiseVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 dark:bg-blue-700 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">⚛️</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">React</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Modern component-based UI development</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    Hooks
                  </span>
                  <span className="px-3 py-1 bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    Context API
                  </span>
                  <span className="px-3 py-1 bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    Performance
                  </span>
                </div>
              </div>
            </div>

            {/* React Native */}
            <div 
              className={`group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isExpertiseVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 dark:bg-purple-700 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">📱</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">React Native</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Cross-platform mobile development</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    iOS
                  </span>
                  <span className="px-3 py-1 bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Android
                  </span>
                  <span className="px-3 py-1 bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    Expo
                  </span>
                </div>
              </div>
            </div>

            {/* Microservices */}
            <div 
              className={`group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isExpertiseVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 dark:bg-green-700 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">🏗️</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Microservices</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Scalable distributed architecture</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Docker
                  </span>
                  <span className="px-3 py-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    Kubernetes
                  </span>
                  <span className="px-3 py-1 bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    API Gateway
                  </span>
                </div>
              </div>
            </div>

            {/* SEO */}
            <div 
              className={`group relative overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isExpertiseVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200 dark:bg-orange-700 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">🔍</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">SEO</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Search engine optimization expertise</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-200 dark:bg-orange-700 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                    Performance
                  </span>
                  <span className="px-3 py-1 bg-orange-200 dark:bg-orange-700 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                    Analytics
                  </span>
                  <span className="px-3 py-1 bg-orange-200 dark:bg-orange-700 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                    Ranking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

