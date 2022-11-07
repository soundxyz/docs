import React from 'react'
import { theme } from '../stitches.config'
import { useRouter } from 'next/router'

export const SoundLogo = () => {
  const [fill, setFill] = React.useState('white')
  const router = useRouter()
  let htmlElement: HTMLHtmlElement | null = null

  if (typeof window !== 'undefined') {
    htmlElement = window.document?.querySelector('html')
  }

  const updateFill = () => {
    if (!htmlElement) return
    const style = htmlElement.getAttribute('style')
    const newFill = style?.includes('dark') || router.pathname === '/' ? 'white' : 'black'
    setFill(newFill)
  }

  // Watch for theme changes
  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(updateFill)
    })

    if (!htmlElement) return
    observer.observe(htmlElement, { attributes: true, attributeFilter: ['style'] })

    if (router.pathname === '/') {
      setFill('white')
    } else {
      updateFill()
    }

    return () => {
      observer.disconnect()
    }
  }, [router.pathname])

  return (
    <div style={{ width: 150 }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 250 40">
        <path
          fill={fill}
          d="M49.12 22.52h3.58c.07 1.87 1.28 2.69 3.07 2.7 1.87 0 2.89-.86 2.9-2.18 0-1.17-.74-1.87-2.61-1.88H54.4c-3.16-.02-5-1.72-5-4.24.02-2.84 2.36-4.8 6.32-4.79 4.07.02 6.29 2.13 6.39 5.3l-3.55-.02c-.07-1.67-1-2.57-2.85-2.58-1.65 0-2.67.75-2.67 1.97 0 1.1.85 1.65 2.25 1.66h1.81c3.63.01 5.27 2.02 5.27 4.45-.01 2.95-2.39 5.02-6.6 5-4.23 0-6.56-2.12-6.65-5.4ZM63.86 20.05c.02-5.08 3.44-7.88 7.7-7.86 4.26.01 7.66 2.83 7.64 7.92-.01 5.08-3.43 7.88-7.7 7.86-4.26-.01-7.65-2.83-7.64-7.92Zm7.66 5.22c2.39 0 3.96-1.74 3.97-5.18.02-3.43-1.55-5.2-3.94-5.2-2.39 0-3.96 1.74-3.97 5.18-.02 3.43 1.54 5.2 3.94 5.2ZM80.98 22l.04-9.32 3.46.01-.03 8.92c-.01 2.65 1.14 3.68 2.84 3.69 1.76 0 3.42-1.1 3.43-4.07l.03-8.52 3.46.01-.05 14.87-3.41-.01V25.3h-.05a4.8 4.8 0 0 1-4.57 2.71c-3.13 0-5.16-2.07-5.15-6.02ZM96.5 12.73l3.4.01v2.27h.05a4.98 4.98 0 0 1 4.66-2.7c3.08 0 5.1 2.06 5.09 6.01l-.03 9.33-3.47-.02.03-8.92c.01-2.6-1.14-3.68-2.84-3.68-1.73 0-3.44 1.1-3.45 4.07l-.03 8.51-3.47-.01.06-14.87ZM112.06 20.22c.01-5.16 3.24-7.88 6.76-7.87a5.4 5.4 0 0 1 5.05 3.07h.05c-.05-.51-.05-.97-.05-1.51l.03-7.33 3.46.02-.07 21.1h-3.44v-1c0-.55 0-1.03.04-1.6h-.06a5.4 5.4 0 0 1-5.07 3.04c-3.52-.02-6.72-2.76-6.7-7.92Zm7.76 5.22c2.53 0 4.05-2.04 4.06-5.18 0-3.14-1.5-5.2-4.02-5.2-2.56-.01-4.08 2.04-4.1 5.17 0 3.14 1.5 5.2 4.06 5.2ZM129.66 24.1h3.72l-.02 3.63-3.7-.02V24.1ZM140.81 20.18l-5.42-7.31 4.3.01 3.22 4.82h.06l3.28-4.8 4.3.02-5.48 7.28 5.67 7.59-4.3-.02-3.5-5.06h-.05l-3.53 5.04-4.3-.02 5.75-7.55ZM151.28 30.41l4.29.01 1.5-3.42-5.73-14.08 3.77.01 3.75 9.91h.06l3.86-9.88 3.7.01-7.9 19.11a1.7 1.7 0 0 1-1.7 1.13l-5.61-.02v-2.78ZM167.05 25.33l7.81-9.57v-.05l-7.23-.03.01-2.7 11.85.04v2.46l-7.8 9.57v.05l8.36.03v2.76l-13.01-.05v-2.51ZM40.35 15.6c.46 0 .83-.36.83-.8V5.6c0-.44-.37-.8-.83-.8h-3.3a.81.81 0 0 1-.81-.8V.8c0-.44-.38-.8-.83-.8H5.76a.81.81 0 0 0-.82.8V4c0 .44-.37.8-.82.8H.82a.81.81 0 0 0-.82.8v13.2c0 .44.37.8.82.8h10.71c.45 0 .82.36.82.8v2.4c0 .44.37.8.83.8H28c.45 0 .82.36.82.8v8.4c0 .44-.37.8-.82.8h-8.65a.81.81 0 0 1-.82-.8v-3.6c0-.44-.37-.8-.82-.8H9.06a.81.81 0 0 1-.82-.8v-2.4c0-.44-.38-.8-.83-.8H.82a.81.81 0 0 0-.82.8v9.2c0 .44.37.8.82.8h3.3c.45 0 .82.36.82.8v3.2c0 .44.37.8.82.8h29.65c.45 0 .82-.36.82-.8V36c0-.44.37-.8.83-.8h3.3c.44 0 .82-.36.82-.8V21.2c0-.44-.37-.8-.83-.8h-10.7a.81.81 0 0 1-.83-.8v-2.4c0-.44-.37-.8-.82-.8H13.18a.81.81 0 0 1-.83-.8V7.2c0-.44.37-.8.83-.8h8.64c.46 0 .83.36.83.8v3.6c0 .44.37.8.82.8h8.65c.45 0 .82.36.82.8v2.4c0 .44.37.8.82.8h6.6Z"
        />
        <path
          fill="#F773FF"
          d="M193.14 28.82c2.28 0 4.1-1.17 5-3.08h.06c-.03.57-.03 1.07-.03 1.61v1.01h3.4V7.06h-3.43v7.39c0 .55 0 1 .06 1.53h-.06a5.34 5.34 0 0 0-5-3.08c-3.49 0-6.67 2.75-6.67 7.96 0 5.2 3.18 7.96 6.67 7.96Zm-3-7.96c0-3.16 1.5-5.24 4.03-5.24 2.5 0 4 2.08 4 5.24s-1.5 5.24-4 5.24c-2.53 0-4.03-2.08-4.03-5.24ZM211.52 28.82c4.22 0 7.6-2.83 7.6-7.96s-3.38-7.96-7.6-7.96-7.59 2.83-7.59 7.96 3.37 7.96 7.6 7.96Zm-3.92-7.96c0-3.46 1.55-5.24 3.92-5.24s3.92 1.78 3.92 5.24-1.55 5.24-3.92 5.24-3.92-1.78-3.92-5.24ZM228.42 28.82c4.17 0 6.59-2.67 7.02-5.89h-3.53c-.2 1.42-1.28 3.17-3.49 3.17-2.36 0-3.92-2-3.92-5.24 0-3.06 1.34-5.24 3.92-5.24 2.26 0 3.35 1.61 3.49 3.47h3.53c-.32-3.52-2.72-6.2-7.02-6.2-4.76 0-7.59 3.14-7.59 7.97s3.05 7.96 7.6 7.96ZM243.5 28.82c4.16 0 6.5-2.1 6.5-5.07 0-2.45-1.63-4.47-5.22-4.47h-1.8c-1.39 0-2.23-.55-2.23-1.67 0-1.22 1-1.99 2.64-1.99 1.82 0 2.75.9 2.83 2.6h3.5c-.1-3.2-2.3-5.32-6.33-5.32-3.92 0-6.23 1.99-6.23 4.85 0 2.54 1.82 4.25 4.95 4.25h1.63c1.85 0 2.59.71 2.59 1.89 0 1.33-1.01 2.2-2.86 2.2-1.77 0-2.97-.81-3.05-2.7h-3.54c.11 3.3 2.43 5.43 6.62 5.43Z"
        />
      </svg>
    </div>
  )
}
