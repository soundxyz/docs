import React from 'react'
import { useTheme } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

export function useIsDarkMode(override?: boolean) {
  const { theme: colorMode } = useTheme()
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = React.useState(colorMode === 'dark' && router.pathname !== '/')

  const darkModeSetter = (event) => {
    setIsDarkMode(event.matches)
  }

  React.useEffect(() => {
    // Don't change theme if on the homepage
    if (router.pathname === '/') {
      setIsDarkMode(false)
      return
    }

    if (typeof window !== 'undefined') {
      if (colorMode === 'system') {
        setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
      } else {
        const themeInLocalStorage = localStorage.getItem('theme')
        setIsDarkMode(colorMode ? colorMode === 'dark' : themeInLocalStorage === 'dark')
      }
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkModeSetter)
    }
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', darkModeSetter)
    }
  }, [colorMode, router.pathname, setIsDarkMode])

  return override || isDarkMode
}
