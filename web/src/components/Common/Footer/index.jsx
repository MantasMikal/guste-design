import React from 'react'

import SmartLink from 'Primitive/SmartLink'
import Container from 'Primitive/Container'
import { FaLinkedinIn, FaPinterest, FaPinterestP } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { SiBehance } from 'react-icons/si'

import styles from './Footer.module.scss'
import Icon from 'Primitive/Icon'
import PageModalTrigger from 'Section/PageModal'

const Footer = ({ shippingAndReturns }) => {
  return (
    <Container as="footer" className={styles.Footer}>
      <PageModalTrigger
        body={shippingAndReturns?._rawBody}
        image={shippingAndReturns?.mainImage}
        trigger={
          <SmartLink className={styles.NavLink}>
            <Icon
              className={styles.LinkIcon}
              type="refresh"
              width={20}
              height={20}
            />
            Shipping & Returns
          </SmartLink>
        }
      />
      <div className={styles.Social}>
        <SmartLink
          href="mailto:hi@guste.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type='mail' width={24} height={24} />
        </SmartLink>
        <SmartLink
          href="https://www.instagram.com/guste.design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrInstagram size="1.3em" />
        </SmartLink>
        <SmartLink
          href="https://www.behance.net/GusteDesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBehance size="1.5em" />
        </SmartLink>
        <SmartLink
          href="https://www.linkedin.com/in/guste-vasil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size="1.4em" />
        </SmartLink>
        <SmartLink
          href="https://www.pinterest.com/gustedesign/_saved/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterestP size="1.4em" />
        </SmartLink>
      </div>
      <SmartLink
        href="https://github.com/MantasMikal"
        target="__blank"
        className={styles.CraftedBy}
      >
        Crafted by <span>Mantas</span>
      </SmartLink>
      <div className={styles.Copyright}>
        © {new Date().getFullYear()} GUSTÉ.DESIGN
      </div>
    </Container>
  )
}
export default Footer
