import { Prism } from 'prism-react-renderer'
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-graphql')
require('./global-styles.css')

export default function Nextra({ Component, pageProps }) {
  return <Component {...pageProps} />
}
