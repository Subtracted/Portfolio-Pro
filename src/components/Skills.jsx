import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "CSS/Sass", level: 85 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Photoshop", level: 80 },
        { name: "Illustration", level: 75 }
      ]
    },
    {
      title: "Outils & DevOps",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 70 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut", delay: 0.5 }
    })
  }

  return (
    <section id="competences" className="py-16 md:py-24 bg-stone-100">
      <div ref={ref} className="section-padding max-w-4xl mx-auto">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Compétences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise
          </p>
          <div className="w-16 h-0.5 bg-forest-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Grille des compétences */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-forest-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies en apprentissage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-white/80 backdrop-blur-sm border border-stone-200 rounded-lg p-8 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            En cours d'apprentissage
          </h3>
          <p className="text-gray-600 mb-6">
            Technologies que j'explore actuellement
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['AI/ML', 'Three.js', 'Rust', 'Blockchain', 'Next.js 13'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-forest-50 hover:text-forest-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 