import { motion, useReducedMotion } from "framer-motion"

type AnimatedNameProps = {
  paths: string[]
  className?: string
}

const AnimatedName = (props: AnimatedNameProps) => {
  const { paths, className="" } = props
  const reduceMotion = useReducedMotion()

  return (
    <svg
      className={className}
      viewBox="0 0 1285 320"
      width={900}
      height={320}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Texte manuscrit"
      role="img"
      preserveAspectRatio="none"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="currentColor"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            opacity: { delay: reduceMotion ? 0 : i * 0.1, duration: reduceMotion ? 0 : 0.01 },
            duration: reduceMotion ? 0 : 0.5,
            ease: 'easeInOut',
            delay: reduceMotion ? 0 : i * 0.1, // écrit “segment par segment”
          }}
        />
      ))}
    </svg>
  )
}

export default AnimatedName