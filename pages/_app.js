import React from 'react'
import { useRouter } from 'next/router'
import { Prism } from 'prism-react-renderer'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-graphql')
require('nextra-theme-docs/style.css')
require('../styles/globals.css')

const header = document.querySelector('.nextra-nav-container > .nextra-nav-container-blur')

export default function Nextra({ Component, pageProps }) {
  const router = useRouter()

  React.useEffect(() => {
    // CSS overrides for landing page
    if (router.pathname === '/') {
      if (header) {
        header.setAttribute('style', 'background-color: black !important')
      }
    } else {
      if (header) {
        header.style.backgroundColor = ''
      }
    }
  }, [router.pathname])

  return <Component {...pageProps} />
}
