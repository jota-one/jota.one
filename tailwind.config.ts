import type { Config } from 'tailwindcss'
import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'
import flowbite from 'flowbite/plugin'

export default <Partial<Config>>{
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['material-symbols', 'logos']),
    }),
    flowbite
  ],
  content: [
    './node_modules/flowbite/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ]
      },
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    }
  },
  safelist: [
    {
      pattern: /(bg|text|ring|border)-(women|farming|neutral|white)(-\d+)?/,
    },
    {
      pattern: /(bg)-(amber-300|orange-400|red-400)/,
    },
    {
      pattern: /grid-cols-\d+/,
      variants: ['sm']
    }
  ]
}
