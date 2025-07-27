import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-padding max-w-4xl mx-auto text-center">
        {/* Titre principal minimaliste */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Développeur
            <br />
            <span className="text-gradient font-normal">Full Stack</span>
          </h1>
          
          {/* Petites décorations */}
          <motion.div
            className="absolute -top-2 -left-8 text-2xl opacity-30"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            🍃
          </motion.div>
          <motion.div
            className="absolute -bottom-2 -right-8 text-2xl opacity-30"
            animate={{ rotate: [0, -15, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            🌱
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Je crée des expériences web modernes et performantes.
            Passionné par l'innovation et le design minimaliste.
          </motion.p>
        </motion.div>

        {/* Technologies principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['React', 'Node.js', 'TypeScript', 'Design UI/UX'].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="#projets"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-white rounded-lg font-medium hover:bg-forest-700 transition-all duration-200"
          >
            Voir mes projets
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
          >
            Me contacter
          </a>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-16"
        >
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-3 text-gray-500 hover:text-forest-600 transition-colors duration-200"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-gray-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 