import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeading } from '../../ui/SectionHeading'
import { TimelineItem } from './TimelineItem'
import { EXPERIENCE } from '../../../constants/data'

export function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="03."
          title="Work Experience"
          subtitle="A track record of delivering real-world software across cloud, enterprise, and product domains."
        />

        <div ref={ref} className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-cyan/20 to-transparent -translate-x-1/2 hidden md:block" />

          {/* Animated line overlay */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/60 via-accent-purple/40 to-transparent -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => (
              <TimelineItem key={`${item.company}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
