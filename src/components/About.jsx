import React from 'react'
import { Award, Users, Code, Rocket } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [sectionRef, isSectionVisible] = useScrollAnimation(0.1, 0)
  const [storyRef, isStoryVisible] = useScrollAnimation(0.1, 200)
  const [statsRef, isStatsVisible] = useScrollAnimation(0.1, 400)
  const [strengthsRef, isStrengthsVisible] = useScrollAnimation(0.1, 600)

  const stats = [
    { icon: <Code className="w-8 h-8" />, label: 'Years Experience', value: '10+' },
    { icon: <Users className="w-8 h-8" />, label: 'Projects Delivered', value: '50+' },
    { icon: <Award className="w-8 h-8" />, label: 'Technologies Mastered', value: '20+' },
    { icon: <Rocket className="w-8 h-8" />, label: 'High-Traffic Platforms', value: '5+' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-800">
      <div className="container">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
            Passionate about creating exceptional user experiences through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div 
            ref={storyRef}
            className={`transition-all duration-1000 ${
              isStoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-white">
              <p>
                I've always been fascinated by how technology can solve real-world problems and create meaningful experiences 
                for people. Starting from my early days at UC Berkeley, I discovered my passion for building digital solutions 
                that make a difference in people's lives.
              </p>
              <p>
                Over the past decade, I've had the privilege of working with amazing teams at companies like RedVentures, 
                where I help millions of people find essential home services, and Sumeru Inc, where I built mobile solutions 
                that empower field service workers to be more efficient.
              </p>
              <p>
                What drives me is the opportunity to take complex technical challenges and turn them into simple, elegant 
                solutions that users love. I believe great software isn't just about clean code—it's about understanding 
                the human story behind every feature and making technology feel effortless.
              </p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 ${
              isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`card p-6 text-center hover:shadow-xl transition-all duration-500 ${
                  isStatsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Strengths */}
        <div 
          ref={strengthsRef}
          className={`mt-16 transition-all duration-1000 ${
            isStrengthsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className={`text-center transition-all duration-500 ${
                isStrengthsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Full Stack Development</h4>
              <p className="text-gray-600 dark:text-white">
                End-to-end development expertise from frontend React applications to backend microservices and cloud infrastructure.
              </p>
            </div>
            <div 
              className={`text-center transition-all duration-500 ${
                isStrengthsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Leadership</h4>
              <p className="text-gray-600 dark:text-white">
                Leading teams of frontend engineers, handling code reviews, sprint planning, and mentoring junior developers.
              </p>
            </div>
            <div 
              className={`text-center transition-all duration-500 ${
                isStrengthsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance Optimization</h4>
              <p className="text-gray-600 dark:text-white">
                Specialized in improving Core Web Vitals, SEO optimization, and building high-performance applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

