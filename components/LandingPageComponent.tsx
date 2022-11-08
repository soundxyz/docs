import React from 'react'
import { WrappedImage } from '../components/WrappedImage'

export const LandingPageComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-inner">
        <WrappedImage
          className="left-[10%] top-8 relative w-[84px] h-auto"
          src="/images/hero-small-grid.png"
          width={84}
          height={63}
          layout="responsive"
        />
        <p className="text-center md:text-left max-w-[360px] md:max-w-[511px] text-[40px] md:text-[50px] leading-[110%] font-medium mx-auto pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Tools for empowering artists & collectors
        </p>
        <WrappedImage
          src="/images/hero-mobile-bottom-grid.png"
          width={359}
          height={331}
          layout="responsive"
          className="w-[90%] max-w-[500px]"
        />
      </div>
    </div>
  )
}
