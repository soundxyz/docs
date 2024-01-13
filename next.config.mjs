// @ts-check
import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  staticImage: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/protocol',
        destination: '/protocol/overview',
        permanent: false,
      },
      {
        source: '/sdk/read',
        destination: '/sdk',
        permanent: false,
      },
      {
        source: '/sdk/write',
        destination: '/sdk',
        permanent: false,
      },
    ]
  },
})
