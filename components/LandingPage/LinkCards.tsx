import React from 'react'
import { styled } from '../../stitches.config'
import { SoundProtocolIcon, SoundSDKIcon, SoundAPIIcon } from '../icons'
import Link from 'next/link'
import { SectionContainer } from '../Containers'

const content = {
  protocol: {
    heading: 'Sound Protocol',
    description:
      'The Sound Protocol is a permissionless, open-source, modular smart contract framework for musicians and creators.',
    icon: SoundProtocolIcon,
    path: '/protocol/overview',
    color: '$brandPink500',
  },
  sdk: {
    heading: 'Sound SDK',
    description:
      'The Sound SDK is a Typescript library that provides everything needed for building applications on the Sound Protocol.',
    icon: SoundSDKIcon,
    path: '/sdk',
    color: '$iconSDK',
  },
  api: {
    heading: 'Sound API',
    description:
      'Our official GraphQL API serves indexed event data from Sound Protocol, including metadata like image and audio URLs.',
    icon: SoundAPIIcon,
    path: '/sound-api',
    color: '$iconAPI',
  },
}

export const LinkCard = ({ type }: { type: 'protocol' | 'sdk' | 'api' }) => {
  const currentContent = content[type]
  return (
    <OuterContainer>
      <Link href={currentContent.path} legacyBehavior>
        <a>
          <InnerContainer
            css={{
              '&:hover > div': {
                borderColor: currentContent.color,
              },
            }}
            className="inner"
          >
            <IconContainer>{currentContent.icon()}</IconContainer>
            <Heading>{currentContent.heading}</Heading>
            <Description>{currentContent.description}</Description>
          </InnerContainer>
        </a>
      </Link>
    </OuterContainer>
  )
}

export const LinkCards = () => {
  return (
    <SectionContainer css={{ backgroundColor: '$neutral50' }}>
      <MiddleLinks>
        <LinkCard type="protocol" />
        <LinkCard type="sdk" />
        <LinkCard type="api" />
      </MiddleLinks>
    </SectionContainer>
  )
}

const MiddleLinks = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 20,
  margin: '0 auto',
  maxWidth: 'calc(90rem - 48px)',

  '@tabletLandscape': {
    flexDirection: 'row',
    paddingBottom: 20,
  },
})

const OuterContainer = styled('div', {
  width: '100%',
  display: 'flex',
  borderRadius: 0,

  '@laptop': {
    '&:nth-of-type(2)': {
      justifyContent: 'center',
    },

    '&:nth-of-type(3)': {
      justifyContent: 'flex-end',
    },
  },
})

const InnerContainer = styled('div', {
  paddingTop: 24,
  paddingBottom: 20,
  margin: '0 auto',
  maxWidth: 340,

  svg: {
    opacity: 0.9,
  },

  '&:hover': {
    svg: {
      opacity: 1,
    },
  },

  '@laptop': {
    paddingTop: 85,
    paddingBottom: 80,
  },
})

const Heading = styled('h2', {
  fontSize: 22,
  marginTop: 16,
  color: '$neutral900',

  '@laptop': {
    marginTop: 32,
  },
})

const Description = styled('p', {
  marginTop: 8,
  color: '$neutral700',

  '@laptop': {
    marginTop: 16,
  },
})

const IconContainer = styled('div', {
  backgroundColor: '$darkBg',
  width: 80,
  height: 80,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  borderWidth: 2,
  borderColor: '$darkBg',
  transition: 'all 0.2s ease-in-out',

  svg: {
    width: '80%',
  },

  '@tablet': {
    width: 100,
    height: 100,

    svg: {
      width: '100%',
    },
  },
})

const InnerIconContainer = styled('div', {
  width: 50,
  height: 50,
})
