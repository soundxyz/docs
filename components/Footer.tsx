import React from 'react'
import { styled, theme } from '../stitches.config'
import { useRouter } from 'next/router'
import { SectionContainer } from '../components/Containers'
import { SoundLogo } from '../components/SoundLogo'
import Link from 'next/link'
import { ExternalLink } from '../components/ExternalLink'
import { useIsDarkMode } from '../hooks/useIsDarkMode'

export const Footer = () => {
  const router = useRouter()
  const isDarkMode = useIsDarkMode()

  const LINKS = {
    company: [
      { text: 'Market', path: 'https://market.sound.xyz/' },
      { text: 'Trending', path: 'https://sound.xyz/trending' },
      { text: 'Careers', path: 'https://jobs.ashbyhq.com/sound.xyz' },
      {
        text: 'Terms Of Service',
        path: 'https://soundxyz.notion.site/Terms-of-Service-782b54520f0047aca0afb81552e3b7fb',
      },
      { text: 'Privacy Policy', path: 'https://soundxyz.notion.site/Privacy-Policy-dfa7fc4039444f0a86c4049450872a65' },
    ],
    resources: [
      { text: 'About', path: 'https://sound.xyz/about' },
      { text: 'Blog', path: 'https://sound.mirror.xyz' },
      { text: 'FAQ', path: 'https://help.sound.xyz' },
    ],
    docs: [
      { text: 'Sound Protocol', path: '/protocol' },
      { text: 'Sound SDK', path: '/sdk' },
      { text: 'Sound API', path: '/sound-api' },
    ],
    social: [
      { text: 'Twitter', path: 'https://twitter.com/soundxyz_', icon: TwitterIcon },
      { text: 'Instagram', path: 'https://www.instagram.com/soundxyz', icon: InstagramIcon },
      { text: 'OpenSea', path: 'https://opensea.io/category/soundxyz', icon: OpenSeaIcon },
      { text: 'Discord', path: 'https://discord.gg/soundxyz', icon: DiscordIcon },
      { text: 'Mirror', path: 'https://sound.mirror.xyz', icon: MirrorIcon },
    ],
  }

  return (
    <>
      <SectionContainer css={{ backgroundColor: isDarkMode ? '$darkBg' : 'white' }}>
        <InnerContainer css={{ color: isDarkMode ? 'white' : '$neutral900' }}>
          <Section css={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <ExternalLink href="https://sound.xyz">
              <SoundLogo fillColor={isDarkMode ? theme.colors.white.value : theme.colors.darkBg.value} />
            </ExternalLink>
            <LogoSubText>
              © Copyright 2022 Sound.xyz
              <br />
              All rights reserved.
            </LogoSubText>
          </Section>
          <Section>
            <NavContainer>
              <Column>
                <ColumnHeader>Company</ColumnHeader>
                {LINKS.company.map((link) => (
                  <li key={link.path}>
                    <ExternalLink href={link.path}>{link.text}</ExternalLink>
                  </li>
                ))}
              </Column>
              <Column>
                <ColumnHeader>Resources</ColumnHeader>
                {LINKS.resources.map((link) => (
                  <li key={link.path}>
                    <ExternalLink key={link.path} href={link.path}>
                      {link.text}
                    </ExternalLink>
                  </li>
                ))}
              </Column>
              <Column>
                <ColumnHeader>Docs</ColumnHeader>
                {LINKS.docs.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>{link.text}</Link>
                  </li>
                ))}
              </Column>
            </NavContainer>
          </Section>
          <Section>
            <Column>
              <ColumnHeader>Follow Us</ColumnHeader>
              <SocialLinks>
                {LINKS.social.map((link) => (
                  <li key={link.path}>
                    <ExternalLink href={link.path} alt={link.text}>
                      {link.icon()}
                    </ExternalLink>
                  </li>
                ))}
              </SocialLinks>
            </Column>
          </Section>
        </InnerContainer>
      </SectionContainer>
    </>
  )
}

