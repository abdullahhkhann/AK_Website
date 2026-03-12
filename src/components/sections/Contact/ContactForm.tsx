import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = 'service_ytyyq2w'
const EMAILJS_TEMPLATE_ID = 'template_b8hid3i'
const EMAILJS_PUBLIC_KEY = '6OrONi4m-TDPg0W7m'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          title: data.subject,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-bg-primary border text-sm text-text-primary placeholder-text-muted outline-none transition-all duration-200 focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan/30 ${
      hasError ? 'border-red-500/50' : 'border-white/10'
    }`

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your Name"
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
            placeholder="your@email.com"
            className={inputClass(!!errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <input
          {...register('subject', { required: 'Subject is required' })}
          placeholder="Subject"
          className={inputClass(!!errors.subject)}
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'At least 20 characters' } })}
          placeholder="Tell me about the opportunity or project..."
          rows={5}
          className={`${inputClass(!!errors.message)} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        whileHover={status === 'idle' ? { scale: 1.02 } : undefined}
        whileTap={status === 'idle' ? { scale: 0.98 } : undefined}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: status === 'success'
            ? 'linear-gradient(135deg, #22c55e, #16a34a)'
            : status === 'error'
              ? 'linear-gradient(135deg, #ef4444, #dc2626)'
              : 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
        }}
      >
        {status === 'loading' && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
          />
        )}
        {status === 'success' && <FiCheck size={16} />}
        {status === 'error' && <FiAlertCircle size={16} />}
        {status === 'idle' && <FiSend size={16} />}

        {status === 'idle' && 'Send Message'}
        {status === 'loading' && 'Sending...'}
        {status === 'success' && 'Message Sent!'}
        {status === 'error' && 'Failed – Try Again'}
      </motion.button>
    </form>
  )
}
