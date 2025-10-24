import React from 'react'
import { Award, Users, Code, Target, Zap, Globe, Heart } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [statsRef, isStatsVisible] = useScrollAnimation(0.1, 200)
  const [valuesRef, isValuesVisible] = useScrollAnimation(0.1, 400)

  const stats = [
    { icon: <Code className="w-8 h-8" />, label: 'Years Experience', value: '12+', color: 'from-blue-500 to-blue-600' },
    { icon: <Users className="w-8 h-8" />, label: 'Projects Delivered', value: '100+', color: 'from-green-500 to-green-600' },
    { icon: <Award className="w-8 h-8" />, label: 'Technologies Mastered', value: '25+', color: 'from-purple-500 to-purple-600' },
    { icon: <Globe className="w-8 h-8" />, label: 'High-Traffic Platforms', value: '10+', color: 'from-orange-500 to-orange-600' },
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'User-Centric Design',
      description: 'Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Excellence',
      description: 'Building lightning-fast applications with optimized Core Web Vitals and SEO best practices.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Scalable Solutions',
      description: 'Architecting systems that grow with your business, from startup to enterprise scale.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Collaborative Leadership',
      description: 'Mentoring teams and fostering environments where great ideas can flourish and grow.',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A passionate frontend engineer with 12+ years of experience building scalable web platforms 
            that impact millions of users worldwide
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`mb-20 transition-all duration-1000 ${
            isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700 ${
                  isStatsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div 
          ref={valuesRef}
          className={`mb-20 transition-all duration-1000 ${
            isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Core Values</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide my work and shape every project I undertake
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700 ${
                  isValuesVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 rounded-full -translate-y-8 translate-x-8 opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About

