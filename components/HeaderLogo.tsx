import React from 'react'
import { SoundLogo } from './SoundLogo'
import { styled } from '../stitches.config'
import { useIsDarkMode } from '../hooks/useIsDarkMode'
import { useRouter } from 'next/router'

export function HeaderLogo() {
  const router = useRouter()
  const [opacity, setOpacity] = React.useState(0)
  const isDarkMode = useIsDarkMode(router.pathname === '/')

  React.useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 0)
  }, [])

  return (
    <Container css={{ opacity }}>
      <SoundLogo />
      <PlainText css={{ color: isDarkMode ? 'white' : 'black' }}>Developer</PlainText>
      <PinkText>Docs</PinkText>
    </Container>
  )
}

const Container = styled('div', {
  transition: 'opacity 300ms',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  fontSize: 22,
})

const PinkText = styled('span', {
  color: '$brandPink500',
  paddingLeft: 8,
})

const PlainText = styled('span', {
  paddingLeft: 16,
})
