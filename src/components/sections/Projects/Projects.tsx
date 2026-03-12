import { motion } from 'framer-motion'
import { SectionHeading } from '../../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'
import { PROJECTS } from '../../../constants/data'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-accent-cyan/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="04."
          title="Projects"
          subtitle="Hands-on work spanning mobile development, web engineering, and accessibility design."
        />

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} extraCategories={["mobile"]} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
