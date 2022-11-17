import { styled } from '../stitches.config'

export const SectionContainer = styled('div', {
  paddingLeft: 24,
  paddingRight: 24,

  '@laptop': {
    paddingLeft: 48,
    paddingRight: 48,
  },

  '@desktop': {
    paddingLeft: 96,
    paddingRight: 96,
  },
})
