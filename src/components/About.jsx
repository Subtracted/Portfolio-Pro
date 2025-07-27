import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Lightbulb, Heart } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const passions = [
    {
      icon: Code,
      title: "Développement",
      description: "Technologies modernes et innovation"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Interfaces élégantes et intuitives"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Solutions créatives et efficaces"
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "Travail d'équipe et partage"
    }
  ]

  return (
    <section id="apropos" className="py-16 md:py-24">
      <div ref={ref} className="section-padding max-w-4xl mx-auto">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            À propos
          </h2>
          <div className="w-16 h-0.5 bg-forest-600 mx-auto"></div>
        </motion.div>

        {/* Contenu principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 mb-16"
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Développeur full stack avec <span className="font-semibold text-gray-900">5+ années d'expérience</span>, 
            je me spécialise dans la création d'applications web modernes et performantes.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Mon approche combine excellence technique et design minimaliste. 
            Chaque projet est une opportunité de créer quelque chose d'élégant et fonctionnel.
          </p>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-8 py-8">
            {[
              { number: "50+", label: "Projets" },
              { number: "5+", label: "Années" },
              { number: "∞", label: "Passion" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-light text-forest-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cartes de passions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {passions.map((passion, index) => (
            <div
              key={passion.title}
              className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className="text-forest-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <passion.icon size={28} />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {passion.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {passion.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-16 border-t border-gray-100 relative"
        >
          <blockquote className="text-xl md:text-2xl font-light text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            "Le code simple est plus puissant que le code complexe"
          </blockquote>
          <div className="mt-4 text-gray-500 text-sm">
            — Ma philosophie de développement
          </div>
          
          {/* Petites feuilles décoratives */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl opacity-30"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🌿
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 