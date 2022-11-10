/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */

import GitHub from '@geist-ui/react-icons/github'
import { SoundLogo } from './components/SoundLogo'
import { Footer } from './components/Footer'

const SOCIAL_CARD_IMAGE = '/images/social-card-legacy-logo.png'

export default {
  logo: <SoundLogo fill="white" />,
  getNextSeoProps: () => ({ titleTemplate: '%s – Sound' }),
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
      <meta name="apple-mobile-web-app-title" content="Sound Docs" />

      {['og:site_name', 'og:title', 'twitter:title'].map((property) => (
        <meta key={property} property={property} content={'Sound Docs'} />
      ))}
      {['description', 'og:description', 'twitter:description'].map((property) => (
        <meta key={property} name={property} content={'Tools for empowering artists & collectors'} />
      ))}
      <meta name="twitter:site:domain" content="www.sound.xyz" />
      <meta name="twitter:url" content="https://www.sound.xyz" />

      <meta name="twitter:image" content={SOCIAL_CARD_IMAGE} />
      <meta property="og:image" content={SOCIAL_CARD_IMAGE} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      {'/* FONTS */'}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
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
