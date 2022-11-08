import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      neutral50: '#FAFAFA',
      neutral100: '#F5F5F5',
      neutral200: '#E5E5E5',
      neutral300: '#D4D4D4',
      neutral400: '#A3A3A3',
      neutral500: '#737373',
      neutral600: '#525252',
      neutral700: '#404040',
      neutral800: '#262626',
      neutral900: '#171717',
      brand50: '#ECFDF5',
      brand200: '#A7F3D0',
      brand300: '#6EE7B7',
      brand400: '#34D399',
      brand500: '#10B981',
      brand600: '#059669',
      brand800: '#065F46',
      brand900: '#064E3B',
      brandAccent20: '#E5F3F0',
      brandAccent40: '#D5F0E9',
      brandAccent60: '#C3ECE2',
      brandAccent80: '#B2E9DB',
      brandAccent100: '#A1E6D5',
      accent300: '#F0ABFC',
      accent500: '#D946EF',
      success50: '#F0FDF4',
      success500: '#22C55E',
      success700: '#15803D',
      warning50: '#FFF7ED',
      warning500: '#EAB308',
      warning700: '#C2410C',
      destructive50: '#FEF2F2',
      destructive500: '#EF4444',
      destructive700: '#B91C1C',
      education50: '#ECECFF',
      education100: '#8280FF',
      education200: '#605DEC',

      white: '#fff',
      black: '#0E1213',
      blue400: '#4299E1',
      grey100: '#F3F4F6',
      grey200: '#E5E6EB',
      grey300: '#D2D5D9',
      grey400: '#9DA3AE',
      grey500: '#6D7180',
      grey600: '#4D5562',
      grey700: '#394150',
      grey800: '#192024',
      grey900: '#1A1B22',
      danger100: '#e53e3e',
      danger200: '#d32f2f',
      black100: '#262626',
      gray100: '#8F8F8F',
      gray200: '#EEEEEE',
      gray300: '#E7E7E7',
      green100: '#34D399',
      green200: '#A7F3D0',
    },
  },
})

export const globalStyles = globalCss({
  'a.text-primary-500': { color: theme.colors.brand500.value },
  '*::selection': {
    background: theme.colors.brand500.value,
    color: '#fff',
  },
})
