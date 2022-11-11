import { styled } from '../stitches.config'
import React from 'react'
import Link from 'next/link'

export const Button = ({
  children,
  href,
  external,
}: {
  children: React.ReactNode
  href?: string
  external?: boolean
}) => {
  if (href && external) {
    const StyledExternalLink = styled('a', buttonStyles)
    return (
      <StyledExternalLink href={href} target="_blank">
        {children}
      </StyledExternalLink>
    )
  }

  const StyledButton = styled('button', buttonStyles)
  const buttonContent = <StyledButton>{children}</StyledButton>
  return href ? <Link href={href}>{<StyledButton>{children}</StyledButton>}</Link> : buttonContent
}

export const buttonStyles = {
  background: '$white',
  color: '$neutral800',
  padding: '12px 20px',
  borderRadius: 6,
  alignSelf: 'flex-start',
  marginTop: 24,
  fontWeight: 600,
  borderColor: '$neutral200',
  borderWidth: 1,

  '@tabletLandscape': {
    alignSelf: 'flex-end',
  },

  '&:hover': {
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.18)',
  },

  '&:focus': {
    outline: 'none !important',
    '&:before': {
      content: ' ',
      position: 'absolute',
      zIndex: -1,
      top: 2,
      left: 2,
      right: 2,
      bottom: 2,
      borderColor: '$neuatral200',
      borderWidth: 2,
    },
  },
}
