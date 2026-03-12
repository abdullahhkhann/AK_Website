import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import { Badge } from '../../ui/Badge'
import type { ExperienceItem } from '../../../types'
import { fadeInLeft, fadeInRight } from '../../../constants/animations'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative grid md:grid-cols-2 gap-8 md:gap-0">
      {/* Timeline dot */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full border-2 border-accent-cyan bg-bg-primary relative"
        >
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-accent-cyan"
          />
        </motion.div>
      </div>

      {/* Left side */}
      <div className={`${isLeft ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}>
        <motion.div
          variants={isLeft ? fadeInLeft : fadeInRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="p-6 rounded-xl border border-white/5 bg-bg-card hover:border-accent-cyan/25 transition-colors duration-300 group"
        >
          {/* Header */}
          <div className={`mb-4 ${isLeft ? 'md:text-right' : ''}`}>
            <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-200">
              {item.role}
            </h3>
            <p className="text-accent-cyan font-medium text-sm mt-0.5">
              {item.companyUrl ? (
                <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </p>

            <div className={`flex items-center gap-4 mt-2 text-xs text-text-muted font-mono ${isLeft ? 'md:justify-end' : ''}`}>
              <span className="flex items-center gap-1">
                <FiCalendar size={11} />
                {item.startDate} – {item.endDate}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin size={11} />
                {item.location}
              </span>
            </div>
          </div>

          {/* Bullets */}
          <ul className={`space-y-2 mb-4 ${isLeft ? 'md:text-right' : ''}`}>
            {item.description.map((d, i) => (
              <li key={i} className={`text-sm text-text-secondary leading-relaxed flex gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                <span className="text-accent-cyan mt-1 flex-shrink-0">›</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
            {item.tags.map((tag) => (
              <Badge key={tag} label={tag} variant="default" />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Empty column for alignment */}
      {isLeft && <div className="hidden md:block" />}
    </div>
  )
}
