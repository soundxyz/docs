import React from 'react'
import { styled } from '../stitches.config'
import Link from 'next/link'
import type { CSS } from '@stitches/react'

export const Button = ({
  children,
  href,
  external,
  css,
}: {
  children: React.ReactNode
  href?: string
  external?: boolean
  css?: CSS
}) => {
  if (href && external) {
    const StyledExternalLink = styled('a', buttonStyles)
    return (
      <StyledExternalLink css={css} href={href} target="_blank">
        {children}
      </StyledExternalLink>
    )
  }

  const StyledButton = styled('button', buttonStyles)
  const buttonContent = <StyledButton css={css}>{children}</StyledButton>
  return href ? <Link href={href}>{<StyledButton css={css}>{children}</StyledButton>}</Link> : buttonContent
}

export const buttonStyles = {
  background: '$white',
  color: '$neutral800',
  padding: '12px 20px',
  borderRadius: 6,
  marginTop: 24,
  fontWeight: 600,
  borderColor: '$neutral200',
  borderWidth: 1,

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
