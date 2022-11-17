import React from 'react'
import Image, { ImageProps } from 'next/image'
import { styled } from '../stitches.config'
import type { CSS } from '@stitches/react'

export const WrappedImage = (props: ImageProps & { css?: CSS }) => {
  const [opacity, setOpacity] = React.useState(0)
  const { css, ...rest } = props

  const fadeIn = () => {
    setOpacity(1)
  }

  return (
    <Wrapper css={{ ...css, opacity, transition: 'opacity 300ms' }}>
      <Image {...rest} onLoad={fadeIn} />
    </Wrapper>
  )
}

const Wrapper = styled('div')
