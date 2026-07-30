import { useState, useEffect, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const codeSnippets = [
  {
    language: 'PHP / Laravel',
    filename: 'routes/api.php',
    lines: [
      { num: '01', tokens: [{ text: '<?php', type: 'keyword' }] },
      { num: '02', tokens: [{ text: 'use', type: 'keyword' }, { text: ' Illuminate\\Support\\Facades\\', type: 'default' }, { text: 'Route', type: 'function' }, { text: ';', type: 'default' }] },
      { num: '03', tokens: [] },
      { num: '04', tokens: [{ text: 'Route', type: 'function' }, { text: '::', type: 'default' }, { text: 'get', type: 'function' }, { text: "(", type: 'default' }, { text: "'/profile'", type: 'string' }, { text: ', ', type: 'default' }, { text: 'function', type: 'keyword' }, { text: ' () {', type: 'default' }] },
      { num: '05', tokens: [{ text: '    return', type: 'keyword' }, { text: ' response()->', type: 'default' }, { text: 'json', type: 'function' }, { text: '([', type: 'default' }] },
      { num: '06', tokens: [{ text: "        'name'", type: 'string' }, { text: ' => ', type: 'default' }, { text: "'Timmy Turner'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '07', tokens: [{ text: "        'role'", type: 'string' }, { text: ' => ', type: 'default' }, { text: "'Full-Stack Developer'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '08', tokens: [{ text: "        'exploring'", type: 'string' }, { text: ' => ', type: 'default' }, { text: "'NestJS'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '09', tokens: [{ text: "        'backend'", type: 'string' }, { text: ' => ', type: 'default' }, { text: "['NestJS', 'Laravel']", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '10', tokens: [{ text: "        'mindset'", type: 'string' }, { text: ' => ', type: 'default' }, { text: "'ship with intent'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '11', tokens: [{ text: '    ]);', type: 'default' }] },
      { num: '12', tokens: [{ text: '});', type: 'default' }] },
    ]
  },
  {
    language: 'TypeScript / NestJS',
    filename: 'src/profile.controller.ts',
    lines: [
      { num: '01', tokens: [{ text: 'import', type: 'keyword' }, { text: ' { Controller, Get } ', type: 'default' }, { text: 'from', type: 'keyword' }, { text: " '@nestjs/common'", type: 'string' }, { text: ';', type: 'default' }] },
      { num: '02', tokens: [] },
      { num: '03', tokens: [{ text: '@', type: 'function' }, { text: 'Controller', type: 'function' }, { text: "(", type: 'default' }, { text: "'profile'", type: 'string' }, { text: ')', type: 'default' }] },
      { num: '04', tokens: [{ text: 'export', type: 'keyword' }, { text: ' class ', type: 'default' }, { text: 'ProfileController', type: 'function' }, { text: ' {', type: 'default' }] },
      { num: '05', tokens: [{ text: '  @', type: 'function' }, { text: 'Get', type: 'function' }, { text: '()', type: 'default' }] },
      { num: '06', tokens: [{ text: '  ', type: 'default' }, { text: 'getProfile', type: 'function' }, { text: '() {', type: 'default' }] },
      { num: '07', tokens: [{ text: '    return', type: 'keyword' }, { text: ' {', type: 'default' }] },
      { num: '08', tokens: [{ text: '      name: ', type: 'default' }, { text: "'Timmy Turner'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '09', tokens: [{ text: '      role: ', type: 'default' }, { text: "'Full-Stack Developer'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '10', tokens: [{ text: '      stack: ', type: 'default' }, { text: "['NestJS', 'React', 'Laravel']", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '11', tokens: [{ text: '    };', type: 'default' }] },
      { num: '12', tokens: [{ text: '  }', type: 'default' }] },
      { num: '13', tokens: [{ text: '}', type: 'default' }] },
    ]
  },
  {
    language: 'JSX / React',
    filename: 'src/App.jsx',
    lines: [
      { num: '01', tokens: [{ text: 'import', type: 'keyword' }, { text: ' { useState } ', type: 'default' }, { text: 'from', type: 'keyword' }, { text: " 'react'", type: 'string' }, { text: ';', type: 'default' }] },
      { num: '02', tokens: [] },
      { num: '03', tokens: [{ text: 'const', type: 'keyword' }, { text: ' Profile = () => {', type: 'default' }] },
      { num: '04', tokens: [{ text: '  const', type: 'keyword' }, { text: ' [dev] = ', type: 'default' }, { text: 'useState', type: 'function' }, { text: '({', type: 'default' }] },
      { num: '05', tokens: [{ text: '    name: ', type: 'default' }, { text: "'Timmy Turner'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '06', tokens: [{ text: '    role: ', type: 'default' }, { text: "'Full-Stack Developer'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '07', tokens: [{ text: '    passion: ', type: 'default' }, { text: "'Building at scale'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '08', tokens: [{ text: '  });', type: 'default' }] },
      { num: '09', tokens: [] },
      { num: '10', tokens: [{ text: '  return', type: 'keyword' }, { text: ' <', type: 'default' }, { text: 'Hero', type: 'function' }, { text: ' developer={dev} />;', type: 'default' }] },
      { num: '11', tokens: [{ text: '};', type: 'default' }] },
    ]
  },
  {
    language: 'TypeScript / Next.js',
    filename: 'app/api/profile/route.ts',
    lines: [
      { num: '01', tokens: [{ text: 'import', type: 'keyword' }, { text: ' { NextResponse } ', type: 'default' }, { text: 'from', type: 'keyword' }, { text: " 'next/server'", type: 'string' }, { text: ';', type: 'default' }] },
      { num: '02', tokens: [] },
      { num: '03', tokens: [{ text: 'export', type: 'keyword' }, { text: ' async ', type: 'default' }, { text: 'function', type: 'keyword' }, { text: ' GET', type: 'function' }, { text: '() {', type: 'default' }] },
      { num: '04', tokens: [{ text: '  return', type: 'keyword' }, { text: ' NextResponse.', type: 'default' }, { text: 'json', type: 'function' }, { text: '({', type: 'default' }] },
      { num: '05', tokens: [{ text: '    name: ', type: 'default' }, { text: "'Timmy Turner'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '06', tokens: [{ text: '    role: ', type: 'default' }, { text: "'Full-Stack Developer'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '07', tokens: [{ text: '    frontend: ', type: 'default' }, { text: "'Next.js + React'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '08', tokens: [{ text: '    backend: ', type: 'default' }, { text: "'NestJS + Laravel'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '09', tokens: [{ text: '    status: ', type: 'default' }, { text: "'Open to opportunities'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '10', tokens: [{ text: '  });', type: 'default' }] },
      { num: '11', tokens: [{ text: '}', type: 'default' }] },
    ]
  },
  {
    language: 'JavaScript / Express',
    filename: 'routes/profile.js',
    lines: [
      { num: '01', tokens: [{ text: 'const', type: 'keyword' }, { text: ' express = ', type: 'default' }, { text: 'require', type: 'function' }, { text: "(", type: 'default' }, { text: "'express'", type: 'string' }, { text: ');', type: 'default' }] },
      { num: '02', tokens: [{ text: 'const', type: 'keyword' }, { text: ' router = express.', type: 'default' }, { text: 'Router', type: 'function' }, { text: '();', type: 'default' }] },
      { num: '03', tokens: [] },
      { num: '04', tokens: [{ text: 'router.', type: 'default' }, { text: 'get', type: 'function' }, { text: "(", type: 'default' }, { text: "'/profile'", type: 'string' }, { text: ', (req, res) => {', type: 'default' }] },
      { num: '05', tokens: [{ text: '  res.', type: 'default' }, { text: 'json', type: 'function' }, { text: '({', type: 'default' }] },
      { num: '06', tokens: [{ text: '    name: ', type: 'default' }, { text: "'Timmy Turner'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '07', tokens: [{ text: '    role: ', type: 'default' }, { text: "'Full-Stack Developer'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '08', tokens: [{ text: '    tools: ', type: 'default' }, { text: "['Express', 'NestJS', 'Laravel']", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '09', tokens: [{ text: '    motto: ', type: 'default' }, { text: "'Code that ships'", type: 'string' }, { text: ',', type: 'default' }] },
      { num: '10', tokens: [{ text: '  });', type: 'default' }] },
      { num: '11', tokens: [{ text: '});', type: 'default' }] },
    ]
  },
]

const techPills = [
  { label: 'Next.js', match: [2, 3] },
  { label: 'Node.js', match: [4] },
  { label: 'NestJS', match: [1] },
  { label: 'Laravel', match: [0] },
]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const cycleSnippet = useCallback(() => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % codeSnippets.length)
      setIsTransitioning(false)
    }, 400)
  }, [])

  useEffect(() => {
    const interval = setInterval(cycleSnippet, 4500)
    return () => clearInterval(interval)
  }, [cycleSnippet])

  const socialLinkStyling = "flex gap-1 items-center py-2 px-4 bg-secondary dark:bg-gray-300 rounded dark:hover:text-white dark:hover:bg-primary hover:bg-primary group hover:shadow-lg hover:shadow-primary transition-all lg:px-6"
  const socialIconStyling = "text-primary text-xl group-hover:text-white"
  const socialTextStyling = "text-[.8rem] font-[300] md:text-[.9rem]"

  useGSAP(() => {
    gsap.to('.slideY', {
      duration: .8,
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: 'power1.inOut'
    })

    gsap.to('.slideX', {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut',
      delay: 0.5
    })
  }, [])

  const activeSnippet = codeSnippets[activeIndex]

  return (
    <div className="flex flex-col gap-10 mt-20 px-7 relative md:px-10 lg:max-w-screen-xl lg:mx-auto lg:flex-row lg:items-center lg:gap-4 lg:px-7 lg:pt-7 lg:pb-20">
      <div className='absolute w-[2.5em] h-[5em] skew-y-[40deg] bg-secondary dark:bg-gray-200 left-[5%] top-[12%] lg:left-5 lg:top-10'></div>
      <div className='text-center z-10 lg:text-left lg:w-[55%]'>
        <h2 className="text-primary text-xl font-medium md:text-2xl lg:text-3xl slideY">Hello!, I'm-</h2>
        <h1 className="text-[2.5rem] font-medium my-2 md:text-[3rem] lg:text-[4.7rem] lg:font-bold slideY">Timmy Turner.</h1>
        <p className="text-sm leading-6 font-[300] text-white/70 dark:font-medium dark:text-gray-800 z-10 md:w-[75%] md:mx-auto md:text-[.95rem] lg:w-[unset] slideY lg:mx-0 lg:text-xl lg:my-4 lg:pr-4">
          <span className="text-lg font-[500] dark:font-bold text-white dark:text-black lg:text-2xl">
            A Full-Stack Developer.
          </span> Architecting scalable backend systems and crafting pixel-perfect interfaces — from APIs to UI.
        </p>
        <p className="my-5 text-sm font-[300] text-white/70 dark:font-medium dark:text-gray-800 md:text-[.95rem] lg:mt-7 lg:mb-12 lg:text-lg slideY"><span className="text-lg">🚀</span> Currently specializing in NestJS</p>
        <div className="my-6 flex gap-4 justify-center md:gap-6 lg:justify-start lg:my-0 slideY">
          <a href="https://github.com/Tur-nar" target="_blank" className={socialLinkStyling}>
            <i className={`bx bxl-github ${socialIconStyling}`}></i>
            <span className={socialTextStyling}>Github</span>
          </a>
          <a href="https://www.linkedin.com/in/adebowale-ademuyiwa-505b56323/" target="_blank" className={socialLinkStyling}>
            <i className={`bx bxl-linkedin ${socialIconStyling}`}></i>
            <span className={socialTextStyling}>LinkedIn</span>
          </a>
          <a href="mailto:adebowaleademuyiwa12@gmail.com" target="_blank" className={socialLinkStyling}>
            <i className={`bx bxs-envelope ${socialIconStyling}`}></i>
            <span className={socialTextStyling}>Email</span>
          </a>
        </div>
      </div>

      {/* Code Editor Mockup */}
      <div className='relative mt-3 md:w-[32rem] md:mx-auto lg:w-[45%] slideX'>
        <div className="code-deco-circle code-deco-circle--top"></div>
        <div className="code-deco-circle code-deco-circle--bottom"></div>
        <div className="code-deco-arc code-deco-arc--top"></div>
        <div className="code-deco-arc code-deco-arc--bottom"></div>

        <div className="code-editor">
          {/* Title bar */}
          <div className="code-editor__titlebar">
            <div className="code-editor__dots">
              <span></span><span></span><span></span>
            </div>
            <span className="code-editor__filename">{activeSnippet.filename}</span>
            <span className="code-editor__live">LIVE</span>
          </div>

          {/* Code area */}
          <div className={`code-editor__body ${isTransitioning ? 'code-editor__body--fading' : ''}`}>
            {activeSnippet.lines.map((line, i) => (
              <div className="code-line" key={`${activeIndex}-${i}`}>
                <span className="code-line__num">{line.num}</span>
                <span className="code-line__content">
                  {line.tokens.map((token, j) => (
                    <span key={j} className={`code-token--${token.type}`}>{token.text}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <div className="code-editor__pills">
            {techPills.map((pill) => (
              <button
                key={pill.label}
                className={`code-pill ${pill.match.includes(activeIndex) ? 'code-pill--active' : ''}`}
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero