import nextVitals from 'eslint-config-next/core-web-vitals'

const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      '.claude/**',
      '.superpowers/**',
      'wordpress-plugin/**',
    ],
  },
  ...nextVitals,
]

export default config
