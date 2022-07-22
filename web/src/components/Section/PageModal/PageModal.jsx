import React, { useRef } from 'react'
import { array, string } from 'prop-types'
import { createPortal } from 'react-dom'
import FocusTrap from 'focus-trap-react'
import useEscapeKey from 'hooks/useEscapeKey'
import useOutsideClick from 'hooks/useOutsideClick'
import Container from 'Primitive/Container'
import Image from 'Primitive/Image'
import BlockContent from 'Common/BlockContent'
import { IoMdClose } from 'react-icons/io'
import ButtonBase from 'Primitive/ButtonBase'
import styles from './PageModal.module.scss'

const PageModal = ({ image, body, onClose, open }) => {
  const ref = useRef()
  const handleClose = (e) => {
    open && onClose && onClose()
  }

  useEscapeKey(handleClose)
  useOutsideClick(ref, handleClose)

  if (!open) return null
  if (typeof window === 'undefined') return null

  return createPortal(
    <Container
      className={styles.PageModal}
      as="aside"
      role="PageModal"
      aria-modal="true"
      tabIndex="-1"
    >
      <FocusTrap>
        <div className={styles.Background}>
          <div className={styles.PageModalContent}>
            <div className={styles.PageModalInner} ref={ref}>
              <ButtonBase className={styles.Close} onClick={handleClose}>
                <IoMdClose size="1.5em" />
              </ButtonBase>
              <Image
                className={styles.Image}
                image={image}
                layout="constrained"
              />
              <div className={styles.Content}>
                <BlockContent blocks={body} />
              </div>
            </div>
          </div>
        </div>
      </FocusTrap>
    </Container>,
    document.body
  )
}

PageModal.propTypes = {
  body: array,
  title: string
}

export default PageModal
