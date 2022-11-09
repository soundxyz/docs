import React from 'react'
import { WrappedImage } from '../WrappedImage'
import { styled } from '../../stitches.config'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroFlexContainer>
        <WrappedImage
          css={{
            left: '10%',
            top: 20,
            position: 'relative',
            width: 84,
            height: 'auto',
            '@tablet': { top: 0, width: 140 },
          }}
          src="/images/hero-small-grid.png"
          width={84}
          height={63}
          layout="responsive"
        />
        <BigH1 className="pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Tools for empowering artists & collectors
        </BigH1>
      </HeroFlexContainer>
      <WrappedImage
        src="/images/hero-mobile-bottom-grid.png"
        width={359}
        height={331}
        layout="responsive"
        css={{ width: '90%', maxWidth: 500, '@tablet': { display: 'none' } }}
      />
      <WrappedImage
        src="/images/hero-desktop-right-grid.png"
        width={804}
        height={483}
        layout="responsive"
        css={{
          alignSelf: 'end',
          marginLeft: 'auto',
          width: '100%',
          display: 'none',
          '@tablet': { display: 'block' },
        }}
      />
    </HeroContainer>
  )
}

const BigH1 = styled('h1', {
  textAlign: 'center',
  maxWidth: 360,
  fontSize: 36,
  fontFamily: 'DrukWideMedium',
  fontWeight: 500,
  margin: '60px auto',
  lineHeight: '110%',

  '@tablet': {
    margin: '100px auto',
    textAlign: 'left',
    maxWidth: 500,
    fontSize: 50,
  },
})

const HeroContainer = styled('div', {
  minHeight: 600,
  display: 'grid',
  gridTemplateRows: '1fr 2.5fr',
  position: 'relative',

  '@tablet': {
    gridTemplateRows: '1fr',
    gridTemplateColumns: 'minMax(400px, 100%) minMax(500px, 800px)',
  },
})

const HeroFlexContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@tablet': {
    flexDirection: 'column-reverse',
  },
})
