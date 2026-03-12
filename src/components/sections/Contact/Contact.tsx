import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'
import { SectionHeading } from '../../ui/SectionHeading'
import { ContactForm } from './ContactForm'
import { CONTACT_INFO } from '../../../constants/data'
import { staggerContainer, fadeInLeft, fadeInRight } from '../../../constants/animations'
import { useInView } from 'react-intersection-observer'

const contactLinks = [
  {
    icon: <FiMail size={18} />,
    label: 'Email',
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdullahkhan',
    href: CONTACT_INFO.linkedin,
  },
  {
    icon: <FiGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/abdullahkhan',
    href: CONTACT_INFO.github,
  },
  {
    icon: <FiMapPin size={18} />,
    label: 'Location',
    value: CONTACT_INFO.location,
    href: null,
  },
]

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          number="06."
          title="Get In Touch"
          subtitle="Whether it's a job opportunity, collaboration, or just a conversation about tech — my inbox is always open."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left: Contact Info */}
          <motion.div variants={fadeInLeft} className="space-y-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-cyan/10 border border-accent-cyan/25">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-sm font-medium text-accent-cyan">{CONTACT_INFO.status}</span>
            </div>

            <p className="text-text-secondary leading-relaxed">
              Whether it's a full-time role, internship, freelance project, or research collaboration — I'd love to hear from you.
              I typically respond within 24 hours.
            </p>

            {/* Links */}
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg-card border border-white/5 hover:border-accent-cyan/25 transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-muted font-mono">{link.label}</p>
                    {link.href ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-text-primary hover:text-accent-cyan transition-colors"
                      >
                        {link.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-primary">{link.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={fadeInRight} className="p-8 rounded-xl border border-white/5 bg-bg-card">
            <h3 className="text-lg font-bold text-text-primary mb-6">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
