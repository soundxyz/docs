import React from 'react'
import { styled } from '../../stitches.config'
import Link from 'next/link'
import { Button } from '../Button'

const content = {
  blogPost: {
    heading: 'Sound Protocol',
    subHeading: 'A technical deep dive',
    description: `Our blog post introducing Sound's permissionless, open-source, modular smart contract framework for musicians and creators.`,
    path: 'https://sound.mirror.xyz/kkecS95u8VuB7b08kCmaooRTBVHqp3AdyAsszY7PA8k',
    external: true,
    bgImage: '/images/big-link-card-bg1.png',
    buttonText: 'Read More',
    textContainerMaxWidth: 400,
  },
  apiExplorer: {
    heading: 'Sound API',
    subHeading: 'Explorer',
    description: `Check out our API Explorer to practice with live queries.`,
    path: '/api-explorer',
    external: false,
    bgImage: '/images/big-link-card-bg2.png',
    buttonText: 'Explore',
    textContainerMaxWidth: 300,
  },
}

const BigLinkCard = ({ type }: { type: 'blogPost' | 'apiExplorer' }) => {
  const currentContent = content[type]

  const customBgStyles =
    type === 'apiExplorer'
      ? {
          backgroundSize: 350,
          backgroundPosition: 'right bottom',

          '@media (min-width: 500px)': {
            backgroundSize: '70%',
          },

          '@tablet': {
            backgroundSize: '50%',
          },

          '@laptop': {
            backgroundSize: 330,
          },

          '@desktop': {
            backgroundSize: 400,
          },
        }
      : { backgroundPosition: 'center' }

  return (
    <OuterContainer css={{ backgroundImage: `url(${currentContent.bgImage})`, ...customBgStyles }}>
      <InnerContainer>
        <TextContainer css={{ maxWidth: currentContent.textContainerMaxWidth }}>
          <Heading>
            {currentContent.heading}
            <br />
            {currentContent.subHeading}
          </Heading>
          <Description>{currentContent.description}</Description>
        </TextContainer>
        <Button
          href={currentContent.path}
          external={currentContent.external}
          css={{
            alignSelf: 'flex-start',
            '@tabletLandscape': {
              alignSelf: 'flex-end',
            },
          }}
        >
          {currentContent.buttonText}
        </Button>
      </InnerContainer>
    </OuterContainer>
  )
}

export const BigLinkCards = () => {
  return (
    <BigLinksFlexContainer>
      <BigLinkCard type="blogPost" />
      <BigLinkCard type="apiExplorer" />
    </BigLinksFlexContainer>
  )
}

const BigLinksFlexContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@tabletLandscape': {
    flexDirection: 'row',
  },
})

const OuterContainer = styled('div', {
  backgroundColor: '$black',
  color: '$white',
  width: '100%',
  height: 540,
  display: 'flex',
  borderRadius: 0,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  '@tabletLandscape': {
    height: 340,
  },
})

const InnerContainer = styled('div', {
  paddingTop: 40,
  marginLeft: 'max(24px, 10%)',
  display: 'grid',
  justifyItems: 'flex-start',
  gridTemplateRows: 'auto 1fr',

  '@tabletLandscape': {
    marginLeft: 'max(48px, 10%)',
    gridTemplateRows: '180px min-content',
  },
})

const TextContainer = styled('div', {
  marginRight: '10%',
})

const Heading = styled('h2', {
  fontFamily: 'DrukWideMedium',
  fontSize: 22,
  lineHeight: '26px',
})

const Description = styled('p', {
  marginTop: 16,
  color: '$neutral100',
})
