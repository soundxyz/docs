/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */

import GitHub from '@geist-ui/react-icons/github'
import { SoundLogo } from './components/SoundLogo'
import { Footer } from './components/Footer'

export default {
  logo: <SoundLogo />,
  titleSuffix: ' \u2013 Sound',
  docsRepositoryBase: 'https://github.com/soundxyz/docs/blob/main',
  editLink: {
    text: 'Edit this page on GitHub',
  },
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Sound Docs" />
      <meta name="og:description" content="Sound Docs" />
      <meta name="twitter:site:domain" content="www.sound.xyz" />
      <meta name="twitter:url" content="https://www.sound.xyz" />
      <meta name="og:title" content="Sound Docs" />
      <meta name="apple-mobile-web-app-title" content="Sound Docs" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    </>
  ),
  project: {
    link: 'https://github.com/soundxyz/',
    icon: <GitHub />,
  },
  unstable_faviconGlyph: '✦',
  sidebar: {
    defaultMenuCollapsed: true,
  },
  font: false,
  footer: {
    component: <Footer />,
  },
}
