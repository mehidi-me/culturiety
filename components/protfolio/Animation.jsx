
'use client'
import React, { useEffect } from 'react'

function Animation({children}) {
    useEffect(() => {
        const initializeAnimations = async () => {
          const ScrollReveal = (await import('scrollreveal')).default
    
          // Initialize ScrollReveal
          ScrollReveal({
            reset: true,
            distance: '40px',
            duration: 1200,
            delay: 30,
          })
    
          // Set up ScrollReveal for various elements
          ScrollReveal().reveal('main h1', {delay: 10, origin: 'bottom'})
          ScrollReveal().reveal('main h3', {delay: 30, origin: 'bottom'})
          ScrollReveal().reveal('main h5', {delay: 80, origin: 'bottom'})
          ScrollReveal().reveal('h6', {delay: 30, origin: 'bottom'})
          ScrollReveal().reveal('main .buttons', {delay: 50, origin: 'bottom'})
          ScrollReveal().reveal('main .me', {delay: 80, origin: 'bottom'})
          ScrollReveal().reveal('.text-content h2', {
            delay: 10,
            origin: 'bottom',
          })
          ScrollReveal().reveal('.text-content p', {delay: 30, origin: 'bottom'})
          ScrollReveal().reveal('section .social', {delay: 50, origin: 'bottom'})
          ScrollReveal().reveal('.title p', {delay: 20, origin: 'bottom'})
          ScrollReveal().reveal('.title h2', {delay: 80, origin: 'bottom'})
          ScrollReveal().reveal('.card', {delay: 20, origin: 'bottom'})
          ScrollReveal().reveal('.big-card', {delay: 20, origin: 'bottom'})
          ScrollReveal().reveal('.team-card', {delay: 20, origin: 'bottom'})
          ScrollReveal().reveal('.item', {delay: 20, origin: 'bottom'})
          ScrollReveal().reveal('.fade', {
            delay: 10,
            origin: 'bottom',
            distance: '10px',
          })
          ScrollReveal().reveal('.video', {
            delay: 10,
            origin: 'bottom',
            distance: '10px',
          })
    
          // GSAP animations for image stack
          // gsap.utils.toArray('.image-stack .frame').forEach((frame, index) => {
          //   gsap.to(frame, {
          //     skewX: index % 2 === 0 ? 5 : -3,
          //     skewY: index % 2 === 0 ? 2.5 : -1.5,
          //     y: index % 2 === 0 ? -2.5 : 2.5,
          //     scrollTrigger: {
          //       trigger: frame,
          //       start: 'top bottom',
          //       end: 'top top',
          //       scrub: 1.5,
          //     },
          //   })
          // })
    
          // Sticky header on scroll
          window.addEventListener('scroll', () => {
            const header = document.querySelector('header')
            if (header) {
              header.classList.toggle('sticky', window.scrollY > 0)
            }
          })
    
          // Set viewport height
          const setViewportHeight = () => {
            const vh = Math.min(window.innerHeight, document.documentElement.clientHeight)
            document.documentElement.style.setProperty('--vh', `${vh * 0.01}px`)
          }
    
          setViewportHeight()
        }
    
        initializeAnimations()
      }, [])
  return children;
}

export default Animation