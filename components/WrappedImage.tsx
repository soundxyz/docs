import React from 'react'
import Image, { ImageProps } from 'next/image'

export const WrappedImage = (props: ImageProps) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const fadeIn = (e: any) => {
    const img = e?.target
    img.classList.remove('opacity-0')
    console.log(img.classList)
  }

  const { className, ...rest } = props
  return (
    <div className={className}>
      <Image {...rest} onLoad={fadeIn} className="opacity-0 transition-opacity duration-300" />
    </div>
  )
}
