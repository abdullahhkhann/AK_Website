import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeading } from '../../ui/SectionHeading'
import { SkillBar } from './SkillBar'
import { SKILL_CATEGORIES } from '../../../constants/data'
import { staggerContainer, fadeInUp } from '../../../constants/animations'

const categoryIcons: Record<string, string> = {
  'Languages': '⌨️',
  'Cloud & Infrastructure': '☁️',
  'Web & Mobile': '🌐',
  'Testing & Automation': '🧪',
  'Security & Networking': '🔐',
  'Other': '💡',
}

export function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="02."
          title="Technical Skills"
          subtitle="A versatile skill set spanning languages, frameworks, cloud platforms, and testing — built through professional experience, research, and continuous learning."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="p-6 rounded-xl border border-white/5 bg-bg-card hover:border-accent-cyan/20 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{categoryIcons[category.title] || '💡'}</span>
                <h3 className="font-semibold text-text-primary group-hover:text-accent-cyan transition-colors duration-200">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.1 + skillIdx * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