const InnerContainer = styled('footer', {
  padding: '60px 0',
  display: 'grid',
  gridTemplateColumns: '1fr',
  fontSize: 14,
  maxWidth: '90rem',
  margin: '0 auto',

  '@laptop': {
    padding: '84px 24px',
    gridTemplateColumns: '1.2fr 2.5fr 1fr',
  },
})

const Section = styled('div', {
  marginBottom: 32,
})

const NavContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',

  '@tablet': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
})

const Column = styled('ul', {
  listStyle: 'none',

  li: {
    color: '$neutral600',
    marginTop: 10,
  },
})

const ColumnHeader = styled('div', {
  marginTop: 20,
  fontWeight: 600,

  '@tablet': {
    marginTop: 0,
  },
})

const LogoSubText = styled('p', {
  color: '$neutral600',
  marginTop: 16,
  fontSize: 12,
})

const SocialLinks = styled('div', {
  display: 'flex',
  gap: 16,
  marginTop: 16,
})

const TwitterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M25.2 6.53687C24.3103 6.9138 23.4206 7.21534 22.3826 7.29072C23.4206 6.68764 24.162 5.70764 24.5327 4.57687C23.5689 5.17995 22.5309 5.55687 21.4187 5.78303C20.529 4.80303 19.2686 4.19995 17.934 4.19995C15.2648 4.19995 13.0405 6.38611 13.0405 9.17534C13.0405 9.55226 13.1147 9.92918 13.1888 10.3061C9.11093 10.08 5.55205 8.11995 3.10532 5.10457C2.66046 5.85841 2.43803 6.68764 2.43803 7.59226C2.43803 9.32611 3.32775 10.8338 4.58819 11.7384C3.77261 11.7384 3.03118 11.5123 2.36389 11.1353V11.2107C2.36389 13.623 4.06918 15.583 6.29348 16.0353C5.84862 16.1107 5.47791 16.1861 5.03305 16.1861C4.73647 16.1861 4.4399 16.1861 4.14333 16.1107C4.73647 18.0707 6.59006 19.503 8.66607 19.5784C7.03492 20.9353 4.88476 21.6892 2.58632 21.6892C2.2156 21.6892 1.77074 21.6892 1.40002 21.6138C3.62432 22.9707 6.21934 23.8 8.96264 23.8C17.934 23.8 22.8274 16.2615 22.8274 9.70303C22.8274 9.47687 22.8274 9.25072 22.8274 9.09995C23.7172 8.34611 24.5327 7.51687 25.2 6.53687Z"
      fill="#A3A3A3"
    />
  </svg>
)

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.375 2.33337H9.62504C5.59858 2.33337 2.33337 5.59858 2.33337 9.62504V18.375C2.33337 22.4015 5.59858 25.6667 9.62504 25.6667H18.375C22.4015 25.6667 25.6667 22.4015 25.6667 18.375V9.62504C25.6667 5.59858 22.4015 2.33337 18.375 2.33337ZM23.4792 18.375C23.4792 21.1896 21.1896 23.4792 18.375 23.4792H9.62504C6.81046 23.4792 4.52087 21.1896 4.52087 18.375V9.62504C4.52087 6.81046 6.81046 4.52087 9.62504 4.52087H18.375C21.1896 4.52087 23.4792 6.81046 23.4792 9.62504V18.375ZM14 8.16671C10.7786 8.16671 8.16671 10.7786 8.16671 14C8.16671 17.2215 10.7786 19.8334 14 19.8334C17.2215 19.8334 19.8334 17.2215 19.8334 14C19.8334 10.7786 17.2215 8.16671 14 8.16671ZM14 17.6459C11.9905 17.6459 10.3542 16.0096 10.3542 14C10.3542 11.989 11.9905 10.3542 14 10.3542C16.0096 10.3542 17.6459 11.989 17.6459 14C17.6459 16.0096 16.0096 17.6459 14 17.6459ZM21.0484 7.7292C21.0484 8.15848 20.7004 8.50649 20.2711 8.50649C19.8419 8.50649 19.4939 8.15848 19.4939 7.7292C19.4939 7.29991 19.8419 6.9519 20.2711 6.9519C20.7004 6.9519 21.0484 7.29991 21.0484 7.7292Z"
      fill="#A3A3A3"
    />
  </svg>
)

