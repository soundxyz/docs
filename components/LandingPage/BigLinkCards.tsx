import React from 'react'
import { styled } from '../../stitches.config'
import Link from 'next/link'

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
    textContainerMaxWidth: 230,
  },
}

const BigLinkCard = ({ type }: { type: 'blogPost' | 'apiExplorer' }) => {
  const currentContent = content[type]

  const ButtonLink = ({ children }: { children: React.ReactChild }) => {
    const linkComponent = currentContent.external ? (
      <a href={currentContent.path}>{children}</a>
    ) : (
      <Link href={currentContent.path}>
        <a>{children}</a>
      </Link>
    )
    return <Button>{linkComponent}</Button>
  }

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
            backgroundSize: 360,
          },

          '@desktop': {
            backgroundSize: 420,
          },
        }
      : { backgroundPosition: 'center' }

  return (
    <OuterContainer css={{ backgroundImage: `url(${currentContent.bgImage})`, ...customBgStyles }}>
      <InnerContainer>
        <TextContainer css={{ maxWidth: currentContent.textContainerMaxWidth }}>
          <Heading>{currentContent.heading}</Heading>
          <SubHeading>{currentContent.subHeading}</SubHeading>
          <Description>{currentContent.description}</Description>
        </TextContainer>
        <ButtonLink>{currentContent.buttonText}</ButtonLink>
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
  height: 570,
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
  marginLeft: 'max(50px, 10%)',
  display: 'grid',
  justifyItems: 'flex-start',
  gridTemplateRows: 'auto 1fr',

  '@tabletLandscape': {
    gridTemplateRows: '180px min-content',
  },
})

const TextContainer = styled('div', {
  marginRight: '10%',
})

const Heading = styled('h2', {
  fontSize: 34,
  fontWeight: 700,
})

const SubHeading = styled('h3', {
  fontSize: 34,
  fontWeight: 400,
  marginTop: 0,
  lineHeight: 1,
})

const Description = styled('p', {
  marginTop: 16,
  color: '$neutral100',
})

const Button = styled('button', {
  background: '$white',
  color: '$neutral800',
  padding: '12px 20px',
  borderRadius: 6,
  alignSelf: 'flex-start',
  marginTop: 24,

  '@tabletLandscape': {
    alignSelf: 'flex-end',
  },
})
