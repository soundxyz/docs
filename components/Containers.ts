import { styled } from '../stitches.config'

export const SectionContainer = styled('div', {
  paddingLeft: 24,
  paddingRight: 24,

  '@tabletLandscape': {
    paddingLeft: 48,
    paddingRight: 48,
  },

  '@laptop': {
    paddingLeft: 96,
    paddingRight: 96,
  },
})
