import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Reveal = ({ children, className = '', as: Tag = 'div', delay = 0 }) => {
  const element = useRef(null)

  useGSAP(() => {
    const node = element.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      gsap.set(node, { clearProps: 'all' })
      return
    }

    gsap.fromTo(
      node,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: node,
          start: 'top 88%',
          once: true,
        },
      },
    )
  }, { scope: element })

  return (
    <Tag ref={element} className={className}>
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
  delay: PropTypes.number,
}

export default Reveal
