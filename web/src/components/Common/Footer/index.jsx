import React from 'react'

import links from './links'

import SmartLink from 'Primitive/SmartLink'
import SocialLink from './component/SocialLink'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import Image from 'Primitive/Image'

import styles from './Footer.module.scss'

const Footer = ({ social, logo, siteTitle }) => {
  return (
    <Container gutter className={styles.Wrapper}>
      <footer className={styles.Footer}>
        <Container gutter center size="wide" className={styles.Container}>
          <div className={styles.Branding}>
            <SmartLink href="/" className={styles.Logo}>
              <Image image={logo} alt={siteTitle} />
            </SmartLink>
            <div className={styles.Social}>
              <SocialLink type="twitter" url={social.twitter} />
              <SocialLink type="facebook-round" url={social.facebook} />
              <SocialLink type="youtube" url={social.youtube} />
              <SocialLink type="instagram" url={social.instagram} />
            </div>
          </div>
          <div className={styles.LinkListWrapper}>
            {links.map((linkList, i) => (
              <div key={i} className={styles.LinkList}>
                {linkList.map((link, j) => (
                  <SmartLink key={j} href={link.url}>
                    <Type size="base">{link.text}</Type>
                  </SmartLink>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </footer>
    </Container>
  )
}
export default Footer
