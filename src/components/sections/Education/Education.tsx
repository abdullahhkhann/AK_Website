import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin, FiAward, FiBook } from 'react-icons/fi'
import { SectionHeading } from '../../ui/SectionHeading'
import { Badge } from '../../ui/Badge'
import { EDUCATION } from '../../../constants/data'
import { staggerContainer, fadeInUp } from '../../../constants/animations'

export function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="05."
          title="Education"
          subtitle="Strong academic foundation in computer science, algorithms, and systems engineering."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-8"
        >
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.institution}
              variants={fadeInUp}
              className="p-8 rounded-xl border border-white/5 bg-bg-card hover:border-accent-cyan/25 transition-colors duration-300 group relative overflow-hidden"
            >
              {/* Gradient accent top */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: i === 0
                    ? 'linear-gradient(90deg, #00d4ff, #7c3aed)'
                    : 'linear-gradient(90deg, #7c3aed, #00d4ff)',
                }}
              />

              {/* Degree */}
              <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-200 mb-1">
                {edu.degree}
              </h3>
              <p className="text-accent-cyan font-semibold text-sm mb-3">{edu.institution}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-text-muted mb-3">
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={11} />
                  {edu.startYear} – {edu.endYear}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={11} />
                  {edu.location}
                </span>
              </div>

              {/* GPA */}
              {edu.gpa && (
                <div className="flex items-center gap-2 mb-3 p-3 rounded-lg bg-accent-cyan/5 border border-accent-cyan/15">
                  <FiAward size={14} className="text-accent-cyan" />
                  <span className="text-sm font-medium text-text-primary">GPA: </span>
                  <span className="text-sm font-bold text-accent-cyan font-mono">{edu.gpa}</span>
                </div>
              )}

              {/* Note */}
              {edu.note && (
                <div className="flex items-center gap-2 text-xs text-text-secondary mb-5 italic">
                  <FiBook size={11} className="text-accent-purple" />
                  {edu.note}
                </div>
              )}

              {/* Coursework */}
              <div>
                <p className="text-xs font-mono text-text-muted mb-3 uppercase tracking-wider">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <Badge key={course} label={course} variant="default" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-6 rounded-xl border border-accent-purple/20 bg-accent-purple/5"
        >
          <h4 className="text-sm font-mono text-accent-purple uppercase tracking-wider mb-4">Leadership</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Captained varsity basketball team',
              'Graduate Student Advocate in Wichita State\'s Student Government Association',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-accent-purple mt-1 flex-shrink-0">›</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
