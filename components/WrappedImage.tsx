import React from 'react'
import Image, { ImageProps } from 'next/image'
import { styled } from '../stitches.config'
import type { CSS } from '@stitches/react'

export const WrappedImage = (props: ImageProps & { css?: CSS }) => {
  const { css, ...rest } = props
  const ref = React.useRef<HTMLDivElement>(null)

  const fadeIn = (e: any) => {
    const img = e?.target
    img.classList.remove('opacity-0')
  }

  return (
    <Wrapper css={css}>
      <Image {...rest} onLoad={fadeIn} className="opacity-0 transition-opacity duration-300" />
    </Wrapper>
  )
}

const Wrapper = styled('div')
