import React from 'react'
import { globalStyles } from '../stitches.config'
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
  let themeButton: HTMLButtonElement | null = null

  const setLightOrDarkMode = (mode: 'light' | 'dark') => {
    if (!htmlElement) return

    htmlElement.setAttribute('style', `color-scheme: ${mode}`)
    htmlElement.classList.remove(mode === 'dark' ? 'light' : 'dark')
    htmlElement.classList.add(mode)
  }

  if (typeof window !== 'undefined') {
    htmlElement = window?.document?.querySelector('html')
    headerContainer = window?.document?.querySelector('.nextra-nav-container')
    themeButton = window?.document?.querySelector('button[title="Change theme"]')
  }

  // Force into dark mode when on landing page
  React.useEffect(() => {
    if (!htmlElement) return
    if (!themeButton) return
    if (typeof window === 'undefined') return

    if (router.pathname === '/') {
      setLightOrDarkMode('dark')
      themeButton.style.display = 'none'

      // Hide theme button when on landing page
      themeButton.style.display = 'none'

      // Override header styles
      headerContainer?.children[0]?.setAttribute(
        'style',
        'box-shadow: none !important; background-color: rgb(23, 23, 23, 1) !important;',
      )
    } else {
      // Reset styles when not on landing page
      themeButton.style.display = 'block'
      headerContainer = window.document?.querySelector('.nextra-nav-container')
      headerContainer?.children[0]?.setAttribute('style', 'box-shadow: initial; background-color: initial;')

      const currentTheme = localStorage.getItem('theme')

      if (currentTheme === 'system') {
        setLightOrDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

        // If currentTheme is undefined, we don't need to do anything (browser will handle it)
      } else if (currentTheme) {
        const newTheme = currentTheme === 'dark' ? 'dark' : 'light'
        setLightOrDarkMode(newTheme)
      }
    }
  }, [router.pathname])

  return <Component {...pageProps} />
}
