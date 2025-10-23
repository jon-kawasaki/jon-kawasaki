import React from 'react'
import { Code, Server, Cloud, TestTube, GitBranch, Smartphone } from 'lucide-react'

const Skills = () => {
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            Comprehensive expertise across modern web technologies, cloud platforms, and development tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 hover:shadow-xl transition-shadow duration-300">
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

        {/* Additional Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Specialized Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-2">SSR/ISR</div>
              <div className="text-gray-600 dark:text-white font-medium">Server-Side Rendering</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-2">GraphQL</div>
              <div className="text-gray-600 dark:text-white font-medium">API Development</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-2">SEO</div>
              <div className="text-gray-600 dark:text-white font-medium">Search Optimization</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-300 mb-2">Microservices</div>
              <div className="text-gray-600 dark:text-white font-medium">Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

