import React from 'react'
import { styled } from '../stitches.config'

const Container = styled('div', {
  minHeight: 600,
  display: 'grid',
  gridTemplateRows: '1fr 2.5fr',
  position: 'relative',

  '@tablet': {
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'minMax(400px, 100%) minMax(500px, 800px)',
  },
})

export const LandingPageComponent = () => {
  return <Container>landing page</Container>
}
