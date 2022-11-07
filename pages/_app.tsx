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
  let header: HTMLDivElement | null = null

  if (typeof window !== 'undefined') {
    header = window?.document?.querySelector('.nextra-nav-container > .nextra-nav-container-blur')
  }

  React.useEffect(() => {
    if (!header) return
    // CSS overrides for landing page
    if (router.pathname === '/') {
      header.setAttribute('style', 'background-color: black !important')
    } else {
      if (header) {
        header.style.backgroundColor = ''
      }
    }
  }, [router.pathname])

  return <Component {...pageProps} />
}
