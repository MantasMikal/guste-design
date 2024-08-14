import React, { useRef } from 'react'
import { array, string } from 'prop-types'
import { createPortal } from 'react-dom'
import FocusTrap from 'focus-trap-react'
import useEscapeKey from 'hooks/useEscapeKey'
import useOutsideClick from 'hooks/useOutsideClick'

import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { SiBehance } from 'react-icons/si'

import SmartLink from 'Primitive/SmartLink'
import Container from 'Primitive/Container'

import styles from './Contact.module.scss'

const Contact = ({ onClose, open }) => {
  const ref = useRef()
  const handleClose = (e) => {
    e.stopImmediatePropagation()
    open && onClose && onClose()
  }

  useEscapeKey(handleClose)
  useOutsideClick(ref, handleClose)

  if (!open) return null
  if (typeof window === 'undefined') return null

  return createPortal(
    <Container
      className={styles.Contact}
      as="aside"
      role="contact"
      aria-modal="true"
      tabIndex="-1"
    >
      <FocusTrap>
        <div className={styles.Background}>
          <div className={styles.ContactContent}>
            <div className={styles.ContactInner} ref={ref}>
              <h2 className={styles.Title} size="titleLarge">
                Hi!
              </h2>
              <div className={styles.Social}>
                <SmartLink
                  href="mailto:hi@guste.design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineMail size="2.5em" />
                </SmartLink>
                <SmartLink
                  href="https://www.instagram.com/guste.design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrInstagram size="1.8em" />
                </SmartLink>
                <SmartLink
                  href="https://www.behance.net/GusteDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiBehance size="2.5em" />
                </SmartLink>
                <SmartLink
                  href="https://www.linkedin.com/in/guste-vasil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size="2em" />
                </SmartLink>
                {/* <SmartLink
                  href="https://www.pinterest.com/gustedesign"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterestP size="1.8em" />
                </SmartLink> */}
              </div>
            </div>
          </div>
        </div>
      </FocusTrap>
    </Container>,
    document.body
  )
}

Contact.propTypes = {
  body: array,
  title: string
}

export default Contact
