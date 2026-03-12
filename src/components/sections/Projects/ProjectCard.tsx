import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { Badge } from '../../ui/Badge'
import type { ProjectItem } from '../../../types'

const categoryColors: Record<string, string> = {
  cloud: '#00d4ff',
  systems: '#a855f7',
  web: '#22c55e',
  mobile: '#f59e0b',
  all: '#8b949e',
}

const categoryLabels: Record<string, string> = {
  cloud: 'Cloud',
  systems: 'Systems',
  web: 'Web',
  mobile: 'Mobile App',
  all: 'Other',
}

interface ProjectCardProps {
  project: ProjectItem
  delay?: number
  extraCategories?: string[]
}

export function ProjectCard({ project, delay = 0, extraCategories = [] }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col p-6 rounded-xl border border-white/5 bg-bg-card hover:border-accent-cyan/25 transition-all duration-300 hover:shadow-glow-cyan"
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {project.featured && (
            <FiStar size={14} className="text-accent-cyan" />
          )}
          <span
            className="text-xs font-mono px-2 py-0.5 rounded-full"
            style={{
              color: categoryColors[project.category],
              background: `${categoryColors[project.category]}15`,
              border: `1px solid ${categoryColors[project.category]}30`,
            }}
          >
            {categoryLabels[project.category]}
          </span>
          {extraCategories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{
                color: categoryColors[cat] ?? '#8b949e',
                background: `${categoryColors[cat] ?? '#8b949e'}15`,
                border: `1px solid ${categoryColors[cat] ?? '#8b949e'}30`,
              }}
            >
              {categoryLabels[cat] ?? cat}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-text-secondary hover:text-accent-cyan transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="text-text-secondary hover:text-accent-cyan transition-colors"
              aria-label="Live Demo"
            >
              <FiExternalLink size={18} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-200 mb-2">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-text-secondary leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} label={tag} variant="default" />
        ))}
      </div>
    </motion.div>
  )
}
