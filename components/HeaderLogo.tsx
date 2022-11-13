import React from 'react'
import { SoundLogo } from './SoundLogo'
import { styled } from '../stitches.config'

export function HeaderLogo() {
  return (
    <Container>
      <SoundLogo />
      <WhiteText>Developer</WhiteText>
      <PinkText>Docs</PinkText>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 22,
})

const PinkText = styled('span', {
  color: '$brandPink500',
  paddingLeft: 8,
})

const WhiteText = styled('span', {
  color: '$white',
  paddingLeft: 16,
})
