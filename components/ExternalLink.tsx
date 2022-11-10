import React from 'react'

export const ExternalLink = ({
  children,
  href,
  ...rest
}: {
  children: React.ReactChild
  href: string
  [key: string]: any
}) => {
  return (
    <a href={href} {...rest} target="_blank">
      {children}
    </a>
  )
}