const OpenSeaIcon = () => (
  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.71381 15.4914L3.79256 15.363L8.54006 7.6611C8.60944 7.54832 8.77256 7.55999 8.82506 7.68249C9.61819 9.52582 10.3026 11.8183 9.98194 13.2455C9.84507 13.8328 9.47006 14.628 9.04819 15.363C8.99381 15.47 8.93381 15.575 8.87006 15.6761C8.84006 15.7228 8.78944 15.75 8.73506 15.75H3.85256C3.72131 15.75 3.64444 15.6022 3.71381 15.4914Z"
      fill="#A3A3A3"
    />
    <path
      d="M24.875 16.9225V18.1417C24.875 18.2117 24.8337 18.2739 24.7737 18.3011C24.4062 18.4644 23.1481 19.0633 22.625 19.8178C21.29 21.7447 20.27 24.5 17.99 24.5H8.47812C5.10687 24.5 2.375 21.6572 2.375 18.1494V18.0367C2.375 17.9433 2.44812 17.8675 2.53812 17.8675H7.84062C7.94562 17.8675 8.0225 17.9686 8.01312 18.0756C7.97562 18.4333 8.03937 18.7989 8.2025 19.1314C8.5175 19.7944 9.17 20.2086 9.875 20.2086H12.5V18.0833H9.905C9.77188 18.0833 9.69313 17.9239 9.77 17.8111C9.79813 17.7664 9.83 17.7197 9.86375 17.6672C10.1094 17.3056 10.46 16.7436 10.8087 16.1039C11.0469 15.6722 11.2775 15.2114 11.4631 14.7486C11.5006 14.665 11.5306 14.5794 11.5606 14.4958C11.6112 14.3481 11.6637 14.21 11.7012 14.0719C11.7387 13.9553 11.7687 13.8328 11.7987 13.7181C11.8869 13.3253 11.9244 12.9092 11.9244 12.4775C11.9244 12.3083 11.9169 12.1314 11.9019 11.9622C11.8944 11.7775 11.8719 11.5928 11.8494 11.4081C11.8344 11.2447 11.8062 11.0833 11.7762 10.9142C11.7387 10.6672 11.6862 10.4222 11.6262 10.1753L11.6056 10.0819C11.5606 9.91278 11.5231 9.75139 11.4706 9.58222C11.3225 9.05139 11.1519 8.53417 10.9719 8.05C10.9063 7.8575 10.8312 7.67278 10.7562 7.48806C10.6456 7.21 10.5331 6.95722 10.43 6.71806C10.3775 6.60917 10.3325 6.51 10.2875 6.40889C10.2369 6.29417 10.1844 6.17944 10.1319 6.07056C10.0944 5.98694 10.0512 5.90917 10.0212 5.83139L9.70062 5.21694C9.65562 5.13333 9.73062 5.03417 9.81875 5.05944L11.825 5.62333H11.8306C11.8344 5.62333 11.8363 5.62528 11.8381 5.62528L12.1025 5.70111L12.3931 5.78667L12.5 5.81778V4.58111C12.5 3.98417 12.9613 3.5 13.5312 3.5C13.8162 3.5 14.075 3.62056 14.2606 3.81694C14.4462 4.01333 14.5625 4.28167 14.5625 4.58111V6.41667L14.7762 6.47889C14.7931 6.48472 14.81 6.4925 14.825 6.50417C14.8775 6.545 14.9525 6.60528 15.0481 6.67917C15.1231 6.74139 15.2038 6.81722 15.3013 6.895C15.4944 7.05639 15.725 7.26444 15.9781 7.50361C16.0456 7.56389 16.1112 7.62611 16.1712 7.68833C16.4975 8.00333 16.8631 8.37278 17.2119 8.78111C17.3094 8.89583 17.405 9.0125 17.5025 9.135C17.6 9.25944 17.7031 9.38194 17.7931 9.50444C17.9112 9.66778 18.0388 9.83694 18.1494 10.0139C18.2019 10.0975 18.2619 10.1831 18.3125 10.2667C18.455 10.4903 18.5806 10.7217 18.7006 10.9531C18.7513 11.06 18.8037 11.1767 18.8487 11.2914C18.9819 11.6006 19.0869 11.9156 19.1544 12.2306C19.175 12.2986 19.19 12.3725 19.1975 12.4386V12.4542C19.22 12.5475 19.2275 12.6467 19.235 12.7478C19.265 13.0706 19.25 13.3933 19.1825 13.7181C19.1544 13.8561 19.1169 13.9864 19.0719 14.1244C19.0269 14.2567 18.9819 14.3947 18.9237 14.525C18.8112 14.7953 18.6781 15.0656 18.5206 15.3183C18.47 15.4117 18.41 15.5108 18.35 15.6042C18.2844 15.7033 18.2169 15.7967 18.1569 15.8881C18.0744 16.0047 17.9862 16.1272 17.8962 16.2361C17.8156 16.3508 17.7331 16.4656 17.6431 16.5667C17.5175 16.7203 17.3975 16.8661 17.2719 17.0061C17.1969 17.0975 17.1162 17.1908 17.0337 17.2744C16.9531 17.3678 16.8706 17.4514 16.7956 17.5292C16.67 17.6594 16.565 17.7606 16.4769 17.8442L16.2706 18.0406C16.2406 18.0678 16.2012 18.0833 16.16 18.0833H14.5625V20.2086H16.5725C17.0225 20.2086 17.45 20.0433 17.795 19.74C17.9131 19.6331 18.4287 19.1703 19.0381 18.4722C19.0587 18.4489 19.085 18.4314 19.115 18.4236L24.6669 16.7592C24.77 16.7281 24.875 16.8097 24.875 16.9225Z"
      fill="#A3A3A3"
    />
  </svg>
)

const DiscordIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.7468 5.84145C21.1156 5.0746 19.3714 4.51729 17.5479 4.19995C17.3239 4.60677 17.0623 5.15394 16.8819 5.58922C14.9434 5.29632 13.0228 5.29632 11.12 5.58922C10.9397 5.15394 10.6721 4.60677 10.4462 4.19995C8.62067 4.51729 6.87447 5.07665 5.24323 5.84551C1.953 10.8411 1.06107 15.7126 1.50704 20.515C3.68929 22.1524 5.80415 23.1471 7.88333 23.7979C8.39669 23.088 8.85454 22.3334 9.24896 21.5381C8.49776 21.2513 7.77828 20.8974 7.09845 20.4865C7.27881 20.3523 7.45522 20.2119 7.62566 20.0675C11.7721 22.0161 16.2774 22.0161 20.3743 20.0675C20.5467 20.2119 20.7231 20.3523 20.9015 20.4865C20.2197 20.8994 19.4982 21.2533 18.747 21.5402C19.1415 22.3334 19.5973 23.0901 20.1127 23.8C22.1938 23.1491 24.3107 22.1544 26.4929 20.515C27.0162 14.9478 25.599 10.1211 22.7468 5.84145ZM9.81386 17.5616C8.56913 17.5616 7.54835 16.394 7.54835 14.9722C7.54835 13.5504 8.54734 12.3809 9.81386 12.3809C11.0804 12.3809 12.1012 13.5484 12.0794 14.9722C12.0813 16.394 11.0804 17.5616 9.81386 17.5616ZM18.1861 17.5616C16.9414 17.5616 15.9206 16.394 15.9206 14.9722C15.9206 13.5504 16.9195 12.3809 18.1861 12.3809C19.4526 12.3809 20.4734 13.5484 20.4516 14.9722C20.4516 16.394 19.4526 17.5616 18.1861 17.5616Z"
      fill="#A3A3A3"
    />
  </svg>
)

const MirrorIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 13C7 8.58172 10.5817 5 15 5C19.4183 5 23 8.58172 23 13V25H7V13Z" fill="#A3A3A3" />
  </svg>
)
