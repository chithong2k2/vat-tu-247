import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

// ─── Fade-in wrapper ───
export function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Animated counter ───
export function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { damping: 40, stiffness: 200 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionVal.set(target)
  }, [inView, target, motionVal])

  useEffect(() => {
    const unsub = spring.on('change', v => setDisplay(Math.round(v)))
    return unsub
  }, [spring])

  return <span ref={ref}>{display.toLocaleString('vi-VN')}{suffix}</span>
}
