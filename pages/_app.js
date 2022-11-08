import React from 'react'
import { globalStyles } from '../stitches.config.ts'
import { Prism } from 'prism-react-renderer'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-graphql')
require('nextra-theme-docs/style.css')
require('../styles/globals.css')
globalStyles()

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
