import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Code, Sparkles, ArrowRight } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "EcoShop",
      description: "E-commerce écoresponsable avec interface moderne et dashboard administrateur complet.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      year: "2024"
    },
    {
      id: 2,
      title: "MindFlow",
      description: "Application de méditation avec suivi de progression et sessions personnalisées.",
      technologies: ["React Native", "Firebase", "Node.js"],
      category: "Mobile",
      year: "2024"
    },
    {
      id: 3,
      title: "ArtGallery",
      description: "Galerie d'art numérique interactive avec animations 3D et réalité virtuelle.",
      technologies: ["Three.js", "React", "WebGL"],
      category: "Creative",
      year: "2023"
    },
    {
      id: 4,
      title: "GreenData",
      description: "Dashboard analytique pour le suivi d'impact environnemental.",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      category: "Analytics",
      year: "2023"
    },
    {
      id: 5,
      title: "NatureSound",
      description: "Plateforme de streaming de sons naturels avec lecture hors ligne.",
      technologies: ["React", "Web Audio API", "AWS"],
      category: "Streaming",
      year: "2023"
    },
    {
      id: 6,
      title: "LeafChat",
      description: "Messagerie éco-responsable avec chiffrement de bout en bout.",
      technologies: ["TypeScript", "Socket.io", "Docker"],
      category: "Communication",
      year: "2022"
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
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section id="projets" className="py-16 md:py-24">
      <div ref={ref} className="section-padding max-w-6xl mx-auto">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une sélection de projets récents alliant innovation et simplicité
          </p>
          <div className="w-16 h-0.5 bg-forest-600 mx-auto mt-6"></div>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border border-stone-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* En-tête */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full">
                  {project.category}
                </span>
                <span className="text-gray-400 text-sm font-medium">
                  {project.year}
                </span>
              </div>

              {/* Contenu */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-forest-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-forest-600 text-white rounded-lg text-sm font-medium hover:bg-forest-700 transition-colors"
                >
                  <Eye size={16} />
                  Voir
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-16 border-t border-gray-100 relative"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Envie de collaborer ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Chaque projet est une nouvelle aventure. 
            Transformons ensemble vos idées en réalité numérique.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-white rounded-lg font-medium hover:bg-forest-700 transition-colors"
          >
            <ArrowRight size={20} />
            Démarrer un projet
          </a>
          
          {/* Petite décoration */}
          <motion.div
            className="absolute top-4 right-1/4 text-2xl opacity-25"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 