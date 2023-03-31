import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false,
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
    ]
  },
})
