import React from 'react'
import { WrappedImage } from '../WrappedImage'
import { styled } from '../../stitches.config'
import { SectionContainer } from '../Containers'
import { Button } from '../Button'

export const Hero = () => {
  const [backgroundImage, setBackgroundImage] = React.useState('none')

  return (
    <SectionContainer
      css={{
        backgroundColor: '$darkBg',
      }}
    >
      <HeroContainer>
        <HeroFlexContainer>
          <WrappedImage
            css={{
              left: '10%',
              top: 20,
              position: 'relative',
              width: 84,
              height: 'auto',
              '@laptop': { left: 0, top: 0, width: 140 },
            }}
            src="/images/hero-small-grid.png"
            width={84}
            height={63}
            layout="responsive"
          />
          <TextAndButtonContainer>
            <BigH1 className="pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
              Tools for empowering <br />
              artists & collectors
            </BigH1>
            <Button href="/intro" css={{ alignSelf: 'center', '@laptop': { alignSelf: 'flex-start' } }}>
              View Docs
            </Button>
          </TextAndButtonContainer>
        </HeroFlexContainer>
        <WrappedImage
          src="/images/hero-mobile-bottom-grid.png"
          width={359}
          height={331}
          layout="responsive"
          css={{
            width: '90%',
            maxWidth: 900,
            width: 'calc(100% + 48px)',
            left: -24,
            position: 'relative',
            '@laptop': { display: 'none' },
          }}
        />
        <WrappedImage
          src="/images/hero-desktop-right-grid.png"
          width={804}
          height={483}
          layout="responsive"
          css={{
            position: 'absolute',
            alignSelf: 'end',
            marginLeft: 'auto',
            width: '70%',
            maxWidth: 900,
            display: 'none',
            right: -24,
            display: 'none',

            '@tabletLandscape': {
              right: -48,
            },

            '@laptop': {
              display: 'block',
              right: -96,
            },
          }}
        />
      </HeroContainer>
    </SectionContainer>
  )
}

const BigH1 = styled('h1', {
  textAlign: 'center',
  fontSize: 36,
  fontFamily: 'DrukWideMedium',
  fontWeight: 500,
  lineHeight: '110%',
  color: 'white',

  '@laptop': {
    textAlign: 'left',
    maxWidth: 800,
    fontSize: 40,
  },
})

const HeroContainer = styled('div', {
  display: 'grid',
  gridTemplateRows: '1fr auto',
  position: 'relative',

  '@laptop': {
    gridTemplateRows: '1fr',
  },
})

const TextAndButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '60px auto 40px',

  '@laptop': {
    margin: '165px auto 125px 0',
  },

  '@desktop': {
    paddingLeft: 150,
  },
})

const HeroFlexContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@laptop': {
    flexDirection: 'column-reverse',
  },
})