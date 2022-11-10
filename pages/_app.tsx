import React from 'react'
import { globalStyles } from '../stitches.config.ts'
import { useRouter } from 'next/router'
import { Prism } from 'prism-react-renderer'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-graphql')
require('nextra-theme-docs/style.css')
require('../styles/globals.css')
globalStyles()

export default function Nextra({ Component, pageProps }) {
  const router = useRouter()
  let htmlElement: HTMLHtmlElement | null = null
  let headerContainer: HTMLDivElement | null = null

  const setLightOrDarkMode = (mode: 'light' | 'dark') => {
    if (!htmlElement) return

    htmlElement.setAttribute('style', `color-scheme: ${mode}`)
    htmlElement.classList.remove(mode === 'dark' ? 'light' : 'dark')
    htmlElement.classList.add(mode)
  }

  if (typeof window !== 'undefined') {
    htmlElement = window?.document?.querySelector('html')

    // override header styles
    headerContainer = window?.document?.querySelector('.nextra-nav-container')
    headerContainer?.children[0]?.setAttribute(
      'style',
      'box-shadow: none !important; background-color: #111111 !important;',
    )
  }

  // Force into dark mode when on landing page
  React.useEffect(() => {
    if (!htmlElement) return
    if (router.pathname === '/') {
      setLightOrDarkMode('dark')

      console.log(headerContainer)
    } else {
      const currentTheme = localStorage.getItem('theme')
      if (currentTheme === 'light') {
        setLightOrDarkMode('light')
      } else {
        setLightOrDarkMode('dark')
      }
    }
  }, [router.pathname])

  return <Component {...pageProps} />
}
